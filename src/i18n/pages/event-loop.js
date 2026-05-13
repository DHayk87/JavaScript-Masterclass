export default {
    hy: {
        docTitle: "JS.CORE | Event Loop",
        metaDescription:
            "Խորացված ուղեցույց JavaScript Event Loop-ի վերաբերյալ։ Macrotasks, Microtasks և կատարման հերթականությունը։",
        nav: {
            intro: "Event Loop",
            tasks: "Macrotasks & Microtasks",
            execution: "Հերթականություն",
            puzzle: "Օրինակ",
            useCases: "Կիրառություն",
        },
        h1: "Event Loop",
        subtitle:
            '"Macrotasks և Microtasks: Ինչպե՞ս է աշխատում JavaScript-ի շարժիչը:"',
        s01Title: "Ի՞նչ է Event Loop-ը",
        s01Lead:
            "JavaScript-ի գործարկման հիմքում ընկած է <b>Event Loop</b> գաղափարը: Կա ցիկլ, որտեղ շարժիչը սպասում է առաջադրանքների, կատարում է դրանք, ապա սպասում է նորին:",
        s01UiTitle: "UI Rendering:",
        s01UiP:
            "Բրաուզերը չի նկարում էկրանը, քանի դեռ շարժիչը կատարում է առաջադրանք: Փոփոխությունները արտացոլվում են task-ի ավարտից հետո:",
        s02Title: "Տեսակները",
        s02MacroTitle: "Macrotasks (Մակրոթասքեր)",
        s02MacroP:
            "Հիմնական առաջադրանքներ, որոնք գալիս են բրաուզերից կամ արտաքին միջավայրից.",
        s02MacroLi1:
            '<span class="dot"></span> <code>script</code> (ֆայլի բեռնում և գործարկում)',
        s02MacroLi2:
            '<span class="dot"></span> Օգտատիրոջ գործողություններ (<code>mousemove</code>, <code>click</code>)',
        s02MacroLi3:
            '<span class="dot"></span> Ժամանակացույցեր (<code>setTimeout</code>, <code>setInterval</code>)',
        s02MicroTitle: "Microtasks (Միկրոթասքեր)",
        s02MicroP:
            "Ստեղծվում են մեր կոդի կողմից և ունեն ավելի բարձր առաջնահերթություն, քան մակրոթասքերը:",
        s02MicroLi1:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> Promise (<code>.then</code>, <code>.catch</code>, <code>.finally</code>)',
        s02MicroLi2:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> <code>await</code> գործողություններ',
        s02MicroLi3:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> <code>queueMicrotask(func)</code>',
        s03Title: "Ալգորիթմը",
        s03OrderTitle: "Կատարման հերթականությունը",
        s03OrderP:
            "Յուրաքանչյուր <b>Macrotask</b> ավարտելուց հետո շարժիչը կատարում է <b>բոլոր Microtask-երը</b>, նախքան հաջորդ macrotask-ը կամ UI render-ը:",
        s04Title: "Գործնական Օրինակ",
        s04Lead: "Ի՞նչ հերթականությամբ կտպվեն թվերը console-ում:",
        s04AnsTitle: "Պատասխան և Բացատրություն",
        s04AnsP: "Արդյունքը կլինի՝ <b>1 7 3 5 2 6 4</b>",
        s04Li1:
            '<span class="dot"></span> <b>1 և 7</b> - Սինխրոն կոդ են:',
        s04Li2:
            '<span class="dot"></span> <b>3 և 5</b> - Microtask-եր (Promise <code>.then</code>):',
        s04Li3:
            '<span class="dot"></span> <b>2, 6 և 4</b> - Macrotask-եր (<code>setTimeout</code>):',
        s05Title: "Օգտակար Կիրառություններ",
        s05CpuTitle: "1. CPU ծանրաբեռնող խնդիրների բաժանում",
        s05CpuP:
            "Ծանր ցիկլը կարելի է բաժանել <code>setTimeout</code> մասերի, որպեսզի Event Loop-ը «շունչ քաշի» և UI-ն արձագանքի:",
        s05ProgTitle: "2. Progress Bar Ցուցադրում",
        s05ProgP:
            "DOM render-ը տեղի է ունենում task-ից հետո: Մասնավոր <code>setTimeout</code>-ներով կարելի է ցույց տալ առաջընթաց:",
        prevTopic: "Async / Await",
        nextTopic: "Garbage Collector",
    },
    en: {
        docTitle: "JS.CORE | Event loop",
        metaDescription:
            "The JavaScript event loop: macrotasks, microtasks, and execution order.",
        nav: {
            intro: "Event loop",
            tasks: "Macro & microtasks",
            execution: "Ordering",
            puzzle: "Example",
            useCases: "Use cases",
        },
        h1: "Event loop",
        subtitle: '"Macrotasks vs microtasks: how the engine schedules work."',
        s01Title: "What is the event loop?",
        s01Lead:
            "At the heart of JS execution is the <b>event loop</b>: tasks are picked, run, then the runtime waits for more work.",
        s01UiTitle: "UI rendering:",
        s01UiP:
            "Browsers generally don’t paint while JS is busy running a task; updates show up after tasks complete.",
        s02Title: "Task types",
        s02MacroTitle: "Macrotasks",
        s02MacroP: "Major tasks from the host: scripts, timers, many user events.",
        s02MacroLi1: '<span class="dot"></span> <code>script</code> load & run',
        s02MacroLi2:
            '<span class="dot"></span> User input events (<code>click</code>, etc.)',
        s02MacroLi3:
            '<span class="dot"></span> Timers (<code>setTimeout</code>, <code>setInterval</code>)',
        s02MicroTitle: "Microtasks",
        s02MicroP:
            "Scheduled by your code; typically run before the next macrotask/render batch.",
        s02MicroLi1:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> Promise reactions',
        s02MicroLi2:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> Continuations after <code>await</code>',
        s02MicroLi3:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> <code>queueMicrotask</code>',
        s03Title: "The algorithm (simplified)",
        s03OrderTitle: "Ordering rule",
        s03OrderP:
            "After each <b>macrotask</b>, the engine drains the <b>microtask queue</b> before taking the next macrotask or rendering.",
        s04Title: "Worked example",
        s04Lead: "In what order do the numbers log?",
        s04AnsTitle: "Answer & intuition",
        s04AnsP: "Typical answer pattern: <b>1 7 3 5 2 6 4</b> (sync, microtasks, then timers).",
        s04Li1: '<span class="dot"></span> <b>1 & 7</b> — synchronous logs run immediately.',
        s04Li2:
            '<span class="dot"></span> <b>3 & 5</b> — promise microtasks run before the next macrotask.',
        s04Li3:
            '<span class="dot"></span> <b>2, 6, 4</b> — macrotasks from <code>setTimeout</code>.',
        s05Title: "Practical uses",
        s05CpuTitle: "1. Chunk heavy work",
        s05CpuP:
            "Split CPU-heavy loops with <code>setTimeout(0)</code> chunks so the loop can process events between slices.",
        s05ProgTitle: "2. Show progress",
        s05ProgP:
            "Breaking work across tasks lets the browser paint intermediate UI states.",
        prevTopic: "Async/await",
        nextTopic: "Garbage Collector",
    },
    ru: {
        docTitle: "JS.CORE | Event loop",
        metaDescription:
            "Цикл событий JavaScript: макро- и микрозадачи и порядок выполнения.",
        nav: {
            intro: "Event loop",
            tasks: "Макро и микро",
            execution: "Порядок",
            puzzle: "Пример",
            useCases: "Применение",
        },
        h1: "Event loop",
        subtitle: '"Макро- и микрозадачи: как планируется работа в движке."',
        s01Title: "Что такое цикл событий?",
        s01Lead:
            "В основе выполнения JS — <b>цикл событий</b>: задачи выполняются по очереди, затем runtime ждёт новых.",
        s01UiTitle: "Отрисовка UI:",
        s01UiP:
            "Пока выполняется задача JS, браузер обычно не рисует; обновления появляются после задач.",
        s02Title: "Типы задач",
        s02MacroTitle: "Макрозадачи",
        s02MacroP: "Крупные задачи от хоста: скрипты, таймеры, многие события.",
        s02MacroLi1: '<span class="dot"></span> Загрузка и выполнение <code>script</code>',
        s02MacroLi2: '<span class="dot"></span> События ввода (<code>click</code> и т.д.)',
        s02MacroLi3:
            '<span class="dot"></span> Таймеры (<code>setTimeout</code>, <code>setInterval</code>)',
        s02MicroTitle: "Микрозадачи",
        s02MicroP:
            "Ставятся кодом; обычно выполняются до следующей макрозадачи/отрисовки.",
        s02MicroLi1:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> Реакции промисов',
        s02MicroLi2:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> Продолжения после <code>await</code>',
        s02MicroLi3:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> <code>queueMicrotask</code>',
        s03Title: "Алгоритм (упрощённо)",
        s03OrderTitle: "Порядок",
        s03OrderP:
            "После каждой <b>макрозадачи</b> движок опустошает очередь <b>микрозадач</b>, затем берёт следующую макрозадачу.",
        s04Title: "Разбор примера",
        s04Lead: "В каком порядке выведутся числа?",
        s04AnsTitle: "Ответ",
        s04AnsP: "Типичный порядок: <b>1 7 3 5 2 6 4</b>.",
        s04Li1: '<span class="dot"></span> <b>1 и 7</b> — синхронный код.',
        s04Li2:
            '<span class="dot"></span> <b>3 и 5</b> — микрозадачи промисов.',
        s04Li3:
            '<span class="dot"></span> <b>2, 6, 4</b> — макрозадачи <code>setTimeout</code>.',
        s05Title: "Практика",
        s05CpuTitle: "1. Разбивать тяжёлую работу",
        s05CpuP:
            "Дробить тяжёлые циклы через <code>setTimeout</code>, чтобы UI оставался отзывчивым.",
        s05ProgTitle: "2. Прогресс на экране",
        s05ProgP:
            "Между задачами браузер успевает перерисовать промежуточное состояние.",
        prevTopic: "Async/await",
        nextTopic: "Garbage Collector",
    },
};
