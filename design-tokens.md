# Design Tokens (Ozon ProfileHome)

**Single source of truth:** `tokens.css`. This file contains the canonical CSS variables used by the UI.

## Palette (base values)

These are raw values and are **not** used directly in components.

- `--palette-bg-overlay`: rgba(0, 26, 52, 0.40)
- `--palette-text-main`: rgba(7, 7, 7, 1.00)
- `--palette-text-secondary`: rgba(0, 26, 52, 0.60)
- `--palette-surface`: rgba(255, 255, 255, 1.00)
- `--palette-surface-muted`: rgba(0, 48, 120, 0.04)

## Semantic color tokens

Components should only use these tokens.

- `--color-bg-page`: rgba(153, 163, 174, 1.00) (overlay on white)
- `--color-surface`: var(--palette-surface)
- `--color-surface-muted`: var(--palette-surface-muted)
- `--color-text-primary`: var(--palette-text-main)
- `--color-text-secondary`: var(--palette-text-secondary)
- `--color-icon-primary`: var(--palette-text-main)
- `--color-text-link`: var(--palette-text-secondary)
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

## Spacing tokens

- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-5`: 20px
- `--space-6`: 24px

## Shadow tokens

- `--shadow-none`: none
- `--shadow-float`: 0 1px 3px rgba(0, 26, 52, 0.12)
