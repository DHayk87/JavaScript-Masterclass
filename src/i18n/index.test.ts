import { describe, it, expect, beforeEach, vi } from 'vitest';
import { t, getLocale, setLocale, onLocaleChange, initI18n, SUPPORTED_LOCALES, DEFAULT_LOCALE } from './index';

describe('i18n System', () => {
  beforeEach(() => {
    // Reset DOM and LocalStorage
    document.documentElement.innerHTML = '';
    localStorage.clear();
    // Reset URL
    window.history.replaceState({}, '', '/');
    // Note: currentLocale in index.ts is a module-level variable and might persist between tests
    // if not carefully handled. Since we can't easily reset it without adding a reset function to index.ts,
    // we'll try to work around it or ensure we set it explicitly.
    setLocale(DEFAULT_LOCALE);
  });

  it('should have supported locales and a default locale', () => {
    expect(SUPPORTED_LOCALES).toContain('en');
    expect(SUPPORTED_LOCALES).toContain('ru');
    expect(SUPPORTED_LOCALES).toContain('hy');
    expect(DEFAULT_LOCALE).toBe('hy');
  });

  it('should translate keys correctly using t()', () => {
    setLocale('en');
    expect(t('nav.tagline')).toBe('Modern JavaScript Masterclass 2026');

    setLocale('ru');
    expect(t('nav.tagline')).toBe('Modern JavaScript Masterclass 2026'); // ru.json might have it same or different, let's check

    // Test nested page translations
    setLocale('en');
    expect(t('pages.gettingStarted.s01Title')).toBe('Variables');
  });

  it('should return the path if translation is missing', () => {
    expect(t('non.existent.key')).toBe('non.existent.key');
  });

  it('should change locale and notify listeners', () => {
    const callback = vi.fn();
    onLocaleChange(callback);

    setLocale('en');
    expect(getLocale()).toBe('en');
    expect(callback).toHaveBeenCalledWith('en');

    setLocale('ru');
    expect(getLocale()).toBe('ru');
    expect(callback).toHaveBeenCalledWith('ru');
  });

  it('should update DOM elements with data-i18n attribute', () => {
    document.body.innerHTML = `
      <div data-i18n="nav.tagline"></div>
      <div data-i18n="pages.gettingStarted.s01Title"></div>
    `;

    setLocale('en');
    expect(document.querySelector('[data-i18n="nav.tagline"]')?.textContent).toBe('Modern JavaScript Masterclass 2026');
    expect(document.querySelector('[data-i18n="pages.gettingStarted.s01Title"]')?.textContent).toBe('Variables');

    setLocale('hy');
    expect(document.querySelector('[data-i18n="pages.gettingStarted.s01Title"]')?.textContent).toBe('Փոփոխականներ (Variables)');
  });

  it('should handle safe HTML rendering with data-i18n', () => {
    document.body.innerHTML = '<div data-i18n="pages.gettingStarted.s01Lead"></div>';

    setLocale('en');
    const el = document.querySelector('[data-i18n="pages.gettingStarted.s01Lead"]');
    // s01Lead contains <code> tags
    expect(el?.innerHTML).toContain('<code>let</code>');
    expect(el?.querySelector('code')).not.toBeNull();
  });

  it('should update attributes with data-i18n-attr', () => {
    document.body.innerHTML = '<input data-i18n-attr="placeholder | pages.gettingStarted.demoNamePrompt">';

    setLocale('en');
    const input = document.querySelector('input');
    expect(input?.getAttribute('placeholder')).toBe('What is your name?');

    setLocale('ru');
    expect(input?.getAttribute('placeholder')).toBe('Как вас зовут?');
  });

  it('should initialize locale from URL search params', () => {
    window.history.replaceState({}, '', '/?lang=en');
    initI18n();
    expect(getLocale()).toBe('en');
  });

  it('should initialize locale from localStorage', () => {
    localStorage.setItem('js-core-lang', 'ru');
    initI18n();
    expect(getLocale()).toBe('ru');
  });
});
