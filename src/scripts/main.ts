/**
 * JS.CORE Main Script
 * Handles global functionality: i18n, Mermaid diagrams, Copy to Clipboard, etc.
 */

import { initI18n, onLocaleChange, t } from "../i18n/index.js";
import { initInteractivePages, refreshInteractivePages } from "./interactive-pages.js";

// 1. Initialize Mermaid (Lazy Load)
const initMermaid = async () => {
    const mermaidElements = document.querySelectorAll(".mermaid");
    if (mermaidElements.length > 0) {
        try {
            const { default: mermaid } = await import("mermaid");
            mermaid.initialize({
                startOnLoad: false,
                theme: "dark",
                securityLevel: "loose",
                fontFamily: "Noto Sans Armenian",
            });
            await mermaid.run({ nodes: Array.from(mermaidElements) as HTMLElement[] });
        } catch (error) {
            console.error("Failed to load Mermaid:", error);
        }
    }
};

// 2. Copy to Clipboard Logic
const initCopyButtons = () => {
    const codeBlocks = document.querySelectorAll(".code-block, .code-inset");

    codeBlocks.forEach((block) => {
        if (block.querySelector(".copy-btn")) return;

        const button = document.createElement("button");
        button.className = "copy-btn";
        button.type = "button";
        button.textContent = t("copy.copy");
        block.appendChild(button);

        button.addEventListener("click", () => {
            const clone = block.cloneNode(true) as HTMLElement;
            clone.querySelectorAll(".copy-btn").forEach((b) => b.remove());
            const code = clone.innerText.trim();

            navigator.clipboard
                .writeText(code)
                .then(() => {
                    button.textContent = t("copy.copied");
                    button.classList.add("copied");

                    setTimeout(() => {
                        button.textContent = t("copy.copy");
                        button.classList.remove("copied");
                    }, 2000);
                })
                .catch((err) => {
                    console.error("Failed to copy: ", err);
                });
        });
    });
};

function refreshCopyButtonLabels() {
    document.querySelectorAll(".copy-btn:not(.copied)").forEach((btn) => {
        btn.textContent = t("copy.copy");
    });
}

function boot() {
    initI18n();
    onLocaleChange(() => {
        refreshCopyButtonLabels();
        refreshInteractivePages();
    });
    initInteractivePages();
    initCopyButtons();
    void initMermaid();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
} else {
    boot();
}
