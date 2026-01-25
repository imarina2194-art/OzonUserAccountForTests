# Design Tokens (Ozon ProfileHome)

**Single source of truth:** `tokens.css`. This file contains the canonical CSS variables used by the UI.

## Figma source tokens (primitives)

These are raw values sourced from Figma and are **not** used directly in components.
`--figma-overlay-bg` represents an overlay tint, not a final paint color.

- `--figma-overlay-bg`: rgba(0, 26, 52, 0.40)
- `--figma-text-primary`: rgba(7, 7, 7, 1.00)
- `--figma-text-secondary`: rgba(0, 26, 52, 0.60)
- `--figma-white`: #fff
- `--figma-gray-cell`: rgba(0, 48, 120, 0.04)

## Semantic color tokens

Components should only use these tokens. Overlay tokens are transformed into realistic paint values
(for example, a very light alpha composite over white) instead of being applied directly.

- `--color-bg-page`: rgba(0, 26, 52, 0.06) (light overlay composite for a cool gray background)
- `--color-bg-header`: var(--color-bg-page)
- `--color-surface`: var(--figma-white)
- `--color-surface-muted`: var(--figma-gray-cell)
- `--color-text-primary`: var(--figma-text-primary)
- `--color-text-secondary`: var(--figma-text-secondary)
- `--color-icon-primary`: var(--figma-text-primary)
- `--color-text-link`: var(--figma-text-secondary)
- `--color-border-subtle`: rgba(0, 26, 52, 0.12)
- `--color-badge`: rgba(255, 59, 48, 1.00)

## Typography tokens

- `--font-family-base`: "Onest", -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif
- `--font-size-title`: 20px
- `--font-size-body`: 14px
- `--font-size-caption`: 12px
- `--font-weight-regular`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--line-height-title`: 24px
- `--line-height-body`: 18px
- `--line-height-caption`: 16px

## Radius tokens

- `--radius-s`: 12px
- `--radius-m`: 16px
- `--radius-l`: 24px
- `--radius-pill`: 999px
- `--radius-island-pill`: 32px
- `--radius-8`: 8px
- `--radius-16`: 16px
- `--radius-24`: 24px
- `--radius-32`: 32px

## Size tokens

- `--size-statusbar-h`: 44px
- `--size-header-h`: 56px
- `--size-island-h`: 48px
- `--size-header-island-h`: 48px
- `--size-avatar`: 44px
- `--size-premium-icon`: 14px
- `--size-icon-button`: 28px
- `--size-icon-button-icon`: 16px
- `--size-badge`: 16px
- `--size-badge-icon`: 10px
- `--size-status-icons-w`: 46px
- `--size-order-row-h`: 80px
- `--size-order-image`: 64px
- `--size-barcode-icon`: 32px
- `--size-icon-m`: 32px
- `--size-barcode-tile-w`: 66px
- `--size-shortcuts-h`: 108px
- `--size-shortcut-pill-h`: 76px
- `--size-shortcut-icon`: 20px
- `--size-pill-h`: 76px
- `--size-icon-s`: 20px
- `--size-morkovsk-illustration`: 52px
- `--size-morkovsk-h`: 56px
- `--size-bottom-nav-h`: 56px

## Spacing tokens

- `--space-0-5`: 2px
- `--space-0_5`: 2px
- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-5`: 20px
- `--space-6`: 24px

## Shadow tokens

- `--shadow-none`: none
- `--shadow-float`: 0 1px 3px rgba(0, 26, 52, 0.12)
