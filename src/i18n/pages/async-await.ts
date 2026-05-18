export default {
    hy: {
        docTitle: "JS.CORE | Async & Await",
        metaDescription:
            "Խորացված ուղեցույց JavaScript Async/Await-ի վերաբերյալ։ Ասինխրոն կոդի էվոլյուցիան և գործնական կիրառումը։",
        nav: { intro: "Ներածություն", how: "Ինչպես է աշխատում", comparison: "Համեմատություն" },
        h1: "Async / Await",
        subtitle: '"Ասինխրոն կոդի էվոլյուցիան"',
        s01Title: "Ներածություն",
        s01Lead:
            "<code>async</code> և <code>await</code> ներմուծվել են ES2017-ով և թույլ են տալիս գրել ասինխրոն կոդ, որը ընթերցվում է գծային:",
        s01AsyncTitle: "1. Ի՞նչ է Async-ը",
        s01AsyncP:
            "<code>async</code> դրվում է ֆունկցիայից առաջ: Ֆունկցիան միշտ վերադարձնում է Promise:",
        s01AsyncLi1:
            '<span class="dot"></span> Ֆունկցիան միշտ վերադարձնում է Promise:',
        s01AsyncLi2:
            '<span class="dot"></span> Սովորական արժեքը ավտոմատ փաթեթավորվում է <code>Promise.resolve()</code>-ում:',
        s01AwaitTitle: "2. Ի՞նչ է Await-ը",
        s01AwaitP:
            "<code>await</code> աշխատում է միայն <code>async</code> ֆունկցիայի ներսում և ստիպում է սպասել Promise-ի կատարմանը:",
        s01AwaitTip:
            "<b>Կարևոր է.</b> <code>await</code>-ը չի արգելափակում ամբողջ ծրագիրը: Engine-ը կարող է կատարել այլ գործողություններ:",
        s02Title: "Ինչպե՞ս է դա աշխատում",
        s02VisTitle: "Վիզուալիզացիա և Օգտագործում",
        s02WhyTitle: "4. Ինչո՞ւ օգտագործել Async / Await",
        thAdv: "Առավելություն",
        thDesc: "Նկարագրություն",
        trRead: "Ընթերցելիություն",
        trReadD:
            "Կոդը դառնում է գծային: Չկան երկար <code>.then()</code> շղթաներ:",
        trErr: "Error Handling",
        trErrD: "Կարելի է օգտագործել <code>try...catch</code>:",
        trDbg: "Debugging",
        trDbgD: "Հարմար է կանգնել կոնկրետ տողի վրա:",
        trCond: "Conditional Code",
        trCondD: "Հեշտ է գրել պայմաններ, կախված ասինխրոն պատասխանից:",
        s03Title: "Համեմատություն",
        s03SubTitle: "Promises vs Async/Await",
        s03PromTitle: "Promises (.then)",
        s03AsyncBoxTitle: "Async / Await",
        tipTitle: "🚀 Pro-Tip Զուգահեռ Հարցումների համար",
        tipP:
            "Մի քանի անկախ հարցումների դեպքում մի օգտագործեք հերթական <code>await</code> ամեն տողում — դա դանդաղեցնում է: Օգտագործեք <code>Promise.all()</code> զուգահեռության համար:",
        prevTopic: "Promises",
        nextTopic: "Event Loop",
    },
    en: {
        docTitle: "JS.CORE | Async & await",
        metaDescription:
            "Async/await in JavaScript: evolution of async code and practical patterns.",
        nav: { intro: "Intro", how: "How it works", comparison: "Comparison" },
        h1: "Async / await",
        subtitle: '"The evolution of asynchronous code"',
        s01Title: "Introduction",
        s01Lead:
            "<code>async</code>/<code>await</code> (ES2017) let you write async code that reads like synchronous code.",
        s01AsyncTitle: "1. What async does",
        s01AsyncP: "Placed before a function, it guarantees the function returns a promise.",
        s01AsyncLi1: '<span class="dot"></span> The return value is always a promise.',
        s01AsyncLi2:
            '<span class="dot"></span> Non-promise returns are wrapped with <code>Promise.resolve()</code>.',
        s01AwaitTitle: "2. What await does",
        s01AwaitP:
            "<code>await</code> only works inside <code>async</code> functions and pauses until a promise settles.",
        s01AwaitTip:
            "<b>Note:</b> <code>await</code> doesn’t freeze the whole runtime—other tasks can run meanwhile.",
        s02Title: "How it works",
        s02VisTitle: "Walkthrough",
        s02WhyTitle: "4. Why use async/await",
        thAdv: "Advantage",
        thDesc: "Description",
        trRead: "Readability",
        trReadD: "Linear flow; fewer long <code>.then()</code> chains.",
        trErr: "Error handling",
        trErrD: "Use familiar <code>try...catch</code>.",
        trDbg: "Debugging",
        trDbgD: "Easier to step line-by-line.",
        trCond: "Conditionals",
        trCondD: "Simpler branching on async results.",
        s03Title: "Comparison",
        s03SubTitle: "Promises vs async/await",
        s03PromTitle: "Promises (.then)",
        s03AsyncBoxTitle: "Async / await",
        tipTitle: "🚀 Parallel requests",
        tipP:
            "For independent calls, don’t await them one-by-one—run them with <code>Promise.all</code> (or <code>allSettled</code>) and await the combined promise.",
        prevTopic: "Promises",
        nextTopic: "Event loop",
    },
    ru: {
        docTitle: "JS.CORE | Async и await",
        metaDescription:
            "Async/await в JavaScript: эволюция асинхронного кода и практика.",
        nav: { intro: "Введение", how: "Как работает", comparison: "Сравнение" },
        h1: "Async / await",
        subtitle: '"Эволюция асинхронного кода"',
        s01Title: "Введение",
        s01Lead:
            "<code>async</code>/<code>await</code> (ES2017) позволяют писать асинхронный код почти как обычный.",
        s01AsyncTitle: "1. Что делает async",
        s01AsyncP: "Перед функцией гарантирует, что она вернёт промис.",
        s01AsyncLi1: '<span class="dot"></span> Результат всегда промис.',
        s01AsyncLi2:
            '<span class="dot"></span> Обычные значения оборачиваются в <code>Promise.resolve()</code>.',
        s01AwaitTitle: "2. Что делает await",
        s01AwaitP:
            "<code>await</code> работает только внутри <code>async</code> и ждёт завершения промиса.",
        s01AwaitTip:
            "<b>Важно:</b> <code>await</code> не блокирует весь движок — другие задачи выполняются.",
        s02Title: "Как это работает",
        s02VisTitle: "Разбор примера",
        s02WhyTitle: "4. Зачем async/await",
        thAdv: "Плюс",
        thDesc: "Описание",
        trRead: "Читаемость",
        trReadD: "Линейный поток; меньше длинных цепочек <code>.then</code>.",
        trErr: "Ошибки",
        trErrD: "Привычный <code>try...catch</code>.",
        trDbg: "Отладка",
        trDbgD: "Проще ставить брейкпоинты по строкам.",
        trCond: "Условия",
        trCondD: "Проще ветвление по результатам async-операций.",
        s03Title: "Сравнение",
        s03SubTitle: "Промисы и async/await",
        s03PromTitle: "Промисы (.then)",
        s03AsyncBoxTitle: "Async / await",
        tipTitle: "🚀 Параллельные запросы",
        tipP:
            "Для независимых запросов не делайте последовательные <code>await</code> — используйте <code>Promise.all</code> или <code>allSettled</code>.",
        prevTopic: "Промисы",
        nextTopic: "Event loop",
    },
};
