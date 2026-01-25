# Design Tokens (Ozon ProfileHome)

This token system is the single source of truth for colors, typography, spacing,
radius, and shadows used in the ProfileHome digital twin.

## 1) CSS Variables

```css
:root {
  /* Base color sources (do not use directly in UI) */
  --color-bg-overlay: rgba(0, 26, 52, 0.40); /* lightGrayBackground */
  --color-text-primary: rgba(7, 7, 7, 1.00); /* mainText */
  --color-text-secondary: rgba(0, 26, 52, 0.60); /* secondaryText */
  --color-surface: rgba(255, 255, 255, 1.00); /* whiteIsland */
  --color-surface-muted: rgba(0, 48, 120, 0.04); /* grayCell */

  /* Derived colors */
  --color-bg-page: rgba(153, 163, 174, 1.00); /* overlay on white */
  --color-border-subtle: rgba(0, 26, 52, 0.12);
  --color-icon-primary: var(--color-text-primary);
  --color-text-link: var(--color-text-secondary);
  --color-badge: rgba(255, 59, 48, 1.00);

  /* Typography */
  --font-family-base: "Onest", -apple-system, BlinkMacSystemFont, "SF Pro Display",
    "SF Pro Text", system-ui, sans-serif;
  --font-size-title: 20px;
  --font-size-body: 14px;
  --font-size-caption: 12px;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --line-height-title: 24px;
  --line-height-body: 18px;
  --line-height-caption: 16px;

  /* Radius */
  --radius-s: 12px;
  --radius-m: 16px;
  --radius-l: 24px;
  --radius-pill: 999px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;

  /* Shadows */
  --shadow-none: none;
  --shadow-float: 0 1px 3px rgba(0, 26, 52, 0.12);
}
```

## 2) Usage Notes

- **Backgrounds**
  - Use `--color-bg-page` for the page tint.
  - Use `--color-surface` for all card/island backgrounds.
  - Use `--color-surface-muted` for muted tiles inside cards.

- **Text & Icons**
  - Primary: `--color-text-primary`
  - Secondary/meta: `--color-text-secondary`
  - Links/actions: `--color-text-link`
  - Icons: `--color-icon-primary`

- **Borders**
  - Use `--color-border-subtle` for subtle dividers and card edges.

- **Badges**
  - Notification badge uses `--color-badge`.

- **Shadows**
  - Default is `--shadow-none`.
  - `--shadow-float` reserved for sticky/floating UI only.
