# JS Masterclass Design System & Style Guide

This guide defines the visual language and CSS standards for all JavaScript documentation pages. Following these patterns ensures a premium, cohesive, and modern user experience.

---

## 1. Core Palette

### Primary Colors
- **Background**: `#24282B` (Dark charcoal)
- **Accent (JS Yellow)**: `#F7DF1E` (The signature JavaScript color)
- **Text (Main)**: `#FFFFFF` (Pure white)
- **Text (Dim)**: `rgba(255, 255, 255, 0.6)` (Soft grey for descriptions)

### Glassmorphism Tokens
- **Glass Background**: `rgba(255, 255, 255, 0.05)`
- **Glass Border**: `rgba(255, 255, 255, 0.1)`
- **Blur Strength**: `12px`

---

## 2. Typography

### Font Families
- **Display & UI**: `'Noto Sans Armenian', sans-serif`
- **Code & Technical**: `'Fira Code', monospace`

### Hierarchy
- **Main Heading (H1)**: `3rem` to `5rem`, font-weight `900`, tracking `-1px`.
- **Section Heading (H2)**: `2.2rem`, font-weight `800`.
- **Component Heading (H4)**: `0.8rem`, uppercase, tracking `2px`, font-weight `800`.

---

## 3. Reusable Components

### Glass Card
The standard container for all content blocks.
```css
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
    border-color: #F7DF1E;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Gradient Text
Used for high-impact titles.
```css
.gradient-text {
    background: linear-gradient(90deg, #F7DF1E, #FFEC3D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

### Mermaid Diagrams
Standardized styling for all diagrams.
```css
.mermaid {
    background: rgba(0, 0, 0, 0.2) !important;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
}
```

---

## 4. Interaction Design

### Hover Effects
All interactive elements (cards, links, buttons) should have a transition of `0.3s`.
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for a more premium "pop" feel.
- Hover states should almost always involve the **JS Yellow** color.

### Custom Scrollbar
Ensures the UI feels integrated with the browser.
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #24282B; }
::-webkit-scrollbar-thumb { background: #444; border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: #F7DF1E; }
```

---

## 5. Layout Standards

- **Container Width**: Max `1000px` for optimal readability.
- **Section Spacing**: `space-y-24` (approx `6rem`) between major sections.
- **Responsive Design**:
  - Switch `grid-cols-2` to `grid-cols-1` at `768px` (MD).
  - Rotate arrows and adjust paddings for vertical mobile layouts.

---

## 6. Code Highlighting (One Dark Inspired)
- **Keywords**: `#C678DD` (Purple)
- **Numbers**: `#D19A66` (Orange)
- **Strings**: `#98C379` (Green)
- **Comments**: `#5C6370` (Grey/Italic)
