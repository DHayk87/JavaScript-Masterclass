export default {
    hy: {
        docTitle: "JS.CORE | Պայմաններ և Լոգիկա",
        metaDescription:
            "JavaScript-ի պայմանական օպերատորներ (if, else), տերնար օպերատոր և լոգիկական կապեր (OR, AND, NOT, Nullish Coalescing):",
        nav: { comparison: "Համեմատություն", conditional: "Պայմաններ", logical: "Լոգիկա" },
        h1: "Պայմաններ և Լոգիկա",
        subtitle: '"Ծրագրի ընթացքը կախված է ճիշտ ընտրությունից և լոգիկական կապերից:"',
        s01Title: "Համեմատության Օպերատորներ",
        s01Lead:
            "Համեմատության օպերատորները վերադարձնում են բուլյան արժեք՝ <code>true</code> կամ <code>false</code>:",
        s01Box1Title: "Հիմնական Օպերատորներ",
        s01Li1:
            '<span class="dot"></span> <code>a &gt; b</code>, <code>a &lt; b</code> (Մեծ, փոքր)',
        s01Li2:
            '<span class="dot"></span> <code>a &gt;= b</code>, <code>a &lt;= b</code> (Մեծ կամ հավասար)',
        s01Li3:
            '<span class="dot"></span> <code>a == b</code>, <code>a != b</code> (Հավասարություն)',
        s01Box2Title: "Խիստ Հավասարություն",
        s01Box2P:
            "<code>===</code> օպերատորը ստուգում է թե՛ արժեքը, թե՛ տիպը: Խորհուրդ է տրվում միշտ օգտագործել այն:",
        s02Title: "Պայմանական Ճյուղավորում (if, else if, else)",
        s02Lead:
            "<code>if</code> հրահանգը ստուգում է պայմանը և կատարում կոդը, եթե արդյունքը <code>true</code> է: Բարդ դեպքերում օգտագործվում են <code>else if</code> և <code>else</code>:",
        s02IfElseTitle: "if-else if-else Կառուցվածք",
        s02TernaryTitle: "Տերնար օպերատոր (Ternary Operator)",
        s02TernaryP: "Կարճ տարբերակ պայմանի համար (Conditional Operator):",
        s02TernaryNote:
            '<i>Կառուցվածք՝ &nbsp; <code>պայման ? արժեք_եթե_true : արժեք_եթե_false</code></i>',
        s03Title: "Լոգիկական Օպերատորներ (OR, AND, NOT)",
        s03OrTitle: "|| (OR / ԿԱՄ)",
        s03OrP: "Ճիշտ է, եթե գոնե մեկ պայմանը ճիշտ է:",
        s03AndTitle: "&& (AND / ԵՎ)",
        s03AndP: "Ճիշտ է միայն այն դեպքում, եթե բոլորը ճիշտ են:",
        s03NotTitle: "! (NOT / ՈՉ)",
        s03NotP: "Շրջում է արժեքը:",
        s03NullTitle: "?? (Nullish Coalescing)",
        s03NullP: "Վերադարձնում է առաջին «գոյություն ունեցող» արժեքը:",
        prevTopic: "Core Concepts",
        nextTopic: "Ցիկլեր և Switch",
    },
    en: {
        docTitle: "JS.CORE | Conditions & Logic",
        metaDescription:
            "Conditional operators (if/else), the ternary operator, and logical operators (OR, AND, NOT, nullish coalescing).",
        nav: { comparison: "Comparison", conditional: "Conditionals", logical: "Logic" },
        h1: "Conditions & Logic",
        subtitle: '"Control flow depends on correct choices and logical links."',
        s01Title: "Comparison operators",
        s01Lead:
            "Comparison operators return a boolean: <code>true</code> or <code>false</code>.",
        s01Box1Title: "Core operators",
        s01Li1:
            '<span class="dot"></span> <code>a &gt; b</code>, <code>a &lt; b</code> (greater, less)',
        s01Li2:
            '<span class="dot"></span> <code>a &gt;= b</code>, <code>a &lt;= b</code> (greater-or-equal)',
        s01Li3:
            '<span class="dot"></span> <code>a == b</code>, <code>a != b</code> (equality)',
        s01Box2Title: "Strict equality",
        s01Box2P:
            "<code>===</code> checks both value and type. Prefer it in real code.",
        s02Title: "Conditional branching (if, else if, else)",
        s02Lead:
            "<code>if</code> checks a condition and runs code when it is <code>true</code>. Use <code>else if</code> and <code>else</code> for more branches.",
        s02IfElseTitle: "if / else if / else structure",
        s02TernaryTitle: "Ternary operator",
        s02TernaryP: "A compact form for simple conditions.",
        s02TernaryNote:
            '<i>Pattern: <code>condition ? valueIfTrue : valueIfFalse</code></i>',
        s03Title: "Logical operators (OR, AND, NOT)",
        s03OrTitle: "|| (OR)",
        s03OrP: "True if at least one operand is true.",
        s03AndTitle: "&& (AND)",
        s03AndP: "True only if all operands are true.",
        s03NotTitle: "! (NOT)",
        s03NotP: "Negates the value.",
        s03NullTitle: "?? (nullish coalescing)",
        s03NullP: "Returns the first defined value (not null/undefined).",
        prevTopic: "Core Concepts",
        nextTopic: "Loops & Switch",
    },
    ru: {
        docTitle: "JS.CORE | Условия и логика",
        metaDescription:
            "Условные операторы (if/else), тернарный оператор и логические операторы (ИЛИ, И, НЕ, nullish coalescing).",
        nav: { comparison: "Сравнение", conditional: "Условия", logical: "Логика" },
        h1: "Условия и логика",
        subtitle: '"Поток программы зависит от верного выбора и логических связей."',
        s01Title: "Операторы сравнения",
        s01Lead:
            "Операторы сравнения возвращают булево значение: <code>true</code> или <code>false</code>.",
        s01Box1Title: "Основные операторы",
        s01Li1:
            '<span class="dot"></span> <code>a &gt; b</code>, <code>a &lt; b</code> (больше, меньше)',
        s01Li2:
            '<span class="dot"></span> <code>a &gt;= b</code>, <code>a &lt;= b</code> (больше или равно)',
        s01Li3:
            '<span class="dot"></span> <code>a == b</code>, <code>a != b</code> (равенство)',
        s01Box2Title: "Строгое равенство",
        s01Box2P:
            "<code>===</code> сравнивает и значение, и тип. В обычном коде лучше использовать его.",
        s02Title: "Ветвление (if, else if, else)",
        s02Lead:
            "<code>if</code> проверяет условие и выполняет код, если результат <code>true</code>. Для сложных случаев есть <code>else if</code> и <code>else</code>.",
        s02IfElseTitle: "Структура if / else if / else",
        s02TernaryTitle: "Тернарный оператор",
        s02TernaryP: "Краткая запись для простых условий.",
        s02TernaryNote:
            '<i>Схема: <code>условие ? значениеЕслиДа : значениеЕслиНет</code></i>',
        s03Title: "Логические операторы (ИЛИ, И, НЕ)",
        s03OrTitle: "|| (ИЛИ)",
        s03OrP: "Истина, если истинен хотя бы один операнд.",
        s03AndTitle: "&& (И)",
        s03AndP: "Истина только если истинны все операнды.",
        s03NotTitle: "! (НЕ)",
        s03NotP: "Инвертирует значение.",
        s03NullTitle: "?? (nullish coalescing)",
        s03NullP: "Возвращает первое определённое значение (не null/undefined).",
        prevTopic: "Базовые концепции",
        nextTopic: "Циклы и switch",
    },
};
