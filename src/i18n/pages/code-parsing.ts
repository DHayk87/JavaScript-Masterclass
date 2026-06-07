export default {
    hy: {
        docTitle: "JS.CORE | JS շարժիչի վիզուալիզատոր",
        metaDescription:
            "Ինտերակտիվ ուղեցույց JavaScript շարժիչի (V8) աշխատանքի մասին. Parser, AST, Ignition և TurboFan փուլերը:",
        nav: { workflow: "Գործիքակազմ", details: "Մանրամասներ" },
        h1: "JS շարժիչի վիզուալիզատոր",
        subtitle: "Ինտերակտիվ ուղեցույց ուսանողների համար",
        s01Title: "Գործիքակազմ (Pipeline)",
        placeholder: "Սեղմեք որևէ փուլի վրա՝ գործընթացը տեսնելու համար",
        whatLabel: "Ի՞նչ է տեղի ունենում",
        visualLabel: "Վիզուալ օրինակ",
        s02Title: "Մանրամասներ (Insights)",
        ins1Title: "JIT Optimization (V8 Pipeline)",
        ins1P:
            'Շարժիչը չի սպասում ամբողջ կոդի թարգմանությանը։ Այն օգտագործում է <span class="font-bold">Ignition (Interpreter)</span>՝ բայթ-կոդի արագ ստեղծման համար, և <span class="font-bold">TurboFan (Optimizing Compiler)</span>, որը վերլուծում է <span class="italic">"Hot"</span> ֆունկցիաները և դրանք վերածում օպտիմիզացված մեքենայական կոդի։',
        ins2Title: "Hidden Classes (Shapes)",
        ins2P:
            'V8-ը ստեղծում է <span class="font-bold">Hidden Classes</span> (հայտնի նաև որպես <span class="italic">Shapes</span>): Սա թույլ է տալիս կիրառել <span class="font-bold">Inline Caching (IC)</span> տեխնոլոգիան, որը ապահովում է <span class="font-bold">Property Access</span>-ի արագությունը՝ հիշողության մեջ տվյալների ֆիքսված տեղակայման շնորհիվ:',
        ins3Title: "Garbage Collector (GC)",
        ins3P:
            'JS-ը կիրառում է <span class="font-bold">Automatic Memory Management</span>: Հիմնական <span class="font-bold">Garbage Collector</span>-ը աշխատում է <span class="italic">"Mark-and-Sweep"</span> ալգորիթմով։ Այն ազատում է հիշողությունը այն օբյեկտներից, որոնք այլևս <span class="font-bold">Unreachable</span> են։',
        stage1Title: "Parser (Վերլուծիչ)",
        stage1Sub: "Կոդի ընթերցում և մասնատում",
        stage1Desc:
            "Այս փուլում շարժիչը կարդում է ձեր JS ֆայլը որպես սովորական տեքստ։ Այն սկզբում կատարում է Tokenization, այնուհետև ստուգում է քերականական սխալները։ Եթե սխալ կա, կոդը չի գործարկվի։",
        stage1Visual:
            '<span class="hl-kw">let</span> age = <span class="hl-num">20</span>;<br><br><span class="hl-cm">// Թոքեններ:</span><br>[LET, ID:age, EQUAL, NUM:20]',
        stage2Title: "AST (Ծառի կառուցում)",
        stage2Sub: "Աբստրակտ սինտաքսային ծառ",
        stage2Desc:
            "Թոքենները վերածվում են հիերարխիկ ծառի։ Սա թույլ է տալիս շարժիչին հասկանալ, թե որ գործողությունը որից հետո պետք է կատարվի։",
        stage2Visual:
            "Program<br>└─ VariableDeclaration<br>   └─ id: \"age\"<br>   └─ value: 20",
        stage3Title: "Ignition (Բայթ-կոդ)",
        stage3Sub: "Ինտերպրետատորի մեկնարկը",
        stage3Desc:
            "Շարժիչը վերածում է AST-ն բայթ-կոդի։ Այս պահից ձեր կոդը սկսում է աշխատել։ Ignition-ը փորձում է արագ սկսել աշխատանքը։",
        stage3Visual: "LdaGlobal [0]<br>Star r1<br>LdaSmi [20]<br>Star r0<br>Return",
        stage4Title: "TurboFan (Օպտիմալացում)",
        stage4Sub: "Մեքենայական կոդի գեներացիա",
        stage4Desc:
            "Եթե ֆունկցիան հաճախ է կանչվում, այն ուղարկվում է TurboFan-ին, որը գեներացնում է արագ մեքենայական կոդ։",
        stage4Visual:
            '10110010 00101011<br>11001100 11110001<br><span class="hl-cm">// Ամենաարագ մակարդակը</span>',
        prevTopic: "Array Methods",
        nextTopic: "Closures",
    },
    en: {
        docTitle: "JS.CORE | JS engine visualizer",
        metaDescription:
            "Interactive tour of the JavaScript (V8) engine: parser, AST, Ignition, and TurboFan.",
        nav: { workflow: "Pipeline", details: "Details" },
        h1: "JavaScript engine visualizer",
        subtitle: "Interactive guide for learners",
        s01Title: "Pipeline",
        placeholder: "Click a stage to see what happens",
        whatLabel: "What happens",
        visualLabel: "Visual example",
        s02Title: "Insights",
        ins1Title: "JIT optimization (V8 pipeline)",
        ins1P:
            'The engine does not wait to compile everything. It uses <span class="font-bold">Ignition</span> for quick bytecode and <span class="font-bold">TurboFan</span> to optimize <span class="italic">hot</span> functions into fast machine code.',
        ins2Title: "Hidden classes (shapes)",
        ins2P:
            'V8 builds <span class="font-bold">hidden classes</span> (<span class="italic">shapes</span>) to power <span class="font-bold">inline caching</span> and fast <span class="font-bold">property access</span>.',
        ins3Title: "Garbage collector (GC)",
        ins3P:
            'JS uses <span class="font-bold">automatic memory management</span>. The main <span class="font-bold">GC</span> typically uses a <span class="italic">mark-and-sweep</span> style approach to free <span class="font-bold">unreachable</span> objects.',
        stage1Title: "Parser",
        stage1Sub: "Reading and tokenizing code",
        stage1Desc:
            "The engine reads your file as text, tokenizes it, and checks grammar. Syntax errors stop execution here.",
        stage1Visual:
            '<span class="hl-kw">let</span> age = <span class="hl-num">20</span>;<br><br><span class="hl-cm">// Tokens:</span><br>[LET, ID:age, EQUAL, NUM:20]',
        stage2Title: "AST construction",
        stage2Sub: "Abstract syntax tree",
        stage2Desc:
            "Tokens become a hierarchical tree so the engine knows evaluation order—including nested blocks.",
        stage2Visual:
            "Program<br>└─ VariableDeclaration<br>   └─ id: \"age\"<br>   └─ value: 20",
        stage3Title: "Ignition (bytecode)",
        stage3Sub: "Interpreter startup",
        stage3Desc:
            "The AST is lowered to bytecode. Your code can start running; Ignition favors a fast start.",
        stage3Visual: "LdaGlobal [0]<br>Star r1<br>LdaSmi [20]<br>Star r0<br>Return",
        stage4Title: "TurboFan (optimization)",
        stage4Sub: "Machine code generation",
        stage4Desc:
            "Hot functions are sent to TurboFan, which emits highly optimized machine code.",
        stage4Visual:
            '10110010 00101011<br>11001100 11110001<br><span class="hl-cm">// Fastest tier</span>',
        prevTopic: "Array Methods",
        nextTopic: "Closures",
    },
    ru: {
        docTitle: "JS.CORE | Визуализатор движка JS",
        metaDescription:
            "Интерактивный гид по движку JavaScript (V8): парсер, AST, Ignition и TurboFan.",
        nav: { workflow: "Конвейер", details: "Подробности" },
        h1: "Визуализатор движка JavaScript",
        subtitle: "Интерактивное пособие для учебы",
        s01Title: "Конвейер",
        placeholder: "Нажмите этап, чтобы увидеть процесс",
        whatLabel: "Что происходит",
        visualLabel: "Наглядный пример",
        s02Title: "Подробности",
        ins1Title: "JIT-оптимизация (конвейер V8)",
        ins1P:
            'Движок не ждёт полной компиляции. <span class="font-bold">Ignition</span> быстро даёт байткод, а <span class="font-bold">TurboFan</span> оптимизирует <span class="italic">горячие</span> функции в машинный код.',
        ins2Title: "Скрытые классы (shapes)",
        ins2P:
            'V8 строит <span class="font-bold">скрытые классы</span> для <span class="font-bold">инлайн-кэширования</span> и быстрого <span class="font-bold">доступа к свойствам</span>.',
        ins3Title: "Сборщик мусора (GC)",
        ins3P:
            'В JS <span class="font-bold">автоматическое управление памятью</span>. Основной <span class="font-bold">GC</span> обычно использует подход в духе <span class="italic">mark-and-sweep</span> для недостижимых объектов.',
        stage1Title: "Парсер",
        stage1Sub: "Чтение и токенизация",
        stage1Desc:
            "Файл читается как текст, разбивается на токены и проверяется грамматика. Синтаксические ошибки останавливают выполнение.",
        stage1Visual:
            '<span class="hl-kw">let</span> age = <span class="hl-num">20</span>;<br><br><span class="hl-cm">// Токены:</span><br>[LET, ID:age, EQUAL, NUM:20]',
        stage2Title: "Построение AST",
        stage2Sub: "Абстрактное синтаксическое дерево",
        stage2Desc:
            "Токены превращаются в дерево, чтобы движок знал порядок вычислений, включая вложенные блоки.",
        stage2Visual:
            "Program<br>└─ VariableDeclaration<br>   └─ id: \"age\"<br>   └─ value: 20",
        stage3Title: "Ignition (байткод)",
        stage3Sub: "Старт интерпретатора",
        stage3Desc:
            "AST переводится в байткод. Код начинает выполняться; Ignition даёт быстрый старт.",
        stage3Visual: "LdaGlobal [0]<br>Star r1<br>LdaSmi [20]<br>Star r0<br>Return",
        stage4Title: "TurboFan (оптимизация)",
        stage4Sub: "Генерация машинного кода",
        stage4Desc:
            "Часто вызываемые функции попадают в TurboFan, который генерирует быстрый машинный код.",
        stage4Visual:
            '10110010 00101011<br>11001100 11110001<br><span class="hl-cm">// Самый быстрый уровень</span>',
        prevTopic: "Методы массивов",
        nextTopic: "Замыкания",
    },
};
