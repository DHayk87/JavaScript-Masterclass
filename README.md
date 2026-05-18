# JS.CORE | JavaScript Masterclass

---

## 🇬🇧 English

A professional-grade educational curriculum and visualizer platform for JavaScript. It helps master the most complex aspects of the language (Engine parsing, Lexical Environment, Closure, Event Loop, Promise, ES6 Classes, and Garbage Collection) using interactive playgrounds and structural diagrams.

### 📁 Project Architecture
```text
JS-Docs/
├── docs/                 # Documentation pages (HTML)
├── public/               # Static assets
│   ├── images/           # Layout diagrams and graphic materials
│   └── styles/           # Main styling guidelines (style.css)
├── templates/            # Dynamic layout fragments (nav, footer)
├── guides/               # Developer style guides and instructions
└── src/                  # Core logic modules
    ├── i18n/             # Multi-language dictionary files
    └── scripts/          # TypeScript-powered modules and utilities
```

### 🚀 Getting Started

#### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local dev server:
   ```bash
   npm run dev
   ```
3. Open the provided localhost link in your browser.

#### Code Linting
Run ESLint to check for syntax and type-safety warnings:
```bash
npm run lint
```

#### Production Build
1. Create a production build:
   ```bash
   npm run build
   ```
2. The optimized files will be output to the `dist/` directory.
3. Test the built files locally:
   ```bash
   npm run preview
   ```

### 🛠️ Built With
- **HTML5 & CSS3**: Structured layout built on standard class guidelines and premium glassmorphism elements.
- **TypeScript**: Robust, type-safe modules managing active global state, multi-language dropdowns, and clipboard tasks.
- **Mermaid.js**: Interactive diagramming to visualize Lexical Environments and Memory Models.

---

## 🇦🇲 Հայերեն

Պրոֆեսիոնալ JavaScript ուսումնական ձեռնարկների և վիզուալիզացիաների հարթակ: Այն օգնում է յուրացնել լեզվի ամենաբարդ ոլորտները (Engine parsing, Lexical Environment, Closure, Event Loop, Promise, ES6 Classes և Garbage Collection)՝ օգտագործելով ինտերակտիվ playground-ներ և կառուցվածքային սխեմաներ։

### 📁 Նախագծի Կառուցվածքը
```text
JS-Docs/
├── docs/                 # Փաստաթղթավորման էջեր (HTML)
├── public/               # Ստատիկ ֆայլեր
│   ├── images/           # Դասընթացի սխեմաներ և նկարներ
│   └── styles/           # Հիմնական ոճային ֆայլեր (style.css)
├── templates/            # HTML Կաղապարներ (nav, footer)
├── guides/               # Ուղեցույցներ և ցուցումներ ծրագրավորողների համար
└── src/                  # Հիմնական տրամաբանություն
    ├── i18n/             # Բազմալեզու թարգմանություններ
    └── scripts/          # TypeScript ինտերակտիվ մոդուլներ և գործիքներ
```

### 🚀 Ինչպես Օգտագործել

#### Տեղային Ծրագրավորում (Development)
1. Տեղադրեք անհրաժեշտ կախվածությունները.
   ```bash
   npm install
   ```
2. Միացրեք dev սերվերը.
   ```bash
   npm run dev
   ```
3. Բացեք տրված localhost հղումը բրաուզերում։

#### Կոդի Ստուգում (Linting)
Ստուգեք կոդի համապատասխանությունը TypeScript/ESLint կանոններին.
```bash
npm run lint
```

#### Production Build
1. Ստեղծեք build-ը.
   ```bash
   npm run build
   ```
2. Օպտիմալացված ֆայլերը կհայտնվեն `dist/` թղթապանակում։
3. Փորձարկեք ստեղծված build-ը տեղային միջավայրում.
   ```bash
   npm run preview
   ```

### 🛠️ Տեխնոլոգիաներ
- **HTML5 և CSS3**: Սեմանտիկ կառուցվածք՝ հիմնված պրեմիում glassmorphism դիզայնի վրա:
- **TypeScript**: Լիովին տիպայնացված, անվտանգ մոդուլներ՝ գլոբալ վիճակների կառավարման և լեզուների փոփոխության համար:
- **Mermaid.js**: Բարդ լոգիկական պրոցեսների և Lexical Environment-ի վիզուալիզացիա:

---

## 🇷🇺 Русский

Профессиональная образовательная платформа и интерактивный визуализатор для JavaScript. Помогает глубоко освоить самые сложные аспекты языка (парсер движка, Lexical Environment, замыкания, Event Loop, Promise, классы ES6 и Garbage Collection) с помощью интерактивных песочниц и детальных структурных схем.

### 📁 Архитектура Проекта
```text
JS-Docs/
├── docs/                 # Документация и учебные страницы (HTML)
├── public/               # Статические ресурсы
│   ├── images/           # Графические схемы и иллюстрации
│   └── styles/           # Основные стили (style.css)
├── templates/            # Шаблоны страниц (навигация, футер)
├── guides/               # Руководства по стилю и инструкции
└── src/                  # Исходный код логики
    ├── i18n/             # Переводы и словари локализации
    └── scripts/          # Модули на TypeScript
```

### 🚀 Запуск и Использование

#### Локальная разработка
1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите сервер разработки:
   ```bash
   npm run dev
   ```
3. Откройте предоставленную локальную ссылку в браузере.

#### Проверка Кода (Linting)
Запустите линтер для проверки стандартов TypeScript:
```bash
npm run lint
```

#### Сборка для Production
1. Создайте оптимизированную сборку:
   ```bash
   npm run build
   ```
2. Итоговые файлы будут сохранены в папке `dist/`.
3. Запустите предпросмотр сборки локально:
   ```bash
   npm run preview
   ```

### 🛠️ Стек Технологий
- **HTML5 и CSS3**: Семантическая разметка и премиальный стек стилей с использованием эффектов glassmorphism.
- **TypeScript**: Надежные модули со строгой типизацией для управления глобальным состоянием и языками.
- **Mermaid.js**: Построение понятных диаграмм для визуализации Lexical Environment и моделей памяти.

---

Created By DHayk | 2026
