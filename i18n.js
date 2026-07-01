/* bitaps VPN — переключатель языка RU/EN (один общий файл для всех страниц).
   Движок: автоопределение по языку браузера, кнопка RU/EN, перевод текстовых
   узлов и атрибутов по словарю (ключ — русский текст со схлопнутыми пробелами),
   наблюдатель за динамически добавленным содержимым. Юр-доки не трогаем. */
(function () {
  var KEY = 'bitaps-lang';
  // ── словарь: русский (схлопнутые пробелы) → english ──
  var DICT = {
    // nav / hero
    "Возможности": "Features", "Как работает": "How it works", "Цены": "Pricing",
    "Приложение": "App", "Войти": "Log in", "Скачать": "Download",
    "трафик шифруется прямо сейчас": "traffic is being encrypted right now",
    "Интернет,": "The internet", "который": "that", "принадлежит тебе": "belongs to you",
    "bitaps VPN прячет твой трафик за шифрованием военного класса и гонит его на скорости света через быстрые серверы. Без логов. Без следов. Без тормозов.":
      "bitaps VPN hides your traffic behind military-grade encryption and pushes it at light speed through fast servers. No logs. No traces. No slowdowns.",
    "Скачать бесплатно": "Download free", "▶ Смотреть скорость": "▶ Watch the speed",
    "из 5 · реальные отзывы · 3 дня бесплатно": "out of 5 · real reviews · 3 days free",
    "Твой реальный IP": "Your real IP", "178.62.* спрятан": "178.62.* hidden", "bitaps выдаёт": "bitaps shows",
    "Аудит безопасности пройден независимой лабораторией": "Security audit passed by an independent lab",
    "Юрисдикция вне «14 глаз» · No-Logs политика": "Jurisdiction outside the «14 eyes» · No-Logs policy",
    "Оплата картой и криптой · пробный период 3 дня бесплатно": "Pay by card or crypto · 3-day free trial",
    // features
    "// почему bitaps": "// why bitaps", "Не просто VPN.": "Not just a VPN.", "Личная крепость.": "Your private fortress.",
    "Скорость без потерь": "Speed with no loss",
    "Протокол VLESS + Reality — современное шифрование и стабильное соединение. Стримь 4K и качай торренты — VPN не почувствуешь.":
      "VLESS + Reality protocol — modern encryption and a stable connection. Stream 4K and download torrents — you won't even feel the VPN.",
    "Шифрование AES-256": "AES-256 encryption",
    "Тот же стандарт, что у банков и спецслужб. Взломать твой трафик займёт больше времени, чем существует Вселенная.":
      "The same standard banks and intelligence agencies use. Cracking your traffic would take longer than the universe has existed.",
    "Политика No-Logs": "No-Logs policy",
    "Мы физически не храним то, что ты делаешь. Нечего хранить — нечего отдавать. Подтверждено независимым аудитом.":
      "We physically don't store what you do. Nothing to keep — nothing to hand over. Confirmed by an independent audit.",
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
    // pricing
    "// тарифы": "// plans", "VIP-доступ": "VIP access", "без подвоха": "no catch",
    "Чем длиннее период — тем дешевле месяц. Цена указана за выбранное число устройств, без скрытых платежей. Первые 3 дня — бесплатно.":
      "The longer the period, the cheaper the month. Price shown for the selected number of devices, no hidden fees. First 3 days free.",
    "📱 Устройств:": "📱 Devices:", "+50 ₽/мес за каждое доп. устройство · до 10": "+50 ₽/mo per extra device · up to 10",
    "1 месяц": "1 month", "/мес": "/mo", "Итого": "Total", "за 1 месяц": "for 1 month",
    "Все локации": "All locations", "Безлимит трафика": "Unlimited traffic", "Поддержка 24/7": "24/7 support", "Выбрать": "Choose",
    "3 месяца": "3 months", "за 3 месяца": "for 3 months", "Всё из «1 месяца»": "Everything in «1 month»",
    "Дешевле помесячно": "Cheaper per month", "YouTube без рекламы": "YouTube without ads",
    "6 месяцев": "6 months", "за 6 месяцев": "for 6 months", "Всё из «3 месяцев»": "Everything in «3 months»",
    "Выгодный месяц": "Better monthly rate", "Приоритетная поддержка": "Priority support", "Без логов": "No logs",
    "★ выбор большинства": "★ most popular", "12 месяцев": "12 months", "за 12 месяцев": "for 12 months",
    "Всё из «6 месяцев»": "Everything in «6 months»", "Максимальная выгода": "Maximum value",
    "Выделенный IP-адрес": "Dedicated IP address", "Лучшая цена месяца": "Best monthly price",
    "Оформление и оплата — в Telegram-боте · Подписка активируется сразу · 3 дня бесплатно · Без скрытых платежей":
      "Checkout & payment in the Telegram bot · Subscription activates instantly · 3 days free · No hidden fees",
    // reviews
    "// живые люди": "// real people", "Проверено": "Proven", "в деле": "in action",
    "Это не реклама, а живые отзывы. Оставь и свой — появится сразу.": "Not ads — real reviews. Leave yours, it shows up instantly.",
    "Отправить": "Send", "часа назад": "hours ago", "вчера": "yesterday", "дня назад": "days ago", "неделю назад": "a week ago",
    "Перешёл с дорогого зарубежного VPN. bitaps реально быстрее, а платил в три раза меньше. Netflix US работает без единого затыка.":
      "Switched from a pricey foreign VPN. bitaps is genuinely faster and I pay three times less. Netflix US works without a single hiccup.",
    "Поставила маме на телефон за минуту, без меня разобралась. Одна кнопка — и всё. Вот так и должно быть сделано.":
      "Set it up on my mom's phone in a minute, she figured it out without me. One button and done. This is how it should be.",
    "Работаю удалённо из разных стран. Kill switch спасал не раз — ни одной утечки за год. Поддержка отвечает ночью за пару минут.":
      "I work remotely from different countries. The kill switch saved me more than once — not a single leak in a year. Support replies at night within minutes.",
    "Поставил на роутер — теперь весь дом под защитой. Скорость как была, реально не просел.":
      "Put it on my router — now the whole house is protected. Speed unchanged, really no drop.",
    // faq
    "// вопросы": "// questions", "Коротко о": "Briefly on", "главном": "what matters",
    "Вы правда не храните логи?": "Do you really keep no logs?",
    "Да. Архитектура построена так, что серверы физически не пишут историю подключений. Это подтвердил независимый аудит. Нечего хранить — значит, нечего у нас запросить и нечего слить.":
      "Yes. The architecture is built so servers physically don't record connection history. An independent audit confirmed it. Nothing stored means nothing to request from us and nothing to leak.",
    "VPN сильно замедлит интернет?": "Will the VPN slow my internet a lot?",
    "На протоколе VLESS + Reality потеря скорости почти незаметна, а часто bitaps даже ускоряет: умная маршрутизация выбирает самый быстрый маршрут и сглаживает «затыки» провайдера. На замере выше — реальная картина.":
      "On the VLESS + Reality protocol the speed loss is barely noticeable, and bitaps often even speeds things up: smart routing picks the fastest path and smooths out ISP «hiccups». The test above shows the real picture.",
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
    "Напишите нам — живая поддержка на связи круглосуточно и отвечает в среднем за": "Message us — live support is online 24/7 and replies on average in",
    "2 минуты": "2 minutes", "Написать нам": "Message us", "или в Telegram": "or on Telegram", "· на почту": "· by email",
    "● защищено": "● protected", "Подключено": "Connected", "12 ms · быстрый узел": "12 ms · fast node",
    // app section
    "// своё приложение": "// our own app", "Приложение, которым": "An app that's", "приятно пользоваться": "a pleasure to use",
    "Мы пишем его сами — одна большая кнопка, чистый дизайн, мгновенное подключение, один аккаунт на всех платформах. Оно на финальной стадии — совсем скоро. А пока подключайся через":
      "We build it ourselves — one big button, clean design, instant connection, one account across all platforms. It's in the final stage — coming very soon. Meanwhile connect via",
    ": наш ключ работает в нём сразу.": ": our key works in it right away.",
    "под заказ · оставь заявку — менеджер свяжется": "made to order · leave a request — manager will contact you",
    // pay page — строка согласия (разбита ссылками на текст-узлы)
    "Оплачивая, ты принимаешь": "By paying, you accept", "оферту": "the offer", "политику конфиденциальности": "the privacy policy", "и": "and",
    // app page (страница загрузки) — шапка, разбитая тегами на узлы
    "Наше приложение готово — скачай для своей системы и подключись за минуту. На iPhone пока через Happ.": "Our app is ready — download it for your system and connect in a minute. On iPhone via Happ for now.",
    "Приложение": "The app", "bitaps VPN готово": "bitaps VPN is ready",
    "для Windows, macOS, Linux и Android — скачай кнопкой ниже и вставь ключ из": "for Windows, macOS, Linux and Android — download with the button below and paste the key from",
    "Telegram-бота": "the Telegram bot",
    "или из письма после оплаты. На iPhone/iPad пока подключайся через": "or from the email after payment. On iPhone/iPad connect via",
    "✅ ключ из Telegram-бота вставляется за минуту": "✅ the key from the Telegram bot pastes in under a minute",
    // auth-модалка (index.html) — вход/пароль/ключ/восстановление
    "Пароль": "Password", "Повторите пароль": "Repeat password", "Войти": "Log in", "Забыл пароль?": "Forgot password?",
    "Войти через Google": "Log in with Google", "или войдите через Telegram": "or log in with Telegram",
    "или по ключу из бота (надёжно на телефоне)": "or with a key from the bot (reliable on mobile)",
    "🤖 Открыть бота за ключом": "🤖 Open the bot to get a key", "Войти по ключу": "Log in with key",
    "Не приходит «Код входа»? Восстановить по почте →": "No «Login code»? Recover it by email →",
    "вставь ключ vless://… из бота": "paste the vless://… key from the bot",
    // pay.html — экран успеха оплаты
    "Счёт создан": "Invoice created", "Открываем оплату…": "Opening payment…", "Открыть оплату": "Open payment",
    "⏳ Ждём подтверждение оплаты… ключ появится здесь автоматически (можно не закрывать страницу).": "⏳ Waiting for payment confirmation… the key will appear here automatically (you can keep the page open).",
    "🔑 Готово! Твой ключ": "🔑 Done! Your key",
    "Скопируй ключ или открой в приложении Happ. Он также придёт на почту и доступен в Личном кабинете.": "Copy the key or open it in the Happ app. It will also arrive by email and is available in your Dashboard.",
    "Скопировать ключ": "Copy key", "⚙️ Открыть в Happ": "⚙️ Open in Happ", "🔐 Код входа в кабинет": "🔐 Login code for the dashboard",
    // confirmed.html — лендинг подтверждения почты
    "Почта подтверждена!": "Email confirmed!", "Спасибо — ваш аккаунт": "Thank you — your account",
    "активирован. Теперь можно пользоваться сайтом.": "is activated. You can now use the site.", "Перейти на сайт →": "Go to the site →",
    "Твой логин в Личный кабинет и приложение (по нему входишь вместо ключа). Сохрани — не вводи в VPN-клиенты и никому не показывай.": "Your login for the Dashboard and app (use it instead of the key). Save it — don't enter it into VPN clients and don't share it.",
    "Скопировать код входа": "Copy login code",
    // account.html — кабинет: код входа, разделы, FAQ
    "⚙️ Автонастройка": "⚙️ Auto-setup", "📲 Скачать приложение": "📲 Download app", "Код входа": "Login code",
    "Для входа в приложение и кабинет. В отличие от ключа доступа —": "For logging into the app and dashboard. Unlike the access key —",
    "не вводи его в VPN-клиенты": "don't enter it into VPN clients", "и никому не показывай.": "and don't show it to anyone.",
    "🔁 Сменить код": "🔁 Change code", "VPN для всего дома сразу": "VPN for the whole home at once",
    "Поддержка": "Support", "Ответим на почту, обычно за день": "We reply by email, usually within a day",
    "Друзья": "Friends", "Приглашай — получай бонусные дни": "Invite — get bonus days", "Вопросы": "Questions",
    "Сколько устройств можно подключить?": "How many devices can I connect?",
    "По умолчанию 1 устройство. Нужно больше — добавь в боте дополнительные (+50 ₽/мес за каждое).": "1 device by default. Need more — add extra ones in the bot (+50 ₽/mo each).",
    "Вы ведёте логи?": "Do you keep logs?", "Нет. Мы не храним историю и трафик — приватность по умолчанию.": "No. We don't store history or traffic — privacy by default.",
    "Как продлить подписку?": "How do I renew?", "Кнопка «Продлить» выше → оплата в Telegram, срок продлится автоматически.": "The «Renew» button above → pay in Telegram, the term extends automatically.",
    "VPN не подключается?": "VPN won't connect?",
    "Загрузите в": "Get it on", "Доступно в": "Available on", "Скоро в": "Coming to", "А для компьютера —": "And for desktop —",
    // footer
    "Приватность — это не паранойя. Это гигиена.": "Privacy isn't paranoia. It's hygiene.",
    "Продукт": "Product", "Серверы": "Servers", "Платформы": "Platforms", "Компания": "Company",
    "Поддержка": "Support", "Оферта": "Terms", "Политика": "Privacy",
    "© 2026 bitaps VPN. Сделано для тех, кому есть что прятать — то есть для всех.":
      "© 2026 bitaps VPN. Made for those with something to hide — that is, everyone.",
    // b-box modal
    "VPN для всего дома — в одной коробочке": "VPN for the whole home — in one box",
    "Маленькое устройство, которое втыкается в роутер и раздаёт VPN сразу на": "A small device that plugs into your router and shares the VPN with",
    "весь дом": "the whole home",
    ": телефоны, ноуты, ТВ, приставки, умные колонки — без настройки на каждом устройстве.": ": phones, laptops, TVs, consoles, smart speakers — no setup on each device.",
    "Подключил один раз — работает само": "Set up once — runs by itself",
    "Защищает даже гаджеты без приложений (ТВ, консоли, умный дом)": "Protects even app-less gadgets (TVs, consoles, smart home)",
    "Шифрует весь трафик на лету": "Encrypts all traffic on the fly",
    "Тихая и компактная — помещается на ладони": "Quiet and compact — fits in your palm",
    "Имя": "Name", "Telegram или телефон": "Telegram or phone", "Город / адрес доставки": "City / delivery address",
    "Количество": "Quantity", "Оформить заказ B-box": "Place B-box order",
    "Заказ принят!": "Order received!", "Мы свяжемся с вами, чтобы подтвердить доставку B-box.": "We'll contact you to confirm B-box delivery.",
    "Закрыть": "Close",
    // support modal
    "Напишите нам": "Message us", "Отвечаем в среднем за": "We reply on average in", ", круглосуточно.": ", around the clock.",
    "Сообщение": "Message", "Отправить сообщение": "Send message", "или сразу в Telegram": "or message us on Telegram",
    "Заявка отправлена!": "Request sent!", "Спасибо! Мы получили ваше сообщение и свяжемся с вами по указанной почте.": "Thank you! We got your message and will reply to the email you provided.",
    // pay choice modal
    "Где оплатить?": "Where to pay?", "Выбери, как удобнее оформить подписку": "Choose how you'd like to subscribe",
    "🌐 На сайте": "🌐 On the website", "✈️ В Telegram-боте": "✈️ In the Telegram bot",
    // auth modal
    "Вход в аккаунт": "Sign in", "Войдите, чтобы управлять подпиской bitaps.": "Sign in to manage your bitaps subscription.",
    "Вход": "Sign in", "Регистрация": "Sign up", "Пароль": "Password", "Повторите пароль": "Repeat password",
    "или": "or", "Войти через Google": "Continue with Google", "Готово!": "Done!", "Вы вошли в аккаунт.": "You're signed in.",
    // drawer menu
    "Меню": "Menu", "Ещё на сайте": "More on the site", "Статус серверов": "Server status", "Карта серверов": "Server map",
    "Тест скорости": "Speed test", "Отзывы": "Reviews", "Вопросы и ответы": "FAQ", "Подписка": "Subscription",
    "Оплатить подписку": "Pay for subscription", "Развлечение": "Fun", "Рыбалка карпов": "Koi fishing",
    "топ-5": "top-5", "Аккаунт": "Account", "Личный кабинет": "Dashboard",
    // attrs
    "Курс Bitcoin · данные bitaps.com": "Bitcoin price · data from bitaps.com",
    "меню": "menu", "Тема: тёмная": "Theme: dark", "Тема: светлая": "Theme: light",
    "B-box — нажми, чтобы заказать": "B-box — tap to order", "меньше": "less", "больше": "more",
    "Оставь свой отзыв…": "Leave your review…", "оценка": "rating", "Написать в поддержку": "Contact support",
    "закрыть": "close", "Как к вам обращаться": "Your name", "@username или +7…": "@username or +1…",
    "Город, улица, дом": "City, street, building", "чтобы прислать ответ": "so we can reply",
    "Опишите вопрос — поможем": "Describe your question — we'll help", "минимум 6 символов": "at least 6 characters",
    "ещё раз тот же пароль": "the same password again",
    "← На главную": "← Home", "На главную": "Home", "// оплата": "// payment",
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
    "Счёт создан": "Invoice created", "Открываем оплату…": "Opening payment…", "Открыть оплату ещё раз": "Open payment again",
    "Введи промокод": "Enter promo code", "Сменить тему": "Switch theme", "тема": "theme", "Тема": "Theme",
    "// приложение bitaps": "// bitaps app",
    "Один аккаунт — на всех устройствах. Мы определили вашу платформу автоматически и предлагаем лучший вариант установки.": "One account — on all your devices. We detected your platform automatically and suggest the best way to install.",
    "Приложение на финальной стадии —": "The app is in its final stage —", "скоро запуск": "launching soon",
    ". Уже сейчас можно пользоваться VPN по ключу из": ". You can already use the VPN with a key from", "Telegram-бота": "the Telegram bot",
    ". Нажмите «Уведомить» — пришлём ссылку первыми.": ". Tap «Notify me» — we'll send the link first.",
    "Ваше устройство": "Your device", "🔜 скоро · нажмите, чтобы получить уведомление": "🔜 soon · tap to get notified",
    "Все платформы": "All platforms", "Как подключиться": "How to connect",
    "Закажи": "Order", "Маленькая коробочка, которая втыкается в роутер и раздаёт VPN сразу на": "A small box that plugs into your router and shares the VPN with",
    "разовая покупка · без подписки": "one-time purchase · no subscription",
    "Оформить доставку": "Arrange delivery", ". Оставь заявку — свяжемся, подтвердим наличие и доставку.": ". Leave a request — we'll get in touch and confirm availability and delivery.",
    "Город": "City", "Адрес доставки или пункт выдачи": "Delivery address or pickup point", "Способ доставки": "Delivery method",
    "Курьер": "Courier", "Пункт выдачи": "Pickup point", "Почта России": "Russian Post", "Кол-во": "Qty", "Количество": "Quantity",
    "Комментарий (необязательно)": "Comment (optional)",
    "Это предзаказ: B-box скоро в продаже. Оплата — после подтверждения, без предоплаты на сайте.": "This is a pre-order: B-box goes on sale soon. Payment after confirmation, no prepayment on the site.",
    "Заявка принята!": "Request received!", "Мы свяжемся с вами, чтобы подтвердить доставку B-box.": "We'll contact you to confirm B-box delivery.",
    "Как к вам обращаться": "Your name", "@username или +7…": "@username or +1…", "Например, Москва": "e.g., Moscow",
    "Улица, дом, кв. / ПВЗ": "Street, building, apt. / pickup", "Удобное время, пожелания…": "Convenient time, notes…",
    "🔜 Предзаказ": "🔜 Pre-order", "/ шт · доставка по РФ": "/ each · delivery across Russia",
    "Что это и зачем": "What it is and why", "Воткни в розетку и подключи к роутеру": "Plug into a socket and connect to your router",
    "Раздаёт свой Wi-Fi «bitaps»": "Broadcasts its own «bitaps» Wi-Fi", "Всё, что в этой сети — через VPN автоматически": "Everything on this network goes through the VPN automatically",
    "Характеристики": "Specs", "встроенный, bitaps": "built-in, bitaps", "Протокол": "Protocol", "Скорость": "Speed",
    "до 2 Гбит/с": "up to 2 Gbps", "Подключение": "Connection", "LAN или Wi-Fi": "LAN or Wi-Fi", "В комплекте": "In the box",
    "box, БП, кабель": "box, power supply, cable", "Оформить заказ": "Place order", "итого": "total", "Имя получателя": "Recipient name",
    "Телефон для связи и доставки": "Phone for contact & delivery", "Индекс": "Postal code", "Адрес: улица, дом, квартира": "Address: street, building, apartment",
    "Комментарий к доставке (необязательно)": "Delivery comment (optional)", "Вопросы? Напиши": "Questions? Message",
    "Заказ принят!": "Order received!", "Менеджер свяжется, подтвердит наличие, цену и доставку.": "A manager will contact you to confirm availability, price and delivery.",
    "💬 Написать @bitapssupport": "💬 Message @bitapssupport", "Готово": "Done", "Оформить заказ ·": "Place order ·",
    "Фамилия Имя": "Full name", "Москва": "Moscow", "ул. Ленина, д. 10, кв. 5": "123 Main St, apt. 5", "Удобное время, подъезд, домофон…": "Convenient time, entrance, intercom…",
    "Умная коробочка для роутера": "A smart box for your router", "— маленькое устройство, которое подключается к вашему роутеру и раздаёт VPN сразу на": "— a small device that connects to your router and shares the VPN with",
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
    "🚪 Выйти": "🚪 Log out", "Оформить подписку в Telegram": "Get a subscription in Telegram", "дней": "days",
    "Ключ доступа": "Access key", "Один ключ для приложений": "One key for the apps", "и": "and",
    ". Отсканируй QR в приложении или скопируй ключ — и подключайся.": ". Scan the QR in the app or copy the key — and connect.",
    "Нажми на ключ, чтобы скопировать.": "Tap the key to copy.", "⚙️ Автонастройка": "⚙️ Auto-setup", "📲 Скачать приложение": "📲 Download app",
    "VPN для всего дома сразу": "VPN for the whole home at once", "Ответим на почту, обычно за день": "We'll reply by email, usually within a day",
    "Друзья": "Friends", "Приглашай — получай бонусные дни": "Invite friends — earn bonus days", "Вопросы": "FAQ",
    "Сколько устройств можно подключить?": "How many devices can I connect?", "До 10 устройств одновременно по одной подписке.": "Up to 10 devices at once on one subscription.",
    "Вы ведёте логи?": "Do you keep logs?", "Нет. Мы не храним историю и трафик — приватность по умолчанию.": "No. We don't store history or traffic — privacy by default.",
    "Как продлить подписку?": "How do I renew?", "Кнопка «Продлить» выше → оплата в Telegram, срок продлится автоматически.": "The «Renew» button above → pay in Telegram, the term extends automatically.",
    "VPN не подключается?": "VPN won't connect?", "Проверьте, что ключ скопирован полностью, попробуйте другой сервер или напишите в поддержку.": "Make sure the key is copied in full, try another server or message support.",
    "Обновить пароль": "Update password", "За друзей с подпиской — бонусные дни": "Bonus days for friends who subscribe",
    "Поделитесь ссылкой — когда друг оформит подписку, вам начислятся бонусные дни.": "Share your link — when a friend subscribes, you get bonus days.",
    "Пригласи друзей": "Invite friends", "Копировать": "Copy", "Скопировано ✓": "Copied ✓", "Нажмите, чтобы скопировать": "Tap to copy",
    "Новый пароль (минимум 6 символов)": "New password (at least 6 characters)", "E-mail для ответа": "Email for reply", "Ваш вопрос": "Your question",
    "Ответим на вашу почту, обычно в течение дня": "We'll reply to your email, usually within a day", "Сообщение отправлено!": "Message sent!", "Мы свяжемся с вами по почте.": "We'll contact you by email.",
    "// мини-игра": "// mini-game", "Рыбалка": "Koi", "карпов": "fishing",
    "Лови карпов, набивай комбо и попади в топ-5. Золотой карп — джекпот, красный чужак — мимо (за него штраф).": "Catch koi, build combos and reach the top-5. The golden koi is the jackpot, the red intruder is a miss (penalty).",
    "Топ-3 каждый месяц получают бесплатные дни bitaps VPN 🎁": "Top-3 each month get free bitaps VPN days 🎁",
    "СЧЁТ": "SCORE", "КОМБО": "COMBO", "ВРЕМЯ": "TIME", "Готов на": "Ready to", "рыбалку": "fish?",
    "Тапай прямо по карпам, чтобы поймать. Чем мельче и быстрее — тем больше очков. Не сбивай комбо промахами!": "Tap right on the koi to catch them. Smaller and faster means more points. Don't break your combo with misses!",
    "карп": "koi", "+очки": "+points", "золотой": "golden", "чужак": "intruder", "штраф": "penalty",
    "Закинуть удочку 🎣": "Cast the rod 🎣", "Улов готов 🎣": "Catch is in 🎣", "Неплохо! Запиши результат в топ.": "Not bad! Save your score to the leaderboard.",
    "✅ Результат сохранён в топе!": "✅ Score saved to the leaderboard!", "В топ": "Submit", "Ещё раз 🔁": "Again 🔁",
    "🏆 Топ-5 рыбаков": "🏆 Top-5 anglers", "лучшие уловы игроков bitaps": "best catches by bitaps players", "загружаю…": "loading…",
    "🎁 Призы топ-3 — каждый месяц": "🎁 Top-3 prizes — every month", "🥇 1 место": "🥇 1st place", "30 дней bitaps VPN": "30 days bitaps VPN",
    "🥈 2 место": "🥈 2nd place", "14 дней": "14 days", "🥉 3 место": "🥉 3rd place", "7 дней": "7 days",
    "Топ и призы обновляются в конце месяца": "Leaderboard and prizes reset at month-end", "🎣 Играть в Telegram-боте →": "🎣 Play in the Telegram bot →",
    "Твоё имя для топа": "Your name for the leaderboard", "фух, устал! 😮‍💨": "phew, tired! 😮‍💨",
    // ── динамические строки JS (ошибки, статусы, кнопки, инструкции) ──
    "Отправляю…": "Sending…", "Обновляю…": "Updating…", "Что-то пошло не так": "Something went wrong",
    "Сеть недоступна, попробуй ещё раз": "Network unavailable, please try again", "Сеть недоступна, попробуй ещё раз.": "Network unavailable, please try again.",
    "Неправильный формат почты": "Invalid email format", "Неправильный формат почты.": "Invalid email format.",
    "Напиши, что случилось": "Tell us what happened", "Оставь почту или Telegram/телефон для ответа": "Leave an email or Telegram/phone for a reply",
    "Подключение": "Connection", "Оплата": "Payment", "Укажи имя получателя": "Enter the recipient's name",
    "Укажи телефон для связи": "Enter a contact phone", "Укажи адрес: улица, дом, квартира": "Enter address: street, building, apartment",
    "Заказ принят!": "Order received!", "Активна": "Active", "Пробный период": "Trial period", "Продлить подписку": "Renew subscription",
    "Доброй ночи,": "Good night,", "Доброе утро,": "Good morning,", "Добрый день,": "Good afternoon,", "Добрый вечер,": "Good evening,",
    "Пароль обновлён ✓": "Password updated ✓", "Заявка из личного кабинета bitaps": "Request from the bitaps dashboard",
    "Твоя панель управления bitaps VPN": "Your bitaps VPN control panel", "оформите тариф, чтобы получить ключ": "choose a plan to get your key",
    "Впиши почту для ответа": "Enter your email for a reply", "1 год": "1 year", "2 года": "2 years", "QR ключа": "Key QR",
    "Промокоды скоро 🎫 — пока оформи по обычной цене.": "Promo codes coming soon 🎫 — order at the regular price for now.",
    "Впиши почту — на неё придёт ключ.": "Enter your email — the key will be sent there.",
    "Не удалось создать счёт, попробуй позже.": "Couldn't create the invoice, try again later.", "Введи промокод.": "Enter a promo code.",
    "Ещё разок — и будет круче!": "One more — it'll be even better!", "🔥 Это уровень сенсея! Закрепи в топе.": "🔥 Sensei level! Lock it into the leaderboard.",
    "💪 Сильный улов! Давай в топ.": "💪 Strong catch! Get on the leaderboard.",
    "Скачать для macOS": "Download for macOS", "Скачать для Windows": "Download for Windows",
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
    "Тема": "Theme",
    // валидация телефона/почты/паролей
    "Укажи телефон в правильном формате или Telegram (@ник)": "Enter a valid phone number or Telegram (@handle)",
    "Неправильный формат телефона или Telegram": "Invalid phone or Telegram format",
    "Укажи город": "Enter your city", "Пароль слишком короткий — минимум 6 символов.": "Password too short — at least 6 characters.",
    "Пароли не совпадают.": "Passwords don't match.", "Секунду…": "One sec…", "Войти": "Log in", "Регистрация": "Sign up",
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
    ". Это предзаказ: оставь заявку — сообщим, как только B-box поступит, и оформим доставку.": ". This is a preorder — leave a request and we'll notify you when B-box is available and arrange delivery."
  };

  function detect() {
    try { var s = localStorage.getItem(KEY); if (s === 'en' || s === 'ru') return s; } catch (e) {}
    return 'ru'; // по умолчанию русский; английский — только по кнопке
  }
  var cur = detect();
  var obs = null;

  function textNodes(root) {
    var out = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false), n;
    while ((n = w.nextNode())) { var p = n.parentNode; if (p && !/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName)) out.push(n); }
    return out;
  }
  function tr(node, l) {
    var raw = node.__ru != null ? node.__ru : node.textContent;
    var trimmed = raw.trim(); if (!trimmed) return;
    var col = trimmed.replace(/\s+/g, ' ');
    if (node.__ru == null) node.__ru = raw;
    if (l === 'en') {
      if (DICT[col]) { var v = raw.replace(trimmed, DICT[col]); if (node.textContent !== v) node.textContent = v; return; }
      // подстрочный перевод динамики (даты/имена/суммы)
      var out = trimmed, hit = false;
      for (var i = 0; i < SUB.length; i++) { if (out.indexOf(SUB[i][0]) >= 0) { out = out.split(SUB[i][0]).join(SUB[i][1]); hit = true; } }
      if (hit) { var w = raw.replace(trimmed, out); if (node.textContent !== w) node.textContent = w; return; }
    }
    if (node.textContent !== node.__ru) node.textContent = node.__ru;
  }
  var SUB = [
    ['подписка не активна', 'subscription inactive'], ['активна до', 'active until'], ['не активна', 'inactive'],
    ['тариф bitaps VPN', 'plan bitaps VPN'], ['Тема: тёмная', 'Theme: dark'], ['Тема: светлая', 'Theme: light'],
    ['Ошибка: ', 'Error: '], ['Вы выбрали:', 'You selected:'], ['Похоже, у вас', 'Looks like you have'],
    ['Как установить на', 'How to install on'], ['После оплаты ключ придёт на', 'after payment the key will be sent to'],
    ['Оплати ', 'Pay '], ['в CryptoBot.', 'in CryptoBot.'], ['осталось', 'left'],
  ];
  function trAttr(l) {
    ['placeholder', 'title', 'aria-label'].forEach(function (a) {
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
    textNodes(document.body).forEach(function (n) { tr(n, l); });
    trAttr(l);
    document.documentElement.lang = l;
    var b = document.getElementById('langToggle'); if (b) b.textContent = l === 'en' ? 'RU' : 'EN';
    if (obs) obs.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  function setLang(l) { cur = l; try { localStorage.setItem(KEY, l); } catch (e) {} apply(l); }

  function mkButton() {
    if (document.getElementById('langToggle')) return;
    // Контекст: Telegram Mini App (web app) vs обычный сайт в браузере.
    var miniApp = !!(window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData && window.Telegram.WebApp.initData.length);
    var path = location.pathname;
    var mainPage = path === '/' || /\/(index|bitaps-site)\.html$/.test(path);
    // страницы, открытые ИЗ БОТА в браузере (метка ?l=1) — им тоже нужна кнопка.
    var botLink = /[?&]l=1(\b|&|$)/.test(location.search);
    // САЙТ (браузер): кнопка ТОЛЬКО на главной + на bot-link страницах — язык глобальный
    // (localStorage), остальные страницы подхватывают его сами при загрузке (apply на init).
    if (!miniApp && !mainPage && !botLink) return;
    var b = document.createElement('button');
    b.id = 'langToggle'; b.type = 'button'; b.textContent = cur === 'en' ? 'RU' : 'EN';
    b.setAttribute('aria-label', 'Сменить язык / Switch language');
    b.addEventListener('click', function () { setLang(cur === 'en' ? 'ru' : 'en'); });
    // контрастный стиль для обеих тем (оранжевая обводка по акценту)
    var base = 'cursor:pointer;border:1.5px solid var(--acc,#ff7a1a);background:var(--acc,#ff7a1a);color:#0b0e14;border-radius:10px;font-weight:800;font-size:12.5px;letter-spacing:.5px;line-height:1;height:38px;min-width:44px;padding:0 12px;display:inline-grid;place-items:center;box-shadow:0 4px 14px rgba(255,122,26,.35);';
    var theme = document.getElementById('themeToggle');
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
