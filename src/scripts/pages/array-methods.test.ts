import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initArrayMethodsVisualizer } from './array-methods';

// Mock i18n
vi.mock('../../i18n/index', () => ({
  t: vi.fn((key) => key),
  initI18n: vi.fn(),
  onLocaleChange: vi.fn(),
}));

describe('Array Methods Visualizer', () => {
  beforeEach(() => {
    vi.resetModules();
    document.body.innerHTML = `
      <div data-i18n-page="arrayMethods">
        <div id="arrayVisualContainer"></div>
        <div id="returnVisualContainer"></div>
        <input id="pushInput" value="🥑">
        <button id="btnPush"></button>
        <button id="btnPop"></button>
        <input id="unshiftInput" value="🥥">
        <button id="btnUnshift"></button>
        <button id="btnShift"></button>
        <input id="sliceStart" value="1">
        <input id="sliceEnd" value="3">
        <button id="btnSlice"></button>
        <input id="spliceStart" value="1">
        <input id="spliceDelete" value="1">
        <input id="spliceInsert" value="🍇">
        <button id="btnSplice"></button>
        <select id="sortOrder">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
        <button id="btnSort"></button>
        <input id="searchInput" value="🍊">
        <button id="btnIndexOf"></button>
        <button id="btnIncludes"></button>
        <input id="conditionInput" value="🍋">
        <button id="btnFind"></button>
        <button id="btnSome"></button>
        <button id="btnEvery"></button>
        <input id="transformInput" value="🍎">
        <button id="btnFilter"></button>
        <button id="btnMap"></button>
        <button id="btnReverse"></button>
        <input id="joinInput" value="-">
        <button id="btnJoin"></button>
        <button id="btnFlat"></button>
        <input id="fillInput" value="🫐">
        <button id="btnFill"></button>
        <button id="btnReduce"></button>
        <button id="btnReduceRight"></button>
        <button id="btnFlatMap"></button>
        <input id="copyTarget" value="0">
        <input id="copyStart" value="2">
        <button id="btnCopyWithin"></button>
        <button id="btnToReversed"></button>
        <button id="btnToSorted"></button>
        <button id="btnToSpliced"></button>
        <input id="withIndex" value="1">
        <input id="withValue" value="💎">
        <button id="btnWith"></button>
        <button id="btnForEach"></button>
        <button id="btnResetArray"></button>
        <div id="consoleCodePreview"></div>
        <div id="consoleReturnValue"></div>
        <div id="consoleArrayState"></div>
      </div>
    `;
    vi.useFakeTimers();
  });

  it('should initialize with default array', async () => {
    const { initArrayMethodsVisualizer } = await import('./array-methods');
    initArrayMethodsVisualizer();
    const container = document.getElementById('arrayVisualContainer')!;
    // Default array is ["🍎", "🍊", "🍋", "🍒"]
    expect(container.querySelectorAll('.element-wrapper').length).toBe(4);
    // Note: implementation might not update consoleState on init if not called explicitly,
    // but the code says it should if initArrayMethodsVisualizer is called and it is present.
    // Wait, the initArrayMethodsVisualizer doesn't call updateConsole.
    // It only calls renderArrayState and setupTableSorting.
  });

  it('should handle push interaction', async () => {
    const { initArrayMethodsVisualizer } = await import('./array-methods');
    initArrayMethodsVisualizer();
    const btn = document.getElementById('btnPush') as HTMLButtonElement;
    const input = document.getElementById('pushInput') as HTMLInputElement;

    input.value = '🥑';
    btn.click();

    await vi.runAllTimersAsync();

    expect(document.getElementById('consoleReturnValue')?.textContent).toBe('5');
    expect(document.getElementById('consoleArrayState')?.textContent).toContain("'🥑'");
    expect(document.getElementById('arrayVisualContainer')?.querySelectorAll('.element-wrapper').length).toBe(5);
  });

  it('should handle pop interaction', async () => {
    const { initArrayMethodsVisualizer } = await import('./array-methods');
    initArrayMethodsVisualizer();
    const btn = document.getElementById('btnPop') as HTMLButtonElement;

    btn.click();

    await vi.runAllTimersAsync();

    expect(document.getElementById('consoleReturnValue')?.textContent).toBe("'🍒'");
    expect(document.getElementById('arrayVisualContainer')?.querySelectorAll('.element-wrapper').length).toBe(3);
  });

  it('should handle map interaction', async () => {
    const { initArrayMethodsVisualizer } = await import('./array-methods');
    initArrayMethodsVisualizer();
    const btn = document.getElementById('btnMap') as HTMLButtonElement;
    const input = document.getElementById('transformInput') as HTMLInputElement;

    input.value = '🍎';
    btn.click();

    await vi.runAllTimersAsync();

    expect(document.getElementById('consoleReturnValue')?.textContent).toBe("['🍎✨', '🍊', '🍋', '🍒']");
  });

  it('should handle reset interaction', async () => {
    const { initArrayMethodsVisualizer } = await import('./array-methods');
    initArrayMethodsVisualizer();
    const btnPush = document.getElementById('btnPush') as HTMLButtonElement;
    btnPush.click();
    await vi.runAllTimersAsync();

    const resetBtn = document.getElementById('btnResetArray') as HTMLButtonElement;
    resetBtn.click();

    expect(document.getElementById('arrayVisualContainer')?.querySelectorAll('.element-wrapper').length).toBe(4);
  });

  it('should handle operations on empty array gracefully', async () => {
      const { initArrayMethodsVisualizer } = await import('./array-methods');
      initArrayMethodsVisualizer();
      const popBtn = document.getElementById('btnPop') as HTMLButtonElement;

      // Pop all elements
      popBtn.click(); await vi.runAllTimersAsync();
      popBtn.click(); await vi.runAllTimersAsync();
      popBtn.click(); await vi.runAllTimersAsync();
      popBtn.click(); await vi.runAllTimersAsync();

      expect(document.getElementById('arrayVisualContainer')?.querySelectorAll('.element-wrapper').length).toBe(0);

      // Pop from empty
      popBtn.click();
      await vi.runAllTimersAsync();

      expect(document.getElementById('arrayVisualContainer')?.querySelectorAll('.element-wrapper').length).toBe(0);
  });
});
