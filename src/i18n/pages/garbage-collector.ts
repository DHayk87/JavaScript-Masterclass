export default {
    hy: {
        docTitle: "JS.CORE | Garbage Collector",
        metaDescription:
            "Ինչպե՞ս է աշխատում JavaScript-ի հիշողության կառավարումը և աղբահավաքը (GC):",

        nav: {
            overview: "Ընդհանուր",
            stackHeap: "Stack & Heap",
            roots: "Roots",
            markAndSweep: "Mark & Sweep",
            generational: "Generational GC",
            leaks: "Memory Leaks",
        },

        h1: "Garbage Collector",
        subtitle:
            '"JavaScript-ը ինքնուրույն է մաքրում հիշողությունը, բայց դա չի նշանակում, որ մենք կարող ենք լինել անփույթ։"',

        glMemory: "Memory",
        glMemoryP:
            "Ծրագրի կողմից օգտագործվող տարածքը: JS-ը ավտոմատ է կառավարում հիշողության հատկացումն ու ազատումը։",

        glRoot: "Root",
        glRootP:
            "Ներկայիս ակտիվ տվյալները (Global objects, Stack), որտեղից GC-ն սկսում է հասանելիության ստուգումը։",

        glStack: "Stack",
        glStackP: "Լոկալ փոփոխականներ և ֆունկցիաների կանչեր (Execution Context):",

        glHeap: "Heap",
        glHeapP:
            "Օբյեկտներ, զանգվածներ և ֆունկցիաներ: Այստեղ տվյալները դինամիկ են և զբաղեցնում են հիմնական հիշողությունը։",

        s01Title: "Memory Management in JS",
        s01P1: "Ի տարբերություն ցածր մակարդակի լեզուների (ինչպիսին է C-ն), JS-ն ունի <b>ավտոմատ հիշողության կառավարում</b>։",
        s01P2: "Garbage Collector-ը (GC) անտեսանելի գործընթաց է, որը պարբերաբար ստուգում է հիշողությունը և հեռացնում այն ամենը, ինչն այլևս «հասանելի» չէ ծրագրին։",

        s02Title: "Stack vs Heap",
        s02StackTitle: "Stack (Ստեկ)",
        s02StackP:
            "Պահպանում է Value Types (number, string, boolean) և ֆունկցիաների կանչերը։ Աշխատում է շատ արագ, քանի որ ունի ֆիքսված կառուցվածք (LIFO)։",

        s02HeapTitle: "Heap (Կույտ)",
        s02HeapP:
            "Պահպանում է Reference Types (objects, arrays)։ Այստեղ տվյալների չափը կանխատեսելի չէ, ուստի կառավարումը պահանջում է ավելի շատ ռեսուրսներ։",

        s03Title: "Reachability (Հասանելիություն)",
        s03P1: "GC-ի հիմնական սկզբունքը հասանելիությունն է։ Տվյալները մնում են հիշողության մեջ, եթե դրանք կարելի է գտնել՝ սկսելով Roots-ից։",

        s03Li1: "Գլոբալ օբյեկտներ (<code>window</code> կամ <code>global</code>)",
        s03Li2: "Կանչերի ստեկում (Call Stack) գտնվող լոկալ փոփոխականներ",
        s03Li3: "Ակտիվ Closure-ների մեջ պահվող փոփոխականներ",

        s04Title: "Mark-and-Sweep Algorithm",
        s04P: "Սա ժամանակակից JS շարժիչների (V8, SpiderMonkey) հիմնական ալգորիթմն է։",

        s04MarkTitle: "1. Mark (Նշել)",
        s04MarkP:
            "Գլոբալ աղբյուրներից (<b>roots</b>) սկսելով՝ GC-ն նշում է բոլոր հասանելի օբյեկտներին: Եթե մի օբյեկտ հասանելի չէ, նշիչը չի դնի։",

        s04SweepTitle: "2. Sweep (Մաքրել)",
        s04SweepP:
            "Բոլոր այն օբյեկտները, որոնք մնացել են նշված, համարվում են հասանելի և չեն ջնջվի։",

        s05Title: "Generational Garbage Collection",
        s05P1: "Ժամանակակից GC-ները (հատկապես V8) օգտագործում են սերունդային մոտեցում, քանի որ օբյեկտների մեծ մասը «մահանում է երիտասարդ»։",

        s05YoungTitle: "Young Generation (Նոր սերունդ)",
        s05YoungP:
            "Այստեղ են ստեղծվում նոր օբյեկտների մեծ մասը։ GC-ն աշխատում է շատ հաճախ և արագ (Minor GC / Scavenger)։",

        s05OldTitle: "Old Generation (Հին սերունդ)",
        s05OldP:
            "Օբյեկտները, որոնք գոյատևել են մի քանի Minor GC, տեղափոխվում են այստեղ։ Մաքրումը տեղի է ունենում ավելի հազվադեպ (Major GC)։",

        s06Title: "Common Memory Leaks",
        s06P1: "Չնայած ավտոմատ հիշողության կառավարմանը, JS-ում հնարավոր է «հիշողության արտահոսք» (memory leak)։",
        s06P2: "Հիշողության արտահոսք տեղի է ունենում, երբ մենք պատահաբար պահում ենք հղումներ այն օբյեկտների վրա, որոնք մեզ այլևս պետք չեն։",

        s06Li1: "<b>Global Variables:</b> Պատահական ստեղծված գլոբալ փոփոխականները երբեք չեն ջնջվում։",
        s06Li2: "<b>Forgotten Timers:</b> Չդադարեցված <code>setInterval</code>-ները շարունակում են պահել հղումներ։",
        s06Li3: "<b>Detached DOM nodes:</b> HTML-ից հեռացված էլեմենտները մնում են հիշողության մեջ, եթե JS-ում հղում կա։",
        s06Li4: "<b>Uncleared Event Listeners:</b> <code>addEventListener</code> առանց <code>removeEventListener</code>-ի։",
        s06Li5: "<b>Closures with large data:</b> Փակումներ, որոնք պատահաբար պահում են մեծ տվյալներ։",

        s07Title: "Ինչպե՞ս գտնել Memory Leaks",
        s07P: "Chrome DevTools-ը լավագույն գործիքն է այս խնդիրը լուծելու համար։",
        s07Tools: [
            "Memory tab → Heap Snapshot (համեմատել սնապշոտները)",
            "Allocation instrumentation on timeline",
            "Performance ձայնագրում JS Heap-ով",
            "Memory profiler",
        ],

        proTipTitle: "💡 Pro Tip",
        proTipP:
            "Օգտագործեք <code>WeakMap</code> և <code>WeakSet</code>, որպեսզի պահեք օբյեկտներ առանց խանգարելու GC-ին։",
        proTipP2:
            "Պրոֆեսիոնալ մակարդակում կարող եք օգտագործել նաև <code>WeakRef</code> և <code>FinalizationRegistry</code> (բայց զգույշ)։",

        nextTopic: "Գլխավոր էջ",
        prevTopic: "Event Loop",
    },

    // =========================================================================
    ru: {
        docTitle: "JS.CORE | Garbage Collector",
        metaDescription:
            "Как работает управление памятью и сборщик мусора (GC) в JavaScript?",

        nav: {
            overview: "Обзор",
            stackHeap: "Stack & Heap",
            roots: "Roots",
            markAndSweep: "Mark & Sweep",
            generational: "Generational GC",
            leaks: "Утечки памяти",
        },

        h1: "Garbage Collector",
        subtitle:
            '"JavaScript самостоятельно очищает память, но это не значит, что мы можем быть небрежными."',

        glMemory: "Memory",
        glMemoryP:
            "Область памяти, используемая программой. JS автоматически управляет выделением и освобождением памяти.",

        glRoot: "Root",
        glRootP:
            "Активные данные (Global objects, Stack), с которых GC начинает проверку доступности.",

        glStack: "Stack",
        glStackP: "Локальные переменные и вызовы функций (Execution Context).",

        glHeap: "Heap",
        glHeapP:
            "Объекты, массивы и функции. Здесь данные динамические и занимают основную память.",

        s01Title: "Memory Management in JS",
        s01P1: "В отличие от низкоуровневых языков (например, C), JavaScript имеет <b>автоматическое управление памятью</b>.",
        s01P2: "Garbage Collector (GC) — это невидимый процесс, который периодически проверяет память и удаляет всё, что больше недоступно программе.",

        s02Title: "Stack vs Heap",
        s02StackTitle: "Stack (Стек)",
        s02StackP:
            "Хранит Value Types (number, string, boolean) и вызовы функций. Работает очень быстро благодаря фиксированной структуре (LIFO).",

        s02HeapTitle: "Heap (Куча)",
        s02HeapP:
            "Хранит Reference Types (objects, arrays). Размер данных здесь непредсказуем, поэтому управление требует больше ресурсов.",

        s03Title: "Reachability (Достижимость)",
        s03P1: "Основной принцип GC — <b>достижимость</b>. Данные остаются в памяти, если до них можно добраться, начиная с <b>Roots</b>.",

        s03Li1: "Глобальные объекты (<code>window</code> или <code>global</code>)",
        s03Li2: "Локальные переменные в стеке вызовов (Call Stack)",
        s03Li3: "Переменные, сохранённые в активных Closure",

        s04Title: "Mark-and-Sweep Algorithm",
        s04P: "Это основной алгоритм современных JS-движков (V8, SpiderMonkey).",

        s04MarkTitle: "1. Mark (Пометка)",
        s04MarkP:
            "GC «помечает» все объекты, до которых можно добраться, двигаясь от корней по цепочке ссылок.",

        s04SweepTitle: "2. Sweep (Очистка)",
        s04SweepP:
            "Все объекты, которые остались «непомеченными», считаются недостижимыми и удаляются.",

        s05Title: "Generational Garbage Collection",
        s05P1: "Современные GC (особенно V8) используют поколенческий подход — большинство объектов «умирают молодыми».",

        s05YoungTitle: "Young Generation (Молодое поколение)",
        s05YoungP:
            "Здесь создаётся большинство новых объектов. GC работает очень часто и быстро (Minor GC).",

        s05OldTitle: "Old Generation (Старое поколение)",
        s05OldP:
            "Объекты, пережившие несколько Minor GC, перемещаются сюда. Очистка происходит реже (Major GC).",

        s06Title: "Common Memory Leaks",
        s06P1: "Несмотря на автоматическое управление памятью, в JS возможно возникновение <b>утечек памяти</b> (memory leak).",
        s06P2: "Утечка памяти происходит, когда мы случайно сохраняем ссылки на объекты, которые больше не нужны.",

        s06Li1: "<b>Global Variables:</b> Случайно созданные глобальные переменные никогда не удаляются.",
        s06Li2: "<b>Forgotten Timers:</b> Неостановленные <code>setInterval</code> продолжают хранить ссылки.",
        s06Li3: "<b>Detached DOM nodes:</b> Удалённые из HTML элементы остаются в памяти, если есть ссылка из JS.",
        s06Li4: "<b>Uncleared Event Listeners:</b> <code>addEventListener</code> без <code>removeEventListener</code>.",
        s06Li5: "<b>Closures with large data:</b> Замыкания, которые случайно захватывают большие данные.",

        s07Title: "Как находить Memory Leaks",
        s07P: "Самый мощный инструмент — Chrome DevTools.",
        s07Tools: [
            "Memory tab → Heap Snapshot (сравнение снимков)",
            "Allocation instrumentation on timeline",
            "Performance recording с JS Heap",
            "Memory profiler",
        ],

        proTipTitle: "💡 Pro Tip",
        proTipP:
            "Используйте <code>WeakMap</code> и <code>WeakSet</code>, чтобы хранить объекты, не препятствуя их сборке GC.",
        proTipP2:
            "На продвинутом уровне можно использовать <code>WeakRef</code> и <code>FinalizationRegistry</code>.",

        prevTopic: "Event Loop",
        nextTopic: "На главную",
    },

    // =========================================================================
    en: {
        docTitle: "JS.CORE | Garbage Collector",
        metaDescription:
            "How does JavaScript memory management and Garbage Collection (GC) work?",

        nav: {
            overview: "Overview",
            stackHeap: "Stack & Heap",
            roots: "Roots",
            markAndSweep: "Mark & Sweep",
            generational: "Generational GC",
            leaks: "Memory Leaks",
        },

        h1: "Garbage Collector",
        subtitle:
            '"JavaScript cleans memory automatically, but that does not mean we can be careless."',

        glMemory: "Memory",
        glMemoryP:
            "The space used by a program. JavaScript automatically manages memory allocation and deallocation.",

        glRoot: "Root",
        glRootP:
            "Currently active data (Global objects, Stack) from which the GC starts reachability checks.",

        glStack: "Stack",
        glStackP: "Stores local variables and function calls (Execution Context).",

        glHeap: "Heap",
        glHeapP:
            "Stores objects, arrays, and functions. Data here is dynamic and occupies the main memory space.",

        s01Title: "Memory Management in JS",
        s01P1: "Unlike low-level languages such as C, JavaScript has <b>automatic memory management</b>.",
        s01P2: "The Garbage Collector (GC) is an invisible process that periodically checks memory and removes everything that is no longer reachable.",

        s02Title: "Stack vs Heap",
        s02StackTitle: "Stack",
        s02StackP:
            "Stores Value Types (number, string, boolean) and function calls. Works very fast due to fixed LIFO structure.",

        s02HeapTitle: "Heap",
        s02HeapP:
            "Stores Reference Types (objects, arrays). Data size is unpredictable, so management requires more resources.",

        s03Title: "Reachability",
        s03P1: "The core principle of GC is <b>reachability</b>. Data remains in memory if it can be reached from the <b>Roots</b>.",

        s03Li1: "Global objects (<code>window</code> or <code>global</code>)",
        s03Li2: "Local variables inside the call stack",
        s03Li3: "Variables stored inside active closures",

        s04Title: "Mark-and-Sweep Algorithm",
        s04P: "This is the main algorithm used by modern JS engines (V8, SpiderMonkey).",

        s04MarkTitle: "1. Mark",
        s04MarkP:
            "The GC 'marks' all reachable objects by traversing references from the roots.",

        s04SweepTitle: "2. Sweep",
        s04SweepP: "All unmarked objects are considered unreachable and are removed.",

        s05Title: "Generational Garbage Collection",
        s05P1: "Modern GCs (especially V8) use a generational approach because most objects 'die young'.",

        s05YoungTitle: "Young Generation",
        s05YoungP:
            "Most new objects are created here. GC runs very frequently and fast (Minor GC / Scavenger).",

        s05OldTitle: "Old Generation",
        s05OldP:
            "Objects that survive several Minor GC cycles are moved here. Cleanup happens less often (Major GC).",

        s06Title: "Common Memory Leaks",
        s06P1: "Despite automatic memory management, <b>memory leaks</b> are possible in JS.",
        s06P2: "Memory leaks occur when we accidentally keep references to objects that are no longer needed.",

        s06Li1: "<b>Global Variables:</b> Accidentally created global variables are never cleaned up.",
        s06Li2: "<b>Forgotten Timers:</b> Uncleared <code>setInterval</code> calls keep references.",
        s06Li3: "<b>Detached DOM nodes:</b> Removed DOM elements stay in memory if JS still references them.",
        s06Li4: "<b>Uncleared Event Listeners:</b> <code>addEventListener</code> without <code>removeEventListener</code>.",
        s06Li5: "<b>Closures with large data:</b> Closures that accidentally capture big objects or data.",

        s07Title: "How to Find Memory Leaks",
        s07P: "Chrome DevTools is the best tool for detecting memory leaks.",
        s07Tools: [
            "Memory tab → Heap Snapshot (compare snapshots)",
            "Allocation instrumentation on timeline",
            "Performance recording with JS Heap",
            "Memory profiler",
        ],

        proTipTitle: "💡 Pro Tip",
        proTipP:
            "Use <code>WeakMap</code> and <code>WeakSet</code> to store objects without preventing the Garbage Collector from cleaning them up.",
        proTipP2:
            "At an advanced level you can also use <code>WeakRef</code> and <code>FinalizationRegistry</code> (with caution).",

        prevTopic: "Event Loop",
        nextTopic: "Home",
    },
};
