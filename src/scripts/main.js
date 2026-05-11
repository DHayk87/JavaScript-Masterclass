/**
 * JS.CORE Main Script
 * Handles global functionality: Mermaid diagrams, Copy to Clipboard, etc.
 */

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
            await mermaid.run({ nodes: mermaidElements });
        } catch (error) {
            console.error("Failed to load Mermaid:", error);
        }
    }
};

// 2. Copy to Clipboard Logic
const initCopyButtons = () => {
    const codeBlocks = document.querySelectorAll(".code-block, .code-inset");

    codeBlocks.forEach((block) => {
        // Prevent duplicate buttons if script is re-run
        if (block.querySelector(".copy-btn")) return;

        const button = document.createElement("button");
        button.className = "copy-btn";
        button.innerText = "Copy";
        block.appendChild(button);

        button.addEventListener("click", () => {
            // Get text, exclude the button text itself
            const code = block.innerText.replace("Copy", "").trim();

            navigator.clipboard
                .writeText(code)
                .then(() => {
                    button.innerText = "Copied!";
                    button.classList.add("copied");

                    setTimeout(() => {
                        button.innerText = "Copy";
                        button.classList.remove("copied");
                    }, 2000);
                })
                .catch((err) => {
                    console.error("Failed to copy: ", err);
                });
        });
    });
};

// Initialize when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        initCopyButtons();
        initMermaid();
    });
} else {
    initCopyButtons();
    initMermaid();
}
