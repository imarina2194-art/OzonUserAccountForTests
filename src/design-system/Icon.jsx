import chatIcon from "./icons/chat_icon.png";
import chatBadgeIcon from "./icons/indicator_badge_icon.png";
import menuIcon from "./icons/burger_menu_icon.png";
import barcodeIcon from "./icons/barcode_icon.png";
import reviewsIcon from "./icons/reviews_shortcut_icon.png";
import purchasesIcon from "./icons/purchased_shortcut_icon.png";
import favoritesIcon from "./icons/favorites_shortcut_icon.png";
import premiumCrownIcon from "./icons/premium_crown_icon.png";

const ICONS = {
  chat: chatIcon,
  "chat-badge": chatBadgeIcon,
  menu: menuIcon,
  barcode: barcodeIcon,
  reviews: reviewsIcon,
  purchases: purchasesIcon,
  favorites: favoritesIcon,
  premium: premiumCrownIcon,
};

const Icon = ({ name, size = 20, alt }) => {
  const src = ICONS[name];
  if (!src) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt || name}
      style={{ width: size, height: size }}
      className="block object-contain"
    />
  );
};

export default Icon;
