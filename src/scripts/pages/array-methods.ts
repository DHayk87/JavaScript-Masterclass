let currentArray = ["🍎", "🍊", "🍋", "🍒"];
const INITIAL_ARRAY = ["🍎", "🍊", "🍋", "🍒"];

let isAnimating = false;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function getElements() {
    return {
        mainContainer: document.getElementById("arrayVisualContainer"),
        returnContainer: document.getElementById("returnVisualContainer"),
        sliceContainer: document.getElementById("returnVisualContainer"),
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
        btnSort: document.getElementById("btnSort") as HTMLButtonElement,
        sortOrder: document.getElementById("sortOrder") as HTMLSelectElement,
        btnReset: document.getElementById("btnResetArray") as HTMLButtonElement,
        searchInput: document.getElementById("searchInput") as HTMLInputElement,
        btnIndexOf: document.getElementById("btnIndexOf") as HTMLButtonElement,
        btnIncludes: document.getElementById("btnIncludes") as HTMLButtonElement,
        conditionInput: document.getElementById("conditionInput") as HTMLInputElement,
        btnFind: document.getElementById("btnFind") as HTMLButtonElement,
        btnSome: document.getElementById("btnSome") as HTMLButtonElement,
        btnEvery: document.getElementById("btnEvery") as HTMLButtonElement,
        transformInput: document.getElementById("transformInput") as HTMLInputElement,
        btnFilter: document.getElementById("btnFilter") as HTMLButtonElement,
        btnMap: document.getElementById("btnMap") as HTMLButtonElement,
        btnReverse: document.getElementById("btnReverse") as HTMLButtonElement,
        joinInput: document.getElementById("joinInput") as HTMLInputElement,
        btnJoin: document.getElementById("btnJoin") as HTMLButtonElement,
        btnFlat: document.getElementById("btnFlat") as HTMLButtonElement,
        fillInput: document.getElementById("fillInput") as HTMLInputElement,
        btnFill: document.getElementById("btnFill") as HTMLButtonElement,
        btnReduce: document.getElementById("btnReduce") as HTMLButtonElement,
        btnFlatMap: document.getElementById("btnFlatMap") as HTMLButtonElement,
        btnReduceRight: document.getElementById("btnReduceRight") as HTMLButtonElement,
        copyTarget: document.getElementById("copyTarget") as HTMLInputElement,
        copyStart: document.getElementById("copyStart") as HTMLInputElement,
        btnCopyWithin: document.getElementById("btnCopyWithin") as HTMLButtonElement,
        btnToReversed: document.getElementById("btnToReversed") as HTMLButtonElement,
        btnToSorted: document.getElementById("btnToSorted") as HTMLButtonElement,
        btnToSpliced: document.getElementById("btnToSpliced") as HTMLButtonElement,
        withIndex: document.getElementById("withIndex") as HTMLInputElement,
        withValue: document.getElementById("withValue") as HTMLInputElement,
        btnWith: document.getElementById("btnWith") as HTMLButtonElement,
        btnForEach: document.getElementById("btnForEach") as HTMLButtonElement,
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
        el.btnSort,
        el.btnIndexOf,
        el.btnIncludes,
        el.btnFind,
        el.btnSome,
        el.btnEvery,
        el.btnFilter,
        el.btnMap,
        el.btnReverse,
        el.btnJoin,
        el.btnFlat,
        el.btnFill,
        el.btnReduce,
        el.btnFlatMap,
        el.btnReduceRight,
        el.btnCopyWithin,
        el.btnToReversed,
        el.btnToSorted,
        el.btnToSpliced,
        el.btnWith,
        el.btnForEach,
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

function visualizeReturn(
    value: any,
    type: "array" | "element" | "length" | "reference" | "index" | "boolean",
) {
    const el = getElements();
    if (!el.returnContainer) return;
    const container = el.returnContainer;
    container.innerHTML = "";

    if (type === "array" || type === "reference") {
        renderArrayState(value as string[], container);
        if (type === "reference") {
            const label = document.createElement("div");
            label.style.color = "var(--js-yellow)";
            label.style.fontSize = "0.8rem";
            label.style.marginTop = "10px";
            label.style.fontFamily = "monospace";
            label.textContent = "// Returns: Reference to original array";
            container.appendChild(label);
        }
    } else {
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.flexDirection = "column";
        wrapper.style.alignItems = "center";
        wrapper.style.justifyContent = "center";
        wrapper.style.width = "100%";

        const node = document.createElement("div");
        node.className = "item-node incoming";
        node.textContent = value === undefined ? "undefined" : String(value);

        if (type === "length" || type === "index") {
            node.style.background = "rgba(16, 185, 129, 0.1)";
            node.style.borderColor = "#10b981";
            node.style.color = "#10b981";
        } else if (type === "boolean") {
            const isTrue = Boolean(value);
            node.style.background = isTrue
                ? "rgba(16, 185, 129, 0.1)"
                : "rgba(244, 63, 94, 0.1)";
            node.style.borderColor = isTrue ? "#10b981" : "#f43f5e";
            node.style.color = isTrue ? "#10b981" : "#f43f5e";
        }

        wrapper.appendChild(node);

        const label = document.createElement("div");
        label.style.color = "var(--text-dim)";
        label.style.fontSize = "0.8rem";
        label.style.marginTop = "10px";

        let labelText: string;
        switch (type) {
            case "length":
                labelText = "// Returns: New Array Length";
                break;
            case "index":
                labelText = "// Returns: Index of found element";
                break;
            case "boolean":
                labelText = "// Returns: Boolean result";
                break;
            default:
                labelText = "// Returns: Value";
        }
        label.textContent = labelText;
        wrapper.appendChild(label);

        container.appendChild(wrapper);
        setTimeout(() => node.classList.remove("incoming"), 50);
    }
}

async function visualizeScan(
    targetIdx: number | number[],
    stopAtFirst: boolean = false,
    matchClass: string = "highlight-match",
) {
    const el = getElements();
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    if (!wrappers) return;

    const targets = Array.isArray(targetIdx) ? targetIdx : [targetIdx];

    for (let i = 0; i < wrappers.length; i++) {
        const wrapper = wrappers[i] as HTMLElement;
        wrapper.classList.add("highlight-slice");
        await delay(300);

        if (targets.includes(i)) {
            wrapper.classList.remove("highlight-slice");
            wrapper.classList.add(matchClass);
            if (stopAtFirst) {
                await delay(300);
                return;
            }
        } else {
            wrapper.classList.remove("highlight-slice");
        }
        await delay(100);
    }
}

async function handleIndexOf() {
    if (isAnimating) return;
    const el = getElements();
    const val = el.searchInput?.value.trim() || "";
    isAnimating = true;
    setButtonsDisabled(true);

    const idx = currentArray.indexOf(val);
    await visualizeScan(idx, true);

    updateConsole(`arr.indexOf('${val}');`, idx, currentArray);
    visualizeReturn(idx, "index");

    await delay(600);
    renderArrayState(currentArray, el.mainContainer);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleIncludes() {
    if (isAnimating) return;
    const el = getElements();
    const val = el.searchInput?.value.trim() || "";
    isAnimating = true;
    setButtonsDisabled(true);

    const found = currentArray.includes(val);
    const idx = currentArray.indexOf(val);
    await visualizeScan(idx, true);

    updateConsole(`arr.includes('${val}');`, found, currentArray);
    visualizeReturn(found, "boolean");

    await delay(600);
    renderArrayState(currentArray, el.mainContainer);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleFind() {
    if (isAnimating) return;
    const el = getElements();
    const target = el.conditionInput?.value.trim() || "";
    isAnimating = true;
    setButtonsDisabled(true);

    const found = currentArray.find((x) => x === target);
    const idx = currentArray.findIndex((x) => x === target);
    await visualizeScan(idx, true);

    updateConsole(`arr.find(x => x === '${target}');`, found, currentArray);
    visualizeReturn(found, "element");

    await delay(600);
    renderArrayState(currentArray, el.mainContainer);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleSome() {
    if (isAnimating) return;
    const el = getElements();
    const target = el.conditionInput?.value.trim() || "";
    isAnimating = true;
    setButtonsDisabled(true);

    const res = currentArray.some((x) => x === target);
    const idx = currentArray.findIndex((x) => x === target);
    await visualizeScan(idx, true);

    updateConsole(`arr.some(x => x === '${target}');`, res, currentArray);
    visualizeReturn(res, "boolean");

    await delay(600);
    renderArrayState(currentArray, el.mainContainer);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleEvery() {
    if (isAnimating) return;
    const el = getElements();
    const target = el.conditionInput?.value.trim() || "";
    isAnimating = true;
    setButtonsDisabled(true);

    const res = currentArray.every((x) => x === target);
    let failIdx = -1;
    if (!res) {
        failIdx = currentArray.findIndex((x) => x !== target);
    }

    // Scan all if true (all match), or scan until fail if false (highlight failure in red)
    await visualizeScan(failIdx, !res, res ? "highlight-match" : "highlight-delete");

    updateConsole(`arr.every(x => x === '${target}');`, res, currentArray);
    visualizeReturn(res, "boolean");

    await delay(600);
    renderArrayState(currentArray, el.mainContainer);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleFilter() {
    if (isAnimating) return;
    const el = getElements();
    const target = el.transformInput?.value.trim() || "";
    isAnimating = true;
    setButtonsDisabled(true);

    const filtered = currentArray.filter((x) => x === target);
    const matchingIndices = currentArray
        .map((x, i) => (x === target ? i : -1))
        .filter((i) => i !== -1);

    await visualizeScan(matchingIndices, false);

    updateConsole(`arr.filter(x => x === '${target}');`, filtered, currentArray);
    visualizeReturn(filtered, "array");

    await delay(600);
    renderArrayState(currentArray, el.mainContainer);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleMap() {
    if (isAnimating) return;
    const el = getElements();
    const target = el.transformInput?.value.trim() || "";
    isAnimating = true;
    setButtonsDisabled(true);

    // Example map: if it matches target, replace with target + '✨', else keep same
    const mapped = currentArray.map((x) => (x === target ? x + "✨" : x));

    // Highlight all for map
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.add("highlight-slice"));
    await delay(600);

    updateConsole(
        `arr.map(x => x === '${target}' ? x + '✨' : x);`,
        mapped,
        currentArray,
    );
    visualizeReturn(mapped, "array");

    await delay(600);
    wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleReverse() {
    if (isAnimating) return;
    const el = getElements();
    isAnimating = true;
    setButtonsDisabled(true);

    // 1. Highlight all
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.add("highlight-slice"));
    await delay(500);

    // 2. Perform reverse
    currentArray.reverse();
    renderArrayState(currentArray, el.mainContainer);

    updateConsole(`arr.reverse();`, currentArray, currentArray);
    visualizeReturn(currentArray, "reference");

    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleJoin() {
    if (isAnimating) return;
    const el = getElements();
    const sep = el.joinInput?.value || "";
    isAnimating = true;
    setButtonsDisabled(true);

    // Highlight scanning
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    for (let i = 0; i < (wrappers?.length || 0); i++) {
        wrappers![i].classList.add("highlight-match");
        await delay(150);
    }

    const res = currentArray.join(sep);
    updateConsole(`arr.join('${sep}');`, res, currentArray);

    // Custom visualization for join string
    if (el.returnContainer) {
        el.returnContainer.innerHTML = "";
        const textNode = document.createElement("div");
        textNode.style.fontSize = "1.5rem";
        textNode.style.color = "var(--js-yellow)";
        textNode.style.fontFamily = "monospace";
        textNode.style.wordBreak = "break-all";
        textNode.style.padding = "1rem";
        textNode.textContent = `"${res}"`;
        el.returnContainer.appendChild(textNode);

        const label = document.createElement("div");
        label.style.color = "var(--text-dim)";
        label.style.fontSize = "0.8rem";
        label.style.marginTop = "10px";
        label.textContent = "// Returns: Joined String";
        el.returnContainer.appendChild(label);
    }

    await delay(600);
    wrappers?.forEach((w) => w.classList.remove("highlight-match"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleFlat() {
    if (isAnimating) return;
    const el = getElements();

    // For visualization, we'll temporarily add a nested array if it doesn't exist
    // just to show how flat works, or we can just use the current state
    const hasNested = currentArray.some((x) => x.includes("["));
    if (!hasNested) {
        // Scaffold a nested structure for demo if none exists
        currentArray = [["🍎", "🍎"], "🍊", ["🍋", ["🍋"]]] as any;
        renderArrayState(
            currentArray.map((x) => (Array.isArray(x) ? "[...]" : x)),
            el.mainContainer,
        );
        await delay(800);
    }

    isAnimating = true;
    setButtonsDisabled(true);

    const flattened = (currentArray as any).flat();
    currentArray = flattened;

    updateConsole(`arr.flat();`, flattened, currentArray);
    renderArrayState(currentArray, el.mainContainer);
    visualizeReturn(flattened, "array");

    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleFill() {
    if (isAnimating) return;
    const el = getElements();
    const val = el.fillInput?.value.trim() || "🫐";
    isAnimating = true;
    setButtonsDisabled(true);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.add("highlight-slice"));
    await delay(600);

    currentArray.fill(val);
    renderArrayState(currentArray, el.mainContainer);

    updateConsole(`arr.fill('${val}');`, currentArray, currentArray);
    visualizeReturn(currentArray, "reference");

    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleReduce() {
    if (isAnimating) return;
    const el = getElements();
    isAnimating = true;
    setButtonsDisabled(true);

    // We'll simulate a count or join reduction
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    let acc = "";

    if (el.returnContainer) {
        el.returnContainer.innerHTML = "";
        const accDisplay = document.createElement("div");
        accDisplay.style.fontSize = "1.2rem";
        accDisplay.style.color = "var(--js-yellow)";
        accDisplay.style.padding = "1rem";
        accDisplay.innerHTML = "Accumulator: <span id='accVal'>\"\"</span>";
        el.returnContainer.appendChild(accDisplay);
    }

    for (let i = 0; i < currentArray.length; i++) {
        const wrapper = wrappers![i] as HTMLElement;
        wrapper.classList.add("highlight-match");
        acc += currentArray[i];

        const accVal = document.getElementById("accVal");
        if (accVal) accVal.textContent = `"${acc}"`;

        await delay(400);
        wrapper.classList.remove("highlight-match");
    }

    const finalRes = currentArray.reduce((a, b) => a + b, "");
    updateConsole(`arr.reduce((acc, val) => acc + val, "");`, finalRes, currentArray);

    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleReduceRight() {
    if (isAnimating) return;
    const el = getElements();
    isAnimating = true;
    setButtonsDisabled(true);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    let acc = "";

    if (el.returnContainer) {
        el.returnContainer.innerHTML = "";
        const accDisplay = document.createElement("div");
        accDisplay.style.fontSize = "1.2rem";
        accDisplay.style.color = "var(--js-yellow)";
        accDisplay.style.padding = "1rem";
        accDisplay.innerHTML = "Accumulator: <span id='accVal'>\"\"</span>";
        el.returnContainer.appendChild(accDisplay);
    }

    // Iterate backwards for reduceRight
    for (let i = currentArray.length - 1; i >= 0; i--) {
        const wrapper = wrappers![i] as HTMLElement;
        wrapper.classList.add("highlight-match");
        acc += currentArray[i];

        const accVal = document.getElementById("accVal");
        if (accVal) accVal.textContent = `"${acc}"`;

        await delay(400);
        wrapper.classList.remove("highlight-match");
    }

    const finalRes = currentArray.reduceRight((a, b) => a + b, "");
    updateConsole(
        `arr.reduceRight((acc, val) => acc + val, "");`,
        finalRes,
        currentArray,
    );

    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleFlatMap() {
    if (isAnimating) return;
    const el = getElements();
    isAnimating = true;
    setButtonsDisabled(true);

    // Map each emoji to [emoji, '✨'] then flat
    const flatMapped = currentArray.flatMap((x) => [x, "✨"]);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.add("highlight-slice"));
    await delay(600);

    updateConsole(`arr.flatMap(x => [x, '✨']);`, flatMapped, currentArray);
    visualizeReturn(flatMapped, "array");

    await delay(600);
    wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleCopyWithin() {
    if (isAnimating) return;
    const el = getElements();
    const target = parseInt(el.copyTarget?.value) || 0;
    const start = parseInt(el.copyStart?.value) || 0;

    isAnimating = true;
    setButtonsDisabled(true);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    const len = currentArray.length;
    const normTarget = target < 0 ? Math.max(len + target, 0) : Math.min(target, len);
    const normStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);

    // 1. Highlight source
    if (wrappers && wrappers[normStart]) {
        wrappers[normStart].classList.add("highlight-slice");
    }
    await delay(500);

    // 2. Highlight target
    if (wrappers && wrappers[normTarget]) {
        wrappers[normTarget].classList.add("highlight-delete");
    }
    await delay(500);

    currentArray.copyWithin(target, start);
    renderArrayState(currentArray, el.mainContainer);

    updateConsole(`arr.copyWithin(${target}, ${start});`, currentArray, currentArray);
    visualizeReturn(currentArray, "reference");

    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleToReversed() {
    if (isAnimating) return;
    const el = getElements();
    isAnimating = true;
    setButtonsDisabled(true);

    const res = [...currentArray].reverse();

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.add("highlight-slice"));
    await delay(500);

    updateConsole(`arr.toReversed();`, res, currentArray);
    visualizeReturn(res, "array");

    await delay(600);
    wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleToSorted() {
    if (isAnimating) return;
    const el = getElements();
    isAnimating = true;
    setButtonsDisabled(true);

    const order = el.sortOrder?.value || "asc";
    const res = [...currentArray];
    if (order === "asc") {
        res.sort((a, b) => a.localeCompare(b));
    } else {
        res.sort((a, b) => b.localeCompare(a));
    }

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.add("highlight-slice"));
    await delay(500);

    updateConsole(
        `arr.toSorted(${order === "desc" ? "(a, b) => b.localeCompare(a)" : ""});`,
        res,
        currentArray,
    );
    visualizeReturn(res, "array");

    await delay(600);
    wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleToSpliced() {
    if (isAnimating) return;
    const el = getElements();
    const start = parseInt(el.spliceStart?.value) || 0;
    const deleteCount = parseInt(el.spliceDelete?.value) || 0;
    const insertVal = el.spliceInsert?.value.trim() || "";
    const insertArr = insertVal ? insertVal.split(",").map((v) => v.trim()) : [];

    isAnimating = true;
    setButtonsDisabled(true);

    const res = [...currentArray];
    res.splice(start, deleteCount, ...insertArr);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.add("highlight-slice"));
    await delay(500);

    updateConsole(
        `arr.toSpliced(${start}, ${deleteCount}${insertArr.length > 0 ? `, ${insertArr.map((v) => `'${v}'`).join(", ")}` : ""});`,
        res,
        currentArray,
    );
    visualizeReturn(res, "array");

    await delay(600);
    wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleWith() {
    if (isAnimating) return;
    const el = getElements();
    const index = parseInt(el.withIndex?.value) || 0;
    const value = el.withValue?.value.trim() || "💎";

    isAnimating = true;
    setButtonsDisabled(true);

    const len = currentArray.length;
    const normIndex = index < 0 ? Math.max(len + index, 0) : Math.min(index, len);

    const res = [...currentArray];
    if (normIndex < len) {
        res[normIndex] = value;
    }

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    if (wrappers && wrappers[normIndex]) {
        wrappers[normIndex].classList.add("highlight-match");
    }
    await delay(600);

    updateConsole(`arr.with(${index}, '${value}');`, res, currentArray);
    visualizeReturn(res, "array");

    await delay(600);
    if (wrappers && wrappers[normIndex]) {
        wrappers[normIndex].classList.remove("highlight-match");
    }
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleForEach() {
    if (isAnimating) return;
    const el = getElements();
    isAnimating = true;
    setButtonsDisabled(true);

    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");

    for (let i = 0; i < (wrappers?.length || 0); i++) {
        const wrapper = wrappers![i] as HTMLElement;
        wrapper.classList.add("highlight-match");
        await delay(300);
        wrapper.classList.remove("highlight-match");
        await delay(100);
    }

    updateConsole(`arr.forEach(val => console.log(val));`, undefined, currentArray);
    visualizeReturn(undefined, "element");

    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
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
    visualizeReturn(currentArray.length, "length");

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
    updateConsole(
        "arr.pop();",
        popped !== undefined ? popped : "undefined",
        currentArray,
    );
    visualizeReturn(popped, "element");

    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleUnshift() {
    if (isAnimating) return;
    const el = getElements();
    const val = el.unshiftInput ? el.unshiftInput.value.trim() || "🍓" : "🍓";

    isAnimating = true;
    setButtonsDisabled(true);

    const indexTags = el.mainContainer?.querySelectorAll(".index-tag");

    // 1. Highlight existing indexes and update them
    indexTags?.forEach((tag) => {
        tag.classList.add("changed");
        const currentIdx = parseInt(tag.textContent?.replace("i: ", "") || "0");
        tag.textContent = `i: ${currentIdx + 1}`;
    });
    await delay(500);

    // 2. Insert new incoming node at index 0
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
    visualizeReturn(currentArray.length, "length");

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
    updateConsole(
        "arr.shift();",
        shifted !== undefined ? shifted : "undefined",
        currentArray,
    );
    visualizeReturn(shifted, "element");

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
    visualizeReturn(sliced, "array");

    // Remove highlight after showing
    await delay(300);
    wrappers?.forEach((wrapper) => wrapper.classList.remove("highlight-slice"));

    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleSort() {
    if (isAnimating) return;
    const el = getElements();

    isAnimating = true;
    setButtonsDisabled(true);

    const order = el.sortOrder?.value || "asc";

    // Create a copy for sorting
    const sorted = [...currentArray];

    // Simple lexicographic sort (emoji sort by Unicode code point)
    if (order === "asc") {
        sorted.sort((a, b) => a.localeCompare(b));
    } else {
        sorted.sort((a, b) => b.localeCompare(a));
    }

    // Highlight elements that moved
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    const movedIndexes: Set<number> = new Set();
    sorted.forEach((val, newIdx) => {
        const oldIdx = currentArray.indexOf(val);
        if (oldIdx !== newIdx) {
            movedIndexes.add(oldIdx);
            movedIndexes.add(newIdx);
        }
    });

    // Flash elements that will move
    wrappers?.forEach((wrapper, idx) => {
        if (movedIndexes.has(idx)) {
            wrapper.classList.add("highlight-slice");
        }
    });
    await delay(800);

    // Update array and re-render
    currentArray = sorted;
    renderArrayState(currentArray, el.mainContainer);
    updateConsole(
        `arr.sort(${order === "desc" ? "(a, b) => b.localeCompare(a)" : "(a, b) => a.localeCompare(b)"});`,
        currentArray,
        currentArray,
    );
    visualizeReturn(currentArray, "reference");

    await delay(600);
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
    visualizeReturn(deleted, "array");
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

    // Clear return container
    if (el.returnContainer) {
        el.returnContainer.innerHTML = "";
    }
    if (el.consoleState)
        el.consoleState.textContent = `[${INITIAL_ARRAY.map((v) => `'${v}'`).join(", ")}]`;
}

function setupTableSorting() {
    const tables = [
        {
            headerId: "sortMutation",
            tableId: "glossaryTable",
            iconId: "sortIcon",
            colIndex: 3,
        },
        {
            headerId: "sortPerformanceMutation",
            tableId: "performanceTable",
            iconId: "sortPerfIcon",
            colIndex: 2,
        },
    ];

    tables.forEach(({ headerId, tableId, iconId, colIndex }) => {
        const header = document.getElementById(headerId);
        const table = document.getElementById(tableId) as HTMLTableElement;
        const icon = document.getElementById(iconId);
        const el = getElements();
        if (!header || !table || !icon) return;

        const tbody = table.tBodies[0];
        if (!tbody) return;
        const originalRows = Array.from(tbody.rows);
        let state: "none" | "yes" | "no" = "none";

        header.addEventListener("click", () => {
            const tbody = table.tBodies[0];
            if (!tbody) return;

            function getMutationValue(row: HTMLTableRowElement) {
                const cell = row.cells[colIndex];
                return cell?.getAttribute("data-mutation") === "true";
            }

            let sortedRows: HTMLTableRowElement[];

            if (state === "none") {
                state = "yes";
                icon.textContent = "↑";
                icon.style.opacity = "1";
                sortedRows = Array.from(tbody.rows).sort((a, b) => {
                    const aMut = getMutationValue(a);
                    const bMut = getMutationValue(b);
                    return aMut === bMut ? 0 : aMut ? -1 : 1;
                });
            } else if (state === "yes") {
                state = "no";
                icon.textContent = "↓";
                icon.style.opacity = "1";
                sortedRows = Array.from(tbody.rows).sort((a, b) => {
                    const aMut = getMutationValue(a);
                    const bMut = getMutationValue(b);
                    return aMut === bMut ? 0 : aMut ? 1 : -1;
                });
            } else {
                state = "none";
                icon.textContent = "↕";
                icon.style.opacity = "0.5";
                sortedRows = Array.from(tbody.rows);
            }

            const fragment = document.createDocumentFragment();
            sortedRows.forEach((row) => fragment.appendChild(row));
            tbody.appendChild(fragment);

            if (el.mainContainer) {
                renderArrayState(currentArray, el.mainContainer);
            }
        });
    });
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
    el.btnSort?.addEventListener("click", handleSort);
    el.btnIndexOf?.addEventListener("click", handleIndexOf);
    el.btnIncludes?.addEventListener("click", handleIncludes);
    el.btnFind?.addEventListener("click", handleFind);
    el.btnSome?.addEventListener("click", handleSome);
    el.btnEvery?.addEventListener("click", handleEvery);
    el.btnFilter?.addEventListener("click", handleFilter);
    el.btnMap?.addEventListener("click", handleMap);
    el.btnReverse?.addEventListener("click", handleReverse);
    el.btnJoin?.addEventListener("click", handleJoin);
    el.btnFlat?.addEventListener("click", handleFlat);
    el.btnFill?.addEventListener("click", handleFill);
    el.btnReduce?.addEventListener("click", handleReduce);
    el.btnReduceRight?.addEventListener("click", handleReduceRight);
    el.btnFlatMap?.addEventListener("click", handleFlatMap);
    el.btnCopyWithin?.addEventListener("click", handleCopyWithin);
    el.btnToReversed?.addEventListener("click", handleToReversed);
    el.btnToSorted?.addEventListener("click", handleToSorted);
    el.btnToSpliced?.addEventListener("click", handleToSpliced);
    el.btnWith?.addEventListener("click", handleWith);
    el.btnForEach?.addEventListener("click", handleForEach);
    el.btnReset?.addEventListener("click", handleReset);

    setupTableSorting();
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
            parseInt(el.sliceEnd?.value) || 0,
        );
        renderArrayState(sliced, el.sliceContainer);
    }
}
