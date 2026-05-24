
let currentArray = ["🍎", "🍊", "🍋", "🍒"];
const INITIAL_ARRAY = ["🍎", "🍊", "🍋", "🍒"];

let isAnimating = false;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function getElements() {
    return {
        mainContainer: document.getElementById("arrayVisualContainer"),
        sliceContainer: document.getElementById("sliceVisualContainer"),
        pushInput: document.getElementById("pushInput") as HTMLInputElement,
        unshiftInput: document.getElementById("unshiftInput") as HTMLInputElement,
        sliceStart: document.getElementById("sliceStart") as HTMLInputElement,
        sliceEnd: document.getElementById("sliceEnd") as HTMLInputElement,
        spliceStart: document.getElementById("spliceStart") as HTMLInputElement,
        spliceDelete: document.getElementById("spliceDelete") as HTMLInputElement,
        spliceInsert: document.getElementById("spliceInsert") as HTMLInputElement,
        btnPush: document.getElementById("btnPush") as HTMLButtonElement,
        btnPop: document.getElementById("btnPop") as HTMLButtonElement,
        btnShift: document.getElementById("btnShift") as HTMLButtonElement,
        btnUnshift: document.getElementById("btnUnshift") as HTMLButtonElement,
        btnSlice: document.getElementById("btnSlice") as HTMLButtonElement,
        btnSplice: document.getElementById("btnSplice") as HTMLButtonElement,
        btnReset: document.getElementById("btnResetArray") as HTMLButtonElement,
        consoleCode: document.getElementById("consoleCodePreview"),
        consoleReturn: document.getElementById("consoleReturnValue"),
        consoleState: document.getElementById("consoleArrayState"),
    };
}

function setButtonsDisabled(disabled: boolean) {
    const el = getElements();
    const buttons = [
        el.btnPush,
        el.btnPop,
        el.btnShift,
        el.btnUnshift,
        el.btnSlice,
        el.btnSplice,
        el.btnReset,
    ];
    buttons.forEach((btn) => {
        if (btn) btn.disabled = disabled;
    });
}

function renderArrayState(arr: string[], container: HTMLElement | null) {
    if (!container) return;

    // Reset container with brackets
    container.innerHTML = '<span class="bracket">[</span><span class="bracket">]</span>';
    const rightBracket = container.lastElementChild;

    arr.forEach((val, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "element-wrapper";

        const indexTag = document.createElement("div");
        indexTag.className = "index-tag";
        indexTag.textContent = `i: ${index}`;

        const node = document.createElement("div");
        node.className = "item-node";
        node.textContent = val;

        wrapper.appendChild(indexTag);
        wrapper.appendChild(node);

        container.insertBefore(wrapper, rightBracket);
    });
}

function updateConsole(code: string, returnValue: any, finalArray: string[]) {
    const el = getElements();
    if (el.consoleCode) {
        el.consoleCode.innerHTML = `let arr = [${INITIAL_ARRAY.map((v) => `'${v}'`).join(", ")}];<br><span style="color: var(--accent-success);">${code}</span>`;
    }
    if (el.consoleReturn) {
        if (typeof returnValue === "string") {
            el.consoleReturn.textContent = `'${returnValue}'`;
        } else if (Array.isArray(returnValue)) {
            el.consoleReturn.textContent = `[${returnValue.map((v) => `'${v}'`).join(", ")}]`;
        } else {
            el.consoleReturn.textContent = String(returnValue);
        }
    }
    if (el.consoleState) {
        el.consoleState.textContent = `[${finalArray.map((v) => `'${v}'`).join(", ")}]`;
    }
}

async function handlePush() {
    if (isAnimating) return;
    const el = getElements();
    const val = el.pushInput ? el.pushInput.value.trim() || "🥑" : "🥑";

    isAnimating = true;
    setButtonsDisabled(true);

    // 1. Add to array in memory
    currentArray.push(val);

    // 2. Render new element wrapper at the end with incoming animation
    const rightBracket = el.mainContainer?.lastElementChild;
    if (el.mainContainer && rightBracket) {
        const wrapper = document.createElement("div");
        wrapper.className = "element-wrapper incoming";

        const indexTag = document.createElement("div");
        indexTag.className = "index-tag";
        indexTag.textContent = `i: ${currentArray.length - 1}`;

        const node = document.createElement("div");
        node.className = "item-node";
        node.textContent = val;

        wrapper.appendChild(indexTag);
        wrapper.appendChild(node);

        el.mainContainer.insertBefore(wrapper, rightBracket);

        // trigger CSS transition
        await delay(50);
        wrapper.classList.remove("incoming");
    }

    updateConsole(`arr.push('${val}');`, currentArray.length, currentArray);

    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handlePop() {
    if (isAnimating || currentArray.length === 0) return;
    const el = getElements();

    isAnimating = true;
    setButtonsDisabled(true);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    if (wrappers && wrappers.length > 0) {
        const lastWrapper = wrappers[wrappers.length - 1] as HTMLElement;
        lastWrapper.classList.add("outgoing");
        await delay(500);
    }

    const popped = currentArray.pop();
    renderArrayState(currentArray, el.mainContainer);
    updateConsole("arr.pop();", popped !== undefined ? popped : "undefined", currentArray);

    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleUnshift() {
    if (isAnimating) return;
    const el = getElements();
    const val = el.unshiftInput ? el.unshiftInput.value.trim() || "🥥" : "🥥";

    isAnimating = true;
    setButtonsDisabled(true);

    const indexTags = el.mainContainer?.querySelectorAll(".index-tag");

    // 1. Flash indexes to warn they will change
    indexTags?.forEach((tag) => tag.classList.add("changed"));
    await delay(500);

    // 2. Increment displayed indexes
    indexTags?.forEach((tag, idx) => {
        tag.textContent = `i: ${idx + 1}`;
    });
    await delay(400);

    // 3. Insert new incoming node at index 0
    const leftBracket = el.mainContainer?.firstElementChild;
    if (el.mainContainer && leftBracket) {
        const wrapper = document.createElement("div");
        wrapper.className = "element-wrapper incoming";

        const indexTag = document.createElement("div");
        indexTag.className = "index-tag";
        indexTag.style.background = "#10b981";
        indexTag.textContent = "i: 0";

        const node = document.createElement("div");
        node.className = "item-node";
        node.textContent = val;

        wrapper.appendChild(indexTag);
        wrapper.appendChild(node);

        el.mainContainer.insertBefore(wrapper, leftBracket.nextSibling);

        await delay(50);
        wrapper.classList.remove("incoming");
    }

    // 4. Remove highlight tags classes
    indexTags?.forEach((tag) => tag.classList.remove("changed"));

    currentArray.unshift(val);
    updateConsole(`arr.unshift('${val}');`, currentArray.length, currentArray);

    await delay(600);
    renderArrayState(currentArray, el.mainContainer);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleShift() {
    if (isAnimating || currentArray.length === 0) return;
    const el = getElements();

    isAnimating = true;
    setButtonsDisabled(true);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    const indexTags = el.mainContainer?.querySelectorAll(".index-tag");

    if (wrappers && wrappers.length > 0) {
        // 1. First element goes outgoing
        const firstWrapper = wrappers[0] as HTMLElement;
        firstWrapper.classList.add("outgoing");

        // 2. Highlight other indexes and update them
        indexTags?.forEach((tag, idx) => {
            if (idx > 0) {
                tag.classList.add("changed");
            }
        });
        await delay(500);

        indexTags?.forEach((tag, idx) => {
            if (idx > 0) {
                tag.textContent = `i: ${idx - 1}`;
            }
        });
        await delay(400);
    }

    const shifted = currentArray.shift();
    renderArrayState(currentArray, el.mainContainer);
    updateConsole("arr.shift();", shifted !== undefined ? shifted : "undefined", currentArray);

    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleSlice() {
    if (isAnimating) return;
    const el = getElements();

    const start = parseInt(el.sliceStart?.value) || 0;
    const end = parseInt(el.sliceEnd?.value) || 0;

    isAnimating = true;
    setButtonsDisabled(true);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");

    // Clamp values for visualization highlighting
    const len = currentArray.length;
    const normStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    const normEnd = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

    // Highlight original items in slice range
    wrappers?.forEach((wrapper, idx) => {
        if (idx >= normStart && idx < normEnd) {
            wrapper.classList.add("highlight-slice");
        }
    });

    const sliced = currentArray.slice(start, end);
    updateConsole(`arr.slice(${start}, ${end});`, sliced, currentArray);

    // Render slice preview container
    if (el.sliceContainer) {
        el.sliceContainer.classList.remove("hidden");
        renderArrayState(sliced, el.sliceContainer);

        // Add incoming animations to slice elements
        const sliceWrappers = el.sliceContainer.querySelectorAll(".element-wrapper");
        sliceWrappers.forEach((w) => w.classList.add("incoming"));
        await delay(50);
        sliceWrappers.forEach((w) => w.classList.remove("incoming"));
    }

    // Keep highlighted for 3 seconds before auto reset
    await delay(3000);

    wrappers?.forEach((wrapper) => wrapper.classList.remove("highlight-slice"));
    if (el.sliceContainer) {
        el.sliceContainer.classList.add("hidden");
    }

    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleSplice() {
    if (isAnimating) return;
    const el = getElements();

    const start = parseInt(el.spliceStart?.value) || 0;
    let deleteCount = parseInt(el.spliceDelete?.value);
    if (isNaN(deleteCount)) deleteCount = 0;
    if (deleteCount < 0) deleteCount = 0;

    const insertVal = el.spliceInsert ? el.spliceInsert.value.trim() : "";
    const insertArr = insertVal ? insertVal.split(",").map((v) => v.trim()) : [];

    isAnimating = true;
    setButtonsDisabled(true);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    const len = currentArray.length;

    const normStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    const normEnd = Math.min(normStart + deleteCount, len);

    // 1. Highlight deleted elements in red
    wrappers?.forEach((wrapper, idx) => {
        if (idx >= normStart && idx < normEnd) {
            wrapper.classList.add("highlight-delete");
        }
    });
    await delay(800);

    // 2. Animate deletion (outgoing)
    wrappers?.forEach((wrapper, idx) => {
        if (idx >= normStart && idx < normEnd) {
            wrapper.classList.add("outgoing");
        }
    });
    await delay(500);

    // 3. Perform splice in memory
    const deleted = currentArray.splice(start, deleteCount, ...insertArr);

    // 4. Update console & re-render final state
    const codeCall = `arr.splice(${start}, ${deleteCount}${insertArr.length > 0 ? `, ${insertArr.map((v) => `'${v}'`).join(", ")}` : ""});`;
    updateConsole(codeCall, deleted, currentArray);
    renderArrayState(currentArray, el.mainContainer);

    // 5. Flash new inserted items
    if (insertArr.length > 0 && el.mainContainer) {
        const newWrappers = el.mainContainer.querySelectorAll(".element-wrapper");
        newWrappers.forEach((wrapper, idx) => {
            if (idx >= normStart && idx < normStart + insertArr.length) {
                wrapper.classList.add("incoming");
            }
        });
        await delay(50);
        newWrappers.forEach((wrapper) => wrapper.classList.remove("incoming"));
    }

    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

function handleReset() {
    if (isAnimating) return;
    const el = getElements();
    currentArray = [...INITIAL_ARRAY];
    renderArrayState(currentArray, el.mainContainer);
    if (el.sliceContainer) {
        el.sliceContainer.classList.add("hidden");
    }
    if (el.consoleCode) {
        el.consoleCode.innerHTML = `let arr = [${INITIAL_ARRAY.map((v) => `'${v}'`).join(", ")}];`;
    }
    if (el.consoleReturn) el.consoleReturn.textContent = "undefined";
    if (el.consoleState) el.consoleState.textContent = `[${INITIAL_ARRAY.map((v) => `'${v}'`).join(", ")}]`;
}

export function initArrayMethodsVisualizer() {
    const container = document.getElementById("arrayVisualContainer");
    if (!container) return;

    renderArrayState(currentArray, container);

    const el = getElements();
    el.btnPush?.addEventListener("click", handlePush);
    el.btnPop?.addEventListener("click", handlePop);
    el.btnUnshift?.addEventListener("click", handleUnshift);
    el.btnShift?.addEventListener("click", handleShift);
    el.btnSlice?.addEventListener("click", handleSlice);
    el.btnSplice?.addEventListener("click", handleSplice);
    el.btnReset?.addEventListener("click", handleReset);
}

export function refreshArrayMethodsVisualizer() {
    const container = document.getElementById("arrayVisualContainer");
    if (container) {
        renderArrayState(currentArray, container);
    }
    const el = getElements();
    if (el.sliceContainer && !el.sliceContainer.classList.contains("hidden")) {
        const sliced = currentArray.slice(
            parseInt(el.sliceStart?.value) || 0,
            parseInt(el.sliceEnd?.value) || 0
        );
        renderArrayState(sliced, el.sliceContainer);
    }
}
