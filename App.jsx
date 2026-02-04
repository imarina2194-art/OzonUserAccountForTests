import React, { useEffect, useState } from "react";

const mockUser = {
  name: "Марина И.",
  subscribers: 175,
  subscriptions: 4,
  isPremium: true,
};

const iconRegistry = {
  chat: "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v1/chat_icon.png",
  "chat-badge":
    "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v1/indicator_badge_icon.png",
  menu: "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v1/burger_menu_icon.png",
  barcode:
    "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v1/barcode_icon.png",
  reviews:
    "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v1/reviews_shortcut_icon.png",
  purchases:
    "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v1/purchased_shortcut_icon.png",
  favorites:
    "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v1/favorites_shortcut_icon.png",
  premium:
    "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v1/premium_crown_icon.png",
};

const Icon = ({ name, alt, className }) => {
  const src = iconRegistry[name];
  if (!src) {
    return null;
  }

  return <img src={src} alt={alt} className={`object-contain ${className || ""}`} />;
};

const shortcutItems = [
  { id: "favorites", title: "Избранное", subtitle: "250 товаров", iconName: "favorites" },
  { id: "purchases", title: "Покупки", subtitle: "Заказать снова", iconName: "purchases" },
  { id: "reviews", title: "Ждут отзыва", subtitle: "8 товаров", iconName: "reviews" },
];

const orderItems = [
  {
    id: "order-1",
    status: "В пути",
    carrier: "Курьер доставит",
    delivery: "20 сен, Чт • 20:00–21:00",
    image: "https://ir.ozone.ru/s3/multimedia-1-b/wc1000/7815322019.jpg",
    count: 2,
  },
  {
    id: "order-2",
    status: "Готов к выдаче",
    carrier: "Пункт выдачи",
    delivery: "21 сен, Пт • после 12:00",
    image: "https://ir.ozone.ru/s3/multimedia-1-9/wc1000/7729411041.jpg",
    count: 1,
  },
];

const viewedItems = [
  {
    id: "viewed-1",
    title: "Подвеска Оливка MonMenu",
    image: "https://ir.ozone.ru/s3/multimedia-1-b/wc250/8260392359.jpg",
    price: "2 995 ₽",
  },
  {
    id: "viewed-2",
    title: "Westman Atelier Мини-стик для губ и щёк / Baby Cheeks Lip + Cheek Cream Blush Stick (Coquette)",
    image: "https://ir.ozone.ru/s3/multimedia-1-l/wc250/7539167829.jpg",
    price: "3 566 ₽",
    oldPrice: "12 830 ₽",
    discount: "−72%",
  },
  {
    id: "viewed-3",
    title: "SUMMER FRIDAYS Бальзам для губ / Lip Butter Balm (Vanilla Beige)",
    image: "https://ir.ozone.ru/s3/multimedia-1-c/wc250/7115249424.jpg",
    price: "3 286 ₽",
    oldPrice: "9 590 ₽",
    discount: "−65%",
  },
  {
    id: "viewed-4",
    title: "RHODE Пептидный тинт для губ 10 мл / Peptide Lip Tint 10 ml (espresso)",
    image: "https://ir.ozone.ru/s3/multimedia-1-9/wc250/7729411041.jpg",
    price: "3 271 ₽",
    oldPrice: "8 280 ₽",
    discount: "−60%",
  },
  {
    id: "viewed-5",
    title: "Pelate cерьги винтаж Agnes",
    image: "https://ir.ozone.ru/s3/multimedia-1-0/wc250/7715502576.jpg",
    price: "3 745 ₽",
  },
  {
    id: "viewed-6",
    title: "Keune Спрей для укладки волос, 200 мл",
    image: "https://ir.ozone.ru/s3/multimedia-1-l/wc250/8028781005.jpg",
    price: "2 015 ₽",
    oldPrice: "3 551 ₽",
    discount: "−43%",
  },
  {
    id: "viewed-7",
    title: "Ботильоны EKONIKA",
    image: "https://ir.ozone.ru/s3/multimedia-1-f/wc250/7155499983.jpg",
    price: "14 240 ₽",
  },
  {
    id: "viewed-8",
    title: "Часы Burker Watches Diana Gold Silver",
    image: "https://ir.ozone.ru/s3/multimedia-1-2/wc250/8180249834.jpg",
    price: "14 784 ₽",
    oldPrice: "44 000 ₽",
    discount: "−66%",
  },
];

const recommendedItems = [
  {
    title: "GISOU Обогащённое мёдом масло для губ 8 мл / Honey Infused Lip Oil 8 ml (Vanilla Glaze)",
    href: "/product/gisou-obogashchennoe-medom-maslo-dlya-gub-8-ml-honey-infused-lip-oil-8-ml-vanilla-glaze-3054682507/",
    image: "https://ir.ozone.ru/s3/multimedia-1-1/wc300/8256062089.jpg",
    price: "4 600 ₽",
    oldPrice: "10 000 ₽",
    discount: "−54%",
    rating: "4.6",
    reviews: "45",
  },
  {
    title: "Туфли ECCO SCULPTED LX 35",
    href: "/product/tufli-ecco-sculpted-lx-35-1626209541/",
    image: "https://ir.ozone.ru/s3/multimedia-1-k/wc300/7685691176.jpg",
    price: "10 244 ₽",
    oldPrice: "21 990 ₽",
    discount: "−53%",
    rating: "4.9",
    reviews: "167",
  },
  {
    title: "Джинсы SHWЭDAR",
    href: "/product/dzhinsy-shwedar-1912214751/",
    image: "https://ir.ozone.ru/s3/multimedia-1-n/wc300/7414654415.jpg",
    price: "1 647 ₽",
    oldPrice: "7 043 ₽",
    discount: "−76%",
    rating: "4.8",
    reviews: "674",
  },
  {
    title: "RHODE Румяна 5.3 гр / Pocket Blush 5.3 gr (tan line)",
    href: "/product/rhode-rumyana-5-3-gr-pocket-blush-5-3-gr-tan-line-2680905540/",
    image: "https://ir.ozone.ru/s3/multimedia-1-b/wc300/7815322019.jpg",
    price: "4 685 ₽",
    oldPrice: null,
    discount: null,
    rating: "4.8",
    reviews: "284",
  },
  {
    title: "Виноград Узбекский, Киш-Миш белый, 500 г",
    href: "/product/vinograd-uzbekskiy-kish-mish-belyy-500-g-160571964/",
    image: "https://ir.ozone.ru/s3/multimedia-1-q/wc300/7930220066.jpg",
    price: "199 ₽",
    oldPrice: null,
    discount: null,
    rating: "4.8",
    reviews: "29 796",
  },
  {
    title: "VT Cosmetics Массажный крем для кожи вокруг глаз с ПДРН и золотом PDRN Reedle Shot Eye Lifter",
    href: "/product/vt-cosmetics-massazhnyy-krem-dlya-kozhi-vokrug-glaz-s-pdrn-i-zolotom-pdrn-reedle-shot-eye-lifter-3245970666/",
    image: "https://ir.ozone.ru/s3/multimedia-1-k/wc300/7923917720.jpg",
    price: "2 058 ₽",
    oldPrice: null,
    discount: null,
    rating: "4.6",
    reviews: "7",
  },
  {
    title: "Лоферы EKONIKA",
    href: "/product/lofery-ekonika-1668634545/",
    image: "https://ir.ozone.ru/s3/multimedia-1-g/wc300/7155520432.jpg",
    price: "10 440 ₽",
    oldPrice: null,
    discount: null,
    rating: "5.0",
    reviews: "12",
  },
  {
    title: "KOKOSHNIKI Колье На цепочке",
    href: "/product/kokoshniki-kole-na-tsepochke-3149615593/",
    image: "https://ir.ozone.ru/s3/multimedia-1-i/wc300/8393204790.jpg",
    price: "5 500 ₽",
    oldPrice: "15 000 ₽",
    discount: "−63%",
    rating: "4.8",
    reviews: "187",
  },
  {
    title: "Балетки EKONIKA",
    href: "/product/baletki-ekonika-2336450331/",
    image: "https://ir.ozone.ru/s3/multimedia-1-8/wc300/8128971548.jpg",
    price: "8 540 ₽",
    oldPrice: "18 990 ₽",
    discount: "−55%",
    rating: "5.0",
    reviews: "4",
  },
  {
    title: "Ботинки JOG DOG THE DOG",
    href: "/product/botinki-jog-dog-the-dog-1695892837/",
    image: "https://ir.ozone.ru/s3/multimedia-1-t/wc300/7439451833.jpg",
    price: "17 793 ₽",
    oldPrice: null,
    discount: null,
    rating: "4.2",
    reviews: "11",
  },
];

const bottomTabs = [
  {
    id: "home",
    label: "Главная",
    icon: "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v2/home_tab.png",
  },
  {
    id: "fresh",
    label: "Ozon Fresh",
    icon: "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v2/fresh_tab.png",
  },
  {
    id: "finance",
    label: "Финансы",
    icon: "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v2/finance_tab.png",
  },
  {
    id: "favorites",
    label: "Избранное",
    icon: "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v2/fav_tab.png",
  },
  {
    id: "cart",
    label: "Корзина",
    icon: "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v2/cart_tab.png",
  },
  {
    id: "account",
    label: "Профиль",
    icon: "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v2/accaunt_tab.png",
  },
];

const StatusBar = ({ debugStyle }) => (
  <HStack
    className="box-border h-[var(--size-statusbar-h)] w-full justify-between px-[var(--space-4)] text-body-m text-[var(--color-text-primary)]"
    style={debugStyle}
  >
    <span className="font-[var(--font-weight-semibold)]">9:30</span>
    <img
      src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v1/status_icons.png"
      alt="status icons"
      className="h-auto w-[var(--size-status-icons-w)] object-contain"
    />
  </HStack>
);

const Avatar = () => (
  <div className="h-[var(--size-avatar)] w-[var(--size-avatar)] overflow-hidden rounded-full bg-[var(--color-surface-muted)]">
    <img
      className="h-full w-full object-cover"
      src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/avatar.png"
      alt="avatar"
    />
  </div>
);

const HStack = ({ className, children, ...props }) => (
  <div className={`flex items-center ${className || ""}`} {...props}>
    {children}
  </div>
);

const VStack = ({ className, children, ...props }) => (
  <div className={`flex flex-col ${className || ""}`} {...props}>
    {children}
  </div>
);

const Section = ({ className, children, ...props }) => (
  <section className={className} {...props}>
    {children}
  </section>
);

const Island = ({ className, children, ...props }) => (
  <div className={`bg-[var(--color-surface)] ${className || ""}`} {...props}>
    {children}
  </div>
);

const MutedPill = ({ className, children, ...props }) => (
  <div className={`bg-[var(--color-surface-muted)] ${className || ""}`} {...props}>
    {children}
  </div>
);

const DeviceFrame = ({ children, debug }) => (
  <div className="flex min-h-screen items-center justify-center bg-black">
    <div className="relative w-full max-w-[410px] h-[100dvh] sm:h-[852px] rounded-[40px] p-[10px]">
      <div
        className="screen box-border flex h-full w-full flex-col overflow-hidden rounded-[30px] bg-[var(--color-bg-page)]"
        style={{
          transform: "translateZ(0)",
          outline: debug ? "1px dashed var(--color-text-secondary)" : undefined,
        }}
      >
        {children}
      </div>
    </div>
  </div>
);

const IconButton = ({ iconName, badgeIconName, onClick }) => (
  <button
    onClick={onClick}
    className="relative flex h-[44px] w-[44px] items-center justify-center border-0 bg-transparent p-0 shadow-none outline-none"
  >
    <span className="block h-[24px] w-[24px]">
      <Icon name={iconName} alt="" className="h-full w-full" />
    </span>
    {badgeIconName && (
      <span className="absolute right-[5px] top-[5px] block h-[16px] w-[16px]">
        <span className="block h-full w-full">
          <Icon name={badgeIconName} alt="" className="h-full w-full" />
        </span>
      </span>
    )}
  </button>
);

const ShortcutCard = ({ title, subtitle, iconName }) => (
  <MutedPill className="relative h-[var(--size-shortcut-pill-h)] w-[var(--size-shortcut-pill-w)] rounded-[var(--radius-16)]">
    <div className="absolute left-[var(--space-2)] top-[var(--space-2)] text-left">
      <span className="flex h-[var(--size-icon-s)] w-[var(--size-icon-s)] items-center justify-center">
        <Icon name={iconName} alt={title} className="h-full w-full" />
      </span>
      <div className="mt-[var(--space-2)]">
        <p className="text-title-s text-[var(--color-text-primary)]">
          {title}
        </p>
        <p className="text-body-s mt-[var(--space-0_5)] text-[var(--color-text-secondary)]">
          {subtitle}
        </p>
      </div>
    </div>
  </MutedPill>
);

const OrderTrackingCard = ({ order }) => (
  <Island className="flex h-[80px] w-[264px] flex-none items-center overflow-hidden rounded-[16px] bg-[var(--color-surface)] px-[var(--space-2)] py-0">
    <div className="relative h-[64px] w-[64px]">
      <img
        src={order.image}
        alt="order"
        className="h-full w-full rounded-[8px] object-cover"
      />
      <span className="absolute bottom-[4px] left-[4px] flex h-[16px] w-[16px] items-center justify-center rounded-[5px] bg-[var(--color-surface)] text-[12px] font-[var(--font-weight-semibold)] text-[var(--color-text-primary)]">
        {order.count}
      </span>
    </div>
    <div className="ml-[10px] flex min-w-0 flex-1 flex-col">
      <p className="m-0 text-[16px] font-[var(--font-weight-semibold)] leading-[18px] text-[var(--color-text-primary)]">
        {order.status}
      </p>
      <p className="m-0 mt-[2px] text-[14px] leading-[16px] text-[var(--color-text-secondary)]">
        {order.carrier}
      </p>
      <p className="m-0 mt-[2px] text-[14px] leading-[16px] text-[var(--color-text-primary)]">
        {order.delivery}
      </p>
    </div>
  </Island>
);

const MorkovskEntryPoint = ({ debugStyle }) => (
  <Island
    className="flex h-[114px] w-[390px] overflow-hidden rounded-[var(--radius-l)] bg-[var(--color-surface)]"
    style={debugStyle}
  >
    <VStack className="h-full w-[250px] gap-[var(--space-2)] px-[var(--space-4)] py-[var(--space-4)]">
      <HStack className="gap-[var(--space-2)]">
        <p className="text-title-l truncate text-[var(--color-text-primary)]">
          Морковск
        </p>
        <MutedPill className="text-body-s inline-flex h-[24px] w-[52px] items-center justify-center gap-[2px] rounded-[var(--radius-8)] text-[var(--color-text-primary)]">
          <span>312</span>
          <img
            src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v3/carrot_icon.png"
            alt=""
            className="h-[20px] w-[13px] object-contain"
          />
        </MutedPill>
      </HStack>
      <p className="text-body-m truncate text-[var(--color-text-secondary)]">
        Суперприз — квартира
      </p>
      <button className="text-body-m inline-flex h-[24px] w-[118px] items-center justify-center rounded-[var(--radius-8)] border-0 bg-[var(--color-cell-button-bg)] p-0 font-[var(--font-weight-medium)] text-[var(--color-cell-button-text)] shadow-none">
        Узнать больше
      </button>
    </VStack>
    <div className="h-[114px] w-[140px]">
      <img
        src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v3/zahar_banner.png"
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  </Island>
);

const FinanceSection = ({ debugStyle }) => (
  <Island className="rounded-[var(--radius-l)] p-[var(--space-4)]" style={debugStyle}>
    <div className="grid grid-cols-2 gap-[12px]">
      <div className="grid gap-[12px] rounded-[var(--radius-16)] bg-[var(--color-surface-muted)] p-[12px]">
        <div className="grid grid-cols-[1fr_auto] items-center gap-[8px]">
          <p className="text-body-m font-[var(--font-weight-medium)] text-[var(--color-text-secondary)]">
            Оплата
          </p>
          <img
            src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/chevron_icon.png"
            alt=""
            className="h-[16px] w-[16px] object-contain"
          />
        </div>
        <div className="grid grid-cols-[1fr_auto] items-center gap-[8px]">
          <p className="text-body-s text-[var(--color-text-secondary)]">Ozon карта</p>
          <p className="text-title-l whitespace-nowrap text-[var(--color-text-primary)]">
            2 450 ₽
          </p>
        </div>
        <div className="grid gap-[8px]">
          <p className="text-body-s text-[var(--color-text-secondary)]">Рассрочка</p>
          <p className="text-body-m truncate text-[var(--color-text-primary)]">
            Платёж: 15 марта · 1 240 ₽
          </p>
          <p className="text-body-s text-[var(--color-text-secondary)]">
            Лимит: 148 760 ₽
          </p>
        </div>
      </div>
      <div className="grid gap-[12px] rounded-[var(--radius-16)] bg-[var(--color-surface-muted)] p-[12px]">
        <div className="grid grid-cols-[1fr_auto] items-center gap-[8px]">
          <p className="text-body-m font-[var(--font-weight-medium)] text-[var(--color-text-secondary)]">
            Баллы и бонусы
          </p>
          <img
            src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/chevron_icon.png"
            alt=""
            className="h-[16px] w-[16px] object-contain"
          />
        </div>
        <div className="grid gap-[10px]">
          <div className="grid grid-cols-[1fr_auto] items-center gap-[8px]">
            <div className="grid min-w-0 grid-cols-[auto_1fr] items-center gap-[6px]">
              <img
                src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/bonuses_icon.png"
                alt=""
                className="h-[16px] w-[20px] object-contain"
              />
              <p className="text-body-s text-[var(--color-text-secondary)]">Баллы Ozon</p>
            </div>
            <p className="text-title-l whitespace-nowrap text-[var(--color-text-primary)]">
              3 240
            </p>
          </div>
          <div className="flex flex-wrap gap-[8px]">
            {[
              { label: "⭐", value: "128" },
              { label: "✈️", value: "2 100" },
              { label: "🎁", value: "5" },
            ].map((chip) => (
              <span
                key={chip.label}
                className="text-body-s inline-flex items-center gap-[6px] rounded-[var(--radius-8)] bg-[var(--color-cell-button-bg)] px-[8px] py-[6px] text-[var(--color-text-secondary)]"
              >
                <span>{chip.label}</span>
                <span className="font-[var(--font-weight-medium)]">{chip.value}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 grid gap-[12px] rounded-[var(--radius-16)] bg-[var(--color-surface-muted)] p-[12px]">
        <div className="grid grid-cols-[1fr_auto] items-center gap-[8px]">
          <p className="text-body-m font-[var(--font-weight-medium)] text-[var(--color-text-secondary)]">
            Сертификаты и коды
          </p>
          <img
            src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/chevron_icon.png"
            alt=""
            className="h-[16px] w-[16px] object-contain"
          />
        </div>
        <div className="grid grid-cols-[auto_1fr] items-center gap-[12px]">
          <MutedPill className="inline-flex items-center justify-center rounded-[var(--radius-8)] px-[10px] py-[4px] text-body-s text-[var(--color-text-secondary)]">
            Активировать
          </MutedPill>
          <div className="grid justify-items-end text-right">
            <p className="text-body-m text-[var(--color-text-secondary)]">
              Баланс средств{" "}
              <span className="font-[var(--font-weight-medium)] text-[var(--color-text-primary)]">
                3 845,41 ₽
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Island>
);

const ViewedProductCard = ({ item, isFavorite, onToggle }) => (
  <div className="flex w-[101px] flex-none flex-col">
    <div className="relative h-[134px] w-[101px] overflow-hidden rounded-[12px]">
      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      <button
        onClick={() => onToggle(item.title)}
        className="absolute right-[8px] top-[8px] flex h-[24px] w-[24px] items-center justify-center border-0 bg-transparent p-0 leading-none"
        aria-label="Toggle favorite"
      >
        <img
          src={
            isFavorite
              ? "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/fav_icon_full.png"
              : "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/fav_icon_empty.png"
          }
          alt=""
          className="block h-[24px] w-[24px]"
        />
      </button>
    </div>
    <p className="text-title-s mt-[var(--space-1)] font-[var(--font-weight-bold)] text-[var(--color-text-primary)]">
      {item.price}
    </p>
    {item.oldPrice && item.discount && (
      <div className="mt-[var(--space-0_5)] flex items-center gap-[var(--space-1)]">
        <span className="text-body-s font-[var(--font-weight-medium)] text-[var(--color-text-secondary)] line-through">
          {item.oldPrice}
        </span>
        <span className="text-body-s font-[var(--font-weight-medium)] text-[var(--color-text-magenta)]">
          {item.discount}
        </span>
      </div>
    )}
    <p
      className={`text-title-s mt-[var(--space-0_5)] font-[var(--font-weight-regular)] text-[var(--color-text-primary)] ${
        item.oldPrice ? "line-clamp-1" : "line-clamp-2"
      }`}
    >
      {item.title}
    </p>
  </div>
);

const ViewedProductsSection = ({ items, favorites, onToggle }) => (
  <Island className="rounded-[var(--radius-l)] p-[var(--space-4)]">
    <HStack className="justify-between">
      <p className="text-title-l text-[var(--color-text-primary)]">Вы смотрели</p>
    </HStack>
    <div className="mt-[var(--space-2)] flex gap-[var(--space-2)] overflow-x-auto">
      {items.map((item) => (
        <ViewedProductCard
          key={item.id}
          item={item}
          isFavorite={favorites.has(item.title)}
          onToggle={onToggle}
        />
      ))}
    </div>
  </Island>
);

const RecommendedProductCard = ({ item, isFavorite, onToggle }) => (
  <div className="h-[360px] w-[195px] flex-none overflow-hidden rounded-[16px] bg-[var(--color-surface)]">
    <div className="relative h-[260px] w-[195px] overflow-hidden rounded-t-[16px]">
      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      <button
        onClick={() => onToggle(item.title)}
        className="absolute right-[8px] top-[8px] h-[24px] w-[24px] border-0 bg-transparent p-0"
        aria-label="Toggle favorite"
      >
        <img
          src={
            isFavorite
              ? "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/fav_icon_full.png"
              : "https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/fav_icon_empty.png"
          }
          alt=""
          className="h-[24px] w-[24px] object-contain"
        />
      </button>
    </div>
    <div className="flex flex-col gap-[var(--space-0_5)] px-[var(--space-2)] pb-[var(--space-2)] pt-[12px]">
      <p className="text-title-s font-[var(--font-weight-bold)] text-[var(--color-text-primary)]">
        {item.price}
      </p>
      {item.oldPrice && item.discount && (
        <div className="flex items-center gap-[var(--space-1)]">
          <span className="text-body-s font-[var(--font-weight-medium)] text-[var(--color-text-secondary)] line-through">
            {item.oldPrice}
          </span>
          <span className="text-body-s font-[var(--font-weight-medium)] text-[var(--color-text-magenta)]">
            {item.discount}
          </span>
        </div>
      )}
      <p className="text-title-s line-clamp-2 font-[var(--font-weight-regular)] text-[var(--color-text-primary)]">
        {item.title}
      </p>
      <div className="flex items-center gap-[2px]">
        <img
          src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/raiting_star.png"
          alt=""
          className="h-[16px] w-[16px] object-contain"
        />
        <span className="text-body-s font-[var(--font-weight-medium)] text-[var(--color-text-primary)]">
          {item.rating}
        </span>
        <img
          src="https://github.com/imarina2194-art/OzonUserAccountForTests/releases/download/design-system-assets-v4/review_counter.png"
          alt=""
          className="h-[16px] w-[16px] object-contain"
        />
        <span className="text-body-s font-[var(--font-weight-medium)] text-[var(--color-text-secondary)]">
          {item.reviews}
        </span>
      </div>
    </div>
  </div>
);

const BottomNav = ({ debugStyle }) => (
  <div className="flex-none z-30 w-full" style={debugStyle}>
    <div className="flex h-[var(--size-bottomnav-h)] w-full items-center justify-center bg-[var(--color-surface)]">
      <div
        className="grid h-full"
        style={{
          width: "calc(6 * var(--size-bottomtab-w))",
          gridTemplateColumns: "repeat(6, var(--size-bottomtab-w))",
        }}
      >
        {bottomTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              console.log("Navigate", tab.id);
            }}
            className="flex h-[var(--size-bottomnav-h)] w-[var(--size-bottomtab-w)] items-center justify-center border-0 bg-transparent p-0"
            aria-label={tab.label}
          >
            <img
              src={tab.icon}
              alt=""
              className="h-[var(--size-bottomicon)] w-[var(--size-bottomicon)] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  </div>
);

const HomeIndicator = () => (
  <div className="relative h-[34px] w-[390px] bg-[var(--color-surface)]">
    <span className="absolute bottom-[8px] left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-[999px] bg-[var(--color-text-primary)]" />
  </div>
);

const App = ({ debug }) => {
  const [favorites, setFavorites] = useState(() => new Set());
  const debugStyle = debug ? { outline: "1px dashed var(--color-text-secondary)" } : undefined;

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
    console.log("Toggle favorite", id);
  };

  return (
    <div className="flex h-full w-full min-h-0 flex-col">
      <StatusBar debugStyle={debugStyle} />
      <div
        className="sticky top-0 z-20 w-full"
        style={debugStyle}
      >
        <HStack className="relative box-border h-[var(--size-header-h)] w-[390px] items-center pl-[var(--space-4)] pr-0">
          <Island className="relative h-[48px] w-[268px] rounded-[var(--radius-32)]">
            <div className="absolute left-[2px] top-[2px]">
              <Avatar />
            </div>
            <div className="absolute left-[58px] top-1/2 min-w-0 -translate-y-1/2">
              <div className="flex items-center">
                <p className="m-0 text-title-s truncate text-[var(--color-text-primary)]">
                  {mockUser.name}
                </p>
                {mockUser.isPremium && (
                  <span className="ml-[4px] h-[14px] w-[14px]">
                    <Icon name="premium" alt="premium" className="h-full w-full" />
                  </span>
                )}
              </div>
              <p className="m-0 mt-[2px] text-body-s truncate text-[var(--color-text-secondary)]">
                {mockUser.subscribers} подписчиков • {mockUser.subscriptions} подписчика
              </p>
            </div>
          </Island>
          <div className="absolute right-[9px] top-1/2 flex -translate-y-1/2 items-center">
            <IconButton
              iconName="chat"
              badgeIconName="chat-badge"
              onClick={() => console.log("Open messages")}
            />
            <IconButton iconName="menu" onClick={() => console.log("Open menu")} />
          </div>
        </HStack>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto" style={debugStyle}>
        <div
          className="w-full box-border"
          style={{ paddingBottom: "calc(var(--size-bottomnav-h) + 34px)" }}
        >
          <Section className="w-[390px] box-border" style={debugStyle}>
            <Island className="flex h-[var(--size-shortcuts-h)] w-[390px] items-center justify-center rounded-[var(--radius-24)]">
              <div className="flex gap-[var(--space-2)]">
                {shortcutItems.map((item) => (
                  <ShortcutCard key={item.id} title={item.title} subtitle={item.subtitle} iconName={item.iconName} />
                ))}
              </div>
            </Island>
          </Section>
          <div className="h-[var(--space-1)]" />
          <Section className="w-[390px] box-border" style={debugStyle}>
            <div className="relative h-[80px] w-[390px] overflow-visible">
              <div className="flex h-[80px] gap-[8px] overflow-x-auto overflow-y-visible p-0">
                <div className="flex h-[80px] w-[52px] flex-none items-center justify-center rounded-l-none rounded-r-[16px] bg-[var(--color-text-primary)]">
                  <span className="h-[32px] w-[32px]">
                    <Icon name="barcode" alt="barcode" className="h-full w-full" />
                  </span>
                </div>
                {orderItems.map((order) => (
                  <OrderTrackingCard key={order.id} order={order} />
                ))}
              </div>
            </div>
          </Section>
          <div className="h-[var(--space-1)]" />
          <div className="w-[390px] box-border">
            <MorkovskEntryPoint debugStyle={debugStyle} />
          </div>
          <div className="h-[var(--space-1)]" />
          <div className="w-[390px] box-border">
            <FinanceSection debugStyle={debugStyle} />
          </div>
          <div className="h-[var(--space-1)]" />
          <div className="w-[390px] box-border">
            <ViewedProductsSection
              items={viewedItems}
              favorites={favorites}
              onToggle={toggleFavorite}
            />
          </div>
          <div className="h-[32px]" />
          <div className="w-[390px] box-border">
            <div className="px-[var(--space-4)]">
              <p className="text-title-l font-[var(--font-weight-bold)] text-[var(--color-text-primary)]">
                Возможно, вам понравится
              </p>
            </div>
            <div className="mt-[var(--space-2)] grid w-full grid-cols-2 gap-x-[1px] gap-y-[6px] px-0">
              {recommendedItems.map((item) => (
                <RecommendedProductCard
                  key={item.href}
                  item={item}
                  isFavorite={favorites.has(item.title)}
                  onToggle={toggleFavorite}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav debugStyle={debugStyle} />
      <HomeIndicator />
    </div>
  );
};

const Root = () => {
  const [showLayoutDebug, setShowLayoutDebug] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "o" || event.key === "O") {
        setShowLayoutDebug((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <DeviceFrame debug={showLayoutDebug}>
      <App debug={showLayoutDebug} />
    </DeviceFrame>
  );
};

export default Root;
