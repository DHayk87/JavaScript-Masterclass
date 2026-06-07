export default {
    hy: {
        docTitle: "JS.CORE | Closures",
        metaDescription:
            "Խորացված ուղեցույց JavaScript Closures-ի և Lexical Environment-ի վերաբերյալ։",
        nav: { intro: "Տեսանելիություն", closure: "Closure", practical: "Կիրառություն", importance: "Կարևորություն" },
        h1: "Closures",
        subtitle: '"Փոփոխականների տեսանելիությունը (Scope) և Lexical Environment-ը"',
        s01Title: "Code Blocks և Scope",
        s01Lead:
            "Եթե փոփոխականը հայտարարված է կոդի բլոկի ներսում <code>{...}</code>, այն տեսանելի է <b>միայն այդ բլոկի ներսում</b>:",
        s01Foot:
            "Նույն կանոնը գործում է <code>if</code>, <code>for</code> և <code>while</code> կառույցների համար:",
        s02Title: "Ի՞նչ է Closure-ը",
        s02Lead:
            "<b>Closure-ը</b> թույլ է տալիս ֆունկցիային հիշել և հասանելիություն ունենալ իր արտաքին տիրույթի փոփոխականներին նույնիսկ այն բանից հետո, երբ արտաքին ֆունկցիան ավարտել է աշխատանքը:",
        s02HowTitle: "Ինչպե՞ս է այն աշխատում",
        s02HowP:
            "Ֆունկցիաները ստեղծվում են իրենց լեքսիկական միջավայրի հետ միասին: Closure-ը ստեղծվում է ամեն անգամ, երբ ֆունկցիան հայտարարվում է:",
        s02Foot:
            "Այս օրինակում <code>innerFunction</code>-ը պահպանում է հասանելիությունը <code>outerVariable</code>-ին:",
        s03Title: "Գործնական կիրառություն",
        s03EncTitle: "1. Տվյալների գաղտնիություն (Encapsulation)",
        s03EncP:
            "Closure-ը թույլ է տալիս ստեղծել մասնավոր փոփոխականներ, որոնք հասանելի չեն դրսից:",
        s03FactTitle: "2. Function Factories (Ֆունկցիաների գործարան)",
        s03FactP:
            "Կարող ենք ստեղծել ֆունկցիաներ, որոնք հանդես են գալիս որպես կաղապարներ այլ մասնագիտացված ֆունկցիաների համար:",
        s04Title: "Կարևորություն և Զգուշացում",
        s04WhyTitle: "Ինչու՞ է դա կարևոր",
        s04Li1:
            '<span class="dot"></span> <b>State Persistence:</b> Վիճակը պահել առանց գլոբալ փոփոխականների:',
        s04Li2:
            '<span class="dot"></span> <b>Memory Management:</b> Փոփոխականը մնում է հիշողության մեջ, քանի դեռ կա ներքին ֆունկցիա:',
        s04Li3:
            '<span class="dot"></span> <b>Asynchronous Code:</b> Կարևոր է callback-ների և ասինխրոն գործողությունների համար:',
        s04WarnTitle: "⚠️ Զգուշացում. Memory Leaks",
        s04WarnP:
            "Closure-ները կարող են հանգեցնել հիշողության ավելորդ օգտագործման, եթե ներքին ֆունկցիաները պահվում են երկար, քանի որ կապված փոփոխականները չեն ազատվում GC-ով:",
        prevTopic: "Code Parsing",
        nextTopic: "Prototypes (ES5)",
    },
    en: {
        docTitle: "JS.CORE | Closures",
        metaDescription: "Closures and lexical environment in JavaScript—deep dive.",
        nav: { intro: "Scope", closure: "Closure", practical: "Practical", importance: "Notes" },
        h1: "Closures",
        subtitle: '"Variable visibility (scope) and the lexical environment"',
        s01Title: "Blocks & scope",
        s01Lead:
            "A variable declared inside <code>{...}</code> is visible <b>only inside that block</b>.",
        s01Foot: "The same rule applies to <code>if</code>, <code>for</code>, and <code>while</code>.",
        s02Title: "What is a closure?",
        s02Lead:
            "A <b>closure</b> lets a function keep access to variables from its outer scope even after the outer function finishes.",
        s02HowTitle: "How it works",
        s02HowP:
            "Functions are created together with their lexical environment; a closure forms whenever a nested function is created.",
        s02Foot:
            "Here <code>innerFunction</code> still “remembers” <code>outerVariable</code>.",
        s03Title: "Practical uses",
        s03EncTitle: "1. Encapsulation",
        s03EncP: "Closures can hide private state that isn’t reachable from outside.",
        s03FactTitle: "2. Function factories",
        s03FactP: "Outer parameters can specialize returned inner functions (e.g. adders).",
        s04Title: "Why it matters / cautions",
        s04WhyTitle: "Why important",
        s04Li1:
            '<span class="dot"></span> <b>State:</b> persist data between calls without globals.',
        s04Li2:
            '<span class="dot"></span> <b>Memory:</b> captured variables live as long as the inner function does.',
        s04Li3:
            '<span class="dot"></span> <b>Async:</b> preserves context across callbacks and promises.',
        s04WarnTitle: "⚠️ Memory leaks",
        s04WarnP:
            "Holding onto inner functions can keep large outer scopes alive longer than intended.",
        prevTopic: "Code Parsing",
        nextTopic: "Prototypes (ES5)",
    },
    ru: {
        docTitle: "JS.CORE | Замыкания",
        metaDescription: "Замыкания и лексическое окружение в JavaScript.",
        nav: { intro: "Область", closure: "Замыкание", practical: "Практика", importance: "Важно" },
        h1: "Замыкания",
        subtitle: '"Видимость переменных (scope) и лексическое окружение"',
        s01Title: "Блоки и область видимости",
        s01Lead:
            "Переменная, объявленная внутри <code>{...}</code>, видна <b>только в этом блоке</b>.",
        s01Foot: "То же для <code>if</code>, <code>for</code> и <code>while</code>.",
        s02Title: "Что такое замыкание?",
        s02Lead:
            "<b>Замыкание</b> позволяет функции помнить переменные внешней области даже после завершения внешней функции.",
        s02HowTitle: "Как это работает",
        s02HowP:
            "Функции создаются вместе с лексическим окружением; замыкание возникает при создании вложенной функции.",
        s02Foot:
            "Здесь <code>innerFunction</code> сохраняет доступ к <code>outerVariable</code>.",
        s03Title: "Практическое применение",
        s03EncTitle: "1. Инкапсуляция",
        s03EncP: "Можно скрывать приватное состояние от внешнего кода.",
        s03FactTitle: "2. Фабрики функций",
        s03FactP: "Параметры внешней функции настраивают возвращаемые внутренние функции.",
        s04Title: "Важность и осторожность",
        s04WhyTitle: "Зачем это нужно",
        s04Li1:
            '<span class="dot"></span> <b>Состояние:</b> между вызовами без глобальных переменных.',
        s04Li2:
            '<span class="dot"></span> <b>Память:</b> захваченные переменные живут, пока жива внутренняя функция.',
        s04Li3:
            '<span class="dot"></span> <b>Асинхронность:</b> сохранение контекста в колбэках.',
        s04WarnTitle: "⚠️ Утечки памяти",
        s04WarnP:
            "Долгое удержание внутренних функций может удерживать большие внешние области в памяти.",
        prevTopic: "Парсинг кода",
        nextTopic: "Прототипы (ES5)",
    },
};
