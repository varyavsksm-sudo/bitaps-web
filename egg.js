/* ✦ bitaps — пасхалка «собери звёзды» на главной.
 *
 * Фоновые оранжевые точки в canvas #net собираются курсором: коснулся любой — она уходит
 * в цепочку за мышью. Собрал СОТНЮ — неделя подписки. Никаких «особых обведённых» точек
 * больше нет (прошлая механика «лови конкретные помеченные» была скучной беготнёй): все
 * точки обычные, все считаются.
 *
 * ЧТО ЗДЕСЬ НЕ ХРАНИТСЯ: прогресс. В localStorage только sid — ручка на серверный забег.
 * Сколько собрано и заслужен ли приз, решает сервер (функция egg): приз — неделя платной
 * подписки, и всё, что считает браузер, атакующий переписывает за минуту. Анти-бот — не
 * «какую точку тронул» (это и раньше не проверялось), а человеческий ритм: паузы между
 * сборами, движение мыши, разброс пауз, общее время забега и rate-лимиты.
 *
 * Контракт с рисовалкой в index.html (window.__egg):
 *   .on          — игра активна
 *   .hit(x,y)    — частица коснулась курсора
 *   .tick(mx,my) — подтянуть цепочку за курсором (раз в кадр)
 *   .chain       — [{x,y}] для отрисовки
 */
(() => {
  'use strict';

  // Игра курсорная. На тачскрине курсора нет, при prefers-reduced-motion канвас не анимируется
  // вовсе — в обоих случаях просто не заводимся, а не показываем недоступную механику.
  const fine = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
  const calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || calm || !document.getElementById('net')) return;

  const API = 'https://bjkozsukvifkxriojxrz.supabase.co/functions/v1/egg';
  const SIDK = 'bitaps-egg-sid';
  const L = (ru, en) => (document.documentElement.lang === 'en' ? en : ru);

  const st = {
    on: false,
    sid: null,
    total: 0,
    count: 0,        // сколько засчитано (по данным сервера)
    chain: [],
    buf: [],         // накопленные паузы до отправки (по одной на сбор)
    lastHit: 0,      // performance.now() предыдущего сбора — из него паузы
    lastMove: -1e9,  // когда в последний раз была НАСТОЯЩАЯ мышь (isTrusted + ненулевое смещение)
    moves: 0,        // смен направления курсора: у скрипта без мыши тут ноль
    dirX: 0, dirY: 0,
    flushT: 0,
    sending: false,
    done: false,
    link: null,
  };

  const post = (b) => fetch(API, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b),
  }).then((r) => r.json()).catch(() => null);

  /* ---------- счётчик ---------- */
  let hud = null;
  function showHud() {
    if (hud) return;
    hud = document.createElement('div');
    hud.id = 'eggHud';
    hud.setAttribute('aria-live', 'polite');
    hud.style.cssText =
      'position:fixed;left:16px;bottom:16px;z-index:60;pointer-events:none;' +
      'font:600 12.5px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:1px;' +
      'padding:8px 12px;border-radius:999px;border:1px solid var(--line);' +
      'background:color-mix(in srgb,var(--bg) 78%,transparent);backdrop-filter:blur(8px);' +
      'color:var(--acc-ink,var(--acc));opacity:0;transition:opacity .35s';
    document.body.appendChild(hud);
    requestAnimationFrame(() => { hud.style.opacity = '1'; });
  }
  function drawHud() {
    if (!hud) return;
    hud.textContent = '✦ ' + st.count + ' / ' + st.total;
  }

  /* ---------- финальный экран ---------- */
  function win() {
    if (document.getElementById('eggWin')) return;
    const wrap = document.createElement('div');
    wrap.id = 'eggWin';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.style.cssText =
      'position:fixed;inset:0;z-index:120;display:flex;align-items:center;justify-content:center;' +
      'padding:20px;background:color-mix(in srgb,var(--bg) 82%,transparent);backdrop-filter:blur(10px);' +
      'opacity:0;transition:opacity .4s';

    const box = document.createElement('div');
    box.style.cssText =
      'max-width:min(560px,100%);width:100%;box-sizing:border-box;text-align:center;' +
      'padding:34px 26px;border-radius:20px;border:1px solid var(--line);' +
      'background:var(--bg2,var(--bg));box-shadow:0 30px 90px rgba(0,0,0,.45)';

    const mark = document.createElement('div');
    mark.textContent = '✦';
    mark.style.cssText = 'font-size:34px;line-height:1;color:var(--acc-ink,var(--acc));margin-bottom:14px';

    const t = document.createElement('p');
    t.style.cssText = 'font-size:19px;line-height:1.5;margin:0 0 8px;color:var(--txt)';
    // Текст владельца, слово в слово. Разбит на строки по смыслу, чтобы читался как реплика.
    t.textContent = L(
      'вот это ты хуйней страдаешь\nна тебе неделю подписки\nпосиди в ютубе лучше',
      "well, you really had nothing better to do\nhere's a week of vpn\ngo watch youtube instead",
    );
    t.style.whiteSpace = 'pre-line';

    const sub = document.createElement('p');
    sub.style.cssText = 'font-size:13px;color:var(--mut);margin:14px 0 22px';

    const act = document.createElement('a');
    act.className = 'btn btn-solid';
    act.style.cssText = 'display:inline-flex;justify-content:center;min-width:220px';

    if (st.link) {
      sub.textContent = L(
        'приз ждёт в боте — одна неделя, один раз на аккаунт',
        'the prize is waiting in the bot — one week, once per account',
      );
      act.href = st.link;
      act.target = '_blank';
      act.rel = 'noopener';
      act.textContent = L('🎁 Забрать неделю', '🎁 Claim the week');
    } else {
      // Честно: собрал, но приз не выдан (потолок исчерпан / на этот адрес он уже уходил).
      // Причину сервер не раскрывает — это была бы подсказка, что подкрутить в скрипте.
      sub.textContent = L(
        'а вот приз тебе не полагается — но собрал ты их честно, уважение',
        "no prize this time — but you did collect them all, respect",
      );
      act.href = 'https://t.me/bitaps_vpn_auth_bot';
      act.target = '_blank';
      act.rel = 'noopener';
      act.textContent = L('✈️ Открыть бота', '✈️ Open the bot');
    }

    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = L('закрыть', 'close');
    close.style.cssText =
      'display:block;margin:18px auto 0;background:none;border:0;cursor:pointer;' +
      'font:inherit;font-size:12.5px;color:var(--mut)';
    const shut = () => { wrap.style.opacity = '0'; setTimeout(() => wrap.remove(), 400); };
    close.addEventListener('click', shut);
    wrap.addEventListener('click', (e) => { if (e.target === wrap) shut(); });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { shut(); document.removeEventListener('keydown', esc); }
    });

    box.append(mark, t, sub, act, close);
    wrap.appendChild(box);
    document.body.appendChild(wrap);
    requestAnimationFrame(() => { wrap.style.opacity = '1'; });
    act.focus({ preventScroll: true });
  }

  /* ---------- отправка отчётов ---------- */
  // Копим и шлём пачками: 100 отдельных запросов — это заметный трафик ради шутки. Сервер сверяет
  // сумму присланных пауз с настоящим временем между пачками, поэтому склейка ничего не ослабляет.
  function flush() {
    if (st.sending || !st.sid || !st.buf.length || st.done) return;
    const batch = st.buf.splice(0, 12);
    st.sending = true;
    post({
      action: 'hit', sid: st.sid,
      count: batch.length, gaps: batch.map((b) => b.gap), moves: st.moves,
    }).then((r) => {
      st.sending = false;
      // Сеть моргнула / 429 / битый ответ — пачку НЕ теряем: возвращаем в буфер и повторим,
      // иначе дюжина сборов пропадала навсегда и сотня не сходилась.
      if (!r || typeof r.got !== 'number') { st.buf.unshift(...batch); schedule(4000); return; }
      st.count = r.got;
      drawHud();
      if (r.done) {
        st.done = true; st.on = false; st.link = r.link || null;
        win();
        return;
      }
      if (st.buf.length) schedule(0);
    }, () => { st.sending = false; st.buf.unshift(...batch); schedule(4000); });
  }
  function schedule(ms) {
    clearTimeout(st.flushT);
    st.flushT = setTimeout(flush, ms);
  }

  /* ---------- настоящая мышь ---------- */
  // isTrusted отсекает синтетические события (`el.dispatchEvent(new MouseEvent(...))`) — самую
  // дешёвую атаку. Ненулевое movement отсекает «мышь стоит, а события летят».
  window.addEventListener('mousemove', (e) => {
    if (!e.isTrusted) return;
    const mx = e.movementX || 0, my = e.movementY || 0;
    if (!mx && !my) return;
    st.lastMove = performance.now();
    const sx = Math.sign(mx), sy = Math.sign(my);
    if ((sx && sx !== st.dirX) || (sy && sy !== st.dirY)) st.moves++;
    if (sx) st.dirX = sx;
    if (sy) st.dirY = sy;
  }, { passive: true });

  /* ---------- контракт с рисовалкой ---------- */
  const api = {
    get on() { return st.on; },
    get chain() { return st.chain; },
    hit(x, y) {
      if (!st.on) return;
      // Курсор должен был реально двигаться прямо сейчас. Без этого «сбор» происходил бы и от
      // программного перемещения точек под неподвижную мышь.
      const now = performance.now();
      if (now - st.lastMove > 120) return;
      const gap = st.lastHit ? Math.round(now - st.lastHit) : 1000;
      st.lastHit = now;
      st.buf.push({ gap });
      st.chain.unshift({ x, y });
      if (st.chain.length > 18) st.chain.length = 18;
      showHud();
      // счётчик рисуем оптимистично — сервер поправит на ближайшем ответе
      st.count = Math.min(st.total, st.count + 1);
      drawHud();
      schedule(st.buf.length >= 6 ? 0 : 900);
    },
    tick(mx, my) {
      const c = st.chain;
      if (!c.length) return;
      // Звенья тянутся друг за другом: первое — за курсором, остальные — за предыдущим. Чем дальше
      // от головы, тем ленивее, отсюда «хвост».
      let px = mx, py = my;
      for (let i = 0; i < c.length; i++) {
        const k = 0.42 - i * 0.012;
        c[i].x += (px - c[i].x) * (k > 0.1 ? k : 0.1);
        c[i].y += (py - c[i].y) * (k > 0.1 ? k : 0.1);
        px = c[i].x; py = c[i].y;
      }
    },
  };
  window.__egg = api;

  /* ---------- старт забега ---------- */
  let sid = null;
  try { sid = localStorage.getItem(SIDK); } catch (_) {}
  post({ action: 'start', sid: sid || undefined }).then((r) => {
    if (!r || !r.sid || !r.total) return; // сервер молчит — пасхалки просто нет, сайт работает как обычно
    st.sid = r.sid;
    st.total = r.total;
    try { localStorage.setItem(SIDK, r.sid); } catch (_) {}
    st.count = Number(r.got) || 0;
    if (r.done) {
      st.done = true; st.link = r.link || null;
      // Забег уже призовой, а кнопку человек мог не нажать: показываем экран снова, но не сразу —
      // вваливаться модалкой в первую секунду визита незачем.
      if (st.link) setTimeout(win, 1200);
      return;
    }
    st.on = true;
    if (st.count > 0) { showHud(); drawHud(); }
  });

  // язык переключили — перерисовываем открытый экран (тот же контракт, что у i18n.js)
  window.addEventListener('bitaps-lang-changed', () => {
    const w = document.getElementById('eggWin');
    if (w) { w.remove(); win(); }
  });

  // ушли со страницы с недосланным хвостом — досылаем, иначе последние сборы пропадут
  window.addEventListener('pagehide', () => {
    if (!st.buf.length || !st.sid || st.done) return;
    try {
      navigator.sendBeacon(API, new Blob([JSON.stringify({
        action: 'hit', sid: st.sid,
        count: st.buf.length, gaps: st.buf.map((b) => b.gap), moves: st.moves,
      })], { type: 'application/json' }));
    } catch (_) {}
  });
})();
