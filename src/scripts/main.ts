/**
 * JS.CORE Main Script
 * Handles global functionality: i18n, Mermaid diagrams, Copy to Clipboard, etc.
 */

import { inject } from "@vercel/analytics";
import { initI18n, onLocaleChange, t } from "../i18n/index.js";
import {
  initInteractivePages,
  refreshInteractivePages,
} from "./interactive-pages.js";

// Initialize Vercel Analytics
inject();

// 1. Initialize Mermaid
let mermaidInstance: any = null;

const initMermaid = async () => {
  if (!mermaidInstance) {
    try {
      const { default: mermaid } = await import("mermaid");
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        securityLevel: "loose",
        fontFamily: "Noto Sans, Arial, sans-serif",
      });
      mermaidInstance = mermaid;
    } catch (error) {
      console.error("Failed to load Mermaid:", error);
      return;
    }
  }
  await renderMermaid();
};

const renderMermaid = async () => {
  if (!mermaidInstance) return;
  const mermaidElements = document.querySelectorAll(".mermaid");
  if (mermaidElements.length > 0) {
    // Reset processed state for re-rendering (e.g. on locale change)
    mermaidElements.forEach((el) => {
      // Store original diagram text on first render
      if (!el.hasAttribute("data-mermaid-original")) {
        el.setAttribute("data-mermaid-original", el.innerHTML);
      } else {
        // Restore original diagram text for re-rendering
        el.innerHTML = el.getAttribute("data-mermaid-original") || "";
      }
      el.removeAttribute("data-processed");
    });
    try {
      await mermaidInstance.run({
        nodes: Array.from(mermaidElements) as HTMLElement[],
      });
    } catch (error) {
      console.error("Mermaid render error:", error);
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
  onLocaleChange(async () => {
    refreshCopyButtonLabels();
    refreshInteractivePages();
    await renderMermaid();
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
