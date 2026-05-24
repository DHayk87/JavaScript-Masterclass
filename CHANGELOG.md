# Changelog

All notable changes to the **JS.CORE Masterclass** project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (`MAJOR.MINOR.PATCH`).

---

## [1.3.0] - 2026-05-24
### Added
- **Husky Pre-commit Hook**: Integrated **Husky v9** (`husky init`) with a `pre-commit` hook that automatically runs `npm run lint` before every commit, preventing linting errors from reaching the repository.

### Changed
- **Armenian Terminology Rename**: Replaced the Russian-borrowed word `մasiv` (and all its grammatical forms: `մasivner`, `մasivneri`, `մasivum`, `մasivi`, `մasivа`, etc.) with the native Armenian word `zankvazd` (zankvadzner, zankvadzneri…) across all 13 project files — `src/i18n/pages/*.ts`, `src/i18n/locales/hy.json`, `docs/*.html`, and `dist/docs/*.html`.

---

## [1.2.0] - 2026-05-18
### Added
- **TypeScript Migration**: Fully converted the core engine, UI handlers, and localization loaders from JavaScript (`.js`) to TypeScript (`.ts`).
- **Strict Linting Framework**: Added **ESLint** flat configurations (`eslint.config.js`) supporting TypeScript type analysis and coding guardrails.
- **Trilingual Workspace**: Rewrote `README.md` to be fully accessible and customized in three languages: 🇬🇧 English, 🇦🇲 Armenian, and 🇷🇺 Russian.
- **`CHANGELOG.md`**: Created project version control ledger.

### Changed
- Refactored `tsconfig.json` to leverage modern TypeScript relative path maps, resolving legacy warnings.
- Optimized empty catch blocks and ternary expression patterns in `src/i18n/index.ts` to achieve 100% warning-free linter runs.

---

## [1.1.0] - 2026-05-11
### Added
- **Multi-language Architecture (i18n)**: Implemented Armenian (`hy`), English (`en`), and Russian (`ru`) dictionaries.
- **i18n Developer Guide**: Created a standard workflow documentation under `guides/i18n-guide.md` instructing how to implement new languages.
- **Mobile-Responsive Design**: Added a mobile-first responsive strategy for educational glossary data tables under `docs/object.html`.

### Changed
- Standardized UI components using premium CSS standards (glassmorphism cards, custom scrollbar thumb transitions).

---

## [1.0.0] - 2026-05-08
### Added
- **Initial Core Release**: Structured all foundational JS Core topic pages (Async/Await, Lexical Environment, Closures, Event Loop, and Garbage Collection).
- **Mermaid.js Integration**: Interactive, theme-synchronized diagram components to visualize structural engines.
- **Vercel Routing**: Configured proper `vercel.json` rewrite filters to guarantee 404-free navigation on sub-paths.

---

## 📌 Version Control Guidelines

To keep commits consistent and the repository organized, please adhere to these Git policies:

### Commit Message Conventions
Use the following format for commit descriptions:
* `feat:` for new features or modules (e.g., `feat: add Spanish locale support`)
* `fix:` for fixing bugs or linter warnings (e.g., `fix: catch block variable in i18n`)
* `docs:` for documentation updates (e.g., `docs: update style-guide`)
* `chore:` for building setup updates or dependencies (e.g., `chore: install eslint-ts`)
* `refactor:` for architectural shifts without logical change (e.g., `refactor: js to ts conversion`)

### Branch Strategy
- `main` / `master`: Production-ready branch. Do not commit directly here unless applying minor quick-fixes.
- `feature/<name>`: Feature branch for new modules or refactor steps. Merge into main via Pull Request / peer approval.
