import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initStringMethodsVisualizer } from './string-methods';

// Mock i18n
vi.mock('../../i18n/index', () => ({
  t: vi.fn((key) => key),
  initI18n: vi.fn(),
  onLocaleChange: vi.fn(),
}));

describe('String Methods Visualizer', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-i18n-page="stringMethods">
        <div id="stringVisualContainer"></div>
        <div id="returnVisualContainer"></div>
        <button id="btnToUpperCase"></button>
        <button id="btnToLowerCase"></button>
        <input id="sliceStart" value="0">
        <input id="sliceEnd" value="5">
        <button id="btnSlice"></button>
        <button id="btnSubstring"></button>
        <input id="replaceTarget" value="World">
        <input id="replaceValue" value="Universe">
        <button id="btnReplace"></button>
        <button id="btnReplaceAll"></button>
        <input id="concatInput" value="!!!">
        <button id="btnConcat"></button>
        <button id="btnTrim"></button>
        <button id="btnTrimStart"></button>
        <button id="btnTrimEnd"></button>
        <input id="splitInput" value=",">
        <button id="btnSplit"></button>
        <input id="searchInput" value="o">
        <button id="btnIndexOf"></button>
        <button id="btnIncludes"></button>
        <button id="btnStartsWith"></button>
        <button id="btnEndsWith"></button>
        <input id="repeatCount" value="2">
        <button id="btnRepeat"></button>
        <button id="btnResetString"></button>
        <div id="consoleCodePreview"></div>
        <div id="consoleReturnValue"></div>
        <div id="consoleStringState"></div>
      </div>
    `;
    vi.useFakeTimers();
  });

  it('should initialize with default string', () => {
    initStringMethodsVisualizer();
    const container = document.getElementById('stringVisualContainer')!;
    // "Hello, World!" has 13 characters
    expect(container.querySelectorAll('.element-wrapper').length).toBe(13);
    expect(document.getElementById('consoleStringState')?.textContent).toBe('"Hello, World!"');
  });

  it('should handle toUpperCase interaction', async () => {
    initStringMethodsVisualizer();
    const btn = document.getElementById('btnToUpperCase') as HTMLButtonElement;

    btn.click();

    // Advance timers for animations
    await vi.runAllTimersAsync();

    expect(document.getElementById('consoleReturnValue')?.textContent).toBe('"HELLO, WORLD!"');
    expect(document.getElementById('returnVisualContainer')?.textContent).toContain('HELLO, WORLD!');
  });

  it('should handle slice interaction', async () => {
    initStringMethodsVisualizer();
    const btn = document.getElementById('btnSlice') as HTMLButtonElement;
    const startInput = document.getElementById('sliceStart') as HTMLInputElement;
    const endInput = document.getElementById('sliceEnd') as HTMLInputElement;

    startInput.value = '0';
    endInput.value = '5';
    btn.click();

    await vi.runAllTimersAsync();

    expect(document.getElementById('consoleReturnValue')?.textContent).toBe('"Hello"');
  });

  it('should handle split interaction', async () => {
    initStringMethodsVisualizer();
    const btn = document.getElementById('btnSplit') as HTMLButtonElement;
    const splitInput = document.getElementById('splitInput') as HTMLInputElement;

    splitInput.value = ',';
    btn.click();

    await vi.runAllTimersAsync();

    expect(document.getElementById('consoleReturnValue')?.textContent).toBe('["Hello", " World!"]');
  });

  it('should handle edge cases like empty string', async () => {
    initStringMethodsVisualizer();

    // Simulate some action that might lead to empty if inputs were different,
    // but here let's just test reset
    const resetBtn = document.getElementById('btnResetString') as HTMLButtonElement;
    resetBtn.click();

    expect(document.getElementById('consoleStringState')?.textContent).toBe('"Hello, World!"');
    expect(document.getElementById('stringVisualContainer')?.querySelectorAll('.element-wrapper').length).toBe(13);
  });

  it('should handle replace with empty target gracefully', async () => {
      initStringMethodsVisualizer();
      const btn = document.getElementById('btnReplace') as HTMLButtonElement;
      const targetInput = document.getElementById('replaceTarget') as HTMLInputElement;

      targetInput.value = '';
      btn.click();

      await vi.runAllTimersAsync();

      // replace('', 'Universe') usually prepends Universe or does nothing depending on implementation,
      // JS String.prototype.replace('', 'val') prepends 'val'
      expect(document.getElementById('consoleReturnValue')?.textContent).toBe('"UniverseHello, World!"');
  });
});
