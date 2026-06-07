export default {
    hy: {
        docTitle: "JS.CORE | Core Concepts",
        metaDescription:
            "Ինչպես է աշխատում JavaScript-ը. JIT կոմպիլյացիա, V8 Engine, Browser vs Node.js միջավայրեր և execution flow (async/defer):",
        nav: { intro: "Հիմք", env: "Միջավայր", execution: "Ընթացք" },
        heroH1: "JavaScript",
        heroSubtitle: '"Write once, run everywhere... provided there\'s an engine."',
        s01Title: "Ինչպե՞ս է այն աշխատում",
        s01Lead:
            'Ժամանակակից JS-ը օգտագործում է <span class="js-yellow-text font-bold">JIT (Just-In-Time)</span> կոմպիլյացիա։ Սա նշանակում է, որ կոդը թարգմանվում է մեքենայական լեզվի հենց կատարման պահին՝ ապահովելով բարձր արագություն։',
        featV8Title: "V8 Engine (Chrome/Node)",
        featV8Text:
            "Ամենաարագ շարժիչներից մեկը, որը փոխակերպում է JS կոդը օպտիմիզացված մեքենայական կոդի։",
        featThreadTitle: "Single Threaded",
        featThreadText:
            "JS-ը կատարում է մեկ գործողություն մեկ պահին, բայց օգտագործում է Event Loop՝ ասինխրոնության համար։",
        s02Title: "Միջավայրեր",
        browserTitle: "Browser",
        browserLi1: "Window & DOM manipulation",
        browserLi2: "Fetch API / XHR",
        browserLi3: "Cookies / SessionStorage",
        nodeTitle: "Node.js",
        nodeLi1: "File System (fs module)",
        nodeLi2: "Process & OS access",
        nodeLi3: "Server-side logic",
        s03Title: "Սցենարի կատարման փուլերը",
        s03Lead:
            "Default վիճակում բրաուզերը կատարում է կոդը հերթականությամբ: Երբ հանդիպում է սկրիպտին, HTML-ի պարսինգը կանգնում է (Blocking):",
        asyncTitle: "Async",
        asyncText:
            "Սկրիպտը բեռնվում է ֆոնային ռեժիմում և կատարվում է հենց պատրաստ լինի:",
        deferTitle: "Defer",
        deferText:
            "Սկրիպտը բեռնվում է ֆոնում, բայց կատարվում է միայն այն ժամանակ, երբ HTML-ը ամբողջությամբ պատրաստ է:",
        playTitle: "Փորձարկիր DOM-ը ✨",
        playBtn: "ԳՈՐԾԱՐԿԵԼ ՍԿՐԻՊՏԸ",
        playBtnDone: "ԿԱՏԱՐՎԱԾ Է ✅",
        playAlert:
            "JS-ը հենց նոր կատարեց Script-ը:\n1. Փոխվեց կոճակի տեքստը\n2. Հայտնվեց status log-ը\n3. Կանչվեց Alert API-ն",
        prevTopic: "! Սկսենք:",
        nextTopic: "Ֆունդամենտալ տվյալների տեսակներ",
    },
    en: {
        docTitle: "JS.CORE | Core Concepts",
        metaDescription:
            "How JavaScript works: JIT compilation, the V8 engine, browser vs Node.js, and script execution (async/defer).",
        nav: { intro: "Basics", env: "Environment", execution: "Execution" },
        heroH1: "JavaScript",
        heroSubtitle: '"Write once, run everywhere... provided there\'s an engine."',
        s01Title: "How it works",
        s01Lead:
            'Modern JS uses <span class="js-yellow-text font-bold">JIT (Just-In-Time)</span> compilation: code is translated to machine code at runtime for high performance.',
        featV8Title: "V8 Engine (Chrome/Node)",
        featV8Text:
            "One of the fastest engines; it turns JS into optimized machine code.",
        featThreadTitle: "Single threaded",
        featThreadText:
            "JS runs one operation at a time but uses the event loop for asynchrony.",
        s02Title: "Environments",
        browserTitle: "Browser",
        browserLi1: "Window & DOM manipulation",
        browserLi2: "Fetch API / XHR",
        browserLi3: "Cookies / SessionStorage",
        nodeTitle: "Node.js",
        nodeLi1: "File system (fs module)",
        nodeLi2: "Process & OS access",
        nodeLi3: "Server-side logic",
        s03Title: "Script execution phases",
        s03Lead:
            "By default the browser runs code in order. When it hits a script, HTML parsing pauses (blocking).",
        asyncTitle: "Async",
        asyncText: "The script loads in the background and runs as soon as it is ready.",
        deferTitle: "Defer",
        deferText:
            "The script loads in the background but runs only after the full HTML is parsed.",
        playTitle: "Try the DOM ✨",
        playBtn: "RUN SCRIPT",
        playBtnDone: "DONE ✅",
        playAlert:
            "JS just ran the script:\n1. Button text changed\n2. Status log appeared\n3. The alert API was called",
        prevTopic: "! Let’s begin:",
        nextTopic: "Fundamental data types",
    },
    ru: {
        docTitle: "JS.CORE | Базовые концепции",
        metaDescription:
            "Как работает JavaScript: JIT-компиляция, движок V8, браузер и Node.js, порядок выполнения скриптов (async/defer).",
        nav: { intro: "Основы", env: "Среда", execution: "Выполнение" },
        heroH1: "JavaScript",
        heroSubtitle: '"Write once, run everywhere... provided there\'s an engine."',
        s01Title: "Как это устроено",
        s01Lead:
            'Современный JS использует <span class="js-yellow-text font-bold">JIT (Just-In-Time)</span> компиляцию: код переводится в машинный прямо во время выполнения.',
        featV8Title: "Движок V8 (Chrome/Node)",
        featV8Text:
            "Один из самых быстрых движков; превращает JS в оптимизированный машинный код.",
        featThreadTitle: "Один поток",
        featThreadText:
            "JS выполняет одну операцию за раз, но использует event loop для асинхронности.",
        s02Title: "Среды выполнения",
        browserTitle: "Браузер",
        browserLi1: "Window и работа с DOM",
        browserLi2: "Fetch API / XHR",
        browserLi3: "Cookies / SessionStorage",
        nodeTitle: "Node.js",
        nodeLi1: "Файловая система (модуль fs)",
        nodeLi2: "Доступ к процессу и ОС",
        nodeLi3: "Серверная логика",
        s03Title: "Фазы выполнения сценария",
        s03Lead:
            "По умолчанию браузер выполняет код по порядку. На теге script разбор HTML приостанавливается (блокировка).",
        asyncTitle: "Async",
        asyncText: "Скрипт грузится в фоне и выполняется, как только готов.",
        deferTitle: "Defer",
        deferText:
            "Скрипт грузится в фоне, но выполняется только после полного разбора HTML.",
        playTitle: "Попробуй DOM ✨",
        playBtn: "ЗАПУСТИТЬ СКРИПТ",
        playBtnDone: "ГОТОВО ✅",
        playAlert:
            "JS только что выполнил скрипт:\n1. Изменился текст кнопки\n2. Появился лог статуса\n3. Вызван alert API",
        prevTopic: "! Начнём:",
        nextTopic: "Фундаментальные типы данных",
    },
};
