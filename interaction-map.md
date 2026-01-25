# Screen(ProfileHome) Interaction Map

| Element | Component | Section | User Action | System Reaction | Navigation Target | State Change | Guards |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Avatar | Avatar | AccountHeader | Tap | Opens profile details | ProfileDetails | None | Requires login; disabled in loggedOut |
| Profile action Button | Button | AccountHeader | Tap | Executes primary account action (e.g., edit profile or view stats) | ProfileAction | None | Requires login |
| Public/private indicator (if interactive) | Button | AccountHeader | Tap | Toggles account visibility and updates subtitle | None | AccountHeader public/private variant | Requires login; disabled if account setting locked |
| Creator Promotion Cell | Cell | Creator Promotion Cell | Tap | Opens creator promotion flow | CreatorProgram | None | Requires login |
| ShortcutPill item | ShortcutPill | Shortcuts (Navigation Pills) / Secondary Shortcuts | Tap | Opens destination corresponding to the shortcut | ShortcutDestination | None | Requires login; hidden if empty |
| Barcode | OrderTracking | OrderTracking | Tap | Opens pickup barcode view | PickupBarcode | None | Visible only when a pickup-ready order exists |
| OrderTrackingCard | OrderTrackingCard | OrderTrackingCarousel | Tap | Opens order detail for the selected order | OrderDetails | None | Requires login; hidden when no active orders |
| “All Orders” carousel card | OrderTrackingCarouselCards | OrderTrackingCarousel | Tap | Opens list of all active orders | ActiveOrdersList | None | Requires login |
| Whole card tap | MorkovskEntryPoint | MorkovskEntryPoint | Tap | Opens Morkovsk gamification center | MorkovskCenter | None | Requires login |
| Button | Button | MorkovskEntryPoint | Tap | Opens Morkovsk gamification center | MorkovskCenter | None | Requires login |
| Banner carousel item | Banner | FinanceInfoSection | Tap | Opens finance promo destination | FinancePromo | None | Requires login; hidden if no banners |
| Cell row | Cell | FinanceInfoSection | Tap | Opens the selected finance feature | FinanceFeature | None | Requires login; hidden if section empty |
| ProductCardCompact tap | ProductCardCompact | ItemHorizontalShelf | Tap | Opens product details | ProductDetails | None | Hidden if shelf empty |
| FavoriteToggle | FavoriteToggle | ProductCardCompact (ItemHorizontalShelf) | Tap | Toggles favorite state | None | ProductCardCompact favorited variant | Requires login; disabled if out of stock in some contexts |
| Add-to-cart button or Stepper | Button / Stepper | ProductCardCompact (ItemHorizontalShelf) | Tap | Adds item to cart or adjusts quantity | Cart | Updates addedToCartCount; shows stepper if enabled | Requires login; hidden if showAddToCartButton=false |
| ProductCardCompact tap | ProductCardCompact | ItemVerticalShelf | Tap | Opens product details | ProductDetails | None | Hidden if shelf empty |
| FavoriteToggle | FavoriteToggle | ProductCardCompact (ItemVerticalShelf) | Tap | Toggles favorite state | None | ProductCardCompact favorited variant | Requires login; disabled if out of stock in some contexts |
| Add-to-cart button or Stepper | Button / Stepper | ProductCardCompact (ItemVerticalShelf) | Tap | Adds item to cart or adjusts quantity | Cart | Updates addedToCartCount; shows stepper if enabled | Requires login; hidden if showAddToCartButton=false |
| Promotional Banner | Banner | Promotional Banner | Tap | Opens promo destination | PromoDestination | None | None |
| Home tab | BottomNavTabItem | BottomNavigationBar | Tap | Switches to Home tab | Home | BottomNavTabItem active state | None |
| Fresh tab | BottomNavTabItem | BottomNavigationBar | Tap | Switches to Fresh/Grocery tab | Fresh | BottomNavTabItem active state | None |
| Finance tab | BottomNavTabItem | BottomNavigationBar | Tap | Switches to Finance/Bank tab | Finance | BottomNavTabItem active state | None |
| Favorites tab | BottomNavTabItem | BottomNavigationBar | Tap | Switches to Favorites tab | Favorites | BottomNavTabItem active state | Requires login |
| Cart tab | BottomNavTabItem | BottomNavigationBar | Tap | Switches to Cart tab | Cart | BottomNavTabItem active state | None |
| Account tab | BottomNavTabItem | BottomNavigationBar | Tap | Switches to Account/Profile tab | ProfileHome | BottomNavTabItem active state | None |
