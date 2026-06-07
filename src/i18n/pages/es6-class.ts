export default {
    hy: {
        docTitle: "JS.CORE | ES6 Classes",
        metaDescription:
            "Իմացեք ամեն ինչ ES6 Class-ների մասին. սինտաքս, ժառանգություն և ժամանակակից OOP JavaScript-ում:",
        nav: {
            syntax: "Սինտաքս",
            inheritance: "Ժառանգություն",
            advanced: "Advanced",
            hierarchy: "Աստիճանակարգ",
            comparison: "Համեմատություն",
        },
        h1: "ES6 Classes",
        subtitle:
            '"Classes-ը բերեցին ավելի մաքուր և հասկանալի սինտաքս (syntactic sugar) նախատիպային ժառանգության վրա աշխատելու համար։"',
        s01Title: "Հիմնական Սինտաքսը",
        s01Lead:
            "<code>class</code>-ը փոխարինում է ES5-ի կոնստրուկտոր ֆունկցիաներին։ Այն թույլ է տալիս մեկ տեղում հայտարարել և՛ կոնստրուկտորը, և՛ մեթոդները։",
        s02Title: "Ժառանգություն (Inheritance)",
        s02Lead:
            "ES6-ում ժառանգությունը իրականացվում է <code>extends</code> բանալի բառի միջոցով։",
        s02SuperTitle: "super() կանչը",
        s02SuperP:
            "Եթե ժառանգ կլասում գրում եք <code>constructor</code>, ապա <code>super()</code>-ը կանչելը պարտադիր է, քանի դեռ չեք օգտագործել <code>this</code>-ը։",
        s03Title: "Static, Private & Getters",
        s03StaticTitle: "Static Մեթոդներ",
        s03StaticP: "Պատկանում են հենց կլասին, այլ ոչ թե նրա օբյեկտներին։",
        s03PrivateTitle: "Private Հատկություններ (#)",
        s03PrivateP: "<code>#</code> սիմվոլը հատկությունը դարձնում է իսկապես փակ։",
        s03GetterTitle: "Getters & Setters",
        s04Title: "Multilevel & Hierarchical Inheritance",
        s04Lead:
            "Բազմամակարդակ ժառանգությունը թույլ է տալիս ստեղծել բարդ համակարգեր, որտեղ ընդհանուր հատկությունները բարձրանում են վերև։",
        s04TreeTitle: "🧬 Ժառանգության աստիճանակարգը (Class Hierarchy)",
        s04ExTitle: "💻 Կիրառման օրինակ (ES6)",
        s04ChainTitle: "Prototype Chain View",
        s04ChainP:
            "<code>myDog</code> → <code>Shepherd.prototype</code> → <code>Dog.prototype</code> → <code>Animal.prototype</code> → <code>Object.prototype</code>։",
        s05Title: "ES6 Class vs ES5 Prototype",
        s05M1Title: "1. ES6 Class Structure",
        s05M2Title: "2. Internal Prototype Chain",
        footHoistTitle: "Hoisting & Strict Mode",
        footHoistLi1:
            "<b>No Hoisting</b>: Կլասը չի կարելի օգտագործել մինչև հայտարարելը։",
        footHoistLi2:
            '<b>Strict Mode</b>: Կլասի ներսի կոդը միշտ աշխատում է "use strict"-ով։',
        footEnumTitle: "Enumerability",
        footEnumP:
            "Կլասի մեթոդները <code>enumerable: false</code> են և չեն երևում <code>for..in</code>-ով։",
        prevTopic: "Prototypes (ES5)",
        nextTopic: "Garbage Collector",
    },
    en: {
        docTitle: "JS.CORE | ES6 classes",
        metaDescription:
            "ES6 class syntax, inheritance, and modern OOP patterns in JavaScript.",
        nav: {
            syntax: "Syntax",
            inheritance: "Inheritance",
            advanced: "Advanced",
            hierarchy: "Hierarchy",
            comparison: "Comparison",
        },
        h1: "ES6 classes",
        subtitle:
            '"Classes add clearer syntax (syntactic sugar) on top of prototypal inheritance."',
        s01Title: "Basic syntax",
        s01Lead:
            "<code>class</code> replaces constructor-function boilerplate and groups the constructor with methods in one place.",
        s02Title: "Inheritance",
        s02Lead: "Use <code>extends</code> to inherit from another class.",
        s02SuperTitle: "Calling super()",
        s02SuperP:
            "If a subclass defines <code>constructor</code>, you must call <code>super()</code> before touching <code>this</code>.",
        s03Title: "Static, private & accessors",
        s03StaticTitle: "Static methods",
        s03StaticP: "Belong to the constructor, not instances.",
        s03PrivateTitle: "Private fields (#)",
        s03PrivateP: "The <code>#</code> prefix makes a field truly private.",
        s03GetterTitle: "Getters & setters",
        s04Title: "Multilevel inheritance",
        s04Lead:
            "Hierarchies let shared behavior live higher up and specialized behavior lower down.",
        s04TreeTitle: "🧬 Class hierarchy",
        s04ExTitle: "💻 Example (ES6)",
        s04ChainTitle: "Prototype chain view",
        s04ChainP:
            "<code>myDog</code> → <code>Shepherd.prototype</code> → <code>Dog.prototype</code> → <code>Animal.prototype</code> → <code>Object.prototype</code>.",
        s05Title: "ES6 class vs ES5 prototype",
        s05M1Title: "1. ES6 class structure",
        s05M2Title: "2. Internal prototype chain",
        footHoistTitle: "Hoisting & strict mode",
        footHoistLi1: "<b>No hoisting</b>: you can’t use a class before its declaration.",
        footHoistLi2: "<b>Strict mode</b>: class bodies always run in strict mode.",
        footEnumTitle: "Enumerability",
        footEnumP:
            "Class methods are non-enumerable, so they won’t show up in a naive <code>for...in</code> over instances.",
        prevTopic: "Prototypes (ES5)",
        nextTopic: "Garbage Collector",
    },
    ru: {
        docTitle: "JS.CORE | Классы ES6",
        metaDescription:
            "Синтаксис классов ES6, наследование и современный ООП-подход в JavaScript.",
        nav: {
            syntax: "Синтаксис",
            inheritance: "Наследование",
            advanced: "Продвинутое",
            hierarchy: "Иерархия",
            comparison: "Сравнение",
        },
        h1: "Классы ES6",
        subtitle:
            '"Классы дают более чистый синтаксис (синтаксический сахар) поверх прототипного наследования."',
        s01Title: "Базовый синтаксис",
        s01Lead:
            "<code>class</code> заменяет шаблон с функцией-конструктором и собирает конструктор и методы в одном месте.",
        s02Title: "Наследование",
        s02Lead: "Для наследования используется <code>extends</code>.",
        s02SuperTitle: "Вызов super()",
        s02SuperP:
            "Если в подклассе есть <code>constructor</code>, нужно вызвать <code>super()</code> до обращения к <code>this</code>.",
        s03Title: "Статика, приватность и аксессоры",
        s03StaticTitle: "Статические методы",
        s03StaticP: "Принадлежат конструктору, а не экземплярам.",
        s03PrivateTitle: "Приватные поля (#)",
        s03PrivateP: "Префикс <code>#</code> делает поле действительно приватным.",
        s03GetterTitle: "Геттеры и сеттеры",
        s04Title: "Многоуровневое наследование",
        s04Lead:
            "Иерархии позволяют выносить общее поведение выше, а специализацию — ниже.",
        s04TreeTitle: "🧬 Иерархия классов",
        s04ExTitle: "💻 Пример (ES6)",
        s04ChainTitle: "Цепочка прототипов",
        s04ChainP:
            "<code>myDog</code> → <code>Shepherd.prototype</code> → <code>Dog.prototype</code> → <code>Animal.prototype</code> → <code>Object.prototype</code>.",
        s05Title: "ES6 class и ES5 prototype",
        s05M1Title: "1. Структура класса ES6",
        s05M2Title: "2. Внутренняя цепочка прототипов",
        footHoistTitle: "Поднятие и strict mode",
        footHoistLi1: "<b>Нет hoisting</b>: класс нельзя использовать до объявления.",
        footHoistLi2: "<b>Strict mode</b>: тело класса всегда в строгом режиме.",
        footEnumTitle: "Перечислимость",
        footEnumP:
            "Методы класса не перечислимы и не попадут в простой <code>for...in</code> по экземпляру.",
        prevTopic: "Прототипы (ES5)",
        nextTopic: "Сборка мусора",
    },
};
