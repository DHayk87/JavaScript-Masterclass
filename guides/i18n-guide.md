# Adding New Languages to the i18n System

This guide walks you through the steps required to add support for a new language in the JavaScript Masterclass documentation site.

---

## 1. Create a Locale JSON File

1. Navigate to `src/i18n/`.
2. Duplicate an existing locale file (e.g., `en.json`).
3. Rename the copy to the ISO 639‑1 code of the new language, for example `es.json` for Spanish.
4. Translate **all** string values while **preserving the keys**. Example:

```json
{
  "nav": {
    "langAria": "Cambiar idioma"
  },
  "footer": {
    "by": "Creado por DHayk | 2026"
  },
  "pages": {
    "array": {
      "docTitle": "JS.CORE | Arrays",
      "h1": "Arrays",
      "subtitle": "Introducción a los arrays"
    }
  }
}
```

> **Tip**: Keep the JSON formatting identical to the source file to avoid missing keys.

---

## 2. Register the Locale in `src/i18n/index.js`

Edit the `availableLanguages` map (or similar structure) to include the new locale:

```js
const availableLanguages = {
  en: { name: "English", dir: "ltr" },
  es: { name: "Español", dir: "ltr" }, // ← added
  // other languages …
};
```

If the file uses a dynamic import, add an entry to the `importMap`:

```js
const importMap = {
  en: () => import("./en.json"),
  es: () => import("./es.json"), // ← added
};
```

---

## 3. Add a Language Switcher UI (if not already present)

The existing UI uses `data-i18n-attr="aria-label|nav.langAria"` on the language selector. Ensure the new language appears in the dropdown.

```html
<select id="language-select" aria-label="Select language">
  <option value="en">English</option>
  <option value="es">Español</option> <!-- new option -->
</select>
```

The script `main.js` already calls `onLocaleChange()` when the selector changes, so no additional JS is required.

---

## 4. Test the New Language

1. Run the development server: `npm run dev`.
2. Open the site in a browser.
3. Switch to the newly added language using the selector.
4. Verify that all UI text, page titles, meta descriptions, and `data-i18n-*` attributes are correctly translated.

If any text remains in the previous language, check the following:
- Missing keys in the JSON file.
- Typos in the key names.
- Cached JSON (clear browser cache or hard‑reload).

---

## 5. Deploy

Once verified locally, commit the new locale file and the updated `index.js`:

```bash
git add src/i18n/es.json src/i18n/index.js
git commit -m "Add Spanish locale to i18n system"
git push
```

The CI/CD pipeline (Vercel) will automatically build and deploy the updated site.

---

## 6. Optional: RTL Language Support

If you add a right‑to‑left language (e.g., Arabic `ar`), also update the CSS variable `--direction` and add a `dir="rtl"` attribute to the `<html>` element when that locale is active. The `initI18n()` function can set this attribute based on the `dir` property defined in `availableLanguages`.

---

### Summary
- **Create** a locale JSON file.
- **Register** the locale in `src/i18n/index.js`.
- **Add** the language to the UI selector.
- **Test** thoroughly.
- **Commit** and **deploy**.

You now have a reproducible process for adding any future language to the documentation site.
