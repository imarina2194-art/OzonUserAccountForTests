# Screen(ProfileHome) State Model

## 1) Screen-Level States

### loading
- Visible sections:
  - AccountHeader (sticky)
  - BottomNavigationBar (fixed)
- Hidden sections:
  - Creator Promotion Cell
  - Shortcuts (Navigation Pills)
  - OrderTracking
  - MorkovskEntryPoint
  - FinanceInfoSection
  - ItemHorizontalShelf
  - Secondary Shortcuts
  - Promotional Banner
  - ItemVerticalShelf
- Sections showing loading placeholders:
  - AccountHeader
- Sections showing empty states:
  - None
- Sections showing error states:
  - None

### loaded
- Visible sections:
  - AccountHeader (sticky)
  - Creator Promotion Cell
  - Shortcuts (Navigation Pills)
  - OrderTracking
  - MorkovskEntryPoint
  - FinanceInfoSection
  - ItemHorizontalShelf
  - Secondary Shortcuts
  - Promotional Banner
  - ItemVerticalShelf
  - BottomNavigationBar (fixed)
- Hidden sections:
  - None
- Sections showing loading placeholders:
  - None
- Sections showing empty states:
  - Sections with no data: OrderTracking, FinanceInfoSection, ItemHorizontalShelf, ItemVerticalShelf
- Sections showing error states:
  - None

### partialData
- Visible sections:
  - AccountHeader (sticky)
  - Creator Promotion Cell
  - Shortcuts (Navigation Pills)
  - OrderTracking
  - MorkovskEntryPoint
  - FinanceInfoSection
  - ItemHorizontalShelf
  - Secondary Shortcuts
  - Promotional Banner
  - ItemVerticalShelf
  - BottomNavigationBar (fixed)
- Hidden sections:
  - None
- Sections showing loading placeholders:
  - Any section with in-flight data: OrderTracking, FinanceInfoSection, ItemHorizontalShelf, ItemVerticalShelf
- Sections showing empty states:
  - Any section with confirmed empty data: OrderTracking, FinanceInfoSection, ItemHorizontalShelf, ItemVerticalShelf
- Sections showing error states:
  - Any section with failed data: OrderTracking, FinanceInfoSection, ItemHorizontalShelf, ItemVerticalShelf

### error
- Visible sections:
  - AccountHeader (sticky)
  - BottomNavigationBar (fixed)
- Hidden sections:
  - Creator Promotion Cell
  - Shortcuts (Navigation Pills)
  - OrderTracking
  - MorkovskEntryPoint
  - FinanceInfoSection
  - ItemHorizontalShelf
  - Secondary Shortcuts
  - Promotional Banner
  - ItemVerticalShelf
- Sections showing loading placeholders:
  - None
- Sections showing empty states:
  - None
- Sections showing error states:
  - Screen-level error state (full-page error placeholder)

### loggedOut
- Visible sections:
  - AccountHeader (sticky, logged-out variant)
  - BottomNavigationBar (fixed)
- Hidden sections:
  - Creator Promotion Cell
  - Shortcuts (Navigation Pills)
  - OrderTracking
  - MorkovskEntryPoint
  - FinanceInfoSection
  - ItemHorizontalShelf
  - Secondary Shortcuts
  - Promotional Banner
  - ItemVerticalShelf
- Sections showing loading placeholders:
  - None
- Sections showing empty states:
  - None
- Sections showing error states:
  - None

## 2) Section-Level States

### AccountHeader
- dataPresent:
  - Shows avatar, user name, public/private info, and action button.
- loading:
  - Shows skeleton for avatar and text lines.
- empty:
  - Shows placeholder name and prompts to complete profile.
- error:
  - Shows inline error message and retry action.

### OrderTracking
- dataPresent:
  - Shows barcode (if available) and carousel with active orders plus all-orders card.
- loading:
  - Shows carousel skeleton cards and barcode placeholder.
- empty:
  - Shows empty-state message (no active orders) and hides barcode.
- error:
  - Shows inline error state with retry.

### FinanceInfoSection
- dataPresent:
  - Shows banner carousel and list of finance cells.
- loading:
  - Shows banner skeletons and cell skeletons.
- empty:
  - Shows empty-state message and hides banner carousel.
- error:
  - Shows inline error state with retry.

### ItemHorizontalShelf
- dataPresent:
  - Shows shelf title and horizontal product list.
- loading:
  - Shows title placeholder and product card skeletons.
- empty:
  - Shows empty-state message and hides product list.
- error:
  - Shows inline error state with retry.

### ItemVerticalShelf
- dataPresent:
  - Shows shelf title and two-column product grid.
- loading:
  - Shows title placeholder and grid skeletons.
- empty:
  - Shows empty-state message and hides product grid.
- error:
  - Shows inline error state with retry.

## 3) Transitions

- screenRefresh:
  - loaded -> loading
  - partialData -> loading
  - error -> loading
- apiSuccess:
  - loading -> loaded
  - partialData -> loaded
- apiPartialSuccess:
  - loading -> partialData
- apiFailure:
  - loading -> error
  - partialData -> error (if critical data fails)
- userLogin:
  - loggedOut -> loading
- userLogout:
  - loaded -> loggedOut
  - partialData -> loggedOut
  - error -> loggedOut
- networkLost:
  - loaded -> partialData
  - loading -> error
- networkRestored:
  - error -> loading
  - partialData -> loading
