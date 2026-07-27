/* bitaps VPN — облегчённый переключатель языка для страниц с готовой английской разметкой
   (blocked/*, tools/*, status, юр-документы). Один файл вместо 52 копий инлайном.

   Почему он вообще есть, отдельно от /i18n.js. Общий движок переводит по СЛОВАРЮ: чтобы им
   покрыть эти страницы, весь их текст пришлось бы затащить в i18n.js. Здесь английский вариант
   лежит рядом с русским прямо в разметке (data-en) — так проще держать их согласованными.
   Ставить на одну страницу оба движка НЕЛЬЗЯ: у каждого свой кэш оригинала и своя кнопка, они
   передерутся за один и тот же узел.

   Что чинит эта версия по сравнению с инлайновыми копиями, которые она заменила:
   1) АТРИБУТЫ. Копии умели только data-en (innerHTML) и data-en-ph (placeholder). Заголовки
      ссылок, aria-подписи и alt оставались русскими на всех 50 страницах — их читают скринридеры
      и показывает браузер во всплывающей подсказке. Добавлены data-en-title/-aria/-alt.
   2) ДИНАМИКА. Копии переводили один раз при загрузке. Всё, что скрипт страницы дорисовывал
      потом (статусы проверок, результаты, сообщения об ошибках), навсегда оставалось русским.
      Добавлен наблюдатель за DOM — как в общем движке.
   3) ЗАГОЛОВОК ВКЛАДКИ. <title data-en="…"> раньше игнорировался: вкладка оставалась русской.

   Язык общий для всего сайта: localStorage['bitaps-lang'] (тот же ключ, что у /i18n.js). */
(function () {
  var KEY = 'bitaps-lang', html = document.documentElement, obs = null;
  // атрибут с переводом → какой атрибут им подменять
  var ATTRS = { 'data-en-ph': 'placeholder', 'data-en-title': 'title', 'data-en-aria': 'aria-label', 'data-en-alt': 'alt' };

  function detect() {
    try { var s = localStorage.getItem(KEY); if (s === 'en' || s === 'ru') return s; } catch (e) {}
    return 'ru';
  }
  var cur = detect();

  function trEl(e, l) {
    if (e.__ru == null) e.__ru = e.innerHTML;
    var v = (l === 'en') ? e.getAttribute('data-en') : e.__ru;
    if (v != null && e.innerHTML !== v) e.innerHTML = v;
  }
  function trAttrs(root, l) {
    for (var da in ATTRS) {
      var target = ATTRS[da];
      root.querySelectorAll('[' + da + ']').forEach(function (e) {
        var st = '__ru_' + target;
        if (e[st] == null) e[st] = e.getAttribute(target) || '';
        var v = (l === 'en') ? e.getAttribute(da) : e[st];
        if (v != null) e.setAttribute(target, v);
      });
    }
  }
  function apply(l) {
    if (obs) obs.disconnect();
    document.querySelectorAll('[data-en]').forEach(function (e) { trEl(e, l); });
    trAttrs(document, l);
    // заголовок вкладки: <title data-en="…">
    var t = document.querySelector('title[data-en]');
    if (t) { if (t.__ru == null) t.__ru = t.textContent; document.title = (l === 'en') ? t.getAttribute('data-en') : t.__ru; }
    html.lang = l;
    var b = document.getElementById('langToggle');
    if (b) b.textContent = (l === 'en') ? 'RU' : 'EN';
    try { localStorage.setItem(KEY, l); } catch (e) {}
    // страницы слушают это событие, чтобы перерисовать своё динамическое содержимое
    window.dispatchEvent(new Event('storage'));
    if (obs) obs.observe(document.body, { childList: true, subtree: true });
  }
  function setLang(l) { cur = l; apply(l); }

  function mkButton() {
    if (document.getElementById('langToggle')) return;
    var b = document.createElement('button');
    b.id = 'langToggle'; b.type = 'button'; b.textContent = (cur === 'en') ? 'RU' : 'EN';
    b.setAttribute('aria-label', 'Сменить язык / Switch language');
    b.style.cssText = "cursor:pointer;border:1.5px solid #ff7a1a;background:#ff7a1a;color:#0b0e14;border-radius:999px;font-family:'JetBrains Mono',ui-monospace,monospace;font-weight:800;font-size:12.5px;letter-spacing:.5px;line-height:1;height:38px;min-width:46px;padding:0 14px;display:inline-grid;place-items:center;box-shadow:0 4px 14px rgba(255,122,26,.35);";
    b.addEventListener('click', function () { setLang(cur === 'en' ? 'ru' : 'en'); });
    // тумблер темы бывает двух видов: общий в шапке сабстраниц (#btThemeBtn) и собственный
    // на самостоятельных страницах (#themeToggle). Кнопку языка ставим слева от него.
    var theme = document.getElementById('btThemeBtn') || document.getElementById('themeToggle');
    if (theme && theme.parentNode) theme.parentNode.insertBefore(b, theme);
    else { b.style.cssText += 'position:fixed;top:12px;right:12px;z-index:9999;'; document.body.appendChild(b); }
  }

  function init() {
    mkButton();
    // Наблюдатель: скрипты страницы дорисовывают содержимое уже после загрузки (результаты
    // проверок, статусы, ошибки сети). Без него в английском режиме такие куски остаются русскими.
    obs = new MutationObserver(function (muts) {
      if (cur !== 'en') return;
      var todo = [];
      muts.forEach(function (m) {
        (m.addedNodes || []).forEach(function (n) {
          if (n.nodeType !== 1) return;
          if (n.hasAttribute && n.hasAttribute('data-en')) todo.push(n);
          if (n.querySelectorAll) n.querySelectorAll('[data-en]').forEach(function (x) { todo.push(x); });
        });
      });
      if (!todo.length) return;
      obs.disconnect();
      todo.forEach(function (e) { trEl(e, 'en'); });
      trAttrs(document, 'en');
      obs.observe(document.body, { childList: true, subtree: true });
    });
    apply(cur);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
