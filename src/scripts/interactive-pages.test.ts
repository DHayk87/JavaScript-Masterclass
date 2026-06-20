import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initInteractivePages, refreshInteractivePages } from './interactive-pages';

// Mock i18n t function
vi.mock('../i18n/index', async () => {
  const actual = await vi.importActual('../i18n/index');
  return {
    ...actual,
    t: vi.fn((key) => key),
  };
});

describe('Interactive Pages logic', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    // Reset window properties
    delete (window as any).testInteraction;
    delete (window as any).__jsCorePlaygroundReset;
    delete (window as any).__jsCoreStage;
    delete (window as any).selectStage;
  });

  describe('Getting Started Demo', () => {
    it('should initialize testInteraction if page is gettingStarted', () => {
      document.body.innerHTML = '<div data-i18n-page="gettingStarted"></div>';
      initInteractivePages();
      expect(window.testInteraction).toBeDefined();
      expect(typeof window.testInteraction).toBe('function');
    });

    it('should NOT initialize testInteraction if page is not gettingStarted', () => {
      document.body.innerHTML = '<div data-i18n-page="other"></div>';
      initInteractivePages();
      expect(window.testInteraction).toBeUndefined();
    });
  });

  describe('Core Playground', () => {
    it('should initialize magicBtn and output if present', () => {
      document.body.innerHTML = `
        <button id="magicBtn"></button>
        <div id="output"></div>
      `;
      initInteractivePages();

      const btn = document.getElementById('magicBtn')!;
      const output = document.getElementById('output')!;

      btn.click();

      expect(output.classList.contains('output-show')).toBe(true);
      expect(btn.classList.contains('btn-success')).toBe(true);
      expect(window.__jsCorePlaygroundReset).toBeDefined();
    });
  });

  describe('Code Parsing Visualizer', () => {
    beforeEach(() => {
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
    });

    it('should initialize selectStage and set default stage', () => {
      initInteractivePages();

      expect(window.selectStage).toBeDefined();
      expect(window.__jsCoreStage).toBe(1);
      expect(document.getElementById('card-1')?.classList.contains('active')).toBe(true);
    });

    it('should change stage when selectStage is called', () => {
      initInteractivePages();

      window.selectStage!(2);

      expect(window.__jsCoreStage).toBe(2);
      expect(document.getElementById('card-1')?.classList.contains('active')).toBe(false);
      expect(document.getElementById('card-2')?.classList.contains('active')).toBe(true);
      expect(document.getElementById('placeholder')?.classList.contains('hidden')).toBe(true);
      expect(document.getElementById('content')?.classList.contains('hidden')).toBe(false);
    });
  });

  describe('refreshInteractivePages', () => {
    it('should reset playground and stages', () => {
        document.body.innerHTML = `
            <button id="magicBtn" class="btn-success">Done</button>
            <div id="output" class="output-show"></div>
            <div id="panel"></div>
            <div id="card-1" class="stage-card"></div>
            <div id="placeholder"></div>
            <div id="content" class="hidden"></div>
            <div id="det-icon"></div>
            <div id="det-title"></div>
            <div id="det-subtitle"></div>
            <div id="det-desc"></div>
            <div id="det-visual"></div>
        `;

        initInteractivePages();
        refreshInteractivePages();

        const btn = document.getElementById('magicBtn')!;
        const output = document.getElementById('output')!;

        expect(btn.classList.contains('btn-success')).toBe(false);
        expect(output.classList.contains('output-show')).toBe(false);
    });
  });
});
