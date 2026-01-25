# Layout Tree (Auto Layout / Flexbox)

Screen
├─ Fixed: System Status (OS chrome, not in layout tree)
├─ Fixed: Bottom Navigation
│  └─ BottomNavigationBar
│     └─ BottomNavTabItem (x6)
└─ Scrollable: Main Content (vertical stack)
   ├─ Sticky Section: Account Header
   │  └─ AccountHeader
   │     ├─ Avatar
   │     ├─ Text (name)
   │     ├─ Text (public/private info)
   │     ├─ Badge (public stats or CTA indicator)
   │     └─ Button (profile action)
   ├─ Section: Creator Promotion Cell
   │  └─ Cell
   ├─ Section: Shortcuts (Navigation Pills)
   │  └─ ShortcutPill (x3+)
   ├─ Section: Order Tracking
   │  └─ OrderTracking
   │     └─ OrderTrackingCarousel
   │        ├─ OrderTrackingCard (xN active orders)
   │        └─ OrderTrackingCarouselCards (e.g., all active orders entry)
   ├─ Section: Morkovsk Entry Point
   │  └─ MorkovskEntryPoint
   │     ├─ Text
   │     └─ Button
   ├─ Section: Finance Info
   │  └─ FinanceInfoSection
   │     ├─ Banner (xN carousel items)
   │     └─ Cell (xN)
   ├─ Section: Horizontal Shelf (Recently Viewed / Recommendations)
   │  └─ ItemHorizontalShelf
   │     └─ ProductCardCompact (xN)
   ├─ Section: Secondary Shortcuts (if present)
   │  └─ ShortcutPill (xN)
   ├─ Section: Promotional Banner (image-only)
   │  └─ Banner
   └─ Section: Vertical Shelf (2-in-a-row grid at bottom)
      └─ ItemVerticalShelf
         └─ ProductCardCompact (xN, 2 per row)
