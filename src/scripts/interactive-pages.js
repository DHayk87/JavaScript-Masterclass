/**
 * Page-specific interactive behavior that must track the active UI locale.
 */
import { t } from "../i18n/index.js";

const CP_STAGE_KEYS = {
    1: ["stage1Title", "stage1Sub", "stage1Desc", "stage1Visual"],
    2: ["stage2Title", "stage2Sub", "stage2Desc", "stage2Visual"],
    3: ["stage3Title", "stage3Sub", "stage3Desc", "stage3Visual"],
    4: ["stage4Title", "stage4Sub", "stage4Desc", "stage4Visual"],
};

function buildCodeParsingStage(id) {
    const keys = CP_STAGE_KEYS[id];
    if (!keys) return null;
    const [titleK, subK, descK, visK] = keys;
    return {
        title: t(`pages.codeParsing.${titleK}`),
        subtitle: t(`pages.codeParsing.${subK}`),
        desc: t(`pages.codeParsing.${descK}`),
        visual: t(`pages.codeParsing.${visK}`),
    };
}

function initGettingStartedDemo() {
    if (!document.querySelector('[data-i18n-page="gettingStarted"]')) return;

    window.testInteraction = () => {
        const name = prompt(
            t("pages.gettingStarted.demoNamePrompt"),
            t("pages.gettingStarted.demoNameDefault"),
        );
        if (name) {
            const isReady = confirm(t("pages.gettingStarted.demoReady"));
            if (isReady) {
                alert(t("pages.gettingStarted.demoHello") + name + t("pages.gettingStarted.demoStart"));
            } else {
                alert(t("pages.gettingStarted.demoWait"));
            }
        }
    };
}

function initCorePlayground() {
    const btn = document.getElementById("magicBtn");
    const output = document.getElementById("output");
    if (!btn || !output) return;

    let successTimer = null;

    const resetUi = () => {
        const b = document.getElementById("magicBtn");
        if (b) {
            b.textContent = t("pages.core.playBtn");
            b.classList.remove("btn-success");
        }
        output.classList.remove("output-show");
    };

    window.__jsCorePlaygroundReset = resetUi;

    btn.addEventListener("click", () => {
        if (successTimer) clearTimeout(successTimer);
        const b = document.getElementById("magicBtn");
        output.classList.add("output-show");
        if (b) {
            b.textContent = t("pages.core.playBtnDone");
            b.classList.add("btn-success");
        }

        successTimer = setTimeout(() => {
            alert(t("pages.core.playAlert"));
            successTimer = setTimeout(() => {
                resetUi();
                successTimer = null;
            }, 3000);
        }, 100);
    });
}

function initCodeParsingVisualizer() {
    const panel = document.getElementById("panel");
    if (!panel) return;

    window.__jsCoreStage = window.__jsCoreStage ?? 1;

    window.selectStage = (id) => {
        window.__jsCoreStage = id;
        document.querySelectorAll(".stage-card").forEach((c) => c.classList.remove("active"));
        const card = document.getElementById(`card-${id}`);
        if (card) card.classList.add("active");

        const placeholder = document.getElementById("placeholder");
        const content = document.getElementById("content");
        if (placeholder) placeholder.classList.add("hidden");
        if (content) content.classList.remove("hidden");

        const stage = buildCodeParsingStage(id);
        if (!stage) return;

        const iconEl = document.getElementById("det-icon");
        if (iconEl) {
            const icons = { 1: "🔍", 2: "🌳", 3: "🔥", 4: "🚀" };
            iconEl.textContent = icons[id] ?? "";
        }
        const titleEl = document.getElementById("det-title");
        const subEl = document.getElementById("det-subtitle");
        const descEl = document.getElementById("det-desc");
        const visEl = document.getElementById("det-visual");
        if (titleEl) titleEl.textContent = stage.title;
        if (subEl) subEl.textContent = stage.subtitle;
        if (descEl) descEl.textContent = stage.desc;
        if (visEl) visEl.innerHTML = stage.visual;
    };

    window.selectStage(window.__jsCoreStage);
}

export function initInteractivePages() {
    initGettingStartedDemo();
    initCorePlayground();
    initCodeParsingVisualizer();
}

export function refreshInteractivePages() {
    if (typeof window.__jsCorePlaygroundReset === "function") {
        window.__jsCorePlaygroundReset();
    }
    if (typeof window.selectStage === "function" && document.getElementById("card-1")) {
        window.selectStage(window.__jsCoreStage ?? 1);
    }
    const ph = document.getElementById("placeholder");
    if (ph) ph.textContent = t("pages.codeParsing.placeholder");
}
