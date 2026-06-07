export default {
    hy: {
        docTitle: "JS.CORE | Promise",
        metaDescription:
            "Խորացված ուղեցույց JavaScript Promise-ների վերաբերյալ։ Վիճակներ, շղթայական կանչեր, և ստատիկ մեթոդներ։",
        nav: { states: "Վիճակներ", usage: "Ստեղծում", chaining: "Շղթա", methods: "Մեթոդներ" },
        h1: "Promises (Խոստումներ)",
        subtitle: '"Ասինխրոն գործողությունների կառավարման ժամանակակից գործիքը։"',
        s01Title: "Promise-ի 3 վիճակները",
        s01Lead: "Promise-ը միշտ գտնվում է այս 3 վիճակներից մեկում.",
        s01Li1:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> <b>Pending (Սպասում):</b> Սկզբնական վիճակը, երբ գործողությունը դեռ չի ավարտվել։',
        s01Li2:
            '<span class="dot" style="background-color: #2ecc71"></span> <b>Fulfilled / Resolved (Կատարված):</b> Գործողությունը հաջողությամբ ավարտվել է։',
        s01Li3:
            '<span class="dot" style="background-color: #e74c3c"></span> <b>Rejected (Մերժված):</b> Տեղի է ունեցել սխալ։',
        s01MermaidTitle: "5. Mermaid վիզուալիզացիա (Flow)",
        s02Title: "Ստեղծում և Օգտագործում",
        s02Lead:
            "Promise ստեղծելու համար օգտագործում ենք <code>new Promise</code> կոնստրուկտորը, որը ստանում է <code>resolve</code> և <code>reject</code>:",
        s03Title: "Promise Chaining (Շղթայական կանչեր)",
        s03Lead:
            "Մենք կարող ենք կապել մի քանի <code>.then()</code> իրար, և ամեն հաջորդը կստանա նախորդի վերադարձրած արժեքը։",
        s04Title: "Static Methods (Promise-ի մեթոդները)",
        s04Lead: "Երբ աշխատում ես մի քանի Promise-ների հետ միաժամանակ.",
        smAllTitle: "Promise.all()",
        smAllP:
            "Սպասում է բոլորի հաջող ավարտին։ Եթե մեկը ձախողվի, ամբողջը ձախողվում է։",
        smSettledTitle: "Promise.allSettled()",
        smSettledP: "Սպասում է բոլորին՝ հաջող կամ մերժված։",
        smRaceTitle: "Promise.race()",
        smRaceP: "Վերադարձնում է առաջին ավարտված Promise-ը։",
        smAnyTitle: "Promise.any()",
        smAnyP:
            "Առաջին հաջողվածը, կամ AggregateError, եթե բոլորը մերժված են։",
        smResolveTitle: "Promise.resolve()",
        smResolveP: "Արդեն կատարված Promise տվյալ արժեքով։",
        smRejectTitle: "Promise.reject()",
        smRejectP: "Արդեն մերժված Promise։",
        smWithTitle: "Promise.withResolvers()",
        smWithP: "Վերադարձնում է promise, resolve և reject՝ դրսից կառավարման համար։",
        smTryTitle: "Promise.try()",
        smTryP: "Փաթեթավորում է սինխրոն/ասինխրոն ֆունկցիայի արդյունքը Promise-ում։",
        tipTitle: "💡 Pro-Tip Masterclass-ի համար",
        tipP:
            "Promise-ը չի վերացնում ասինխրոնությունը, այլ այն դարձնում է կառավարելի։ Սա կամուրջ է դեպի <b>Async/Await</b>:",
        prevTopic: "Event Loop",
        nextTopic: "Async/Await",
    },
    en: {
        docTitle: "JS.CORE | Promises",
        metaDescription:
            "Promises in depth: states, chaining, and static helper methods.",
        nav: { states: "States", usage: "Creation", chaining: "Chaining", methods: "Statics" },
        h1: "Promises",
        subtitle: '"A modern tool for managing asynchronous work."',
        s01Title: "The three states",
        s01Lead: "A promise is always in exactly one of these states.",
        s01Li1:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> <b>Pending:</b> work not finished yet.',
        s01Li2:
            '<span class="dot" style="background-color: #2ecc71"></span> <b>Fulfilled:</b> completed successfully.',
        s01Li3:
            '<span class="dot" style="background-color: #e74c3c"></span> <b>Rejected:</b> failed with an error.',
        s01MermaidTitle: "5. Flow visualization (Mermaid)",
        s02Title: "Creating and using promises",
        s02Lead:
            "Use <code>new Promise((resolve, reject) => { ... })</code> to wrap async work.",
        s03Title: "Chaining",
        s03Lead:
            "Each <code>.then()</code> can transform the value and return the next promise.",
        s04Title: "Static methods",
        s04Lead: "When coordinating multiple promises at once.",
        smAllTitle: "Promise.all()",
        smAllP: "Waits for all to fulfill; one rejection rejects the whole batch.",
        smSettledTitle: "Promise.allSettled()",
        smSettledP: "Waits for every promise to settle, success or failure.",
        smRaceTitle: "Promise.race()",
        smRaceP: "Resolves/rejects with the first settled promise.",
        smAnyTitle: "Promise.any()",
        smAnyP: "First fulfillment wins; if all fail, you get an AggregateError.",
        smResolveTitle: "Promise.resolve()",
        smResolveP: "Wrap a value in an already fulfilled promise.",
        smRejectTitle: "Promise.reject()",
        smRejectP: "Create an already rejected promise.",
        smWithTitle: "Promise.withResolvers()",
        smWithP: "Returns { promise, resolve, reject } for manual control.",
        smTryTitle: "Promise.try()",
        smTryP: "Runs a function and wraps its result or thrown error as a promise.",
        tipTitle: "💡 Masterclass tip",
        tipP:
            "Promises don’t remove asynchrony—they structure it. Async/await is syntax on top of promises.",
        prevTopic: "Event Loop",
        nextTopic: "Async/await",
    },
    ru: {
        docTitle: "JS.CORE | Промисы",
        metaDescription:
            "Промисы: состояния, цепочки then/catch и статические методы.",
        nav: { states: "Состояния", usage: "Создание", chaining: "Цепочки", methods: "Статика" },
        h1: "Промисы",
        subtitle: '"Современный способ управлять асинхронностью."',
        s01Title: "Три состояния",
        s01Lead: "Промис всегда находится ровно в одном из этих состояний.",
        s01Li1:
            '<span class="dot" style="background-color: var(--js-yellow)"></span> <b>Pending:</b> работа ещё не завершена.',
        s01Li2:
            '<span class="dot" style="background-color: #2ecc71"></span> <b>Fulfilled:</b> успешно завершён.',
        s01Li3:
            '<span class="dot" style="background-color: #e74c3c"></span> <b>Rejected:</b> ошибка.',
        s01MermaidTitle: "5. Визуализация потока (Mermaid)",
        s02Title: "Создание и использование",
        s02Lead:
            "Используйте <code>new Promise((resolve, reject) => { ... })</code>.",
        s03Title: "Цепочки",
        s03Lead:
            "Каждый <code>.then()</code> может преобразовать значение и вернуть новый промис.",
        s04Title: "Статические методы",
        s04Lead: "Когда нужно координировать несколько промисов.",
        smAllTitle: "Promise.all()",
        smAllP: "Ждёт все fulfill; один reject ломает весь набор.",
        smSettledTitle: "Promise.allSettled()",
        smSettledP: "Ждёт завершения каждого — успех или ошибка.",
        smRaceTitle: "Promise.race()",
        smRaceP: "Побеждает первый завершившийся промис.",
        smAnyTitle: "Promise.any()",
        smAnyP: "Первый успешный; если все упали — AggregateError.",
        smResolveTitle: "Promise.resolve()",
        smResolveP: "Уже выполненный промис со значением.",
        smRejectTitle: "Promise.reject()",
        smRejectP: "Уже отклонённый промис.",
        smWithTitle: "Promise.withResolvers()",
        smWithP: "Возвращает { promise, resolve, reject } для ручного управления.",
        smTryTitle: "Promise.try()",
        smTryP: "Оборачивает результат или исключение функции в промис.",
        tipTitle: "💡 Совет",
        tipP:
            "Промисы структурируют асинхронность; async/await — синтаксис поверх промисов.",
        prevTopic: "Цикл событий",
        nextTopic: "Async/await",
    },
};
