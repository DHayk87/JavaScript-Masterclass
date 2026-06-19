import { describe, it, expect, beforeEach, vi } from 'vitest';
import { t, getLocale, setLocale, DEFAULT_LOCALE, SUPPORTED_LOCALES } from './index';

describe('i18n', () => {
  beforeEach(() => {
    // Reset locale to default before each test
    setLocale(DEFAULT_LOCALE);
    // Clear localStorage
    localStorage.clear();
    // Clear URL params if needed, though jsdom handles this
    window.history.replaceState({}, '', '/');
  });

  it('should have correct supported locales', () => {
    expect(SUPPORTED_LOCALES).toContain('hy');
    expect(SUPPORTED_LOCALES).toContain('en');
    expect(SUPPORTED_LOCALES).toContain('ru');
  });

  it('should return initial default locale', () => {
    expect(getLocale()).toBe(DEFAULT_LOCALE);
  });

  it('should update locale with setLocale', () => {
    setLocale('en');
    expect(getLocale()).toBe('en');

    setLocale('ru');
    expect(getLocale()).toBe('ru');
  });

  it('should fallback to default locale for unsupported locale', () => {
    setLocale('fr' as any);
    expect(getLocale()).toBe(DEFAULT_LOCALE);
  });

  it('should retrieve translations using t', () => {
    // Testing with English to ensure we know the expected value from en.json
    setLocale('en');
    // From en.json: "nav": { "tagline": "Modern JavaScript Masterclass 2026", ... }
    expect(t('nav.tagline')).toBe('Modern JavaScript Masterclass 2026');
  });

  it('should handle dot notation for nested keys', () => {
    setLocale('en');
    // From en.json: "footer": { "by": "Created By DHayk | 2026" }
    expect(t('footer.by')).toBe('Created By DHayk | 2026');
  });

  it('should return path if translation is missing', () => {
    expect(t('non.existent.key')).toBe('non.existent.key');
  });

  it('should return path if path points to an object', () => {
    setLocale('en');
    // "nav" is an object in en.json
    expect(t('nav')).toBe('nav');
  });

  it('should update translation when locale changes', () => {
    setLocale('en');
    const enVal = t('copy.copy');
    expect(enVal).toBe('Copy');

    setLocale('ru');
    const ruVal = t('copy.copy');
    // We expect ru.json to have something else for copy.copy
    expect(ruVal).not.toBe('Copy');
    expect(ruVal).toBeDefined();
  });
});
