import hy from "./locales/hy.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import pageRegistry from "./pages/registry.js";

const STORAGE_KEY = "js-core-lang";
export const SUPPORTED_LOCALES = ["hy", "en", "ru"];
export const DEFAULT_LOCALE = "hy";

function buildMessages(locale: string) {
    const base = locale === "hy" ? hy : locale === "en" ? en : ru;
    const pages: Record<string, any> = {};
    for (const [pageId, bundle] of Object.entries(pageRegistry)) {
        pages[pageId] = (bundle as any)[locale];
    }
    return { ...base, pages };
}

const MESSAGES = {
    hy: buildMessages("hy"),
    en: buildMessages("en"),
    ru: buildMessages("ru"),
};

const localeListeners: Array<(locale: string) => void> = [];

/** @type {string} */
let currentLocale = DEFAULT_LOCALE;

// ====================== SAFE HTML RENDERER ======================

/**
 * Safely render translation (auto detects HTML)
 */
function renderTranslation(el: HTMLElement, key: string) {
    const text = t(key);
    if (!text) {
        el.innerHTML = "";
        return;
    }

    // If contains HTML tags → use safe HTML renderer
    if (/<[a-z][\s\S]*>/i.test(text)) {
        safeInnerHTML(el, text);
    } else {
        el.textContent = text;
    }
}

/**
 * Safe HTML insertion with full support for:
 * - <code>, <b>, <strong>, lists etc.
 * - Strong protection for Mermaid diagrams
 */
function safeInnerHTML(element: HTMLElement, html: string) {
    if (!html) {
        element.innerHTML = "";
        return;
    }

    const temp = document.createElement("div");
    temp.innerHTML = html;

    function sanitize(node: Node) {
        if (node.nodeType === Node.TEXT_NODE) return;

        if (node.nodeType === Node.ELEMENT_NODE) {
            const elNode = node as HTMLElement;
            const tag = elNode.tagName.toLowerCase();
            const isMermaid = elNode.classList && elNode.classList.contains("mermaid");

            // === MERMAID PROTECTION ===
            if (isMermaid || (tag === "pre" && elNode.classList.contains("mermaid"))) {
                return; // skip sanitization inside mermaid
            }

            const allowedTags = [
                "b", "strong", "i", "em", "u", "br", "span", "code",
                "pre", "a", "ul", "ol", "li", "div", "svg", "path",
                "g", "text", "rect"
            ];

            if (!allowedTags.includes(tag)) {
                const fragment = document.createDocumentFragment();
                while (elNode.firstChild) {
                    fragment.appendChild(elNode.firstChild);
                }
                elNode.parentNode?.replaceChild(fragment, elNode);
                return;
            }

            // Safe <a> tags
            if (tag === "a") {
                const href = elNode.getAttribute("href");
                if (href && !href.match(/^https?:\/\//i) && !href.startsWith("/")) {
                    elNode.removeAttribute("href");
                }
                elNode.setAttribute("target", "_blank");
                elNode.setAttribute("rel", "noopener noreferrer");
            }

            // Remove dangerous attributes
            Array.from(elNode.attributes).forEach((attr: Attr) => {
                if (!["class", "title", "href", "target", "rel", "id", "width", "height", "viewBox"].includes(attr.name)) {
                    elNode.removeAttribute(attr.name);
                }
            });
        }

        // Recurse children (skip if inside mermaid)
        if (node instanceof HTMLElement && !(node.classList && node.classList.contains("mermaid"))) {
            for (let i = node.childNodes.length - 1; i >= 0; i--) {
                sanitize(node.childNodes[i]);
            }
        }
    }

    sanitize(temp);
    element.innerHTML = temp.innerHTML;
}

// ====================== CORE FUNCTIONS ======================

function readLocaleFromUrl() {
    try {
        const v = new URLSearchParams(window.location.search).get("lang");
        return v && SUPPORTED_LOCALES.includes(v) ? v : null;
    } catch {
        return null;
    }
}

function readLocaleFromStorage() {
    try {
        const v = localStorage.getItem(STORAGE_KEY);
        return v && SUPPORTED_LOCALES.includes(v) ? v : null;
    } catch {
        return null;
    }
}

export function getLocale() {
    return currentLocale;
}

/**
 * Get translation by dot notation
 * @param {string} path example: "gc.s03Li1"
 */
export function t(path: string): string {
    const parts = path.split(".");
    let node = (MESSAGES as any)[currentLocale];
    for (const p of parts) {
        if (node == null || typeof node !== "object") return path;
        node = node[p];
    }
    return typeof node === "string" ? node : path;
}

function syncUrlLang(locale: string) {
    try {
        const u = new URL(window.location.href);
        if (locale === DEFAULT_LOCALE) {
            u.searchParams.delete("lang");
        } else {
            u.searchParams.set("lang", locale);
        }
        window.history.replaceState({}, "", u.pathname + u.search + u.hash);
    } catch (e) {
        console.warn("Failed to sync URL language", e);
    }
}

function applyDataI18n() {
    // Main translations (auto HTML detection)
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (key) renderTranslation(el as HTMLElement, key);
    });

    // Force HTML mode (optional)
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        const key = el.getAttribute("data-i18n-html");
        if (key) safeInnerHTML(el as HTMLElement, t(key));
    });

    // Attributes (title, placeholder, etc.)
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
        const spec = el.getAttribute("data-i18n-attr");
        if (!spec) return;
        const pipe = spec.indexOf("|");
        if (pipe === -1) return;
        const attr = spec.slice(0, pipe).trim();
        const key = spec.slice(pipe + 1).trim();
        if (attr && key) el.setAttribute(attr, t(key));
    });

    // Document title
    const titleEl = document.querySelector("title[data-i18n-title]");
    if (titleEl) {
        const key = titleEl.getAttribute("data-i18n-title");
        if (key) document.title = t(key);
    }

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"][data-i18n-desc]');
    if (metaDesc) {
        const key = metaDesc.getAttribute("data-i18n-desc");
        if (key) metaDesc.setAttribute("content", t(key));
    }

    document.documentElement.lang = currentLocale;
    syncLangDropdown();
}

function notifyLocaleListeners() {
    localeListeners.forEach(fn => {
        try { fn(currentLocale); } catch (e) { console.error(e); }
    });
}

export function onLocaleChange(fn: (locale: string) => void) {
    localeListeners.push(fn);
}

export function setLocale(locale: string) {
    if (!SUPPORTED_LOCALES.includes(locale)) locale = DEFAULT_LOCALE;

    currentLocale = locale;
    try {
        localStorage.setItem(STORAGE_KEY, locale);
    } catch {
        // Storage access might be blocked in cross-origin frames
    }

    syncUrlLang(locale);
    applyDataI18n();
    notifyLocaleListeners();
}

// ====================== LANGUAGE DROPDOWN ======================

const LOCALE_LABELS: Record<string, string> = {
    hy: "Հայերեն",
    en: "English",
    ru: "Русский",
};

function closeLangDropdown() {
    const menu = document.getElementById("lang-dropdown-menu");
    const toggle = document.getElementById("lang-dropdown-toggle");
    if (menu) {
        menu.hidden = true;
        menu.classList.remove("lang-dropdown-menu--open");
    }
    if (toggle) toggle.setAttribute("aria-expanded", "false");
}

function openLangDropdown() {
    const menu = document.getElementById("lang-dropdown-menu");
    const toggle = document.getElementById("lang-dropdown-toggle");
    if (menu) {
        menu.hidden = false;
        menu.classList.add("lang-dropdown-menu--open");
    }
    if (toggle) toggle.setAttribute("aria-expanded", "true");
}

function isLangDropdownOpen() {
    const toggle = document.getElementById("lang-dropdown-toggle");
    return toggle?.getAttribute("aria-expanded") === "true";
}

function syncLangDropdown() {
    const label = document.querySelector(".lang-dropdown-label");
    if (label) label.textContent = LOCALE_LABELS[currentLocale] ?? currentLocale;

    document.querySelectorAll(".lang-dropdown-item[data-set-lang]").forEach(item => {
        const lang = item.getAttribute("data-set-lang");
        const isActive = lang === currentLocale;
        item.classList.toggle("lang-dropdown-item--active", isActive);
        item.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    closeLangDropdown();
}

function bindLangDropdown() {
    const toggle = document.getElementById("lang-dropdown-toggle");
    const menu = document.getElementById("lang-dropdown-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isLangDropdownOpen()) {
            closeLangDropdown();
        } else {
            openLangDropdown();
        }
    });

    menu.querySelectorAll("[data-set-lang]").forEach(item => {
        item.addEventListener("click", () => {
            const lang = item.getAttribute("data-set-lang");
            if (lang) setLocale(lang);
        });
    });

    document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement | null;
        if (target && !target.closest(".lang-dropdown")) closeLangDropdown();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isLangDropdownOpen()) {
            closeLangDropdown();
            toggle.focus();
        }
    });
}

export function initI18n() {
    currentLocale = readLocaleFromUrl() ?? readLocaleFromStorage() ?? DEFAULT_LOCALE;
    if (!SUPPORTED_LOCALES.includes(currentLocale)) currentLocale = DEFAULT_LOCALE;

    syncUrlLang(currentLocale);
    applyDataI18n();
    bindLangDropdown();
}