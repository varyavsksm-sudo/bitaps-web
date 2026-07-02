# bitaps — сайт: единый пайплайн

Это **единственный** источник сайта bitaps. Никаких вторых копий.

- Репозиторий: `varyavsksm-sudo/bitaps-web`
- Хостинг: GitHub Pages (branch `main`), кастомный домен `bitapsvpn.com` (файл `CNAME`)
- Постоянный рабочий чекаут на маке: `~/bitaps-web`

## Как деплоить

Сборки НЕТ — файлы отдаются как есть. Правишь `.html/.css/.js`, коммитишь, пушишь:

```sh
cd ~/bitaps-web
# ...правки...
./deploy.sh "что изменил"     # commit -am + push origin main
```

Через ~1–2 мин GitHub Pages пересоберётся и `bitapsvpn.com` обновится
(домен за Cloudflare — при жёстком кэше может понадобиться минута-две).

`deploy.sh` берёт токен из `~/.local/gh-token` (origin намеренно без токена в URL).

## Структура

- `index.html` — лендинг. Полу-собранный (инлайн `<script>` + base64-карта мира),
  но CSS вынесен в `styles.css` (линкуется). Правится вручную прямо здесь.
- `styles.css` — общий стиль (index + pay линкуют его).
- `pay.html`, `account.html`, `box.html`, `box-order.html`, `app.html`,
  `support.html`, `terms.html`, `privacy.html`, `confirmed.html`, `game.html`,
  `404.html` — отдельные страницы.
- `i18n.js` — словарь RU→EN + автоперевод.
- Инфра Pages: `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `og.png`,
  `google93a4b5837234bc4f.html` (верификация Search Console), фавиконки.

## Что НЕ здесь

- **Функции бэкенда** и **setup VPS** живут в `~/bitaps-vpn` (`supabase/`, `server/`).
  Деплой функций — через Supabase CLI, НЕ отсюда.
- Старая разошедшаяся копия сайта заархивирована в
  `~/bitaps-vpn/_ARCHIVED-frontend-2026-07-02/` — НЕ редактировать, только для сверки.
