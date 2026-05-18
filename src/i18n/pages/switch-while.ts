export default {
    hy: {
        docTitle: "JS.CORE | Switch և Loops",
        metaDescription:
            "JavaScript-ի switch կոնստրուկցիան, ցիկլերը (while, do...while, for) և Lexical Environment-ի աշխատանքի սկզբունքները:",
        nav: { switch: "Switch", loops: "Ցիկլեր", lexical: "Lexical Environment" },
        h1: "Switch և Ցիկլեր",
        subtitle:
            '"Կրկնությունը գիտության մայրն է, իսկ ընտրությունը՝ արդյունավետության գրավականը:"',
        s01Title: "Switch Կոնստրուկցիա",
        s01Lead:
            "<code>switch</code>-ը փոխարինում է մի քանի <code>if</code>-երին և կատարում է խիստ համեմատություն (<code>===</code>):",
        s01StructTitle: "Կառուցվածք",
        s01BreakTitle: "Break-ի Կարևորությունը",
        s01BreakP:
            "Առանց <code>break</code>-ի, կոդը կշարունակի կատարվել հաջորդ <code>case</code>-երի մեջ՝ անկախ պայմանից:",
        s02Title: "Ցիկլեր (while, do...while, for)",
        s02Lead: "Ցիկլերը թույլ են տալիս կատարել նույն կոդը բազմաթիվ անգամներ:",
        s02ForTitle: "for Ցիկլ",
        s02ForCaption: "<i>սկիզբ, պայման, քայլ:</i>",
        s02WhileTitle: "while Ցիկլ",
        s02BcTitle: "break & continue",
        s02BcP:
            "<code>break</code>-ը դուրս է գալիս ցիկլից, իսկ <code>continue</code>-ն թռչում է դեպի հաջորդ քայլը:",
        s02DoTitle: "do...while",
        s02DoP:
            "Կոդը կատարվում է գոնե մեկ անգամ, նույնիսկ եթե պայմանը սխալ է:",
        s03Title: "Լեքսիկական Միջավայր (Lexical Environment)",
        s03Lead:
            "JavaScript-ում յուրաքանչյուր կատարվող ֆունկցիա, կոդի բլոկ կամ սկրիպտ ունի իրեն կցված ներքին օբյեկտ, որը կոչվում է <b>Lexical Environment</b>:",
        s03StructTitle: "Կառուցվածք",
        s03StructLi1:
            "<b>Environment Record</b>: Պահպանում է բոլոր տեղային փոփոխականները:",
        s03StructLi2:
            "<b>Outer Reference</b>: Հղում դեպի արտաքին (outer) միջավայր:",
        s03HowTitle: "Ինչպե՞ս է աշխատում",
        s03HowP:
            "Երբ փնտրում ենք փոփոխական, JS-ը նախ նայում է ներքին միջավայրում, ապա՝ արտաքինում, մինչև հասնի Global միջավայրին:",
        s03ChainTitle: "Ինչպե՞ս է աշխատում Scope Chain-ը",
        s03ChainP:
            "Այս դիագրամը պատկերում է JavaScript-ի լեքսիկական հիերարխիան կոդի կատարման պահին: Այն ցույց է տալիս, թե ինչպես են փոփոխականները հասանելի դառնում տարբեր կոնտեքստներում՝ շնորհիվ շղթայական կապի:",
        s03ErTitle: "1. Environment Record",
        s03ErP:
            "Յուրաքանչյուր միջավայր (Global, Outer, Inner) ունի իր Environment Record-ը: Սա այն վայրն է, որտեղ JS շարժիչը կատարման նախնական փուլում գրանցում է տվյալ տիրույթում հայտարարված բոլոր փոփոխականները և ֆունկցիաները:",
        s03ErLi1: "<b>Inner:</b> Ունի իր սեփական <code>innerVar</code>-ը:",
        s03ErLi2: "<b>Outer:</b> Պահում է <code>outerVar</code>-ը:",
        s03ErLi3: "<b>Global:</b> Հանդիսանում է ամենավերին մակարդակը:",
        s03OrTitle: "2. Outer Reference",
        s03OrP:
            'Յուրաքանչյուր Lexical Environment ունի հղում (<code>[[OuterEnv]]</code> սլաքը), որը մատնանշում է այն միջավայրը, որտեղ տվյալ կոդը ֆիզիկապես գրված է:',
        s03OrLi1: "Inner-ի հղումը տանում է դեպի Outer:",
        s03OrLi2: "Outer-ի հղումը տանում է դեպի Global:",
        s03OrLi3: "Global-ի հղումը <code>null</code> է:",
        s03ResTitle: "3. Որոնման մեխանիզմը (Resolve Binding)",
        s03ResLead:
            "Երբ փորձում եք օգտագործել որևէ փոփոխական Inner տիրույթում, JavaScript-ը կատարում է հետևյալ քայլերը.",
        s03ResOl1: "Փնտրում է այն լոկալ Environment Record-ում:",
        s03ResOl2:
            "Եթե չի գտնում, օգտվում է Outer Reference-ից և բարձրանում մեկ մակարդակ վերև:",
        s03ResOl3: "Այս գործընթացը կրկնվում է մինչև Global միջավայր:",
        s03ResNote:
            "<b>Կարևոր է:</b> Այս շղթան կայուն է և որոշվում է կոդը գրելու պահին (Lexical Scoping): Սա հենց այն հիմքն է, որի վրա կառուցվում են Closures-ը:",
        prevTopic: "Պայմաններ և Լոգիկա",
        nextTopic: "Ֆունկցիաներ",
    },
    en: {
        docTitle: "JS.CORE | Switch & Loops",
        metaDescription:
            "The switch statement, loops (while, do...while, for), and how the lexical environment works.",
        nav: { switch: "Switch", loops: "Loops", lexical: "Lexical environment" },
        h1: "Switch & Loops",
        subtitle:
            '"Repetition is the mother of learning; choice is the lever of efficiency."',
        s01Title: "The switch statement",
        s01Lead:
            "<code>switch</code> replaces many <code>if</code>s and compares with strict equality (<code>===</code>).",
        s01StructTitle: "Structure",
        s01BreakTitle: "Why break matters",
        s01BreakP:
            "Without <code>break</code>, execution falls through to the next <code>case</code> regardless of the condition.",
        s02Title: "Loops (while, do...while, for)",
        s02Lead: "Loops let you run the same code many times.",
        s02ForTitle: "for loop",
        s02ForCaption: "<i>init, condition, step</i>",
        s02WhileTitle: "while loop",
        s02BcTitle: "break & continue",
        s02BcP:
            "<code>break</code> exits the loop; <code>continue</code> jumps to the next iteration.",
        s02DoTitle: "do...while",
        s02DoP: "The body runs at least once even if the condition is false.",
        s03Title: "Lexical environment",
        s03Lead:
            "Every running function, block, or script has an attached internal object called the <b>lexical environment</b>.",
        s03StructTitle: "Structure",
        s03StructLi1:
            "<b>Environment record</b>: stores all local bindings.",
        s03StructLi2: "<b>Outer reference</b>: link to the enclosing environment.",
        s03HowTitle: "How lookup works",
        s03HowP:
            "When resolving a variable, JS searches the inner environment, then outer ones, up to the global environment.",
        s03ChainTitle: "How the scope chain works",
        s03ChainP:
            "This models the lexical hierarchy at runtime and how variables become visible across contexts.",
        s03ErTitle: "1. Environment record",
        s03ErP:
            "Each environment (global, outer, inner) has its own record where declarations are registered during instantiation.",
        s03ErLi1: "<b>Inner:</b> has its own <code>innerVar</code>.",
        s03ErLi2: "<b>Outer:</b> holds <code>outerVar</code>.",
        s03ErLi3: "<b>Global:</b> is the top level.",
        s03OrTitle: "2. Outer reference",
        s03OrP:
            "Each lexical environment has an outer link (<code>[[OuterEnv]]</code>) to where the code was physically written.",
        s03OrLi1: "Inner’s outer points to Outer.",
        s03OrLi2: "Outer’s outer points to Global.",
        s03OrLi3: "Global’s outer is <code>null</code>.",
        s03ResTitle: "3. Resolving a binding",
        s03ResLead: "To use a variable in an inner scope, JS follows these steps:",
        s03ResOl1: "Search the local environment record.",
        s03ResOl2: "If missing, follow the outer reference one level up.",
        s03ResOl3: "Repeat until the global environment.",
        s03ResNote:
            "<b>Important:</b> this chain is fixed at write time (lexical scoping)—the foundation of closures.",
        prevTopic: "Conditions & Logic",
        nextTopic: "Functions",
    },
    ru: {
        docTitle: "JS.CORE | Switch и циклы",
        metaDescription:
            "Конструкция switch, циклы while, do...while и for, а также лексическое окружение.",
        nav: { switch: "Switch", loops: "Циклы", lexical: "Лексическое окружение" },
        h1: "Switch и циклы",
        subtitle:
            '"Повторение — мать учения, а выбор — рычаг эффективности."',
        s01Title: "Конструкция switch",
        s01Lead:
            "<code>switch</code> заменяет несколько <code>if</code> и сравнивает через строгое равенство (<code>===</code>).",
        s01StructTitle: "Структура",
        s01BreakTitle: "Зачем нужен break",
        s01BreakP:
            "Без <code>break</code> выполнение «проваливается» в следующий <code>case</code> независимо от условия.",
        s02Title: "Циклы (while, do...while, for)",
        s02Lead: "Циклы позволяют выполнять один и тот же код многократно.",
        s02ForTitle: "Цикл for",
        s02ForCaption: "<i>инициализация, условие, шаг</i>",
        s02WhileTitle: "Цикл while",
        s02BcTitle: "break и continue",
        s02BcP:
            "<code>break</code> выходит из цикла, <code>continue</code> переходит к следующей итерации.",
        s02DoTitle: "do...while",
        s02DoP: "Тело выполняется хотя бы один раз, даже если условие ложно.",
        s03Title: "Лексическое окружение",
        s03Lead:
            "У каждой выполняемой функции, блока или скрипта есть внутренний объект — <b>лексическое окружение</b>.",
        s03StructTitle: "Структура",
        s03StructLi1:
            "<b>Environment Record</b>: хранит локальные привязки.",
        s03StructLi2: "<b>Outer Reference</b>: ссылка на внешнее окружение.",
        s03HowTitle: "Как происходит поиск",
        s03HowP:
            "При разрешении имени JS ищет сначала во внутреннем окружении, затем во внешних, до глобального.",
        s03ChainTitle: "Как работает цепочка областей",
        s03ChainP:
            "Это отражает лексическую иерархию во время выполнения и доступность переменных.",
        s03ErTitle: "1. Environment Record",
        s03ErP:
            "У каждого окружения есть запись, куда на этапе инициализации попадают объявления.",
        s03ErLi1: "<b>Inner:</b> со своим <code>innerVar</code>.",
        s03ErLi2: "<b>Outer:</b> хранит <code>outerVar</code>.",
        s03ErLi3: "<b>Global:</b> верхний уровень.",
        s03OrTitle: "2. Outer Reference",
        s03OrP:
            "У окружения есть внешняя ссылка (<code>[[OuterEnv]]</code>) на то место, где код написан физически.",
        s03OrLi1: "У Inner внешнее указывает на Outer.",
        s03OrLi2: "У Outer внешнее указывает на Global.",
        s03OrLi3: "У Global внешнее — <code>null</code>.",
        s03ResTitle: "3. Разрешение привязки",
        s03ResLead: "Чтобы использовать переменную во внутренней области, JS делает так:",
        s03ResOl1: "Ищет в локальном Environment Record.",
        s03ResOl2: "Если нет — поднимается по внешней ссылке.",
        s03ResOl3: "Повторяет до глобального окружения.",
        s03ResNote:
            "<b>Важно:</b> цепочка фиксируется при написании кода (лексическая область) — основа замыканий.",
        prevTopic: "Условия и логика",
        nextTopic: "Функции",
    },
};
