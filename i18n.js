/* bitaps VPN — переключатель языка RU/EN (один общий файл для всех страниц).
   Движок: язык берётся из localStorage (по умолчанию русский), переключается
   кнопкой RU/EN; перевод текстовых узлов и атрибутов по словарю (ключ — русский
   текст со схлопнутыми пробелами), наблюдатель за динамически добавленным
   содержимым. Юр-доки не трогаем. */
(function () {
  var KEY = 'bitaps-lang';
  // ── словарь: русский (схлопнутые пробелы) → english ──
  var DICT = {
    // nav / hero
    "Возможности": "Features", "Как работает": "How it works", "Цены": "Pricing",
    "Приложение": "App", "Войти": "Log in", "Скачать": "Download",
    "трафик шифруется прямо сейчас": "traffic is being encrypted right now",
    "Интернет,": "The internet", "который": "that", "принадлежит тебе": "belongs to you",
    "bitaps VPN прячет твой трафик за современным шифрованием и гонит его через быстрые серверы. Без логов. Без следов. Без тормозов.":
      "bitaps VPN hides your traffic behind modern encryption and pushes it through fast servers. No logs. No traces. No slowdowns.",
    "Скачать бесплатно": "Download free", "▶ Смотреть скорость": "▶ Watch the speed",
    "из 5 · реальные отзывы · 3 дня бесплатно": "out of 5 · real reviews · 3 days free",
    "Твой реальный IP": "Your real IP", "178.62.* спрятан": "178.62.* hidden", "bitaps выдаёт": "bitaps shows",
    "Протокол VLESS + Reality · современное шифрование": "VLESS + Reality protocol · modern encryption",
    "Мгновенный Kill Switch · политика No-Logs": "Instant Kill Switch · No-Logs policy",
    "Оплата картой и криптой · пробный период 3 дня бесплатно": "Pay by card or crypto · 3-day free trial",
    // features
    "// почему bitaps": "// why bitaps", "Не просто VPN.": "Not just a VPN.", "Личная крепость.": "Your private fortress.",
    "Скорость без потерь": "Speed with no loss",
    "Протокол VLESS + Reality — современное шифрование и стабильное соединение. Стримь 4K и качай торренты — VPN не почувствуешь.":
      "VLESS + Reality protocol — modern encryption and a stable connection. Stream 4K and download torrents — you won't even feel the VPN.",
    "Стойкое шифрование": "Strong encryption",
    "Современное шифрование поверх VLESS + Reality (TLS 1.3) — трафик надёжно защищён от перехвата в открытых сетях.":
      "Modern encryption on top of VLESS + Reality (TLS 1.3) — your traffic is well protected from interception on open networks.",
    "Политика No-Logs": "No-Logs policy",
    "Мы физически не храним то, что ты делаешь. Нечего хранить — нечего отдавать. Так заложено в самой архитектуре сервиса.":
      "We physically don't store what you do. Nothing to keep — nothing to hand over. It's built into the service architecture itself.",
    "Связь с сервером оборвалась? bitaps мгновенно режет весь трафик. Ни один байт не утечёт без защиты.":
      "Lost the connection to the server? bitaps instantly cuts all traffic. Not a single byte leaks unprotected.",
    "Россия + зарубеж": "Russia + abroad",
    "Быстрые узлы в России и за границей. Подключайся к ближайшему одним тапом.":
      "Fast nodes in Russia and abroad. Connect to the nearest one with a single tap.",
    "До 10 устройств": "Up to 10 devices",
    "Телефон, ноут, телевизор, планшет, роутер — один аккаунт на 10 устройств сразу. Хватит на всю семью.":
      "Phone, laptop, TV, tablet, router — one account for 10 devices at once. Enough for the whole family.",
    // how it works
    "// проще некуда": "// couldn't be simpler", "Защита за": "Protection in", "30 секунд": "30 seconds",
    "Без настроек, без мануалов. Три шага — и ты невидим.": "No setup, no manuals. Three steps — and you're invisible.",
    "Установи bitaps": "Install bitaps",
    "Скачай приложение под свою систему. Вес меньше фотки — ставится за пару секунд.":
      "Download the app for your system. Smaller than a photo — installs in a couple of seconds.",
    "Нажми одну кнопку": "Press one button",
    "Большая кнопка «Подключиться» сама выберет самый быстрый сервер рядом с тобой.":
      "The big «Connect» button picks the fastest server near you automatically.",
    "Живи спокойно": "Relax",
    "Трафик зашифрован, IP спрятан, провайдер ослеп. Всё. Можешь забыть, что VPN включён.":
      "Traffic encrypted, IP hidden, your ISP blind. That's it. You can forget the VPN is even on.",
    // map / status
    "// глобальная сеть": "// global network", "Серверы, которые": "Servers that", "никогда не спят": "never sleep",
    "Наведи на точку — увидишь пинг до узла в реальном времени.": "Hover over a dot to see real-time ping to that node.",
    "Активных узлов": "Active nodes", "Загрузка сети": "Network load", "Средний пинг": "Average ping",
    "Подключиться к ближайшему": "Connect to the nearest", "// замер в реале": "// live test",
    "С bitaps быстрее,": "Faster with bitaps,", "чем без него": "than without it",
    "Да, такое бывает. Умная маршрутизация выбирает самый быстрый маршрут.":
      "Yes, it happens. Smart routing picks the fastest path.",
    "Без VPN": "No VPN", "Другой VPN": "Another VPN", "↻ Замерить ещё раз": "↻ Test again",
    "// инфраструктура в реальном времени": "// real-time infrastructure", "Серверы,": "Servers", "которые на связи": "that are online",
    "Топ-5 серверов по пингу прямо сейчас и средний пинг сети за последнюю неделю.":
      "Top-5 servers by ping right now and the network's average ping over the last week.",
    "📈 Средний пинг сети · 7 дней": "📈 Network average ping · 7 days",
    "Пн": "Mon", "Вт": "Tue", "Ср": "Wed", "Чт": "Thu", "Пт": "Fri", "Сб": "Sat", "Вс": "Sun",
    "🏆 Лидеры по пингу": "🏆 Ping leaders", "сеть онлайн 24/7": "network online 24/7",
    "Казань": "Kazan", "Москва": "Moscow", "Санкт-Петербург": "St. Petersburg", "Екатеринбург": "Yekaterinburg",
    "Новосибирск": "Novosibirsk", "Амстердам": "Amsterdam",
    // b-box
    "✦ Новинка": "✦ New", "Новинка": "New", "// устройство bitaps": "// bitaps device",
    "VPN для всего дома": "VPN for the whole home",
    "Маленькая умная коробочка. Втыкаешь в роутер — и под защитой сразу весь домашний Wi-Fi: телефоны, ноуты, телевизор, приставка, умные колонки. Даже то, на что VPN обычно не поставишь. Настроил один раз — вставил ключ из подписки bitaps, дальше работает само.":
      "A small smart box. Plug it into your router — and your entire home Wi-Fi is protected at once: phones, laptops, TV, console, smart speakers. Even devices you usually can't put a VPN on. Set it up once — paste your bitaps subscription key, and it just runs.",
    "Подключил один раз — и забыл: работает само": "Set up once and forget it — runs on its own",
    "Шифрует весь трафик на лету, не нагружая твои устройства": "Encrypts all traffic on the fly without loading your devices",
    "Защищает гаджеты без приложений — ТВ, консоли, умный дом": "Protects app-less gadgets — TVs, consoles, smart home",
    "Просто работает: ничего не настраивать и не обновлять вручную": "Just works: nothing to configure or update by hand",
    "Один ключ — вся сеть: гости в твоём Wi-Fi тоже под защитой": "One key — the whole network: guests on your Wi-Fi are protected too",
    "Скорость не проседает — VLESS + Reality работает незаметно": "Speed stays up — VLESS + Reality works invisibly",
    "Заказать B-box": "Order B-box", "в наличии · доставка по миру": "in stock · worldwide delivery",
    "подключается к роутеру": "plugs into your router", "↑ нажми на коробочку — инфо и заказ": "↑ tap the box — info & order",
    // vip card (коллекционная металлическая карта)
    "🖤 Карта": "🖤 Card", "VIP-карта": "VIP card",
    "// коллекционная карта": "// collectible card", "Металлическая": "Metal",
    "Настоящая карта из металла с брендом bitaps. Премиальный статус в кармане — и путь к пожизненным привилегиям.":
      "A real metal card branded bitaps. Premium status in your pocket — and a path to lifetime privileges.",
    "Посмотреть VIP-карту": "View the VIP card", "посмотреть карту →": "view the card →",
    "Обычная карта": "Standard card", "/ металл": "/ metal",
    "Коллекционная металлическая карта bitaps. Премиум-предмет и статус — доступна каждому, без бонусов подписки.":
      "A collectible bitaps metal card. A premium item and status — available to everyone, without subscription bonuses.",
    "Заказать": "Order", "Доставка по России · оплата после подтверждения": "Delivery across Russia · payment after confirmation",
    "по приглашению": "by invitation", "VIP-карта · персональная": "VIP card · personalized", "/ персональная": "/ personalized",
    "Имя на карте и полные привилегии: 100 устройств навсегда, год подписки в подарок, дальше продления по цене тарифа на 10 устройств.":
      "Your name on the card and full privileges: 100 devices forever, a year of subscription as a gift, then renewals at the 10-device plan price.",
    "Заказать в боте": "Order in the bot", "Открывается за 100 приглашённых друзей": "Unlocks at 100 invited friends",
    "Заказать обычную карту": "Order the standard card",
    "Оставь контакты — менеджер подтвердит заказ и оформит доставку.": "Leave your contacts — a manager will confirm the order and arrange delivery.",
    "Скоро в продаже.": "On sale soon.", "Телефон": "Phone", "Адрес доставки": "Delivery address", "Email (необязательно)": "Email (optional)",
    "Как тебя зовут": "Your name", "Улица, дом, квартира / ПВЗ": "Street, building, apartment / pickup",
    "Оформить заказ": "Place order", "Заказать в Telegram": "Order via Telegram",
    "Скоро — сейчас оставь заявку, свяжемся первыми": "Coming soon — leave a request now and we'll reach out first",
    "Не удалось отправить заявку. Напиши нам:": "Could not send the request. Message us:",
    "Свяжемся, как только карта поступит в продажу.": "We'll get in touch as soon as the card goes on sale.",
    // card.html — подробное описание
    "Что такое карта bitaps": "What the bitaps card is",
    "Металлическая карта bitaps — не сувенир, а настоящая банковская карта: ей реально можно платить. Внутри — кошелёк на токенах bitaps, который растёт за приглашённых друзей.":
      "The bitaps metal card isn't a souvenir — it's a real bank card you can actually pay with. Inside is a wallet in bitaps tokens that grows as you invite friends.",
    "Настоящая металлическая карта — платите ей где угодно, в России и за рубежом.": "A real metal card — pay with it anywhere, in Russia and abroad.",
    "Оплата криптовалютой — пополнение и расчёты в крипте, без привязки к банку.": "Crypto payments — top up and pay in crypto, with no bank attached.",
    "Баланс — в токенах bitaps, внутренней валюте сервиса.": "The balance is in bitaps tokens, the service's internal currency.",
    "Токены капают за приглашённых друзей — чем больше рефералов, тем больше баланс.": "Tokens accrue for invited friends — the more referrals, the bigger the balance.",
    "Быстрый вывод на карту (скоро) — реферальные токены переводятся на карту в пару касаний и тратятся.": "Fast payout to the card (soon) — referral tokens move to the card in a couple of taps and are ready to spend.",
    "Два вида карты": "Two kinds of card",
    "Настоящая металлическая карта bitaps для каждого. Кошелёк на токенах и статусный предмет — без дополнительных бонусов подписки.":
      "A real bitaps metal card for everyone. A token wallet and a status item — without extra subscription bonuses.",
    "Купить может любой — без условий и приглашений.": "Anyone can buy it — no conditions, no invites.",
    "Оплата криптой, баланс в токенах, вывод реф-токенов на карту (скоро).": "Crypto payments, a token balance, and referral-token payouts to the card (soon).",
    "Работает в России и за рубежом.": "Works in Russia and abroad.",
    "Чёрная металлическая black card с вашим именем. Всё из обычной карты — плюс пожизненные привилегии подписки.":
      "A black metal card with your name on it. Everything from the standard card — plus lifetime subscription privileges.",
    "Всё из обычной карты, плюс:": "Everything from the standard card, plus:",
    "Персонализация — ваше имя на карте.": "Personalization — your name on the card.",
    "100 устройств навсегда — постоянный лимит на всех будущих подписках.": "100 devices forever — a permanent limit across all future subscriptions.",
    "Год подписки в подарок сразу.": "A year of subscription as a gift, right away.",
    "Дальше все продления — по цене тарифа на 10 устройств, лимит всё те же 100.": "After that all renewals are at the 10-device plan price, while the limit stays 100.",
    "Приоритетные сервера (VLESS + Reality) и ускоренный вывод токенов (скоро).": "Priority servers (VLESS + Reality) and faster token payouts (soon).",
    // Mini App формы заказа карты (card-order / vip-card-order) + превью vip-card
    "Заказ карты · bitaps VPN": "Order a card · bitaps VPN",
    "Заказ VIP-карты · bitaps VPN": "Order a VIP card · bitaps VPN",
    "VIP-карта — bitaps VPN": "VIP card — bitaps VPN",
    "VIP-карта · bitaps VPN": "VIP card · bitaps VPN",
    "🩶 Обычная карта · скоро": "🩶 Standard card · soon",
    "Заказ обычной карты": "Standard card order",
    "/ металл · доставка по РФ": "/ metal · delivery in Russia",
    "Что даёт карта": "What the card gives you",
    "Как это работает": "How it works",
    "О карте": "About the card",
    "Оставляешь заявку — менеджер подтверждает и оформляет доставку.": "Leave a request — a manager confirms it and arranges delivery.",
    "Оформляешь заказ — менеджер подтверждает и отправляет карту": "Place an order — a manager confirms it and ships the card",
    "На обороте металлической карты — персональный промокод": "On the back of the metal card there's a personal promo code",
    "Активируешь код в боте — аккаунт становится VIP": "Activate the code in the bot — your account becomes VIP",
    "Материал": "Material", "металл": "metal", "Лимит устройств": "Device limit", "100 навсегда": "100 forever",
    "В подарок": "Gift", "год подписки": "a year of subscription", "Доставка": "Delivery", "по РФ": "across Russia",
    "100 устройств навсегда": "100 devices forever",
    "— постоянный лимит на всех подписках": "— a permanent limit on all subscriptions",
    "— постоянный лимит, который остаётся с тобой на всех подписках": "— a permanent limit that stays with you across every subscription",
    "Год подписки в подарок": "A year of subscription as a gift",
    "— активируешь промокод с оборота карты": "— activate the promo code from the back of the card",
    "Приоритетные сервера": "Priority servers",
    "— VLESS + Reality, минимум нагрузки": "— VLESS + Reality, minimal load",
    "— VLESS + Reality, минимальная нагрузка": "— VLESS + Reality, minimal load",
    "Дальше продления —": "Renewals after that —",
    "по цене тарифа на 10 устройств": "at the 10-device plan price",
    ", лимит всё те же 100": ", the limit stays 100",
    ", а лимит всё те же 100": ", and the limit stays 100",
    "УСТРОЙСТВ": "DEVICES", "ПРИОРИТЕТ": "PRIORITY",
    "Держатель · привилегия": "Holder · privilege",
    "твоя сеть · твои правила": "your network · your rules",
    "Реальная металлическая карта · доставка": "Real metal card · delivery",
    "5000 ₽ · открывается за 100 приглашённых друзей": "5000 ₽ · unlocks at 100 invited friends",
    "Менеджер свяжется, подтвердит доставку и пришлёт металлическую карту.": "A manager will get in touch, confirm delivery and send your metal card.",
    "Менеджер свяжется, подтвердит доставку и пришлёт металлическую карту с промокодом.": "A manager will get in touch, confirm delivery and send the metal card with the promo code.",
    "Оформить ·": "Order ·",
    "Открой заказ VIP-карты из бота — так мы проверим твой доступ": "Open the VIP card order from the bot so we can verify your access",
    // pricing
    "// тарифы": "// plans", "VIP-доступ": "VIP access", "без подвоха": "no catch",
    "Чем длиннее период — тем дешевле месяц. Цена указана за выбранное число устройств, без скрытых платежей. Первые 3 дня — бесплатно.":
      "The longer the period, the cheaper the month. Price shown for the selected number of devices, no hidden fees. First 3 days free.",
    "📱 Устройств:": "📱 Devices:", "+50 ₽/мес за каждое доп. устройство · до 10": "+50 ₽/mo per extra device · up to 10",
    "1 месяц": "1 month", "/мес": "/mo", "Итого": "Total", "за 1 месяц": "for 1 month",
    "Все локации": "All locations", "Безлимит трафика": "Unlimited traffic", "Поддержка 24/7": "24/7 support", "Поддержка в Telegram": "Telegram support", "Поддержка": "Support", "Выбрать": "Choose",
    "3 месяца": "3 months", "за 3 месяца": "for 3 months", "Всё из «1 месяца»": "Everything in «1 month»",
    "Дешевле помесячно": "Cheaper per month", "YouTube без рекламы": "YouTube without ads",
    "6 месяцев": "6 months", "за 6 месяцев": "for 6 months", "Всё из «3 месяцев»": "Everything in «3 months»",
    "Выгодный месяц": "Better monthly rate", "Приоритетная поддержка": "Priority support", "Без логов": "No logs",
    "★ выбор большинства": "★ most popular", "12 месяцев": "12 months", "за 12 месяцев": "for 12 months",
    "Всё из «6 месяцев»": "Everything in «6 months»", "Максимальная выгода": "Maximum value",
    "Выделенный IP-адрес": "Dedicated IP address", "Лучшая цена месяца": "Best monthly price",
    "Оплата на сайте или в Telegram-боте · Подписка активируется сразу · 3 дня бесплатно · Без скрытых платежей":
      "Pay on the website or in the Telegram bot · Subscription activates instantly · 3 days free · No hidden fees",
    // reviews — relative-time метки и кнопка «Отправить» (используются в живой секции отзывов)
    "Отправить": "Send", "часа назад": "hours ago", "вчера": "yesterday", "дня назад": "days ago", "неделю назад": "a week ago",
    // faq
    "// вопросы": "// questions", "Коротко о": "Briefly on", "главном": "what matters",
    "Вы правда не храните логи?": "Do you really keep no logs?",
    "Да. Архитектура построена так, что серверы физически не пишут историю подключений. Это подтвердил независимый аудит. Нечего хранить — значит, нечего у нас запросить и нечего слить.":
      "Yes. The architecture is built so servers physically don't record connection history. An independent audit confirmed it. Nothing stored means nothing to request from us and nothing to leak.",
    "VPN сильно замедлит интернет?": "Will the VPN slow my internet a lot?",
    "На протоколе VLESS + Reality потеря скорости почти незаметна, а часто bitaps даже ускоряет: умная маршрутизация выбирает самый быстрый маршрут и сглаживает «затыки» провайдера. Замер выше показывает реальную скорость твоего устройства.":
      "On the VLESS + Reality protocol the speed loss is barely noticeable, and bitaps often even speeds things up: smart routing picks the fastest path and smooths out ISP «hiccups». The test above shows your device's real speed.",
    "На сколько устройств можно поставить?": "How many devices can I use?",
    "Одна подписка — до 10 устройств одновременно: телефон, ноутбук, планшет, телевизор и даже роутер. Этого с запасом хватает на всю семью.":
      "One subscription — up to 10 devices at once: phone, laptop, tablet, TV and even a router. More than enough for the whole family.",
    "Можно сначала попробовать бесплатно?": "Can I try it free first?",
    "Да. Первые 3 дня — бесплатный пробный период со всеми возможностями. Попробуй без оплаты: не зашло — просто не продлеваешь, ничего не спишется. Риска ноль.":
      "Yes. The first 3 days are a free trial with all features. Try it without paying: if you don't like it, just don't renew — nothing is charged. Zero risk.",
    "Как оплатить?": "How do I pay?",
    "Картой, через известные платёжные системы или криптовалютой, если хочешь максимум анонимности. Никаких скрытых платежей и автосписаний-сюрпризов.":
      "By card via well-known payment systems, or by crypto if you want maximum anonymity. No hidden fees or surprise auto-charges.",
    "Остались вопросы?": "Still have questions?",
    "Напиши нам — живая поддержка, обычно отвечаем в течение дня.": "Message us — live support, we usually reply within a day.",
    "Обычно отвечаем в течение дня.": "We usually reply within a day.",
    "Написать нам": "Message us", "или в Telegram": "or on Telegram", "· на почту": "· by email",
    "● защищено": "● protected", "Подключено": "Connected", "12 ms · быстрый узел": "12 ms · fast node",
    // app section
    "// своё приложение": "// our own app", "Приложение, которым": "An app that's", "приятно пользоваться": "a pleasure to use",
    "Мы пишем его сами — одна большая кнопка, чистый дизайн, мгновенное подключение, один аккаунт на всех платформах. Приложение уже готово для Windows, macOS, Linux и Android — скачай на странице приложения. На iPhone пока подключайся через":
      "We build it ourselves — one big button, clean design, instant connection, one account across all platforms. The app is ready for Windows, macOS, Linux and Android — download it on the app page. On iPhone, connect via",
    ": наш ключ работает в нём сразу.": ": our key works in it right away.",
    "под заказ · оставь заявку — менеджер свяжется": "made to order · leave a request — manager will contact you",
    // pay page — строка согласия (разбита ссылками на текст-узлы)
    "Оплачивая, ты принимаешь": "By paying, you accept", "оферту": "the offer", "политику конфиденциальности": "the privacy policy", "и": "and",
    // app page (страница загрузки) — шапка, разбитая тегами на узлы
    "Наше приложение готово — скачай для своей системы и подключись за минуту. На iPhone пока через Happ.": "Our app is ready — download it for your system and connect in a minute. On iPhone via Happ for now.",
    "bitaps VPN готово": "bitaps VPN is ready",
    "для Windows, macOS, Linux и Android — скачай кнопкой ниже и вставь ключ из": "for Windows, macOS, Linux and Android — download with the button below and paste the key from",
    "Telegram-бота": "the Telegram bot",
    "или из письма после оплаты. На iPhone/iPad пока подключайся через": "or from the email after payment. On iPhone/iPad connect via",
    "✅ ключ из Telegram-бота вставляется за минуту": "✅ the key from the Telegram bot pastes in under a minute",
    // auth-модалка (index.html) — вход/пароль/ключ/восстановление
    "Пароль": "Password", "Повторите пароль": "Repeat password", "Забыл пароль?": "Forgot password?",
    "Войти через Google": "Log in with Google", "или войдите через Telegram": "or log in with Telegram",
    "или по ключу из бота (надёжно на телефоне)": "or with a key from the bot (reliable on mobile)",
    "🤖 Открыть бота за ключом": "🤖 Open the bot to get a key", "Войти по ключу": "Log in with key",
    "Не приходит «Код входа»? Восстановить по почте →": "No «Login code»? Recover it by email →",
    "вставь ключ vless://… из бота": "paste the vless://… key from the bot",
    // pay.html — экран успеха оплаты
    "Счёт создан": "Invoice created", "Открываем оплату…": "Opening payment…", "Открыть оплату": "Open payment",
    "⏳ Ждём подтверждения оплаты… ключ появится здесь автоматически (можно не закрывать страницу).": "⏳ Waiting for payment confirmation… the key will appear here automatically (you can keep the page open).",
    "Если окно оплаты не открылось автоматически — нажми «Открыть оплату» 👆": "If the payment window didn't open automatically — tap «Open payment» 👆",
    "← Другой способ оплаты": "← Another payment method",
    "🔑 Готово! Твой ключ": "🔑 Done! Your key",
    "Скопируй ключ или открой в приложении Happ. Он также придёт на почту и доступен в Личном кабинете.": "Copy the key or open it in the Happ app. It will also arrive by email and is available in your Dashboard.",
    "Скопировать ключ": "Copy key", "⚙️ Открыть в Happ": "⚙️ Open in Happ", "🔐 Код входа в кабинет": "🔐 Login code for the dashboard",
    // confirmed.html — лендинг подтверждения почты
    "Почта подтверждена!": "Email confirmed!", "Спасибо — твой аккаунт": "Thank you — your account",
    "активирован. Теперь можно пользоваться сайтом.": "is activated. You can now use the site.", "Перейти на сайт →": "Go to the site →",
    // 404.html — страница «не найдено»
    "Страница не найдена": "Page not found",
    "Похоже, такой страницы нет или она переехала. Вернись на главную — там всё работает.": "Looks like this page doesn't exist or has moved. Go back home — everything works there.",
    "или напиши в": "or message", "поддержку": "support",
    // общие шапка/футер сабстраниц (partials/header.html + footer.html)
    "Кабинет": "Dashboard", "Главная": "Home", "Помощь": "Help",
    "Карта сайта": "Site map", "Разделы сайта": "Site sections", "bitaps VPN — на главную": "bitaps VPN — home",
    "Подарить VPN": "Gift VPN", "Игра «Ловля карпов»": "Koi fishing game",
    "Аккаунт": "Account", "Личный кабинет": "Dashboard",
    "Инструменты": "Tools", "Заблокированные сайты": "Blocked sites", "Статус сервиса": "Service status",
    // гостевой кабинет (account.html, полноэкранный вход)
    "Подписка, VPN-ключ и устройства — в одном месте. Войди удобным способом:": "Subscription, VPN key and devices — all in one place. Sign in the way you like:",
    "🔑 Вставить VPN-ключ": "🔑 Paste VPN key", "🔐 Войти по коду входа": "🔐 Sign in with login code",
    "Ключ или код входа": "Key or login code",
    "Статус подписки и продление": "Subscription status and renewal",
    "VPN-ключ с QR для приложений": "VPN key with QR for the apps",
    "Управление устройствами": "Device management",
    "Нет аккаунта? Забери 3 дня бесплатно в боте →": "No account? Grab 3 free days in the bot →",
    // семейный пресет (index #pricing)
    "👨‍👩‍👧‍👦 Семейный": "👨‍👩‍👧‍👦 Family",
    "12 месяцев · 4 устройства — один тариф на всю семью, одной кнопкой": "12 months · 4 devices — one plan for the whole family, one button",
    "за год": "per year",
    // pay.html — ссылка на подарок
    "🎁 Хочешь подарить подписку другу?": "🎁 Want to gift a subscription to a friend?",
    "Подарочный код — здесь": "Gift code — here",
    // gift.html — подарочная подписка
    "// подарок": "// gift", "Подарить": "Gift",
    "Оплати подписку — получишь подарочный код письмом и прямо на этой странице. Друг активирует код в Telegram-боте и сразу получит свой VPN-ключ.":
      "Pay for a subscription — you'll get a gift code by email and right on this page. Your friend activates the code in our Telegram bot and instantly gets their VPN key.",
    "Тариф подарка": "Gift plan", "★ на целый год": "★ a whole year",
    "Подарок — подписка на 1 устройство. Цены — те же, что и в обычных тарифах.": "The gift is a 1-device subscription. Prices are the same as the regular plans.",
    "Почта — куда прислать код": "Email — where to send the code",
    "Твоя почта — или сразу почта получателя, если хочешь отправить сюрприз напрямую.": "Your email — or the recipient's, if you want to send the surprise directly.",
    "оплата на сайте, код на почту и сюда": "pay on the site, code by email and here",
    ". Вопросы —": ". Questions —",
    "Выбери и оплати": "Choose and pay",
    "Тариф на 3, 6 или 12 месяцев — СБП или криптой прямо на сайте.": "A 3, 6 or 12-month plan — pay by SBP or crypto right on the site.",
    "Получи код": "Get the code",
    "Подарочный код появится здесь после оплаты и придёт на почту.": "The gift code will appear here after payment and arrive by email.",
    "Отправь другу": "Send it to a friend",
    "Друг открывает ссылку с кодом в Telegram-боте — и дни подписки уже у него.": "Your friend opens the code link in our Telegram bot — and the subscription days are theirs.",
    "⏳ Ждём подтверждения оплаты… код появится здесь автоматически (можно не закрывать страницу).": "⏳ Waiting for payment confirmation… the code will appear here automatically (you can keep the page open).",
    "Код также отправлен на почту. Друг активирует его по ссылке в нашем Telegram-боте:": "The code was also sent by email. Your friend activates it via the link in our Telegram bot:",
    "Скопировать ссылку для друга": "Copy the link for your friend",
    "Скопировать код": "Copy code",
    "← Назад к выбору": "← Back to plans",
    // <title> вкладок
    "Подарить VPN · bitaps": "Gift VPN · bitaps",
    "bitaps VPN — приватность без компромиссов": "bitaps VPN — privacy without compromise", "Оплата · bitaps VPN": "Payment · bitaps VPN",
    "Личный кабинет — bitaps VPN": "Dashboard — bitaps VPN", "Скачать приложение — bitaps VPN": "Download app — bitaps VPN",
    "Поддержка · bitaps VPN": "Support · bitaps VPN", "Заказать B-box — bitaps VPN": "Order B-box — bitaps VPN",
    "Заказ B-box · bitaps VPN": "B-box order · bitaps VPN", "Ловля карпов · bitaps VPN": "Koi fishing · bitaps VPN",
    "Почта подтверждена — bitaps": "Email confirmed — bitaps", "Страница не найдена — bitaps VPN": "Page not found — bitaps VPN",
    // box / box-order (страницы B-box)
    "📦 Под заказ": "📦 Made to order", "Что это и зачем": "What it is and why",
    "Коробочка-роутер со встроенным VPN bitaps. Подключаешь к домашней сети — и все устройства разом (телефоны, ноуты, Smart TV, приставки) выходят через защищённый канал. Настраивать каждый гаджет не нужно.": "A router-box with built-in bitaps VPN. Connect it to your home network and every device at once (phones, laptops, Smart TVs, consoles) goes through a secure channel. No need to set up each gadget.",
    "Воткни в розетку и подключи к роутеру": "Plug into a socket and connect to your router", "Раздаёт свой Wi-Fi «bitaps»": "Broadcasts its own «bitaps» Wi-Fi",
    "Всё, что в этой сети — через VPN автоматически": "Everything on this network goes through the VPN automatically",
    "Характеристики": "Specs", "встроенный, bitaps": "built-in, bitaps", "Протокол": "Protocol", "Скорость": "Speed",
    "Подключение": "Connection", "LAN или Wi-Fi": "LAN or Wi-Fi", "В комплекте": "In the box", "box, БП, кабель": "box, power supply, cable",
    "Оформить заказ": "Place order", "Количество": "Quantity", "← На главную": "← Home", "Закажи": "Order",
    "📦 Под заказ · доставка по РФ": "📦 Made to order · delivery across Russia", "весь дом": "the whole home",
    "разовая покупка · без подписки": "one-time purchase · no subscription", "Подключил один раз — работает само": "Set up once — runs by itself",
    "Защищает даже гаджеты без приложений (ТВ, консоли, умный дом)": "Protects even app-less gadgets (TVs, consoles, smart home)",
    "Шифрует весь трафик на лету": "Encrypts all traffic on the fly", "Тихая и компактная — помещается на ладони": "Quiet and compact — fits in your palm",
    "Оформить доставку": "Arrange delivery", "Имя": "Name", "Город": "City", "Адрес доставки или пункт выдачи": "Delivery address or pickup point",
    "Курьер": "Courier", "Пункт выдачи": "Pickup point",
    // box.html / game.html — оставшиеся фрагменты
    ". Оставь заявку — менеджер свяжется и оформит доставку по России.": ". Leave a request — the manager will contact you and arrange delivery across Russia.",
    "Под заказ: оставь заявку — менеджер подтвердит и оформит доставку. Оплата после подтверждения, без предоплаты на сайте.": "Made to order: leave a request — the manager will confirm and arrange delivery. Payment after confirmation, no prepayment on the site.",
    "Лови карпов, набивай комбо и попади в топ-3. Золотой карп — джекпот, красный чужак — мимо (за него штраф).": "Catch koi, build combos and make the top-3. The golden koi is a jackpot, the red intruder is a miss (penalty for it).",
    "Твой логин в Личный кабинет и приложение (по нему входишь вместо ключа). Сохрани — не вводи в VPN-клиенты и никому не показывай.": "Your login for the Dashboard and app (use it instead of the key). Save it — don't enter it into VPN clients and don't share it.",
    "Скопировать код входа": "Copy login code",
    // open.html — автонастройка. Сама разметка переведена через data-en прямо на странице;
    // сюда попало то, что data-en не покрывает: <title> вкладки и строки, вписанные из JS.
    "Автонастройка — bitaps VPN": "Auto-setup — bitaps VPN",
    "Ключ скопирован": "Key copied",
    "Не вышло — выдели ключ и скопируй вручную": "Didn't work — select the key and copy it by hand",
    // account.html — кабинет: код входа, разделы, FAQ
    "⚙️ Автонастройка": "⚙️ Auto-setup", "📲 Скачать приложение": "📲 Download app", "Код входа": "Login code",
    "Для входа в приложение и кабинет. В отличие от ключа доступа —": "For logging into the app and dashboard. Unlike the access key —",
    "не вводи его в VPN-клиенты": "don't enter it into VPN clients", "и никому не показывай.": "and don't show it to anyone.",
    "🔁 Сменить код": "🔁 Change code", "VPN для всего дома сразу": "VPN for the whole home at once",
    "Ответим на почту, обычно за день": "We'll reply by email, usually within a day",
    "Друзья": "Friends", "Приглашай — получай бонусные дни": "Invite friends — earn bonus days", "Вопросы": "FAQ",
    "Сколько устройств можно подключить?": "How many devices can I connect?",
    "По умолчанию 1 устройство. Нужно больше — добавь в боте дополнительные (+50 ₽/мес за каждое).": "1 device by default. Need more — add extra ones in the bot (+50 ₽/mo each).",
    "Вы ведёте логи?": "Do you keep logs?", "Нет. Мы не храним историю и трафик — приватность по умолчанию.": "No. We don't store history or traffic — privacy by default.",
    "Как продлить подписку?": "How do I renew?", "Кнопка «Продлить» выше → оплата на сайте (карта, СБП или крипта), срок продлится автоматически. Можно оплатить и в Telegram-боте.": "The «Renew» button above → pay on the website (card, SBP or crypto), the term extends automatically. You can also pay in the Telegram bot.",
    "VPN не подключается?": "VPN won't connect?",
    "Загрузите в": "Get it on", "Доступно в": "Available on", "Скоро в": "Coming to", "А для компьютера —": "And for desktop —",
    // footer
    "Приватность — это не паранойя. Это гигиена.": "Privacy isn't paranoia. It's hygiene.",
    "Продукт": "Product", "Серверы": "Servers", "Платформы": "Platforms", "Компания": "Company",
    "Бесплатные инструменты": "Free tools", "Все инструменты": "All tools", "Мой IP": "My IP",
    "Пароль в утечке?": "Password leaked?", "Утечка WebRTC": "WebRTC leak", "Сайт лежит?": "Is it down?",
    "Оферта": "Terms", "Политика": "Privacy", "Помощь и FAQ": "Help & FAQ",
    "© 2026 bitaps VPN. Сделано для тех, кому есть что прятать — то есть для всех.":
      "© 2026 bitaps VPN. Made for those with something to hide — that is, everyone.",
    // b-box modal
    "VPN для всего дома — в одной коробочке": "VPN for the whole home — in one box",
    "Маленькое устройство, которое втыкается в роутер и раздаёт VPN сразу на": "A small device that plugs into your router and shares the VPN with",
    ": телефоны, ноуты, ТВ, приставки, умные колонки — без настройки на каждом устройстве.": ": phones, laptops, TVs, consoles, smart speakers — no setup on each device.",
    "Telegram или телефон": "Telegram or phone", "Город / адрес доставки": "City / delivery address",
    "Оформить заказ B-box": "Place B-box order",
    "Заказ принят!": "Order received!", "Мы свяжемся с тобой, чтобы подтвердить доставку B-box.": "We'll contact you to confirm B-box delivery.",
    "Закрыть": "Close",
    // support modal
    "Напишите нам": "Message us", "Напиши нам": "Message us", "Отвечаем в среднем за": "We reply on average in", ", круглосуточно.": ", around the clock.",
    "Сообщение": "Message", "Отправить сообщение": "Send message", "или сразу в Telegram": "or message us on Telegram",
    "Заявка отправлена!": "Request sent!", "Спасибо! Мы получили твоё сообщение и свяжемся с тобой по указанной почте.": "Thank you! We got your message and will reply to the email you provided.",
    // pay choice modal
    "Где оплатить?": "Where to pay?", "Выбери, как удобнее оформить подписку": "Choose how you'd like to subscribe",
    "🌐 На сайте": "🌐 On the website", "✈️ В Telegram-боте": "✈️ In the Telegram bot",
    // auth modal
    "Вход в аккаунт": "Sign in", "Войдите, чтобы управлять подпиской bitaps.": "Sign in to manage your bitaps subscription.",
    "Вход": "Sign in", "Регистрация": "Sign up",
    "или": "or", "Готово!": "Done!", "Вы вошли в аккаунт.": "You're signed in.",
    // drawer menu
    "Меню": "Menu", "Ещё на сайте": "More on the site", "Статус серверов": "Server status", "Карта серверов": "Server map",
    "Тест скорости": "Speed test", "Отзывы": "Reviews", "Вопросы и ответы": "FAQ", "Подписка": "Subscription",
    "Оплатить подписку": "Pay for subscription", "Развлечение": "Fun", "Ловля карпов": "Koi fishing",
    "топ-5": "top-5", "топ-3": "top-3", "Не удалось отправить заявку — проверь интернет и попробуй ещё раз. Или напиши нам:": "Couldn't send the request — check your connection and try again. Or message us:", "· приватность без компромиссов": "· privacy without compromise", "Аккаунт": "Account", "Личный кабинет": "Dashboard",
    // attrs
    "Курс Bitcoin · данные bitaps.com": "Bitcoin price · data from bitaps.com",
    "меню": "menu", "Тема: тёмная": "Theme: dark", "Тема: светлая": "Theme: light",
    "B-box — нажми, чтобы заказать": "B-box — tap to order", "меньше": "less", "больше": "more",
    "Оставь свой отзыв…": "Leave your review…", "оценка": "rating", "Написать в поддержку": "Contact support",
    "закрыть": "close", "Как тебя зовут": "Your name", "@username или +7…": "@username or +1…",
    "Город, улица, дом": "City, street, building", "чтобы прислать ответ": "so we can reply",
    "Опишите вопрос — поможем": "Describe your question — we'll help", "Опиши вопрос — поможем": "Describe your question — we'll help", "минимум 6 символов": "at least 6 characters",
    "ещё раз тот же пароль": "the same password again",
    "На главную": "Home", "// оплата": "// payment",
    "Оформить": "Get a", "подписку": "subscription",
    "Выбери тариф — ключ придёт на почту. Чем длиннее период, тем дешевле каждый месяц.": "Choose a plan — the key comes to your email. The longer the period, the cheaper each month.",
    "Выбери тариф": "Choose a plan", "шаг 1 из 2": "step 1 of 2", "шаг 2 из 2": "step 2 of 2",
    "Оплата": "Payment", "К оплате": "To pay", "Почта — на неё придёт ключ": "Email — the key will be sent here",
    "Способ оплаты": "Payment method", "Криптой (USDT/TON)": "Crypto (USDT/TON)",
    "оплата на сайте, ключ на почту": "pay on the site, key by email", "оплата звёздами в боте": "pay with Stars in the bot",
    "Карта / СБП": "Card / SBP", "скоро": "soon",
    "Оплата криптой проходит через CryptoBot. После оплаты ключ автоматически придёт на указанную почту. Вопросы —": "Crypto payment goes through CryptoBot. After payment the key is sent automatically to the email you provided. Questions —",
    "🎫 Промокод": "🎫 Promo code", "Есть код на скидку? Введи его — пересчитаем сумму к оплате.": "Got a discount code? Enter it — we'll recalculate the total.",
    "📖 История платежей": "📖 Payment history", "Здесь появятся твои оплаты после первой подписки — с датами и суммами.": "Your payments will appear here after your first subscription — with dates and amounts.",
    "Пока пусто": "Empty for now", "Открыть личный кабинет →": "Open dashboard →",
    "Открыть оплату ещё раз": "Open payment again",
    "Введи промокод": "Enter promo code", "Сменить тему": "Switch theme", "тема": "theme", "Тема": "Theme",
    "// приложение bitaps": "// bitaps app",
    "Один аккаунт — на всех устройствах. Мы определили вашу платформу автоматически и предлагаем лучший вариант установки.": "One account — on all your devices. We detected your platform automatically and suggest the best way to install.",
    "Приложение на финальной стадии —": "The app is in its final stage —", "скоро запуск": "launching soon",
    ". Уже сейчас можно пользоваться VPN по ключу из": ". You can already use the VPN with a key from",
    ". Нажмите «Уведомить» — пришлём ссылку первыми.": ". Tap «Notify me» — we'll send the link first.",
    "Ваше устройство": "Your device", "🔜 скоро · нажмите, чтобы получить уведомление": "🔜 soon · tap to get notified",
    "Все платформы": "All platforms", "Как подключиться": "How to connect",
    "Маленькая коробочка, которая втыкается в роутер и раздаёт VPN сразу на": "A small box that plugs into your router and shares the VPN with",
    ". Оставь заявку — свяжемся, подтвердим наличие и доставку.": ". Leave a request — we'll get in touch and confirm availability and delivery.",
    "Способ доставки": "Delivery method",
    "Почта России": "Russian Post", "Кол-во": "Qty",
    "Комментарий (необязательно)": "Comment (optional)",
    "Это предзаказ: B-box скоро в продаже. Оплата — после подтверждения, без предоплаты на сайте.": "This is a pre-order: B-box goes on sale soon. Payment after confirmation, no prepayment on the site.",
    "Заявка принята!": "Request received!",
    "Например, Москва": "e.g., Moscow",
    "Улица, дом, кв. / ПВЗ": "Street, building, apt. / pickup", "Удобное время, пожелания…": "Convenient time, notes…",
    "🔜 Предзаказ": "🔜 Pre-order", "/ шт · доставка по РФ": "/ each · delivery across Russia",
    "итого": "total", "Имя получателя": "Recipient name",
    "Телефон для связи и доставки": "Phone for contact & delivery", "Индекс": "Postal code", "Адрес: улица, дом, квартира": "Address: street, building, apartment",
    "Комментарий к доставке (необязательно)": "Delivery comment (optional)", "Вопросы? Напиши": "Questions? Message",
    "Менеджер свяжется, подтвердит наличие, цену и доставку.": "A manager will contact you to confirm availability, price and delivery.",
    "💬 Написать @bitapssupport": "💬 Message @bitapssupport", "Готово": "Done", "Оформить заказ ·": "Place order ·",
    "Фамилия Имя": "Full name", "ул. Ленина, д. 10, кв. 5": "123 Main St, apt. 5", "Удобное время, подъезд, домофон…": "Convenient time, entrance, intercom…",
    "Умная коробочка для роутера": "A smart box for your router", "— маленькое устройство, которое подключается к твоему роутеру и раздаёт VPN сразу на": "— a small device that connects to your router and shares the VPN with",
    ". Телевизор, телефоны, ноутбуки, приставки — всё работает через защищённое соединение, без настройки на каждом устройстве.": ". TV, phones, laptops, consoles — everything works through a secure connection, with no setup on each device.",
    "Просто работает": "Just works", "— включил в розетку и в роутер, и всё.": "— plug it into a socket and your router, that's it.",
    "Защищает все устройства": "Protects all devices", "в сети сразу, даже те, где нельзя поставить приложение.": "on the network at once, even those you can't install an app on.",
    "Без настроек": "No setup", "— не нужно ничего устанавливать на телефоны и ТВ.": "— nothing to install on phones and TVs.",
    "Тихая и компактная": "Quiet and compact", "— помещается на ладони, не шумит.": "— fits in your palm, makes no noise.",
    "Поможем с подключением, оплатой и любым вопросом по VPN.": "We'll help with setup, payment and any VPN question.",
    "Обычно отвечаем в течение дня": "We usually reply within a day", "@bitapssupport · быстрее всего": "@bitapssupport · fastest", "Почта": "Email", "Частые вопросы": "FAQ",
    "Как подключить VPN?": "How do I connect the VPN?",
    "Скачай приложение bitaps VPN (кнопка «Скачать приложение» в боте), вставь ключ из личного кабинета — и всё. Ключ выдаётся после оплаты или на пробном периоде.": "Download the bitaps VPN app (the «Download app» button in the bot), paste the key from your dashboard — done. The key is issued after payment or during the trial.",
    "На сколько устройств работает подписка?": "How many devices does the subscription cover?",
    "Зависит от выбранного лимита — от 1 до 10 устройств одновременно. Лимит можно поднять при оформлении тарифа.": "Depends on the chosen limit — 1 to 10 devices at once. You can raise the limit when selecting a plan.",
    "Не подключается / низкая скорость": "Won't connect / slow speed",
    "Попробуй другой сервер в приложении и переустанови ключ. Если не помогло — напиши нам ниже или в Telegram, подскажем сервер под твой регион.": "Try another server in the app and re-add the key. If that doesn't help — message us below or on Telegram, we'll suggest a server for your region.",
    "Как оплатить и вернуть деньги?": "How to pay and get a refund?",
    "Способы оплаты — в разделе «Оплатить» в боте. По возврату напиши в поддержку: разберёмся индивидуально.": "Payment methods are in the «Pay» section of the bot. For refunds, message support: we'll sort it out individually.",
    "Не нашёл ответ? Напиши нам": "Didn't find an answer? Message us", "Другое": "Other", "Почта для ответа": "Email for reply",
    "Telegram или телефон (необязательно)": "Telegram or phone (optional)", "Отправлено!": "Sent!", "Спасибо! Ответим в ближайшее время.": "Thank you! We'll reply shortly.",
    "💬 Продолжить в Telegram @bitapssupport": "💬 Continue on Telegram @bitapssupport", "Как к тебе обращаться": "Your name", "@ник или +7…": "@handle or +1…",
    "Опиши вопрос — чем подробнее, тем быстрее поможем": "Describe your question — the more detail, the faster we help",
    "Управление подпиской, ключом и аккаунтом": "Manage your subscription, key and account", "Вы не вошли в аккаунт.": "You're not signed in.",
    "🚪 Выйти": "🚪 Log out", "Оформить подписку": "Get a subscription", "дней": "days", "день": "day", "дня": "days",
    "Нет подписки": "No subscription", "Меняю…": "Saving…", "Готово ✓": "Done ✓", "Ошибка": "Error",
    "Не удалось скопировать — выдели и скопируй вручную": "Couldn't copy — select and copy manually",
    "Ключ доступа": "Access key", "Один ключ для приложений": "One key for the apps",
    ". Отсканируй QR в приложении или скопируй ключ — и подключайся.": ". Scan the QR in the app or copy the key — and connect.",
    "Нажми на ключ, чтобы скопировать.": "Tap the key to copy.",
    "До 10 устройств одновременно по одной подписке.": "Up to 10 devices at once on one subscription.",
    "Проверь, что ключ скопирован полностью, попробуй другой сервер или напиши в поддержку.": "Make sure the key is copied in full, try another server or message support.",
    "Обновить пароль": "Update password", "За друзей с подпиской — бонусные дни": "Bonus days for friends who subscribe",
    "Поделись ссылкой — когда друг оформит подписку, тебе начислятся бонусные дни.": "Share your link — when a friend subscribes, you get bonus days.",
    "Пригласи друзей": "Invite friends", "Копировать": "Copy", "Скопировано ✓": "Copied ✓", "Нажми, чтобы скопировать": "Tap to copy",
    "Новый пароль (минимум 6 символов)": "New password (at least 6 characters)", "E-mail для ответа": "Email for reply", "Твой вопрос": "Your question",
    "Ответим на твою почту, обычно в течение дня": "We'll reply to your email, usually within a day", "Сообщение отправлено!": "Message sent!", "Мы свяжемся с тобой по почте.": "We'll contact you by email.",
    "// мини-игра": "// mini-game", "Ловля": "Koi", "карпов": "fishing",
    "Лови карпов, набивай комбо и попади в топ-5. Золотой карп — джекпот, красный чужак — мимо (за него штраф).": "Catch koi, build combos and reach the top-5. The golden koi is the jackpot, the red intruder is a miss (penalty).",
    "Топ-3 каждый месяц получают бесплатные дни bitaps VPN 🎁": "Top-3 each month get free bitaps VPN days 🎁",
    "СЧЁТ": "SCORE", "КОМБО": "COMBO", "ВРЕМЯ": "TIME", "Готов на": "Ready to", "рыбалку": "fish?",
    "Тапай прямо по карпам, чтобы поймать. Чем мельче и быстрее — тем больше очков. Не сбивай комбо промахами!": "Tap right on the koi to catch them. Smaller and faster means more points. Don't break your combo with misses!",
    "карп": "koi", "+очки": "+points", "золотой": "golden", "чужак": "intruder", "штраф": "penalty",
    "Закинуть удочку 🎣": "Cast the rod 🎣", "Улов готов 🎣": "Catch is in 🎣", "Неплохо! Запиши результат в топ.": "Not bad! Save your score to the leaderboard.",
    "✅ Результат сохранён в топе!": "✅ Score saved to the leaderboard!", "В топ": "Submit", "Ещё раз 🔁": "Again 🔁",
    "🎣 В топ и за призами — играй в приложении или в Telegram-боте bitaps.": "🎣 To make the top and win prizes, play in the app or the bitaps Telegram bot.",
    "⚠️ Результат не засчитан — сыграй ещё раз 🎣": "⚠️ Score not counted — play again 🎣",
    "🏆 Топ-5 рыбаков": "🏆 Top-5 anglers", "лучшие уловы игроков bitaps": "best catches by bitaps players", "загружаю…": "loading…",
    "Неплохо! Запиши результат.": "Not bad! Save your score.", "пока пусто — будь первым!": "empty for now — be the first!", "нормальное имя, пожалуйста 🙂": "a normal name, please 🙂",
    "Отправляем…": "Sending…", "Реферальная программа — в нашем Telegram-боте": "Referral program — in our Telegram bot", "Открыть бота": "Open the bot",
    "Выдели и скопируй вручную": "Select and copy manually", "Не удалось скопировать — выдели и скопируй вручную": "Couldn't copy — select and copy manually",
    "Новый пароль": "New password",
    "🎁 Призы топ-3 — каждый месяц": "🎁 Top-3 prizes — every month", "🥇 1 место": "🥇 1st place", "30 дней bitaps VPN": "30 days bitaps VPN",
    "🥈 2 место": "🥈 2nd place", "14 дней": "14 days", "🥉 3 место": "🥉 3rd place", "7 дней": "7 days",
    "Топ и призы обновляются в конце месяца": "Leaderboard and prizes reset at month-end", "🎣 Играть в Telegram-боте →": "🎣 Play in the Telegram bot →",
    "Твоё имя для топа": "Your name for the leaderboard", "фух, устал! 😮‍💨": "phew, tired! 😮‍💨",
    // ── динамические строки JS (ошибки, статусы, кнопки, инструкции) ──
    "Отправляю…": "Sending…", "Обновляю…": "Updating…", "Что-то пошло не так": "Something went wrong",
    "Сеть недоступна, попробуй ещё раз": "Network unavailable, please try again", "Сеть недоступна, попробуй ещё раз.": "Network unavailable, please try again.",
    "Неправильный формат почты": "Invalid email format", "Неправильный формат почты.": "Invalid email format.",
    "Не удалось открыть оплату.": "Couldn't open payment.", "Выбери тариф подписки": "Choose a subscription plan", "VIP карта доступа bitaps VPN": "bitaps VPN VIP access card", "карта мира": "world map",
    "Напиши, что случилось": "Tell us what happened", "Оставь почту или Telegram/телефон для ответа": "Leave an email or Telegram/phone for a reply",
    "Укажи имя получателя": "Enter the recipient's name",
    "Укажи телефон для связи": "Enter a contact phone", "Укажи адрес: улица, дом, квартира": "Enter address: street, building, apartment",
    "Активна": "Active", "Не активна": "Inactive", "Пробный период": "Trial period", "Продлить подписку": "Renew subscription",
    "Доброй ночи,": "Good night,", "Доброе утро,": "Good morning,", "Добрый день,": "Good afternoon,", "Добрый вечер,": "Good evening,",
    "Пароль обновлён ✓": "Password updated ✓", "Заявка из личного кабинета bitaps": "Request from the bitaps dashboard",
    "Твоя панель управления bitaps VPN": "Your bitaps VPN control panel", "оформи тариф, чтобы получить ключ": "choose a plan to get your key",
    "Впиши почту для ответа": "Enter your email for a reply", "1 год": "1 year", "2 года": "2 years", "QR ключа": "Key QR",
    "Промокоды скоро 🎫 — пока оформи по обычной цене.": "Promo codes coming soon 🎫 — order at the regular price for now.",
    "Впиши почту — на неё придёт ключ.": "Enter your email — the key will be sent there.",
    "Не удалось создать счёт, попробуй позже.": "Couldn't create the invoice, try again later.", "Введи промокод.": "Enter a promo code.",
    "Вхожу…": "Signing in…", "С возвращением!": "Welcome back!", "Вы вошли по ключу из бота.": "You're signed in with the key from the bot.",
    "✅ Оплачено! Ключ отправлен на почту и доступен в Личном кабинете (вход по ключу).": "✅ Paid! The key was sent to your email and is available in your Dashboard (log in with the key).",
    "Ещё разок — и будет круче!": "One more — it'll be even better!", "🔥 Это уровень сенсея! Закрепи в топе.": "🔥 Sensei level! Lock it into the leaderboard.",
    "💪 Сильный улов! Давай в топ.": "💪 Strong catch! Get on the leaderboard.",
    "Скачать для macOS": "Download for macOS", "Скачать для Windows": "Download for Windows",
    "Скачать для Android": "Download for Android", "Скачать для Linux": "Download for Linux",
    "Установить (Happ)": "Install (Happ)",
    "Открыть в App Store": "Open in App Store", "Открыть в Google Play": "Open in Google Play",
    "Скачать .deb": "Download .deb", "пакет .deb": ".deb package", "установщик .exe": ".exe installer",
    "Нажмите «Подключить». Готово!": "Tap «Connect». Done!",
    "Нажмите «Подключить» и разрешите добавить VPN-конфигурацию. Готово!": "Tap «Connect» and allow adding the VPN configuration. Done!",
    "Нажмите «Подключить» и разрешите запрос VPN. Готово!": "Tap «Connect» and allow the VPN request. Done!",
    "Нажмите «Подключить» и разрешите VPN-конфигурацию. Готово!": "Tap «Connect» and allow the VPN configuration. Done!",
    "Установите <b>Bitaps VPN</b> из <b>App Store</b> (кнопка выше).": "Install <b>Bitaps VPN</b> from the <b>App Store</b> (button above).",
    "Установите <b>Bitaps VPN</b> из <b>Google Play</b> (кнопка выше).": "Install <b>Bitaps VPN</b> from <b>Google Play</b> (button above).",
    "Установите <b>Bitaps VPN</b> (App Store или <b>.dmg</b>, кнопка выше).": "Install <b>Bitaps VPN</b> (App Store or <b>.dmg</b>, button above).",
    "Скачайте установщик <b>.exe</b> (кнопка выше) и установите приложение.": "Download the <b>.exe</b> installer (button above) and install the app.",
    "В приложении: <b>Импорт из буфера</b> → вставьте ключ.": "In the app: <b>Import from clipboard</b> → paste the key.",
    "В приложении: «+» → <b>Импорт из буфера обмена</b> → вставьте ключ.": "In the app: «+» → <b>Import from clipboard</b> → paste the key.",
    "В приложении: <b>Импорт из буфера</b> (или по ссылке-подписке) → вставьте ключ.": "In the app: <b>Import from clipboard</b> (or via subscription link) → paste the key.",
    "Открыть приложение → «+» → <b>Импорт из буфера обмена</b> → вставьте ключ.": "Open the app → «+» → <b>Import from clipboard</b> → paste the key.",
    "Запустите приложение → <b>Импорт из буфера / по ссылке</b> → вставьте ключ.": "Launch the app → <b>Import from clipboard / via link</b> → paste the key.",
    "Скачайте пакет <b>.deb</b> (кнопка выше) и установите: <code>sudo dpkg -i bitaps-vpn.deb</code>.": "Download the <b>.deb</b> package (button above) and install: <code>sudo dpkg -i bitaps-vpn.deb</code>.",
    // валидация телефона/почты/паролей
    "Укажи телефон в правильном формате или Telegram (@ник)": "Enter a valid phone number or Telegram (@handle)",
    "Неправильный формат телефона или Telegram": "Invalid phone or Telegram format",
    "Укажи город": "Enter your city", "Пароль слишком короткий — минимум 6 символов.": "Password too short — at least 6 characters.",
    "Пароли не совпадают.": "Passwords don't match.", "Секунду…": "One sec…",
    // hero-терминал (script.js, динамика)
    "поиск ближайшего узла": "finding nearest node", "узел: Москва": "node: Moscow", "рукопожатие": "handshake",
    "ключи обменяны · AES-256-GCM": "keys exchanged · AES-256-GCM", "активен": "active",
    "туннель защищён. ты невидим.": "tunnel secured. you're invisible.",
    // pay.html — подпись под способами оплаты
    "Оплата по СБП (карта/кошелёк) или криптой проходит на сайте. После оплаты ключ автоматически придёт на указанную почту. Вопросы —": "SBP (card/wallet) or crypto payment is made on the site. After payment the key is automatically sent to your email. Questions —",
    // app.html — приложение скоро / Happ
    "// приложение": "// app", "Подключи": "Connect",
    "Наше приложение скоро. А пока подключайся через Happ — это рабочий клиент, наш ключ вставляется в него за минуту.": "Our app is coming soon. For now connect via Happ — a working client; our key imports into it in a minute.",
    "Своё приложение": "Our app", "bitaps VPN — скоро": "bitaps VPN — soon",
    ". Сейчас пользуйся VPN через": ". For now use the VPN via",
    ": установи его (кнопка ниже) и вставь ключ из": ": install it (button below) and paste the key from",
    "✅ рабочий клиент Happ · наш ключ подходит сразу": "✅ working client Happ · our key works right away",
    "или из письма после оплаты на сайте.": "or from the email after paying on the site.",
    "🔜 скоро в продаже · оставь заявку": "🔜 coming soon · leave a request",
    "🔜 Скоро в продаже · предзаказ": "🔜 Coming soon · preorder",
    ". Это предзаказ: оставь заявку — сообщим, как только B-box поступит, и оформим доставку.": ". This is a preorder — leave a request and we'll notify you when B-box is available and arrange delivery.",
    // ── добор пропусков (найдено репортером __i18nMissing на live) ──
    "3 дня бесплатно · без скрытых платежей · отмена в один клик": "3 days free · no hidden fees · cancel in one click",
    "Демо для наглядности": "Demo for illustration",
    "// отзывы": "// reviews",
    "Что говорят": "What people say",
    "о bitaps": "about bitaps",
    "Оставь свой отзыв — он появится здесь сразу.": "Leave your review — it'll appear here right away.",
    "Пока нет отзывов. Оставь первый — он появится здесь сразу.": "No reviews yet. Be the first — it'll appear here right away.",
    "Да. Архитектура построена так, что серверы физически не пишут историю подключений — это заложено by design. Нечего хранить — значит, нечего у нас запросить и нечего слить.": "Yes. The architecture is built so that servers physically don't record connection history — it's by design. Nothing to store means nothing to request from us and nothing to leak.",
    "«Ключ доступа» (Access key)": "«Access key»",
    // ── этап САЙТ-3: терминал, man-страница, changelog, реф-QR ──
    ">_ терминал": ">_ terminal",
    "Открыть терминал (~)": "Open terminal (~)",
    "Открыть терминал": "Open terminal",
    "Справка": "Manual", "Что нового": "What's new", "man bitaps": "man bitaps",
    "Поддержка": "Support", "Помощь и FAQ": "Help & FAQ", "Оферта": "Terms", "Политика": "Privacy",
    "СПРАВОЧНОЕ РУКОВОДСТВО bitaps": "bitaps MANUAL",
    "НАЗВАНИЕ": "NAME", "ОБЗОР": "SYNOPSIS", "ОПИСАНИЕ": "DESCRIPTION",
    "ТАРИФЫ": "PRICING", "УСТРОЙСТВА": "DEVICES", "ТЕМЫ": "THEMES", "СМ. ТАКЖЕ": "SEE ALSO", "АВТОР": "AUTHOR",
    "bitaps — приватность как гигиена, а не как паранойя.": "bitaps — privacy as hygiene, not paranoia.",
    "Что нового в bitaps": "What's new in bitaps",
    "Свежие обновления приложения, бота и сайта.": "Latest updates to the app, bot and site.",
    "← на главную": "← home", "← домой": "← home",
    "QR реферальной ссылки": "Referral link QR",
    "Наведи камеру телефона — откроется твоя реферальная ссылка.": "Point a phone camera — your referral link opens.",
    "Ничего не найдено": "Nothing found",
    "Такой страницы нет. Но раз уж ты здесь — попробуй набрать команду.": "No such page. But since you're here — try typing a command.",
    "404 · страница не найдена": "404 · page not found",
    "Такой страницы нет": "No such page",
    "Пакет ушёл в никуда. Но раз уж ты здесь — попробуй набрать команду. Начни с": "The packet went nowhere. But since you're here — try typing a command. Start with",
    "или напиши в": "or message",
    // ── страница автонастройки Happ (happ.html) ──
    // Она была переведена всего на две строки из двадцати: в EN менялась только кнопка
    // «Скачать», всё остальное оставалось русским.
    "Авто-настройка Happ — bitaps VPN": "Happ auto-setup — bitaps VPN",
    "Настраиваем Happ…": "Setting up Happ…",
    "Открываем приложение и передаём твой ключ.": "Opening the app and handing over your key.",
    "Happ не найден": "Happ not found",
    "Похоже, приложение не установлено. Скачай": "Looks like the app isn't installed. Get",
    "У меня есть Happ — открыть его": "I have Happ — open it",
    "→ он сам предложит добавить конфиг из буфера": "→ it will offer to add the config from the clipboard",
    "Или вставь ключ вручную кнопкой «+»": "Or add the key manually with the «+» button",
    "📋 Скопировать ключ ещё раз": "📋 Copy the key again",
    "Ключ уже": "The key is", "скопирован": "copied", "в буфер обмена": "to the clipboard",
    "Нет ключа в ссылке": "No key in the link",
    "Открой эту страницу кнопкой «⚡ Авто-настроить Happ» из бота — она подставит твой ключ.":
      "Open this page with the «⚡ Auto-setup Happ» button in the bot — it fills in your key.",
    "Открой": "Open", "наше приложение bitaps": "our bitaps app",
    "Скачать приложение bitaps": "Download the bitaps app",
    "— там ключ подставится сам, ничего настраивать не нужно.":
      "— the key is filled in for you there, nothing to set up.",
    // ── дуэль в мини-игре (game.html) ──
    "⚔️ Дуэль": "⚔️ Duel", "⚔️ СОПЕРНИК": "⚔️ OPPONENT",
    "Отправь другу ссылку и жди — начнём одновременно.": "Send a friend the link and wait — we start together.",
    "подключается соперник…": "opponent is joining…",
    "Ждём, пока соперник доиграет…": "Waiting for the opponent to finish…",
    "Дуэль окончена": "Duel over",
    "🪙 Обоим начислено по 25 токенов!": "🪙 25 tokens credited to both!",
    "В меню бота 🤖": "To the bot menu 🤖",
    // ── прочее ──
    "Перейти к содержимому": "Skip to content",
    "₿ Цены в:": "₿ Prices in:", "₽ рубли": "₽ rubles", "переключить в сатоши": "switch to satoshi"
  };

  function detect() {
    try { var s = localStorage.getItem(KEY); if (s === 'en' || s === 'ru') return s; } catch (e) {}
    // авто-детект языка Telegram Mini App: не-русский юзер → EN (запоминается по первому клику)
    try {
      var tg = window.Telegram && window.Telegram.WebApp;
      var lc = tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.language_code;
      if (lc && lc.slice(0, 2).toLowerCase() !== 'ru') return 'en';
    } catch (e) {}
    return 'ru'; // по умолчанию русский; английский — по языку Telegram или по кнопке
  }
  var cur = detect();
  var obs = null;

  function textNodes(root) {
    var out = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false), n;
    while ((n = w.nextNode())) {
      var p = n.parentNode;
      if (p && !/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName)) out.push(n);
    }
    return out;
  }
  // репортер пропусков: какие русские строки остались непереведёнными в EN
  var MISS = {};
  function tr(node, l) {
    var raw = node.__ru != null ? node.__ru : node.textContent;
    var trimmed = raw.trim(); if (!trimmed) return;
    var col = trimmed.replace(/\s+/g, ' ');
    if (node.__ru == null) node.__ru = raw;
    if (l === 'en') {
      // прямой перевод по data-en на родителе (минуя словарь) — для элемента с единственным
      // текст-узлом и без HTML-разметки в переводе (иначе отрисовался бы литеральный тег)
      var pe = node.parentNode;
      if (pe && pe.nodeType === 1 && pe.childNodes.length === 1 && pe.getAttribute) {
        var den = pe.getAttribute('data-en');
        if (den != null && den.indexOf('<') < 0) {
          var vd = raw.replace(trimmed, den);
          if (node.textContent !== vd) node.textContent = vd;
          return;
        }
      }
      if (DICT[col]) { var v = raw.replace(trimmed, DICT[col]); if (node.textContent !== v) node.textContent = v; return; }
      // подстрочный перевод динамики (даты/имена/суммы)
      var out = trimmed, hit = false;
      for (var i = 0; i < SUB.length; i++) { if (out.indexOf(SUB[i][0]) >= 0) { out = out.split(SUB[i][0]).join(SUB[i][1]); hit = true; } }
      if (hit) { var w = raw.replace(trimmed, out); if (node.textContent !== w) node.textContent = w; return; }
      // не нашли перевод и в тексте есть кириллица → это пропуск, фиксируем
      if (/[а-яё]/i.test(col)) MISS[col] = (MISS[col] || 0) + 1;
    }
    if (node.textContent !== node.__ru) node.textContent = node.__ru;
  }
  var SUB = [
    ['подписка не активна', 'subscription inactive'], ['активна до', 'active until'], ['не активна', 'inactive'],
    ['тариф bitaps VPN', 'plan bitaps VPN'], ['Тема: тёмная', 'Theme: dark'], ['Тема: светлая', 'Theme: light'],
    ['Ошибка: ', 'Error: '], ['Вы выбрали:', 'You selected:'], ['Похоже, у вас', 'Looks like you have'],
    ['Как установить на', 'How to install on'], ['После оплаты ключ придёт на', 'after payment the key will be sent to'],
    ['Оплати ', 'Pay '], ['в CryptoBot.', 'in CryptoBot.'], ['осталось', 'left'], ['по СБП', 'via SBP'],
    // цены собираются в рантайме («4 790 ₽ за год»), поэтому переводим подстрокой, а не ключом
    [' ₽ за год', ' ₽ per year'], [' ₽ за мес', ' ₽ per month'], [' ₽/мес', ' ₽/mo'],
    // склонения «устройство» для динамики кабинета (порядок важен: 'устройств' — подстрока
    // остальных, потому идёт последним, иначе порежет 'устройство'/'устройства')
    [' устройства', ' devices'], [' устройство', ' device'], [' устройств', ' devices'],
  ];
  function trAttr(l) {
    ['placeholder', 'title', 'aria-label', 'alt'].forEach(function (a) {
      document.querySelectorAll('[' + a + ']').forEach(function (e) {
        var st = '__ru_' + a, orig = e[st] != null ? e[st] : e.getAttribute(a);
        if (e[st] == null) e[st] = orig;
        var col = (orig || '').trim().replace(/\s+/g, ' ');
        if (l === 'en' && DICT[col]) e.setAttribute(a, DICT[col]);
        else if (e[st] != null) e.setAttribute(a, e[st]);
      });
    });
  }
  function apply(l) {
    if (obs) obs.disconnect();
    if (l === 'en') MISS = {};
    textNodes(document.body).forEach(function (n) { tr(n, l); });
    trAttr(l);
    // перевод <title> вкладки (walk ходит только по body, поэтому title отдельно; RU-оригинал сохраняем для отката)
    if (document.__ruTitle == null) document.__ruTitle = document.title;
    var _tt = document.__ruTitle.trim();
    document.title = (l === 'en' && DICT[_tt]) ? DICT[_tt] : document.__ruTitle;
    document.documentElement.lang = l;
    var b = document.getElementById('langToggle'); if (b) b.textContent = l === 'en' ? 'RU' : 'EN';
    if (obs) obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    if (l === 'en') reportMiss();
  }
  // выводит непереведённые строки — видно в консоли на dev/preview, чтобы дыры не уходили в прод молча
  function reportMiss() {
    var keys = Object.keys(MISS);
    window.__i18nMissing = keys;
    if (keys.length && /localhost|127\.0\.0\.1|^file:|\.local$|preview/.test(location.origin + location.hostname)) {
      console.warn('[i18n] нет перевода EN для ' + keys.length + ' строк:', keys);
    }
  }
  function setLang(l) { cur = l; try { localStorage.setItem(KEY, l); } catch (e) {} apply(l); }

  // Сбросить кэш __ru на узлах внутри root и перевести заново. Нужен после того, как
  // JS перезаписал текст (кабинет, тосты, статусы кнопок): движок кэширует исходный RU
  // при первом проходе, и в EN динамика иначе откатывалась бы к плейсхолдерам («—»).
  // В RU просто чистит кэш — безопасно (перекэшируется при следующем apply).
  window.__i18nRefresh = function (root) {
    try {
      root = root || document.body;
      if (obs) obs.disconnect();
      var nodes = textNodes(root);
      // сбрасываем кэш __ru ТОЛЬКО у узлов, где сейчас русский текст (JS вписал новое) — их надо
      // перекэшировать и перевести. Уже-переведённые статические узлы (латиница) НЕ трогаем, иначе
      // их __ru затрётся английским и при обратном EN→RU русский оригинал потеряется.
      nodes.forEach(function (n) { if (/[а-яё]/i.test(n.textContent || '')) n.__ru = null; });
      if (cur === 'en') { nodes.forEach(function (n) { tr(n, 'en'); }); trAttr('en'); }
      if (obs) obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    } catch (e) {}
  };

  function mkButton() {
    if (document.getElementById('langToggle')) return;
    // Кнопка языка нужна на ВСЕХ страницах: кто зашёл напрямую на pay/account/app/box/
    // game/support/confirmed/404 тоже должен мочь переключить язык. Язык глобальный
    // (localStorage) — apply() на init применяет его на каждой странице при загрузке.
    var b = document.createElement('button');
    b.id = 'langToggle'; b.type = 'button'; b.textContent = cur === 'en' ? 'RU' : 'EN';
    b.setAttribute('aria-label', 'Сменить язык / Switch language');
    b.addEventListener('click', function () { setLang(cur === 'en' ? 'ru' : 'en'); });
    // ЕДИНЫЙ бренд-оранжевый тумблер-пилюля — идентичный на всех страницах (цвет захардкожен,
    // чтобы не зависеть от акцента страницы: напр. на золотой vip-card кнопка всё равно оранжевая)
    var base = 'cursor:pointer;border:1.5px solid #ff7a1a;background:#ff7a1a;color:#0b0e14;border-radius:999px;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-weight:800;font-size:12.5px;letter-spacing:.5px;line-height:1;height:38px;min-width:46px;padding:0 14px;display:inline-grid;place-items:center;box-shadow:0 4px 14px rgba(255,122,26,.35);';
    var theme = document.getElementById('themeToggle') || document.getElementById('btThemeBtn'); // btThemeBtn — тумблер общей шапки сабстраниц (partials/header.html)
    if (theme) {
      var tcs = getComputedStyle(theme);
      if (tcs.position === 'fixed') {
        // тема зафиксирована (углом) — ставим язык ВПЛОТНУЮ СЛЕВА от неё, не перекрывая.
        var tr = parseInt(tcs.right, 10); if (isNaN(tr)) tr = 12;
        var tw = Math.round(theme.getBoundingClientRect().width) || 36;
        var tt = parseInt(tcs.top, 10); if (isNaN(tt)) tt = 10;
        var tz = parseInt(tcs.zIndex, 10); if (isNaN(tz)) tz = 50;
        b.style.cssText = 'position:fixed;top:' + tt + 'px;right:' + (tr + tw + 10) + 'px;z-index:' + (tz + 1) + ';height:' + (theme.getBoundingClientRect().height || 36) + 'px;' + base;
        document.body.appendChild(b);
      } else if (theme.parentNode) {
        // тема в потоке (в навбаре) — ставим язык рядом, слева от неё.
        b.style.cssText = base;
        theme.parentNode.insertBefore(b, theme);
      }
    } else {
      b.style.cssText = 'position:fixed;top:12px;right:12px;z-index:9999;' + base;
      document.body.appendChild(b);
    }
  }

  function init() {
    mkButton();
    obs = new MutationObserver(function (muts) {
      if (cur !== 'en') return;
      var nodes = [];
      muts.forEach(function (m) {
        if (m.type === 'characterData') { if (m.target.nodeType === 3) nodes.push(m.target); }
        else m.addedNodes && m.addedNodes.forEach(function (nn) {
          if (nn.nodeType === 3) nodes.push(nn);
          else if (nn.nodeType === 1) textNodes(nn).forEach(function (x) { nodes.push(x); });
        });
      });
      if (!nodes.length) return;
      obs.disconnect();
      nodes.forEach(function (n) { tr(n, 'en'); });
      trAttr('en');
      obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    });
    apply(cur);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
