export default {
    hy: {
        docTitle: "JS.CORE | Օբյեկտներ",
        metaDescription:
            "JavaScript օբյեկտների (Objects) խորացված ուղեցույց. հղումներ, պատճենում (cloning), Garbage Collection և const-ի պարադոքսը:",
        nav: {
            basics: "Հիմունքներ",
            access: "Հասանելիություն",
            loops: "Ցիկլեր",
            references: "Հղումներ",
        },
        h1: "Օբյեկտներ (Objects)",
        subtitle: '"Օբյեկտները JavaScript-ի հիմնական կառուցվածքային միավորներն են:"',
        s01Title: "Հիմունքներ և Սինտաքս",
        s01Lead:
            "Ի տարբերություն պրիմիտիվների, օբյեկտները պահում են <b>հավաքածուներ</b>: Դրանք կարող ենք պատկերացնել որպես պահարաններ, որտեղ ամեն դարակ ունի իր անունը (key) և պարունակությունը (value):",
        s01CreateTitle: "Ստեղծում",
        s01OpsTitle: "Գործողություններ",
        s01LiAdd:
            '<span class="dot"></span> <b>Ավելացում:</b> <code>user.isAdmin = true;</code>',
        s01LiDel:
            '<span class="dot"></span> <b>Հեռացում:</b> <code>delete user.age;</code>',
        s01LiComma:
            '<span class="dot"></span> <b>Trailing comma:</b> Վերջին ստորակետը թույլատրելի է:',
        s01ConstTitle: "🔒 Const-ի պարադոքսը",
        s01ConstP:
            'Շատերը կարծում են, որ եթե օբյեկտը հայտարարված է <code>const</code>-ով, այն չի կարող փոփոխվել։ Իրականում <code>const</code>-ը պաշտպանում է <b>հղումը</b>, այլ ոչ թե բովանդակությունը։ <br /><br />❌ <b>Արգելված է:</b> Փոփոխականին նոր հասցե վերագրելը (<code>user = { ... }</code>) <br />✅ <b>Թույլատրված է:</b> Գոյություն ունեցող հասցեի ներսում դարակների պարունակությունը փոխելը (<code>user.name = "New Name"</code>)',
        s02Title: "Հասանելիության մեթոդներ",
        s02DotTitle: "Dot Notation (.)",
        s02DotP: "Ամենատարածված ձևն է: Օգտագործվում է, երբ բանալին պարզ տեքստ է:",
        s02BrTitle: "Square Brackets ([])",
        s02BrP: "Օգտագործվում է բարդ բանալիների կամ դինամիկ փոփոխականների դեպքում:",
        s02InTip:
            '<b>\"in\" օպերատոր:</b> Ստուգում է արդյոք բանալին գոյություն ունի օբյեկտում:<br /><code><span class=\"hl-str\">\"name\"</span> <span class=\"hl-kw\">in</span> user; <span class=\"hl-cm\">// true</span></code>',
        s03Title: "Ցիկլեր (for...in)",
        s03Lead:
            "<code>for..in</code> ցիկլը հատուկ նախատեսված է օբյեկտի բոլոր ստեղծված բանալիների վրայով անցնելու համար։",
        s03PassTitle: "Հատկությունների շրջանցում",
        s03IntTitle: '🔢 Հերթականության կանոնը (The "Integer" Rule)',
        s03IntP:
            "Եթե բանալիները կարող են փոխակերպվել ամբողջ թվի, ապա դրանք կդասավորվեն աճման կարգով։",
        s03ExTitle: "Օրինակ",
        s03WhyTitle: "Ինչո՞ւ է սա կարևոր",
        s03WhyP: "1, 41 և 49-ը ամբողջ թվեր են և տեսակավորվում են։",
        s03ProTitle: "💡 Մասնագիտական հուշում",
        s03ProLi1:
            '<span class="dot"></span> <b>Զանգվածներ:</b> Խուսափեք <code>for..in</code>-ից զանգվածների դեպքում:',
        s03ProLi2:
            '<span class="dot"></span> <b>Հերթականության պահպանում:</b> Եթե ուզում եք, որ թվերը չտեսակավորվեն, ավելացրեք <code>+</code> նշանը:',
        s03ProLi3:
            '<span class="dot"></span> <b>Prototype Chain:</b> <code>for..in</code>-ը տեսնում է նաև ժառանգված հատկությունները:',
        s04Title: "References (Հղումներ)",
        s04Lead:
            "Օբյեկտի ամենակարևոր տարբերությունը պրիմիտիվներից այն է, որ դրանք պահվում և պատճենվում են <b>ըստ հղման</b>:",
        s04RememberTitle: "Հիշեք",
        s04RememberP:
            "Երբ պատճենում եք օբյեկտը, դուք պատճենում եք միայն նրա <b>հասցեն</b> հիշողության մեջ:",
        s04CmpTitle: "⚖️ Համեմատում (Comparison Logic)",
        s04CmpP:
            "<code>{} == {}</code> միշտ <b>false</b> է: JS-ը համեմատում է հասցեները, ոչ թե պարունակությունը:",
        s04GcTitle: "♻️ Garbage Collection (Աղբահանություն)",
        s04GcP: 'Եթե օբյեկտին տանող բոլոր հղումները ջնջվում են, այն դառնում է <b>\"Unreachable\"</b>:',
        s04CloneTitle: "👯 Ինչպես իրականում պատճենել (Cloning)",
        thMethod: "Մեթոդ",
        thType: "Տեսակ",
        thWhen: "Երբ օգտագործել",
        tr1c: "Shallow Copy",
        tr1d: "Երբ օբյեկտը պարզ է (չունի ներդրված օբյեկտներ)",
        tr2c: "Deep Copy",
        tr2d: "Ժամանակակից ստանդարտ՝ ամբողջական պատճենի համար",
        s04WarnTitle: "⚠️ Գործնական զգուշացում (Side Effects)",
        s04WarnP:
            "«Երբ դուք օբյեկտը փոխանցում եք ֆունկցիային որպես արգումենտ, դուք փոխանցում եք <b>հղումը</b>։ Սա կարող է բերել <b>Side Effects</b>»։",
        prevTopic: "Code Parsing",
        nextTopic: "Arrays",
    },
    en: {
        docTitle: "JS.CORE | Objects",
        metaDescription:
            "Deep dive into JavaScript objects: references, cloning, garbage collection, and the const “paradox”.",
        nav: {
            basics: "Basics",
            access: "Access",
            loops: "Loops",
            references: "References",
        },
        h1: "Objects",
        subtitle: '"Objects are the core structural units of JavaScript."',
        s01Title: "Basics & syntax",
        s01Lead:
            "Unlike primitives, objects store <b>collections</b> of key/value pairs—like labeled drawers.",
        s01CreateTitle: "Creation",
        s01OpsTitle: "Operations",
        s01LiAdd:
            '<span class="dot"></span> <b>Add:</b> <code>user.isAdmin = true;</code>',
        s01LiDel:
            '<span class="dot"></span> <b>Remove:</b> <code>delete user.age;</code>',
        s01LiComma:
            '<span class="dot"></span> <b>Trailing comma</b> on the last property is allowed.',
        s01ConstTitle: "The const “paradox”",
        s01ConstP:
            '<code>const</code> locks the <b>binding</b>, not deep immutability. <br /><br />❌ <b>Not allowed:</b> reassign the variable (<code>user = { ... }</code>) <br />✅ <b>Allowed:</b> mutate properties in place (<code>user.name = "New Name"</code>)',
        s02Title: "Access patterns",
        s02DotTitle: "Dot notation",
        s02DotP: "Most common when the key is a simple identifier.",
        s02BrTitle: "Bracket notation",
        s02BrP: "Use for dynamic keys or keys that aren’t valid identifiers.",
        s02InTip:
            '<b><code>in</code> operator:</b> checks whether a key exists on the object (including the prototype chain).<br /><code><span class=\"hl-str\">\"name\"</span> <span class=\"hl-kw\">in</span> user; <span class=\"hl-cm\">// true</span></code>',
        s03Title: "Loops (for...in)",
        s03Lead: "<code>for...in</code> enumerates enumerable string keys of an object.",
        s03PassTitle: "Iteration",
        s03IntTitle: "The “integer index” rule",
        s03IntP: "Keys that look like array indices may be visited in numeric order.",
        s03ExTitle: "Example",
        s03WhyTitle: "Why it matters",
        s03WhyP: "1, 41, and 49 are integers and may be sorted numerically.",
        s03ProTitle: "Pro tips",
        s03ProLi1:
            '<span class="dot"></span> <b>Arrays:</b> avoid <code>for...in</code> for arrays.',
        s03ProLi2:
            '<span class="dot"></span> <b>Order:</b> prefix with <code>+</code> if you need to avoid numeric sorting quirks.',
        s03ProLi3:
            '<span class="dot"></span> <b>Prototype chain:</b> <code>for...in</code> can include inherited enumerable properties.',
        s04Title: "References",
        s04Lead: "Objects are stored and copied <b>by reference</b>, unlike primitives.",
        s04RememberTitle: "Remember",
        s04RememberP:
            "Assigning or passing an object copies the reference, not the object “contents”.",
        s04CmpTitle: "Comparison logic",
        s04CmpP:
            "<code>{} === {}</code> is <b>false</b> because JS compares references, not deep structure.",
        s04GcTitle: "Garbage collection",
        s04GcP: "When no references remain, the object becomes <b>unreachable</b> and can be collected.",
        s04CloneTitle: "How to actually clone",
        thMethod: "Method",
        thType: "Type",
        thWhen: "When to use",
        tr1c: "Shallow copy",
        tr1d: "Simple flat objects without nested objects",
        tr2c: "Deep copy",
        tr2d: "Modern standard for full structured cloning",
        s04WarnTitle: "Side effects",
        s04WarnP:
            "Passing an object into a function passes its <b>reference</b>—mutations can cause <b>side effects</b>.",
        prevTopic: "Code parsing",
        nextTopic: "Arrays",
    },
    ru: {
        docTitle: "JS.CORE | Объекты",
        metaDescription:
            "Подробно об объектах JavaScript: ссылки, клонирование, сборка мусора и «парадокс» const.",
        nav: { basics: "Основы", access: "Доступ", loops: "Циклы", references: "Ссылки" },
        h1: "Объекты",
        subtitle: '"Объекты — главные структурные единицы JavaScript."',
        s01Title: "Основы и синтаксис",
        s01Lead:
            "В отличие от примитивов, объекты хранят <b>коллекции</b> пар ключ/значение.",
        s01CreateTitle: "Создание",
        s01OpsTitle: "Операции",
        s01LiAdd:
            '<span class="dot"></span> <b>Добавить:</b> <code>user.isAdmin = true;</code>',
        s01LiDel:
            '<span class="dot"></span> <b>Удалить:</b> <code>delete user.age;</code>',
        s01LiComma:
            '<span class="dot"></span> <b>Запятая в конце</b> последнего свойства допустима.',
        s01ConstTitle: "«Парадокс» const",
        s01ConstP:
            '<code>const</code> фиксирует <b>привязку</b>, а не глубокую неизменяемость. <br /><br />❌ <b>Нельзя:</b> переназначить переменную (<code>user = { ... }</code>) <br />✅ <b>Можно:</b> менять свойства на месте (<code>user.name = "New Name"</code>)',
        s02Title: "Способы доступа",
        s02DotTitle: "Точечная запись",
        s02DotP: "Самый частый вариант для простых ключей-идентификаторов.",
        s02BrTitle: "Квадратные скобки",
        s02BrP: "Нужны для динамических ключей или нестандартных имён.",
        s02InTip:
            '<b>Оператор <code>in</code>:</b> проверяет наличие ключа (включая цепочку прототипов).<br /><code><span class=\"hl-str\">\"name\"</span> <span class=\"hl-kw\">in</span> user; <span class=\"hl-cm\">// true</span></code>',
        s03Title: "Циклы (for...in)",
        s03Lead:
            "<code>for...in</code> перечисляет перечислимые строковые ключи объекта.",
        s03PassTitle: "Обход",
        s03IntTitle: "Правило «целочисленных» ключей",
        s03IntP:
            "Ключи, похожие на индексы массива, могут обходиться в числовом порядке.",
        s03ExTitle: "Пример",
        s03WhyTitle: "Почему важно",
        s03WhyP: "1, 41 и 49 — целые числа и могут сортироваться по возрастанию.",
        s03ProTitle: "Советы",
        s03ProLi1:
            '<span class="dot"></span> <b>Массивы:</b> не используйте <code>for...in</code>.',
        s03ProLi2:
            '<span class="dot"></span> <b>Порядок:</b> префикс <code>+</code> помогает избежать числовой сортировки.',
        s03ProLi3:
            '<span class="dot"></span> <b>Цепочка прототипов:</b> <code>for...in</code> видит унаследованные перечислимые свойства.',
        s04Title: "Ссылки",
        s04Lead:
            "Объекты хранятся и копируются <b>по ссылке</b>, в отличие от примитивов.",
        s04RememberTitle: "Запомните",
        s04RememberP: "При присваивании или передаче в функцию копируется ссылка.",
        s04CmpTitle: "Сравнение",
        s04CmpP: "<code>{} === {}</code> — <b>false</b>, потому что сравниваются ссылки.",
        s04GcTitle: "Сборка мусора",
        s04GcP: "Если ссылок не осталось, объект становится <b>недостижимым</b>.",
        s04CloneTitle: "Как клонировать",
        thMethod: "Метод",
        thType: "Тип",
        thWhen: "Когда",
        tr1c: "Shallow copy",
        tr1d: "Простые плоские объекты без вложенности",
        tr2c: "Deep copy",
        tr2d: "Современный стандарт для полного клонирования",
        s04WarnTitle: "Побочные эффекты",
        s04WarnP:
            "В функцию передаётся <b>ссылка</b> — мутации могут давать <b>побочные эффекты</b>.",
        prevTopic: "Разбор кода",
        nextTopic: "Массивы",
    },
};
