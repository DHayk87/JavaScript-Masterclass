let currentString = "Hello, World!";
const INITIAL_STRING = "Hello, World!";

let isAnimating = false;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function getElements() {
  return {
    mainContainer: document.getElementById("stringVisualContainer"),
    returnContainer: document.getElementById("returnVisualContainer"),
    btnToUpperCase: document.getElementById("btnToUpperCase") as HTMLButtonElement,
    btnToLowerCase: document.getElementById("btnToLowerCase") as HTMLButtonElement,
    sliceStart: document.getElementById("sliceStart") as HTMLInputElement,
    sliceEnd: document.getElementById("sliceEnd") as HTMLInputElement,
    btnSlice: document.getElementById("btnSlice") as HTMLButtonElement,
    btnSubstring: document.getElementById("btnSubstring") as HTMLButtonElement,
    replaceTarget: document.getElementById("replaceTarget") as HTMLInputElement,
    replaceValue: document.getElementById("replaceValue") as HTMLInputElement,
    btnReplace: document.getElementById("btnReplace") as HTMLButtonElement,
    btnReplaceAll: document.getElementById("btnReplaceAll") as HTMLButtonElement,
    concatInput: document.getElementById("concatInput") as HTMLInputElement,
    btnConcat: document.getElementById("btnConcat") as HTMLButtonElement,
    btnTrim: document.getElementById("btnTrim") as HTMLButtonElement,
    btnTrimStart: document.getElementById("btnTrimStart") as HTMLButtonElement,
    btnTrimEnd: document.getElementById("btnTrimEnd") as HTMLButtonElement,
    splitInput: document.getElementById("splitInput") as HTMLInputElement,
    btnSplit: document.getElementById("btnSplit") as HTMLButtonElement,
    searchInput: document.getElementById("searchInput") as HTMLInputElement,
    btnIndexOf: document.getElementById("btnIndexOf") as HTMLButtonElement,
    btnIncludes: document.getElementById("btnIncludes") as HTMLButtonElement,
    btnStartsWith: document.getElementById("btnStartsWith") as HTMLButtonElement,
    btnEndsWith: document.getElementById("btnEndsWith") as HTMLButtonElement,
    repeatCount: document.getElementById("repeatCount") as HTMLInputElement,
    btnRepeat: document.getElementById("btnRepeat") as HTMLButtonElement,
    btnReset: document.getElementById("btnResetString") as HTMLButtonElement,
    consoleCode: document.getElementById("consoleCodePreview"),
    consoleReturn: document.getElementById("consoleReturnValue"),
    consoleState: document.getElementById("consoleStringState"),
  };
}

function setButtonsDisabled(disabled: boolean) {
  const el = getElements();
  const buttons = [
    el.btnToUpperCase,
    el.btnToLowerCase,
    el.btnSlice,
    el.btnSubstring,
    el.btnReplace,
    el.btnReplaceAll,
    el.btnConcat,
    el.btnTrim,
    el.btnTrimStart,
    el.btnTrimEnd,
    el.btnSplit,
    el.btnIndexOf,
    el.btnIncludes,
    el.btnStartsWith,
    el.btnEndsWith,
    el.btnRepeat,
    el.btnReset,
  ];
  buttons.forEach((btn) => {
    if (btn) btn.disabled = disabled;
  });
}

function renderStringState(str: string, container: HTMLElement | null) {
  if (!container) return;

  container.innerHTML =
    '<span class="bracket">"</span><span class="bracket">"</span>';
  const rightBracket = container.lastElementChild;

  for (let i = 0; i < str.length; i++) {
    const val = str[i];
    const wrapper = document.createElement("div");
    wrapper.className = "element-wrapper";

    const indexTag = document.createElement("div");
    indexTag.className = "index-tag";
    indexTag.textContent = `i: ${i}`;

    const node = document.createElement("div");
    node.className = "item-node";
    node.textContent = val === " " ? "␣" : val; // Represent space

    wrapper.appendChild(indexTag);
    wrapper.appendChild(node);

    container.insertBefore(wrapper, rightBracket);
  }

  const lineBreak = document.createElement("div");
  lineBreak.style.flexBasis = "100%";
  lineBreak.style.height = "0";
  container.appendChild(lineBreak);
}

function updateConsole(code: string, returnValue: any, finalString: string) {
  const el = getElements();
  if (el.consoleCode) {
    el.consoleCode.innerHTML = `let str = "${INITIAL_STRING}";<br><span style="color: var(--accent-success);">${code}</span>`;
  }
  if (el.consoleReturn) {
    if (typeof returnValue === "string") {
      el.consoleReturn.textContent = `"${returnValue}"`;
    } else if (Array.isArray(returnValue)) {
      el.consoleReturn.textContent = `[${returnValue.map((v) => `"${v}"`).join(", ")}]`;
    } else {
      el.consoleReturn.textContent = String(returnValue);
    }
  }
  if (el.consoleState) {
    el.consoleState.textContent = `"${finalString}"`;
  }
}

function visualizeReturn(
  value: any,
  type: "string" | "array" | "boolean" | "index" | "reference",
) {
  const el = getElements();
  if (!el.returnContainer) return;
  const container = el.returnContainer;
  container.innerHTML = "";

  let labelText: string;
  switch (type) {
    case "string":
      labelText = "// Returns: New String";
      break;
    case "array":
      labelText = "// Returns: New Array";
      break;
    case "boolean":
      labelText = "// Returns: Boolean result";
      break;
    case "index":
      labelText = "// Returns: Index";
      break;
    case "reference":
      labelText = "// Returns: Unchanged Original String (Strings are Immutable)";
      break;
    default:
      labelText = "// Returns: Value";
  }

  if (type === "string" || type === "reference") {
      const textNode = document.createElement("div");
      textNode.style.fontSize = "1.5rem";
      textNode.style.color = "var(--js-yellow)";
      textNode.style.fontFamily = "monospace";
      textNode.style.wordBreak = "break-all";
      textNode.style.padding = "1rem";
      textNode.textContent = `"${value}"`;
      container.appendChild(textNode);
  } else if (type === "array") {
      // Just stringify array simply for return visualizer
      const textNode = document.createElement("div");
      textNode.style.fontSize = "1.2rem";
      textNode.style.color = "var(--text-color)";
      textNode.style.fontFamily = "monospace";
      textNode.style.wordBreak = "break-all";
      textNode.style.padding = "1rem";
      textNode.textContent = `[${value.map((v: string) => `"${v}"`).join(", ")}]`;
      container.appendChild(textNode);
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

    if (type === "index") {
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
    container.appendChild(wrapper);
    setTimeout(() => node.classList.remove("incoming"), 50);
  }

  const label = document.createElement("div");
  label.style.color = type === "reference" ? "var(--js-yellow)" : "var(--text-dim)";
  label.style.fontSize = "0.8rem";
  label.style.marginTop = "10px";
  label.style.fontFamily = "monospace";
  label.textContent = labelText;
  container.appendChild(label);
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
    await delay(100); // Faster scan for strings

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
    await delay(50);
  }
}

// Handlers

async function handleToUpperCase() {
  if (isAnimating) return;
  const el = getElements();
  isAnimating = true;
  setButtonsDisabled(true);

  const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
  wrappers?.forEach((w) => w.classList.add("highlight-slice"));
  await delay(500);

  const res = currentString.toUpperCase();
  updateConsole(`str.toUpperCase();`, res, currentString);
  visualizeReturn(res, "string");

  await delay(600);
  wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
  isAnimating = false;
  setButtonsDisabled(false);
}

async function handleToLowerCase() {
  if (isAnimating) return;
  const el = getElements();
  isAnimating = true;
  setButtonsDisabled(true);

  const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
  wrappers?.forEach((w) => w.classList.add("highlight-slice"));
  await delay(500);

  const res = currentString.toLowerCase();
  updateConsole(`str.toLowerCase();`, res, currentString);
  visualizeReturn(res, "string");

  await delay(600);
  wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
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

  const len = currentString.length;
  const normStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  const normEnd = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
  if (wrappers) {
    const actualStart = Math.min(normStart, normEnd);
    const actualEnd = Math.max(normStart, normEnd);
    for (let i = actualStart; i < actualEnd; i++) {
      wrappers[i].classList.add("highlight-slice");
    }
  }

  await delay(800);

  const res = currentString.slice(start, end);
  updateConsole(`str.slice(${start}, ${end});`, res, currentString);
  visualizeReturn(res, "string");

  await delay(600);
  wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
  isAnimating = false;
  setButtonsDisabled(false);
}

async function handleSubstring() {
  if (isAnimating) return;
  const el = getElements();
  const start = parseInt(el.sliceStart?.value) || 0;
  const end = parseInt(el.sliceEnd?.value) || 0;

  isAnimating = true;
  setButtonsDisabled(true);

  const len = currentString.length;
  const normStart = Math.min(Math.max(start, 0), len);
  const normEnd = Math.min(Math.max(end, 0), len);

  const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
  if (wrappers) {
    const actualStart = Math.min(normStart, normEnd);
    const actualEnd = Math.max(normStart, normEnd);
    for (let i = actualStart; i < actualEnd; i++) {
      wrappers[i].classList.add("highlight-slice");
    }
  }

  await delay(800);

  const res = currentString.substring(start, end);
  updateConsole(`str.substring(${start}, ${end});`, res, currentString);
  visualizeReturn(res, "string");

  await delay(600);
  wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
  isAnimating = false;
  setButtonsDisabled(false);
}

async function handleReplace() {
  if (isAnimating) return;
  const el = getElements();
  const target = el.replaceTarget?.value || "";
  const value = el.replaceValue?.value || "";

  isAnimating = true;
  setButtonsDisabled(true);

  const idx = currentString.indexOf(target);
  if (idx !== -1 && target.length > 0) {
      const matchIndices = Array.from({length: target.length}, (_, i) => i + idx);
      await visualizeScan(matchIndices, true);
  }

  const res = currentString.replace(target, value);
  updateConsole(`str.replace("${target}", "${value}");`, res, currentString);
  visualizeReturn(res, "string");

  await delay(600);
  const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
  wrappers?.forEach((w) => w.classList.remove("highlight-match"));
  isAnimating = false;
  setButtonsDisabled(false);
}

async function handleReplaceAll() {
    if (isAnimating) return;
    const el = getElements();
    const target = el.replaceTarget?.value || "";
    const value = el.replaceValue?.value || "";
  
    isAnimating = true;
    setButtonsDisabled(true);
  
    if (target.length > 0) {
        const matchIndices: number[] = [];
        let i = 0;
        while(i < currentString.length) {
            const idx = currentString.indexOf(target, i);
            if(idx === -1) break;
            matchIndices.push(...Array.from({length: target.length}, (_, j) => j + idx));
            i = idx + target.length;
        }
        await visualizeScan(matchIndices, false);
    }
  
    const res = currentString.replaceAll(target, value);
    updateConsole(`str.replaceAll("${target}", "${value}");`, res, currentString);
    visualizeReturn(res, "string");
  
    await delay(600);
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.remove("highlight-match"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleConcat() {
  if (isAnimating) return;
  const el = getElements();
  const val = el.concatInput?.value || "";
  
  isAnimating = true;
  setButtonsDisabled(true);

  const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
  wrappers?.forEach((w) => w.classList.add("highlight-slice"));
  await delay(500);

  const res = currentString.concat(val);
  updateConsole(`str.concat("${val}");`, res, currentString);
  visualizeReturn(res, "string");

  await delay(600);
  wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
  isAnimating = false;
  setButtonsDisabled(false);
}

async function handleTrim() {
    if (isAnimating) return;
    isAnimating = true;
  setButtonsDisabled(true);

  const res = currentString.trim();
  updateConsole(`str.trim();`, res, currentString);
  visualizeReturn(res, "string");

  await delay(600);
  isAnimating = false;
  setButtonsDisabled(false);
}

async function handleTrimStart() {
    if (isAnimating) return;
    isAnimating = true;
    setButtonsDisabled(true);
  
    const res = currentString.trimStart();
    updateConsole(`str.trimStart();`, res, currentString);
    visualizeReturn(res, "string");
  
    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleTrimEnd() {
    if (isAnimating) return;
    isAnimating = true;
    setButtonsDisabled(true);
  
    const res = currentString.trimEnd();
    updateConsole(`str.trimEnd();`, res, currentString);
    visualizeReturn(res, "string");
  
    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleSplit() {
    if (isAnimating) return;
    const el = getElements();
    const sep = el.splitInput?.value || "";
    isAnimating = true;
    setButtonsDisabled(true);
  
    const res = currentString.split(sep);
    updateConsole(`str.split("${sep}");`, res, currentString);
    visualizeReturn(res, "array");
  
    await delay(600);
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleIndexOf() {
  if (isAnimating) return;
  const el = getElements();
  const val = el.searchInput?.value || "";
  isAnimating = true;
  setButtonsDisabled(true);

  const idx = currentString.indexOf(val);
  
  if (val.length > 0) {
      if (idx !== -1) {
        const matchIndices = Array.from({length: val.length}, (_, i) => i + idx);
        await visualizeScan(matchIndices, true);
      } else {
        await visualizeScan(-1, false);
      }
  }

  updateConsole(`str.indexOf("${val}");`, idx, currentString);
  visualizeReturn(idx, "index");

  await delay(600);
  const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
  wrappers?.forEach((w) => w.classList.remove("highlight-match"));
  isAnimating = false;
  setButtonsDisabled(false);
}

async function handleIncludes() {
    if (isAnimating) return;
    const el = getElements();
    const val = el.searchInput?.value || "";
    isAnimating = true;
    setButtonsDisabled(true);
  
    const res = currentString.includes(val);
    const idx = currentString.indexOf(val);
    
    if (val.length > 0) {
        if (idx !== -1) {
          const matchIndices = Array.from({length: val.length}, (_, i) => i + idx);
          await visualizeScan(matchIndices, true);
        } else {
          await visualizeScan(-1, false);
        }
    }
  
    updateConsole(`str.includes("${val}");`, res, currentString);
    visualizeReturn(res, "boolean");
  
    await delay(600);
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.remove("highlight-match"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleStartsWith() {
    if (isAnimating) return;
    const el = getElements();
    const val = el.searchInput?.value || "";
    isAnimating = true;
    setButtonsDisabled(true);
  
    const res = currentString.startsWith(val);
    
    if (val.length > 0) {
        const matchIndices = Array.from({length: val.length}, (_, i) => i);
        if (res) {
            await visualizeScan(matchIndices, true);
        } else {
            await visualizeScan(-1, false);
        }
    }
  
    updateConsole(`str.startsWith("${val}");`, res, currentString);
    visualizeReturn(res, "boolean");
  
    await delay(600);
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.remove("highlight-match"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleEndsWith() {
    if (isAnimating) return;
    const el = getElements();
    const val = el.searchInput?.value || "";
    isAnimating = true;
    setButtonsDisabled(true);
  
    const res = currentString.endsWith(val);
    
    if (val.length > 0) {
        if (res) {
            const startIdx = currentString.length - val.length;
            const matchIndices = Array.from({length: val.length}, (_, i) => i + startIdx);
            await visualizeScan(matchIndices, true);
        } else {
            await visualizeScan(-1, false);
        }
    }
  
    updateConsole(`str.endsWith("${val}");`, res, currentString);
    visualizeReturn(res, "boolean");
  
    await delay(600);
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.remove("highlight-match"));
    isAnimating = false;
    setButtonsDisabled(false);
}

async function handleRepeat() {
    if (isAnimating) return;
    const el = getElements();
    const count = parseInt(el.repeatCount?.value) || 0;
    isAnimating = true;
    setButtonsDisabled(true);
  
    const wrappers = el.mainContainer?.querySelectorAll(".element-wrapper");
    wrappers?.forEach((w) => w.classList.add("highlight-slice"));
    await delay(500);
  
    const res = currentString.repeat(count);
    updateConsole(`str.repeat(${count});`, res, currentString);
    visualizeReturn(res, "string");
  
    await delay(600);
    wrappers?.forEach((w) => w.classList.remove("highlight-slice"));
    isAnimating = false;
    setButtonsDisabled(false);
}

function handleReset() {
  if (isAnimating) return;
  const el = getElements();
  currentString = INITIAL_STRING;
  renderStringState(currentString, el.mainContainer);
  updateConsole("// reset", undefined, currentString);
  if (el.returnContainer) el.returnContainer.innerHTML = "";
}

function attachListeners() {
  const el = getElements();
  el.btnToUpperCase?.addEventListener("click", handleToUpperCase);
  el.btnToLowerCase?.addEventListener("click", handleToLowerCase);
  el.btnSlice?.addEventListener("click", handleSlice);
  el.btnSubstring?.addEventListener("click", handleSubstring);
  el.btnReplace?.addEventListener("click", handleReplace);
  el.btnReplaceAll?.addEventListener("click", handleReplaceAll);
  el.btnConcat?.addEventListener("click", handleConcat);
  el.btnTrim?.addEventListener("click", handleTrim);
  el.btnTrimStart?.addEventListener("click", handleTrimStart);
  el.btnTrimEnd?.addEventListener("click", handleTrimEnd);
  el.btnSplit?.addEventListener("click", handleSplit);
  el.btnIndexOf?.addEventListener("click", handleIndexOf);
  el.btnIncludes?.addEventListener("click", handleIncludes);
  el.btnStartsWith?.addEventListener("click", handleStartsWith);
  el.btnEndsWith?.addEventListener("click", handleEndsWith);
  el.btnRepeat?.addEventListener("click", handleRepeat);
  el.btnReset?.addEventListener("click", handleReset);
}

export function initStringMethodsVisualizer() {
  if (!document.querySelector('[data-i18n-page="stringMethods"]')) return;
  const el = getElements();
  if (!el.mainContainer) return;

  currentString = INITIAL_STRING;
  renderStringState(currentString, el.mainContainer);
  updateConsole("// Initialize", undefined, currentString);
  attachListeners();
}

export function refreshStringMethodsVisualizer() {
  if (!document.querySelector('[data-i18n-page="stringMethods"]')) return;
  const el = getElements();
  if (el.mainContainer) {
    renderStringState(currentString, el.mainContainer);
  }
}
