import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { initInteractivePages, refreshInteractivePages } from './interactive-pages';

// Mock the i18n module
vi.mock('../i18n/index.js', () => ({
  t: (key: string) => key,
  onLocaleChange: vi.fn(),
}));

// Mock array-methods sub-module
vi.mock('./pages/array-methods.js', () => ({
  initArrayMethodsVisualizer: vi.fn(),
  refreshArrayMethodsVisualizer: vi.fn(),
}));

describe('interactive-pages', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    // Clear global window properties set by the module
    delete (window as any).testInteraction;
    delete (window as any).__jsCorePlaygroundReset;
    delete (window as any).__jsCoreStage;
    delete (window as any).selectStage;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('initInteractivePages should not throw when elements are missing', () => {
    expect(() => initInteractivePages()).not.toThrow();
  });

  describe('CorePlayground', () => {
    it('should setup reset function and handle click', () => {
      document.body.innerHTML = `
        <button id="magicBtn"></button>
        <div id="output"></div>
      `;

      initInteractivePages();

      const btn = document.getElementById('magicBtn') as HTMLButtonElement;
      const output = document.getElementById('output') as HTMLElement;

      expect(typeof (window as any).__jsCorePlaygroundReset).toBe('function');

      btn.click();

      expect(output.classList.contains('output-show')).toBe(true);
      expect(btn.textContent).toBe('pages.core.playBtnDone');
      expect(btn.classList.contains('btn-success')).toBe(true);
    });

    it('reset function should clear state', () => {
      document.body.innerHTML = `
        <button id="magicBtn" class="btn-success">pages.core.playBtnDone</button>
        <div id="output" class="output-show"></div>
      `;

      initInteractivePages();

      const btn = document.getElementById('magicBtn') as HTMLButtonElement;
      const output = document.getElementById('output') as HTMLElement;

      (window as any).__jsCorePlaygroundReset();

      expect(output.classList.contains('output-show')).toBe(false);
      expect(btn.textContent).toBe('pages.core.playBtn');
      expect(btn.classList.contains('btn-success')).toBe(false);
    });
  });

  describe('CodeParsingVisualizer', () => {
    it('should setup selectStage and update content', () => {
      document.body.innerHTML = `
        <div id="panel"></div>
        <div id="card-1" class="stage-card"></div>
        <div id="card-2" class="stage-card"></div>
        <div id="placeholder"></div>
        <div id="content" class="hidden"></div>
        <div id="det-icon"></div>
        <div id="det-title"></div>
        <div id="det-subtitle"></div>
        <div id="det-desc"></div>
        <div id="det-visual"></div>
      `;

      initInteractivePages();

      expect(typeof (window as any).selectStage).toBe('function');

      // Select stage 2
      (window as any).selectStage(2);

      expect(document.getElementById('card-2')?.classList.contains('active')).toBe(true);
      expect(document.getElementById('card-1')?.classList.contains('active')).toBe(false);
      expect(document.getElementById('placeholder')?.classList.contains('hidden')).toBe(true);
      expect(document.getElementById('content')?.classList.contains('hidden')).toBe(false);

      expect(document.getElementById('det-title')?.textContent).toBe('pages.codeParsing.stage2Title');
      expect(document.getElementById('det-icon')?.textContent).toBe('🌳');
    });
  });

  describe('refreshInteractivePages', () => {
    it('should refresh placeholder and call resets', () => {
      const resetMock = vi.fn();
      (window as any).__jsCorePlaygroundReset = resetMock;

      document.body.innerHTML = '<div id="placeholder"></div>';

      refreshInteractivePages();

      expect(resetMock).toHaveBeenCalled();
      expect(document.getElementById('placeholder')?.textContent).toBe('pages.codeParsing.placeholder');
    });
  });
});
