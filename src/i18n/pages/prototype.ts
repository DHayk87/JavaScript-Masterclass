export default {
    hy: {
        docTitle: "JS.CORE | Պրոտոտիպային ժառանգում",
        metaDescription:
            "JavaScript-ի պրոտոտիպային ժառանգման (Prototypal Inheritance) խորացված ուղեցույց. F.prototype, constructor և prototype chain:",
        nav: {
            prototypeDef: "Նախատիպ",
            fPrototype: "F.prototype",
            whyPrototype: "Ինչու՞",
            inheritance: "Ժառանգություն",
            lookup: "Lookup",
        },
        h1: "OOP & Prototypes (ES5)",
        subtitle:
            '"JavaScript-ը պրոտոտիպային լեզու է։ Հասկանալով պրոտոտիպերը՝ դուք տիրապետում եք լեզվի հիմքին։"',
        s01Title: "Ինչ է Prototype-ը:",
        s01Lead:
            'JavaScript-ում ամեն օբյեկտ ունի հատուկ թաքնված հատկություն՝ <code>[[Prototype]]</code>, որը կա՛մ <b>null</b> է, կա՛մ հղում է մեկ այլ օբյեկտի։',
        s01IdeaTitle: "Գաղափարը",
        s01IdeaP:
            "Եթե մենք փորձում ենք կարդալ մի հատկություն, որը չկա օբյեկտի մեջ, JS-ը ավտոմատ այն փնտրում է իր <b>prototype</b>-ի մեջ։",
        s02Title: "F.prototype (Ֆունկցիայի նախատիպ)",
        s02Lead:
            "Երբ մենք ստեղծում ենք օբյեկտ կոնստրուկտոր ֆունկցիայի միջոցով <code>new F()</code>, նոր օբյեկտի <code>[[Prototype]]</code>-ը դառնում է այն օբյեկտը, որին հղվում է <code>F.prototype</code>-ը։",
        s02ExTitle: "Օրինակ",
        s02NoteTitle: "Կարևոր է",
        s02NoteP:
            "<code>Animal.prototype</code>-ը սովորական օբյեկտ է, որն ունի մեկ նախնական հատկություն՝ <b>constructor</b>, որը հղվում է հենց ֆունկցիայի վրա։",
        s03Title: "Ինչու՞ օգտագործել Prototype մեթոդների համար:",
        s03Lead: "Պատկերացրեք՝ ունեք 1000 հատ Animal օբյեկտ։",
        s03BadTitle: "❌ Առանց Prototype",
        s03BadP:
            "Եթե մեթոդը սահմանեք կոնստրուկտորի ներսում, ամեն օբյեկտի հետ կստեղծվի նոր ֆունկցիա (հիշողության վատնում)։",
        s03GoodTitle: "✅ Prototype-ով",
        s03GoodP:
            "Ֆունկցիան ստեղծվում է մեկ անգամ <code>Animal.prototype</code>-ում, և բոլոր օբյեկտները հղվում են նույն ֆունկցիայի վրա։",
        s04Title: "Ժառանգություն (Prototypal Inheritance)",
        s04Lead:
            "Ժառանգությունը հիմնված է <b>Prototypal Delegation</b>-ի վրա: Օբյեկտը պատվիրակում է հարցումները ծնողին, երբ իր մոտ չի գտնում հատկությունը:",
        s04Step1Title: "1. Կոնստրուկտորի կանչ (Constructor Stealing)",
        s04Step2Title: "2. Prototype Chain-ի կառուցում",
        s04Step3Title: "3. Մեթոդների ավելացում և Override",
        s05Title: "Ինչպե՞ս է JS-ը փնտրում հատկությունը",
        s05Lead:
            "Երբ դուք կանչում եք <code>bugsy.move()</code>, տեղի է ունենում հետևյալը.",
        s05Li1: "1. <b>Search in bugsy</b>: Կա՞ move հենց օբյեկտում:",
        s05Li2: "2. <b>Search in Rabbit.prototype</b>: JS-ը բարձրանում է վերև:",
        s05Li3: "3. <b>Search in Animal.prototype</b>: Եթե նախորդում չլիներ:",
        s05Li4: "4. <b>Object.prototype</b>: Վերջին կանգառը:",
        s05FaqTitle: "⚠️ Հաճախակի տրվող հարց",
        s05FaqP:
            "Ինչու՞ չօգտագործել <code>Rabbit.prototype = new Animal()</code>: Սա վատ պրակտիկա է, որովհետև ստեղծում է ավելորդ դաշտեր prototype-ում: <code>Object.create</code>-ը ստեղծում է մաքուր կապ:",
        tip1Title: "__proto__ vs prototype",
        tip1P:
            "<b>prototype</b>-ը հատկություն է ֆունկցիաների համար։<br /><br /><b>[[Prototype]]</b> (կամ <code>__proto__</code>) կա բոլոր օբյեկտներում։",
        tip2Title: "Performance & Native",
        tip2P:
            "Բոլոր ներկառուցված օբյեկտները ունեն իրենց նախատիպերը։ Օգտագործեք <code>obj.hasOwnProperty(key)</code> միայն սեփական հատկությունների համար։",
        prevTopic: "Closures",
        nextTopic: "ES6 Classes",
    },
    en: {
        docTitle: "JS.CORE | Prototypal inheritance",
        metaDescription:
            "Prototypes, F.prototype, constructors, and the prototype chain in JavaScript (ES5 style OOP).",
        nav: {
            prototypeDef: "Prototype",
            fPrototype: "F.prototype",
            whyPrototype: "Why",
            inheritance: "Inheritance",
            lookup: "Lookup",
        },
        h1: "OOP & prototypes (ES5)",
        subtitle:
            '"JavaScript is prototype-based—master prototypes and you master the core of the language."',
        s01Title: "What is a prototype?",
        s01Lead:
            'Every object has a hidden <code>[[Prototype]]</code> link—either <b>null</b> or another object.',
        s01IdeaTitle: "The idea",
        s01IdeaP:
            "If a property is missing on the object, JS looks it up along the prototype chain.",
        s02Title: "F.prototype",
        s02Lead:
            "With <code>new F()</code>, the new object’s internal prototype points at <code>F.prototype</code>.",
        s02ExTitle: "Example",
        s02NoteTitle: "Important",
        s02NoteP:
            "<code>F.prototype</code> is an ordinary object with a <b>constructor</b> back-reference by default.",
        s03Title: "Why put methods on the prototype?",
        s03Lead: "Imagine creating 1000 instances.",
        s03BadTitle: "❌ Without prototype methods",
        s03BadP: "Defining methods in the constructor duplicates functions per instance.",
        s03GoodTitle: "✅ With prototype methods",
        s03GoodP: "One shared function on <code>Animal.prototype</code> for every instance.",
        s04Title: "Prototypal inheritance",
        s04Lead:
            "Inheritance is delegation: an object forwards lookups to its prototype parent.",
        s04Step1Title: "1. Constructor stealing",
        s04Step2Title: "2. Wiring the prototype chain",
        s04Step3Title: "3. Adding / overriding methods",
        s05Title: "How property lookup works",
        s05Lead: "When you call <code>bugsy.move()</code>:",
        s05Li1: "1. <b>Own object</b>: is <code>move</code> on the instance?",
        s05Li2: "2. <b>Rabbit.prototype</b>: walk up the chain.",
        s05Li3: "3. <b>Animal.prototype</b>: continue if still missing.",
        s05Li4: "4. <b>Object.prototype</b>: last built-in stop before <code>null</code>.",
        s05FaqTitle: "FAQ",
        s05FaqP:
            "Prefer <code>Object.create(Parent.prototype)</code> over <code>Child.prototype = new Parent()</code> to avoid accidental instance fields on the prototype object.",
        tip1Title: "__proto__ vs prototype",
        tip1P:
            "<b>prototype</b> exists on functions.<br /><br /><b>[[Prototype]]</b> / <code>__proto__</code> is the link every object follows for lookups.",
        tip2Title: "Performance & built-ins",
        tip2P:
            "Built-ins like Array and Date have their own prototypes. Use <code>Object.hasOwn(obj, key)</code> (modern) or <code>obj.hasOwnProperty</code> carefully for own keys.",
        prevTopic: "Closures",
        nextTopic: "ES6 classes",
    },
    ru: {
        docTitle: "JS.CORE | Прототипное наследование",
        metaDescription:
            "Прототипы, F.prototype, конструкторы и цепочка прототипов в JavaScript (ООП в стиле ES5).",
        nav: {
            prototypeDef: "Прототип",
            fPrototype: "F.prototype",
            whyPrototype: "Зачем",
            inheritance: "Наследование",
            lookup: "Поиск",
        },
        h1: "ООП и прототипы (ES5)",
        subtitle:
            '"JavaScript — прототипный язык; поняв прототипы, вы понимаете основу языка."',
        s01Title: "Что такое прототип?",
        s01Lead:
            'У каждого объекта есть скрытая ссылка <code>[[Prototype]]</code> — <b>null</b> или другой объект.',
        s01IdeaTitle: "Идея",
        s01IdeaP:
            "Если свойства нет на объекте, движок ищет его в цепочке прототипов.",
        s02Title: "F.prototype",
        s02Lead:
            "При <code>new F()</code> внутренний прототип нового объекта указывает на <code>F.prototype</code>.",
        s02ExTitle: "Пример",
        s02NoteTitle: "Важно",
        s02NoteP:
            "<code>F.prototype</code> — обычный объект со свойством <b>constructor</b> по умолчанию.",
        s03Title: "Зачем методы на прототипе?",
        s03Lead: "Представьте 1000 экземпляров.",
        s03BadTitle: "❌ Без прототипных методов",
        s03BadP: "Методы в конструкторе дублируют функции на каждый экземпляр.",
        s03GoodTitle: "✅ С прототипными методами",
        s03GoodP: "Одна общая функция на <code>Animal.prototype</code>.",
        s04Title: "Прототипное наследование",
        s04Lead:
            "Наследование — делегирование: объект перенаправляет поиск родителю.",
        s04Step1Title: "1. Вызов родительского конструктора",
        s04Step2Title: "2. Построение цепочки прототипов",
        s04Step3Title: "3. Добавление / переопределение методов",
        s05Title: "Как ищется свойство",
        s05Lead: "При вызове <code>bugsy.move()</code>:",
        s05Li1: "1. <b>Собственные свойства</b> экземпляра.",
        s05Li2: "2. <b>Rabbit.prototype</b>.",
        s05Li3: "3. <b>Animal.prototype</b>.",
        s05Li4: "4. <b>Object.prototype</b> — последняя встроенная ступень.",
        s05FaqTitle: "Частый вопрос",
        s05FaqP:
            "Лучше <code>Object.create(Parent.prototype)</code>, чем <code>Child.prototype = new Parent()</code>, чтобы не тащить лишние поля на прототип.",
        tip1Title: "__proto__ vs prototype",
        tip1P:
            "<b>prototype</b> — у функций.<br /><br /><b>[[Prototype]]</b> / <code>__proto__</code> — ссылка, по которой идёт поиск у объектов.",
        tip2Title: "Производительность и встроенные типы",
        tip2P:
            "У Array, Date и др. свои прототипы. Для «своих» ключей используйте <code>Object.hasOwn</code> (современно) или аккуратно <code>hasOwnProperty</code>.",
        prevTopic: "Замыкания",
        nextTopic: "Классы ES6",
    },
};
