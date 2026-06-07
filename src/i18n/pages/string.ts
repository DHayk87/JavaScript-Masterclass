export default {
  hy: {
    docTitle: "JS.CORE | Strings Deep Dive",
    metaDescription: "Ինչպե՞ս են աշխատում String-ները JavaScript-ում։ Պրիմիտիվներ, անփոփոխելիություն և հիշողության կառավարում։",
    nav: {
      overview: "Ընդհանուր",
      autoboxing: "Autoboxing",
      immutability: "Immutability",
      methods: "Մեթոդներ",
      templates: "Templates",
      performance: "Performance",
    },
    h1: "Strings in JavaScript",
    subtitle: '"Պրիմիտիվներ, որոնք օժտված են օբյեկտների գերունակություններով։"',

    glString: "Primitive String",
    glStringP: "Տեքստային պրիմիտիվ տվյալ, որը պահվում է Stack հիշողության մեջ (կամ օպտիմալացվում է Heap-ում V8-ի կողմից)։",
    glAutoboxing: "Autoboxing",
    glAutoboxingP: "Գործընթաց, երբ JS-ը ժամանակավորապես պրիմիտիվը վերածում է օբյեկտի՝ մեթոդներին հասնելու համար։",
    glImmutability: "Immutability",
    glImmutabilityP: "Անփոփոխելիություն։ Տեքստը ստեղծվելուց հետո չի կարող փոփոխվել։ Ցանկացած գործողություն ստեղծում է նոր տեքստ։",

    s01Title: "Primitive vs String Object",
    s01P1: "JavaScript-ում տեքստ ստեղծելու երկու ձև կա՝ պրիմիտիվ և օբյեկտ։",
    s01Code: `<span class="hl-kw">let</span> strPrimitive = <span class="hl-str">"Hello"</span>; <span class="hl-cm">// typeof: "string"</span><br/><span class="hl-kw">let</span> strObject = <span class="hl-kw">new</span> <span class="hl-type">String</span>(<span class="hl-str">"Hello"</span>); <span class="hl-cm">// typeof: "object"</span>`,
    s01P2: "<b>Կարևոր կանոն.</b> Մի՛ օգտագործեք <code>new String()</code>։ Այն դանդաղեցնում է կոդը, փոխում է տիպը և խնդիրներ է առաջացնում <code>===</code> համեմատության ժամանակ։",

    s02Title: "Autoboxing",
    s02P1: "Ինչպե՞ս ենք կանչում մեթոդներ պրիմիտիվ String-ի վրա (օրինակ՝ <code>.toUpperCase()</code>)։",
    s02P2: "JavaScript-ը ավտոմատ կատարում է <b>Autoboxing</b>՝ ժամանակավորապես ստեղծում է օբյեկտ-փաթաթ, կատարում է մեթոդը և անմիջապես ջնջում է այն։ Այս գործընթացը թույլ է տալիս պրիմիտիվներին օգտագործել օբյեկտների մեթոդները։",

    s03Title: "Immutability (Անփոփոխելիություն)",
    s03P1: "JavaScript-ում String-ները <b>ամբողջությամբ անփոփոխելի են</b>։ Դուք չեք կարող փոխել առանձին տառը։",
    s03Code: `<span class="hl-kw">let</span> text = <span class="hl-str">"JavaScript"</span>;<br/>text[<span class="hl-num">0</span>] = <span class="hl-str">"Y"</span>; <span class="hl-cm">// Ոչ մի էֆեկտ չի ունենա</span>`,
    s03P2: "Ցանկացած մեթոդ (<code>replace</code>, <code>slice</code>, <code>toUpperCase</code>) չի փոփոխում օրիգինալ տեքստը, այլ ստեղծում է **նոր տեքստ** հիշողության մեջ։ Սա կարևոր է հասկանալ performance-ի համար։",

    s04Title: "String Interning (String Pool)",
    s04P1: "Քանի որ տեքստերը անփոփոխելի են, V8 շարժիչը օգտագործում է **String Pool** օպտիմալացում։",
    s04P2: "Բոլոր նույնական լիտերալները (օրինակ՝ \"hello\") հղվում են նույն հիշողության վրա։ Սա խնայում է հսկայական հիշողություն, երբ ունես շատ նույն տեքստեր։",

    s05Title: "Essential Methods",
    s05P1: "Ամենակարևոր մեթոդները, որոնք պետք է իմանալ անգիր։",
    s05P2: "<b>slice(start, end)</b> — կտրում է մասը, աջակցում է բացասական ինդեքսներ։<br/>" +
           "<b>includes(), startsWith(), endsWith()</b> — որոնում true/false արդյունքով։<br/>" +
           "<b>trim(), trimStart(), trimEnd()</b> — մաքրում է տարածությունները։<br/>" +
           "<b>padStart(), padEnd(), repeat()</b> — լրացում և կրկնում։<br/>" +
           "<b>replaceAll()</b> — փոխարինում է բոլոր համընկնումները։",

    s06Title: "Performance Pitfalls",
    s06P1: "Ցիկլերի մեջ տողերի կոնկատենացիան (<code>+=</code>) շատ վատ է performance-ի համար։ Ամեն իտերացիայում ստեղծվում է նոր տող։",
    s06Code: `<span class="hl-cm">// Վատ</span><br/><span class="hl-kw">let</span> s = <span class="hl-str">""</span>;<br/><span class="hl-kw">for</span>(<span class="hl-kw">let</span> i=<span class="hl-num">0</span>; i < <span class="hl-num">10000</span>; i++) s += i;`,
    s06P2: "<b>Լավ լուծումը.</b> Հավաքիր տարրերը զանգվածի մեջ և վերջում օգտագործիր <code>Array.join()</code>։",

    s07Title: "Template Literals & Tagged Templates",
    s07P1: "Template Literals-ը (<code>` `</code>) թույլ են տալիս հեշտությամբ ներդնել փոփոխականներ և multiline տեքստեր։",
    s07Code: `<span class="hl-kw">const</span> name = <span class="hl-str">"JS"</span>;<br/><span class="hl-kw">const</span> greet = <span class="hl-str">\`Hello \${name}! Welcome to Deep Dive.\`</span>;`,
    s07P2: "<b>Tagged Templates</b> — հզոր գործիք։ Ֆունկցիաները կարող են մշակել template-ը (օրինակ՝ Styled Components-ում, GraphQL-ում)։",

    nextTopic: "Objects",
    prevTopic: "Functions",
  },

  en: {
    docTitle: "JS.CORE | Strings Deep Dive",
    metaDescription: "How strings work in JavaScript. Primitives, immutability, and memory optimization.",
    nav: {
      overview: "Overview",
      autoboxing: "Autoboxing",
      immutability: "Immutability",
      methods: "Methods",
      templates: "Templates",
      performance: "Performance",
    },
    h1: "Strings in JavaScript",
    subtitle: '"Primitives wrapped with superhero powers."',

    glString: "Primitive String",
    glStringP: "A primitive text data type stored efficiently in memory.",
    glAutoboxing: "Autoboxing",
    glAutoboxingP: "Temporary wrapping of primitive into object to access methods.",
    glImmutability: "Immutability",
    glImmutabilityP: "Strings cannot be changed after creation. Any operation returns a new string.",

    s01Title: "Primitive vs String Object",
    s01P1: "There are two ways to create strings in JavaScript.",
    s01Code: `<span class="hl-kw">let</span> strPrimitive = <span class="hl-str">"Hello"</span>; <span class="hl-cm">// typeof: "string"</span><br/><span class="hl-kw">let</span> strObject = <span class="hl-kw">new</span> <span class="hl-type">String</span>(<span class="hl-str">"Hello"</span>);`,
    s01P2: "<b>Important Rule:</b> Never use <code>new String()</code>. It slows down code and breaks strict equality.",

    s02Title: "How Autoboxing Works",
    s02P1: "How can we call methods on primitive strings?",
    s02P2: "JavaScript automatically performs <b>Autoboxing</b> — creates a temporary wrapper object, executes the method, and discards it.",

    s03Title: "Immutability",
    s03P1: "Strings in JavaScript are completely immutable.",
    s03Code: `<span class="hl-kw">let</span> text = <span class="hl-str">"JavaScript"</span>;<br/>text[<span class="hl-num">0</span>] = <span class="hl-str">"Y"</span>; <span class="hl-cm">// does nothing</span>`,
    s03P2: "Any string method returns a completely new string without modifying the original one.",

    s04Title: "String Interning (String Pool)",
    s04P1: "V8 engine optimization for immutable strings.",
    s04P2: "Identical string literals share the same memory reference. This saves a lot of memory.",

    s05Title: "Essential Methods",
    s05P1: "Most important methods you should know by heart.",
    s05P2: "<b>slice()</b> — extracts part with negative index support.<br/>" +
           "<b>includes(), startsWith(), endsWith()</b> — convenient boolean search.<br/>" +
           "<b>trim()</b> — removes whitespace.<br/>" +
           "<b>replaceAll(), padStart(), repeat(), at()</b> — modern useful methods.",

    s06Title: "Performance Pitfalls",
    s06P1: "Concatenating strings with <code>+=</code> inside loops is very slow.",
    s06Code: `<span class="hl-cm">// Bad</span><br/><span class="hl-kw">let</span> s = <span class="hl-str">""</span>;<br/><span class="hl-kw">for</span>(<span class="hl-kw">let</span> i=<span class="hl-num">0</span>; i < <span class="hl-num">10000</span>; i++) s += i;`,
    s06P2: "<b>Solution:</b> Use array to collect parts and <code>.join('')</code> at the end.",

    s07Title: "Template Literals & Tagged Templates",
    s07P1: "Template literals make string interpolation and multiline strings easy and readable.",
    s07Code: `<span class="hl-kw">const</span> name = <span class="hl-str">"JS"</span>;<br/><span class="hl-kw">const</span> greet = <span class="hl-str">\`Hello \${name}! Welcome to Deep Dive.\`</span>;`,
    s07P2: "<b>Tagged Templates</b> are powerful — functions that can parse and transform the template (used in Styled Components, GraphQL, etc.).",

    nextTopic: "Objects",
    prevTopic: "Functions",
  },

  ru: {
    docTitle: "JS.CORE | Strings Deep Dive",
    metaDescription: "Как работают строки в JavaScript. Примитивы, неизменяемость и оптимизация памяти.",
    nav: {
      overview: "Обзор",
      autoboxing: "Автобоксинг",
      immutability: "Неизменяемость",
      methods: "Методы",
      templates: "Шаблоны",
      performance: "Производительность",
    },
    h1: "Строки в JavaScript",
    subtitle: '"Примитивы с суперсилами объектов."',

    glString: "Примитивная строка",
    glStringP: "Текстовый примитив, хранящийся эффективно в памяти.",
    glAutoboxing: "Автобоксинг",
    glAutoboxingP: "Временная обертка примитива в объект для доступа к методам.",
    glImmutability: "Неизменяемость",
    glImmutabilityP: "Строки нельзя изменить после создания.",

    s01Title: "Примитив vs Объект String",
    s01P1: "В JavaScript есть два способа создания строк.",
    s01Code: `<span class="hl-kw">let</span> strPrimitive = <span class="hl-str">"Hello"</span>; <span class="hl-cm">// typeof: "string"</span><br/><span class="hl-kw">let</span> strObject = <span class="hl-kw">new</span> <span class="hl-type">String</span>(<span class="hl-str">"Hello"</span>);`,
    s01P2: "<b>Важное правило:</b> Никогда не используйте <code>new String()</code>.",

    s02Title: "Как работает Autoboxing",
    s02P1: "Как мы вызываем методы у примитивных строк?",
    s02P2: "JavaScript автоматически выполняет Autoboxing — создаёт временный объект-обёртку.",

    s03Title: "Неизменяемость (Immutability)",
    s03P1: "Строки в JavaScript полностью неизменяемы.",
    s03Code: `<span class="hl-kw">let</span> text = <span class="hl-str">"JavaScript"</span>;<br/>text[<span class="hl-num">0</span>] = <span class="hl-str">"Y"</span>; <span class="hl-cm">// ничего не произойдёт</span>`,
    s03P2: "Любая операция возвращает новую строку.",

    s04Title: "String Interning (String Pool)",
    s04P1: "Оптимизация V8 для неизменяемых строк.",
    s04P2: "Одинаковые строковые литералы делят одну и ту же область памяти.",

    s05Title: "Основные методы",
    s05P1: "Методы, которые нужно знать.",
    s05P2: "<b>slice()</b>, <b>includes()</b>, <b>trim()</b>, <b>replaceAll()</b> и другие.",

    s06Title: "Проблемы производительности",
    s06P1: "Конкатенация строк в циклах — плохая практика.",
    s06Code: `<span class="hl-cm">// Плохо</span><br/><span class="hl-kw">let</span> s = <span class="hl-str">""</span>;<br/><span class="hl-kw">for</span>(<span class="hl-kw">let</span> i=<span class="hl-num">0</span>; i < <span class="hl-num">10000</span>; i++) s += i;`,
    s06P2: "Решение — собирать в массив и использовать <code>join()</code>.",

    s07Title: "Template Literals и Tagged Templates",
    s07P1: "Шаблонные строки значительно упрощают работу с текстом.",
    s07Code: `<span class="hl-kw">const</span> name = <span class="hl-str">"JS"</span>;<br/><span class="hl-kw">const</span> greet = <span class="hl-str">\`Hello \${name}!\`</span>;`,
    s07P2: "Tagged Templates — мощный механизм, используемый в современных библиотеках.",

    nextTopic: "Objects",
    prevTopic: "Functions",
  }
};