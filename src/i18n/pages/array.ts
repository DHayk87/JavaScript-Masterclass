export default {
    hy: {
        docTitle: "JS.CORE | զանգվածներ (Arrays)",
        metaDescription:
            "JavaScript զանգվածների խորացված ուղեցույց. push/pop, shift/unshift մեթոդներ, արտադրողականություն և շրջանցման եղանակներ:",
        nav: { basics: "Հիմունքներ", methods: "Մեթոդներ", loops: "Շրջանցում" },
        h1: "զանգվածներ (Arrays)",
        subtitle:
            '"զանգվածը հզոր գործիք է տվյալները կարգավորված պահելու և արդյունավետ մշակելու համար:"',
        glElement: "Element",
        glElementP: "զանգվածում պահվող արժեքը:",
        glIndex: "Index",
        glIndexP: "Տարրի դիրքը (սկսած 0-ից):",
        glLength: "Length",
        glLengthP: "Տարրերի քանակը (Max Index + 1):",
        s01Title: "Հայտարարում և Մուտք",
        s01Lead:
            "զանգվածները օբյեկտների հատուկ տեսակ են, որոնք նախատեսված են <b>կարգավորված</b> տվյալներ պահելու համար:",
        s01LitTitle: "Ստեղծում (Literal)",
        s01LitP: "Ամենատարածված ձևը քառակուսի փակագծերի օգտագործումն է:",
        s01AccTitle: "Տարրերի հասանելիություն",
        s01AccP:
            "Զանգվածի տարրերը համարակալվում են <b>0-ից</b>: Ցանկացած տարրի կարելի է <b>դիմել</b> իր համապատասխան ինդեքսի միջոցով:",
        s01FreeTitle: "Տեսակների ազատություն",
        s01FreeP:
            "զանգվածը կարող է պահել <b>ցանկացած</b> տեսակի տվյալ՝ string, number, boolean, object և նույնիսկ այլ զանգվածներ:",
        s01TypeTitle: "Տիպի ճշգրիտ ստուգում",
        s01TypeFoot:
            "* Քանի որ JS-ում զանգվածը օբյեկտ է, <code>typeof</code>-ը միշտ կվերադարձնի \"object\": Ճիշտ ստուգման համար միշտ օգտագործեք <code>Array.isArray()</code>:",
        s01DiagP:
            "զանգվածը հիշողության մեջ (Heap) պահվում է որպես օբյեկտ՝ հատուկ ներքին կառուցվածքով, որտեղ length-ը ավտոմատ թարմացվող հատկություն է:",
        s02Title: "Հիմնական Մեթոդներ (LIFO/FIFO)",
        s02EndTitle: "Վերջից (Արագ)",
        s02EndLi1: "<b>push</b>: Ավելացնում է տարր վերջից.",
        s02EndLi2: "<b>pop</b>: Հեռացնում է վերջին տարրը.",
        s02StartTitle: "Սկզբից (Դանդաղ)",
        s02StartLi1: "<b>unshift</b>: Ավելացնում է տարր սկզբից.",
        s02StartLi2: "<b>shift</b>: Հեռացնում է առաջին տարրը.",
        s02ExTitle: "Կոդի Օրինակ (Queue & Stack)",
        s02PerfTitle: "Ինչո՞ւ է սա կարևոր (Performance Insight)",
        s02FastTitle: "Արագ (O(1))",
        s02FastP:
            "<b>push</b> և <b>pop</b> մեթոդները միայն ավելացնում/հեռացնում են տարրը զանգվածի վերջից և թարմացնում length-ը:",
        s02SlowTitle: "Դանդաղ (O(n))",
        s02SlowP:
            "<b>shift</b> և <b>unshift</b> մեթոդների դեպքում JS-ը ստիպված է վերահասցեավորել բոլոր տարրերի ինդեքսները:",
        s03Title: "զանգվածների Շրջանցում",
        s03ForTitle: "for...of ցիկլ",
        s03ForP: "Ամենապարզ և ժամանակակից ձևը արժեքները ստանալու համար:",
        s03LenTitle: "length հատկությունը",
        s03LenP:
            "<code>arr.length</code>-ը միշտ վերադարձնում է վերջին ինդեքսը + 1: Այն կարելի է օգտագործել նաև զանգվածը մաքրելու համար՝ <code>arr.length = 0</code>:",
        s03LenTip:
            "💡 <b>Pro Tip:</b> Եթե ձեռքով փոքրացնեք <code>length</code>-ը, զանգվածը կկրճատվի (տվյալները կջնջվեն անվերադարձ):",
        prevTopic: "Objects",
        nextTopic: "զանգվածների մեթոդներ",
    },
    en: {
        docTitle: "JS.CORE | Arrays",
        metaDescription:
            "Arrays in depth: push/pop, shift/unshift, performance characteristics, and iteration patterns.",
        nav: { basics: "Basics", methods: "Methods", loops: "Iteration" },
        h1: "Arrays",
        subtitle:
            '"An array is a powerful way to store ordered data and process it efficiently."',
        glElement: "Element",
        glElementP: "A value stored at an index.",
        glIndex: "Index",
        glIndexP: "Position of an element (0-based).",
        glLength: "Length",
        glLengthP: "Number of elements (last index + 1).",
        s01Title: "Declaration & access",
        s01Lead:
            "Arrays are special objects designed to hold <b>ordered</b> sequences.",
        s01LitTitle: "Literal syntax",
        s01LitP: "The most common form uses square brackets.",
        s01AccTitle: "Accessing elements",
        s01AccP:
            "Elements are numbered from <b>0</b>; use an index to read or write a slot.",
        s01FreeTitle: "Mixed types",
        s01FreeP:
            "An array can hold strings, numbers, booleans, objects—even nested arrays.",
        s01TypeTitle: "Reliable type checks",
        s01TypeFoot:
            "* Because arrays are objects, <code>typeof []</code> is <code>\"object\"</code>. Prefer <code>Array.isArray()</code>.",
        s01DiagP:
            "In memory, arrays live on the heap with internal slots; <code>length</code> is maintained automatically.",
        s02Title: "Core methods (LIFO / FIFO)",
        s02EndTitle: "End of array (fast)",
        s02EndLi1: "<b>push</b>: append at the tail.",
        s02EndLi2: "<b>pop</b>: remove the last element.",
        s02StartTitle: "Start of array (slower)",
        s02StartLi1: "<b>unshift</b>: insert at the head.",
        s02StartLi2: "<b>shift</b>: remove the first element.",
        s02ExTitle: "Queue & stack example",
        s02PerfTitle: "Why performance differs",
        s02FastTitle: "Fast (O(1))",
        s02FastP: "<b>push</b>/<b>pop</b> only touch the tail and update <code>length</code>.",
        s02SlowTitle: "Slow (O(n))",
        s02SlowP:
            "<b>shift</b>/<b>unshift</b> must shift indices for every remaining element.",
        s03Title: "Iterating arrays",
        s03ForTitle: "for...of",
        s03ForP: "The simplest modern way to read values.",
        s03LenTitle: "The length property",
        s03LenP:
            "<code>arr.length</code> is lastIndex + 1. You can clear an array with <code>arr.length = 0</code>.",
        s03LenTip:
            "💡 <b>Tip:</b> shrinking <code>length</code> truncates elements irreversibly.",
        prevTopic: "Objects",
        nextTopic: "Array Methods",
    },
    ru: {
        docTitle: "JS.CORE | Массивы",
        metaDescription:
            "Массивы в JavaScript: push/pop, shift/unshift, производительность и обход.",
        nav: { basics: "Основы", methods: "Методы", loops: "Обход" },
        h1: "Массивы",
        subtitle:
            '"Массив — удобный способ хранить упорядоченные данные и обрабатывать их."',
        glElement: "Элемент",
        glElementP: "Значение по индексу.",
        glIndex: "Индекс",
        glIndexP: "Позиция элемента (с нуля).",
        glLength: "Длина",
        glLengthP: "Число элементов (последний индекс + 1).",
        s01Title: "Объявление и доступ",
        s01Lead:
            "Массивы — особый вид объектов для <b>упорядоченных</b> последовательностей.",
        s01LitTitle: "Литерал",
        s01LitP: "Чаще всего используют квадратные скобки.",
        s01AccTitle: "Доступ к элементам",
        s01AccP:
            "Элементы нумеруются с <b>0</b>; по индексу можно читать и записывать.",
        s01FreeTitle: "Смешанные типы",
        s01FreeP:
            "В массиве могут быть строки, числа, булевы значения, объекты и вложенные массивы.",
        s01TypeTitle: "Проверка типа",
        s01TypeFoot:
            "* Массив — объект, поэтому <code>typeof []</code> даёт <code>\"object\"</code>. Используйте <code>Array.isArray()</code>.",
        s01DiagP:
            "В памяти массив на куче с внутренними слотами; <code>length</code> обновляется автоматически.",
        s02Title: "Основные методы (LIFO / FIFO)",
        s02EndTitle: "С конца (быстро)",
        s02EndLi1: "<b>push</b>: добавить в хвост.",
        s02EndLi2: "<b>pop</b>: удалить последний элемент.",
        s02StartTitle: "С начала (медленнее)",
        s02StartLi1: "<b>unshift</b>: вставить в начало.",
        s02StartLi2: "<b>shift</b>: удалить первый элемент.",
        s02ExTitle: "Пример очереди и стека",
        s02PerfTitle: "Почему так по производительности",
        s02FastTitle: "Быстро (O(1))",
        s02FastP: "<b>push</b>/<b>pop</b> работают с хвостом и обновляют <code>length</code>.",
        s02SlowTitle: "Медленно (O(n))",
        s02SlowP:
            "<b>shift</b>/<b>unshift</b> сдвигают индексы у всех оставшихся элементов.",
        s03Title: "Обход массивов",
        s03ForTitle: "Цикл for...of",
        s03ForP: "Самый простой современный способ читать значения.",
        s03LenTitle: "Свойство length",
        s03LenP:
            "<code>arr.length</code> = последний индекс + 1. Можно очистить массив: <code>arr.length = 0</code>.",
        s03LenTip:
            "💡 <b>Совет:</b> уменьшение <code>length</code> безвозвратно обрезает элементы.",
        prevTopic: "Объекты",
        nextTopic: "Методы массивов",
    },
};
