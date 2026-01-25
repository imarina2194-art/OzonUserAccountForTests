# Design Token System (Inferred)

## Color Roles
- BackgroundPrimary: #F2F5F9
- BackgroundSecondary: #FFFFFF
- TextPrimary: #001A34
- TextPrimaryNegative: #FFFFFF
- LinkText: #005BFF
- Button: #005BFF

## Text Style Roles
- Headline
- Section Title
- Body
- Caption
- Button
- Button Subtitle
- Label
- Overline (uppercase)

## Spacing Scale
- 4pt base scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48

## Border Radius Levels
- XS: 4
- S: 8
- M: 12
- L: 16
- XL: 24

## Button Treatment (Inferred)
- Primary filled button supports single-line and two-line (title + subtitle) layouts.

## Cell Treatment (Inferred)
- Rounded container surface with optional left icon, title/subtitle stack, and right-side chevron or action button.

## Text Treatment (Inferred)
- Typography includes multiple size/weight steps plus an uppercase overline style for compact labels.

## Component Token Mapping
- Avatar
  - Uses: BackgroundSecondary (surface), TextPrimary (initials), Border Radius L/XL (avatar shape)
- IconButton
  - Uses: Button (icon/action color), BackgroundSecondary (surface)
- Button
  - Uses: Button (fill), TextPrimaryNegative (label), Button / Button Subtitle text roles, Border Radius L/XL
- Badge
  - Uses: LinkText (highlight) or TextPrimaryNegative (on-color), Text Style: Caption/Label
- Text
  - Uses: TextPrimary, TextPrimaryNegative, LinkText; Text Style roles: Headline/Section Title/Body/Caption/Label/Overline
- AccountHeader
  - Uses: BackgroundSecondary (surface), TextPrimary (title/subtitle), Badge, Button
- Cell
  - Uses: BackgroundSecondary (surface), TextPrimary (title), Caption/Body (subtitle), LinkText (actions), Border Radius M/L
- ShortcutPill
  - Uses: BackgroundSecondary (pill surface), TextPrimary (title/subtitle), Border Radius L/XL
- MorkovskEntryPoint
  - Uses: BackgroundSecondary (surface), TextPrimary, Button, Accent (illustration/bg)
- FinanceInfoSection
  - Uses: BackgroundPrimary (section), Cell, Banner
- OrderTracking
  - Uses: BackgroundSecondary (surface), TextPrimary, LinkText (barcode/action)
- OrderTrackingCard
  - Uses: BackgroundSecondary (card surface), TextPrimary (status), Caption (meta)
- ItemHorizontalShelf / ItemVerticalShelf
  - Uses: BackgroundPrimary (section), TextPrimary (titles)
- ProductCardCompact
  - Uses: BackgroundSecondary (card), TextPrimary (title), LinkText (promo/delivery), Button (delivery CTA), Caption/Label (meta)
- FavoriteToggle
  - Uses: Accent (active) / TextPrimary (inactive)
- Banner
  - Uses: BackgroundSecondary (image surface), LinkText (deeplink)
- BottomNavigationBar / BottomNavTabItem
  - Uses: BackgroundSecondary (bar), TextPrimary (inactive), LinkText (active), Badge
