export default {
  hy: {
    docTitle: "JS.CORE | Ֆունկցիաներ",
    metaDescription:
      "JavaScript ֆունկցիաների տեսակները. Function Declaration, Expression, Arrow Functions և IIFE: Իմացեք hoisting-ի և lexical this-ի մասին:",
    nav: {
      declaration: "Declaration",
      expression: "Expression",
      arrow: "Arrow",
      iife: "IIFE",
    },
    h1: "Ֆունկցիաներ (Functions)",
    subtitle: '"Ֆունկցիաները ծրագրի հիմնական կառուցողական բլոկներն են:"',
    s01Title: "Function Declaration (Ֆունկցիայի հայտարարում)",
    s01Lead:
      "Սա հանդիսանում է <b>HoistableDeclaration</b>: JS շարժիչը Environment Record-ը ստեղծելիս այս ֆունկցիաները միանգամից սկզբնավորում է (initialize):",
    s01SynTitle: "Սինտաքս",
    s01Code: `<span class="hl-kw">function</span> <span class="hl-fn">sayHi</span>() {<br/>
&nbsp;&nbsp;<span class="hl-type">console</span>.<span class="hl-fn">log</span>(<span class="hl-str">"Hello!"</span>);<br/>
}`,
    s01AdvTitle: "Առավելությունը",
    s01AdvP:
      "Կարելի է կանչել կոդի ցանկացած հատվածից (նույնիսկ հայտարարումից առաջ), ինչը թույլ է տալիս կառուցել կոդը «կարևորից դեպի մանրուքներ» սկզբունքով:",
    s02Title: "Function Expression (Ֆունկցիոնալ արտահայտություն)",
    s02Lead:
      "Այստեղ ֆունկցիան հանդես է գալիս որպես արժեք: Այն գրանցվում է որպես լեքսիկական փոփոխական և ենթարկվում է <code>let/const</code> կանոններին:",
    s02SynTitle: "Սինտաքս",
    s02Code: `<span class="hl-kw">const</span> <span class="hl-fn">sayHi</span> = <span class="hl-kw">function</span>() {<br/>
&nbsp;&nbsp;<span class="hl-type">console</span>.<span class="hl-fn">log</span>(<span class="hl-str">"Hello!"</span>);<br/>
};`,
    s02DiffTitle: "Տարբերությունը",
    s02DiffP:
      "Քանի դեռ ծրագրի կատարումը չի հասել այս տողին, ֆունկցիան գտնվում է <b>Temporal Dead Zone</b>-ում և հասանելի չէ:",
    s03Title: "Arrow Functions (Սլաքային ֆունկցիաներ)",
    s03Lead:
      "ES6-ի ամենակարևոր լրացումներից մեկը: Սրանք պարզապես «կարճ գրելաձև» չեն, այլ ունեն էական ֆունկցիոնալ տարբերություններ:",
    s03SynTitle: "Սինտաքս",
    s03Code: `<span class="hl-kw">const</span> <span class="hl-fn">sum</span> = (a, b) => a + b;`,
    s03WhyTitle: "Ինչու՞ են հատուկ",
    s03Li1:
      "<b>Lexical this:</b> Չունեն սեփական <code>this</code>: Վերցնում են այն ստեղծման միջավայրից:",
    s03Li2:
      "<b>Constructor:</b> Չեն կարող օգտագործվել <code>new</code> օպերատորի հետ:",
    s03Li3: "<b>Arguments:</b> Չունեն սեփական <code>arguments</code> օբյեկտը:",
    s04Title: "IIFE (Անմիջապես կանչվող ֆունկցիաներ)",
    s04Lead:
      "Չնայած ժամանակակից JS-ում ունենք Block Scope, IIFE-ն դեռևս օգտագործվում է որոշակի դեպքերում:",
    s04SynTitle: "Սինտաքս",
    s04Code: `(<span class="hl-kw">function</span>() {<br/>
&nbsp;&nbsp;<span class="hl-cm">// Private scope</span><br/>
})();`,
    s04GoalTitle: "Նպատակը",
    s04GoalP:
      "Կանխել գլոբալ տիրույթի աղտոտումը և ստեղծել մեկուսացված միջավայր:",
    tipTitle: "Use Cases (Ե՞րբ և ո՞րն օգտագործել)",
    tipLi1:
      "<b>Function Declaration:</b> Հիմնական գործողությունների համար, որոնք պետք է հասանելի լինեն ամբողջ ֆայլում:",
    tipLi2:
      "<b>Arrow Functions:</b> Callback-ների (<code>map</code>, <code>filter</code>) և այնտեղ, որտեղ պետք է պահպանել <code>this</code>-ը:",
    tipLi3:
      "<b>Function Expression:</b> Երբ ֆունկցիան պետք է սահմանվի պայմանականորեն (օրինակ՝ <code>if</code>-ի ներսում):",
    prevTopic: "Ցիկլեր և Switch",
    nextTopic: "Strings Deep Dive",
  },
  en: {
    docTitle: "JS.CORE | Functions",
    metaDescription:
      "Function declarations, expressions, arrow functions, and IIFEs—plus hoisting and lexical this.",
    nav: {
      declaration: "Declaration",
      expression: "Expression",
      arrow: "Arrow",
      iife: "IIFE",
    },
    h1: "Functions",
    subtitle: '"Functions are the main building blocks of a program."',
    s01Title: "Function declaration",
    s01Lead:
      "This is a <b>hoistable declaration</b>: while creating the environment record, the engine initializes the function immediately.",
    s01SynTitle: "Syntax",
    s01AdvTitle: "Advantage",
    s01AdvP:
      "You can call it from anywhere in the same scope—even before the line where it appears—supporting a top-down structure.",
    s02Title: "Function expression",
    s02Lead:
      "Here the function is a value stored like a lexical binding and follows <code>let</code>/<code>const</code> rules.",
    s02SynTitle: "Syntax",
    s02DiffTitle: "Difference",
    s02DiffP:
      "Until execution reaches the line, the binding is in the <b>temporal dead zone</b> and not callable.",
    s03Title: "Arrow functions",
    s03Lead:
      "A major ES6 feature—not only shorter syntax but different behavior.",
    s03SynTitle: "Syntax",
    s03WhyTitle: "Why they’re special",
    s03Li1:
      "<b>Lexical <code>this</code>:</b> no own <code>this</code>; inherited from the enclosing scope.",
    s03Li2: "<b>Not a constructor:</b> cannot be used with <code>new</code>.",
    s03Li3: "<b>No <code>arguments</code> object</b> of their own.",
    s04Title: "IIFE (immediately invoked function expressions)",
    s04Lead: "Less common today, but still useful to isolate scope.",
    s04SynTitle: "Syntax",
    s04GoalTitle: "Purpose",
    s04GoalP: "Avoid polluting the global scope and create a private sandbox.",
    tipTitle: "When to use which",
    tipLi1:
      "<b>Declarations:</b> primary routines that should be visible across the file.",
    tipLi2:
      "<b>Arrows:</b> callbacks (<code>map</code>, <code>filter</code>) when you need lexical <code>this</code>.",
    tipLi3:
      "<b>Expressions:</b> when a function is created conditionally (e.g. inside <code>if</code>).",
    prevTopic: "Loops & Switch",
    nextTopic: "Strings Deep Dive",
  },
  ru: {
    docTitle: "JS.CORE | Функции",
    metaDescription:
      "Объявления функций, функциональные выражения, стрелочные функции и IIFE, поднятие (hoisting) и лексический this.",
    nav: {
      declaration: "Declaration",
      expression: "Expression",
      arrow: "Arrow",
      iife: "IIFE",
    },
    h1: "Функции",
    subtitle: '"Функции — основные строительные блоки программы."',
    s01Title: "Объявление функции (declaration)",
    s01Lead:
      "Это <b>поднимаемое объявление</b>: при создании записи окружения движок сразу инициализирует функцию.",
    s01SynTitle: "Синтаксис",
    s01AdvTitle: "Плюс",
    s01AdvP:
      "Можно вызывать из любого места области видимости — даже до строки объявления.",
    s02Title: "Функциональное выражение",
    s02Lead:
      "Функция здесь — значение лексической привязки и подчиняется правилам <code>let</code>/<code>const</code>.",
    s02SynTitle: "Синтаксис",
    s02DiffTitle: "Отличие",
    s02DiffP:
      "Пока выполнение не дошло до строки, привязка в <b>временной мёртвой зоне</b> и недоступна.",
    s03Title: "Стрелочные функции",
    s03Lead:
      "Важнейшее дополнение ES6 — не только короче, но и с другим поведением.",
    s03SynTitle: "Синтаксис",
    s03WhyTitle: "Особенности",
    s03Li1:
      "<b>Лексический <code>this</code>:</b> своего <code>this</code> нет; берётся из внешней области.",
    s03Li2: "<b>Не конструктор:</b> нельзя вызывать с <code>new</code>.",
    s03Li3: "<b>Нет своего объекта <code>arguments</code>.</b>",
    s04Title: "IIFE",
    s04Lead: "Реже нужны сегодня, но изолируют область видимости.",
    s04SynTitle: "Синтаксис",
    s04GoalTitle: "Зачем",
    s04GoalP: "Не засорять глобальную область и создать закрытое окружение.",
    tipTitle: "Что когда использовать",
    tipLi1: "<b>Объявления:</b> основные операции, видимые по всему файлу.",
    tipLi2:
      "<b>Стрелки:</b> колбэки (<code>map</code>, <code>filter</code>), когда нужен лексический <code>this</code>.",
    tipLi3:
      "<b>Выражения:</b> когда функцию создают условно (например, внутри <code>if</code>).",
    prevTopic: "Циклы и switch",
    nextTopic: "Строки",
  },
};
