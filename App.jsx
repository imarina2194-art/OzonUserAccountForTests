import React, { useEffect, useMemo, useState } from "react";

const mockUser = {
  name: "Александр Р.",
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
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=300&q=80",
    count: 2,
  },
];

const financeCells = [
  { id: "card", title: "Ozon Карта", value: "3 845,41 ₽" },
  { id: "install", title: "Рассрочка", value: "до 300 000 ₽" },
];

const horizontalItems = [
  {
    id: "prod-1",
    title: "Смартфон Apple iPho…",
    price: "65 845 ₽",
    oldPrice: "75 367 ₽",
    discount: "−70%",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "prod-2",
    title: "Кофе Ozon fresh Medi…",
    price: "148 ₽",
    oldPrice: "499 ₽",
    discount: "−70%",
    image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "prod-3",
    title: "Штатив для телеф…",
    price: "845 ₽",
    oldPrice: "967 ₽",
    discount: "−70%",
    image: "https://images.unsplash.com/photo-1519183071298-a2962be96c5e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "prod-4",
    title: "Бас гитара…",
    price: "18 348 ₽",
    oldPrice: "24 499 ₽",
    discount: "−70%",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&q=80",
  },
];

const verticalItems = [
  {
    id: "v-1",
    title: "Диван механизм Юниор",
    price: "4 450 ₽",
    oldPrice: "7 367 ₽",
    discount: "−79%",
    rating: "4.8",
    reviews: "132 отзыва",
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=600&q=80",
    hasStepper: true,
  },
  {
    id: "v-2",
    title: "Диван с ящиком для хранения Boss",
    price: "15 800 ₽",
    oldPrice: "23 367 ₽",
    discount: "−79%",
    rating: "4.8",
    reviews: "132 отзыва",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=600&q=80",
    hasStepper: false,
  },
  {
    id: "v-3",
    title: "Шкаф распашной Трио",
    price: "4 450 ₽",
    oldPrice: "7 367 ₽",
    discount: "−79%",
    rating: "4.8",
    reviews: "132 отзыва",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
    hasStepper: false,
  },
  {
    id: "v-4",
    title: "Puzzlemobel Тумба под телевизор",
    price: "15 800 ₽",
    oldPrice: "23 567 ₽",
    discount: "−79%",
    rating: "4.8",
    reviews: "132 отзыва",
    image: "https://images.unsplash.com/photo-1455792244736-3ed96c3d7f7e?auto=format&fit=crop&w=600&q=80",
    hasStepper: true,
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
      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
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

const Badge = ({ className, children, ...props }) => (
  <span
    className={`inline-flex items-center justify-center rounded-full bg-[var(--color-badge)] text-[var(--color-surface)] ${className || ""}`}
    {...props}
  >
    {children}
  </span>
);

const DeviceFrame = ({ children, debug }) => (
  <div className="flex min-h-screen items-center justify-center bg-black">
    <div className="relative h-[852px] w-[410px] rounded-[40px] bg-black p-[10px]">
      <div
        className="screen box-border flex h-full w-[390px] flex-col overflow-hidden overflow-x-hidden rounded-[30px] bg-[var(--color-bg-page)]"
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
    className="relative flex h-[var(--size-icon-button)] w-[var(--size-icon-button)] items-center justify-center"
  >
    <span className="h-[var(--size-icon-button-icon)] w-[var(--size-icon-button-icon)]">
      <Icon name={iconName} alt="" className="h-full w-full" />
    </span>
    {badgeIconName && (
      <Badge className="absolute -right-[var(--space-0-5)] -top-[var(--space-1)] h-[var(--size-badge)] min-w-[var(--size-badge)] p-[var(--space-0-5)] text-body-s font-[var(--font-weight-semibold)]">
        <span className="h-[var(--size-badge-icon)] w-[var(--size-badge-icon)]">
          <Icon name={badgeIconName} alt="" className="h-full w-full" />
        </span>
      </Badge>
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
  <Island className="flex min-w-[252px] items-center gap-[var(--space-2)] rounded-[var(--radius-16)] p-[var(--space-2)]">
    <div className="relative">
      <img
        src={order.image}
        alt="order"
        className="h-[var(--size-order-image)] w-[var(--size-order-image)] rounded-[var(--radius-8)] object-cover"
      />
      <span className="text-body-s absolute -bottom-[var(--space-1)] -left-[var(--space-1)] flex h-[var(--size-badge)] w-[var(--size-badge)] items-center justify-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] font-[var(--font-weight-semibold)] text-[var(--color-text-primary)]">
        {order.count}
      </span>
    </div>
    <VStack className="flex-1 justify-center gap-[var(--space-0_5)]">
      <p className="text-title-m text-[var(--color-text-primary)]">
        {order.status}
      </p>
      <p className="text-body-m text-[var(--color-text-secondary)]">
        {order.carrier}
      </p>
      <p className="text-body-m text-[var(--color-text-secondary)]">
        {order.delivery}
      </p>
    </VStack>
  </Island>
);

const MorkovskEntryPoint = ({ debugStyle }) => (
  <Island
    className="h-[var(--size-morkovsk-h)] overflow-hidden rounded-[var(--radius-24)] p-[var(--space-4)]"
    style={debugStyle}
  >
    <VStack className="h-full gap-[var(--space-2)]">
      <HStack className="gap-[var(--space-2)]">
        <p className="text-title-l truncate text-[var(--color-text-primary)]">
          Морковск
        </p>
        <MutedPill className="text-body-s inline-flex items-center gap-[var(--space-0_5)] rounded-[var(--radius-8)] px-[var(--space-2)] py-[var(--space-0_5)] text-[var(--color-text-primary)]">
          <span>312</span>
          <span aria-hidden="true">🥕</span>
        </MutedPill>
      </HStack>
      <p className="text-body-m truncate text-[var(--color-text-secondary)]">
        Суперприз — квартира
      </p>
      <button className="text-body-m truncate font-[var(--font-weight-semibold)] text-[var(--color-text-link)]">
        Узнать больше
      </button>
    </VStack>
  </Island>
);

const FinanceSection = ({ debugStyle }) => (
  <Island className="rounded-[var(--radius-l)] p-[var(--space-4)]" style={debugStyle}>
    <HStack className="justify-between">
      <p className="text-title-l text-[var(--color-text-primary)]">
        Финансы
      </p>
      <button className="text-body-m font-[var(--font-weight-semibold)] text-[var(--color-text-link)]">
        Баллы и бонусы
      </button>
    </HStack>
    <div className="mt-[var(--space-2)] grid grid-cols-2 gap-[var(--space-2)]">
      <VStack className="gap-[var(--space-2)]">
        {financeCells.map((cell) => (
          <MutedPill key={cell.id} className="rounded-[var(--radius-s)] p-[var(--space-2)]">
            <p className="text-title-cell text-[var(--color-text-secondary)]">
              {cell.title}
            </p>
            <p className="text-title-m text-[var(--color-text-primary)]">
              {cell.value}
            </p>
          </MutedPill>
        ))}
      </VStack>
      <MutedPill className="rounded-[var(--radius-s)] p-[var(--space-2)]">
        <p className="text-title-m text-[var(--color-text-primary)]">
          Ozon Premium
        </p>
        <p className="text-body-m text-[var(--color-text-link)]">
          Получить больше привилегий
        </p>
      </MutedPill>
    </div>
  </Island>
);

const ProductCardCompact = ({ item, isFavorite, onToggle }) => (
  <div className="flex w-[140px] flex-col gap-[4px]">
    <div className="relative overflow-hidden rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
      <img src={item.image} alt={item.title} className="h-[116px] w-full object-cover" />
      <button
        onClick={onToggle}
        className="absolute right-[6px] top-[6px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--color-surface)]"
      >
        <span className="text-body-s text-[var(--color-text-primary)]">{isFavorite ? "❤" : "♡"}</span>
      </button>
    </div>
    <p className="text-title-s text-[var(--color-text-primary)]">{item.price}</p>
    <div className="text-body-s flex items-center gap-[6px] font-[var(--font-weight-semibold)]">
      <span className="text-[var(--color-text-secondary)] line-through">{item.oldPrice}</span>
      <span className="text-[var(--color-text-primary)]">{item.discount}</span>
    </div>
    <p className="text-body-s text-[var(--color-text-secondary)]">{item.title}</p>
  </div>
);

const VerticalProductCard = ({ item, isFavorite, onToggle, stepper, onStep }) => (
  <div className="flex flex-col gap-[4px]">
    <div className="relative overflow-hidden rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
      <img src={item.image} alt={item.title} className="h-[144px] w-full object-cover" />
      <button
        onClick={onToggle}
        className="absolute right-[8px] top-[8px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[var(--color-surface)]"
      >
        <span className="text-body-s text-[var(--color-text-primary)]">{isFavorite ? "❤" : "♡"}</span>
      </button>
    </div>
    <p className="text-title-s text-[var(--color-text-primary)]">{item.price}</p>
    <div className="text-body-s flex items-center gap-[6px] font-[var(--font-weight-semibold)]">
      <span className="text-[var(--color-text-secondary)] line-through">{item.oldPrice}</span>
      <span className="text-[var(--color-text-primary)]">{item.discount}</span>
    </div>
    <p className="text-body-s text-[var(--color-text-secondary)]">{item.title}</p>
    <div className="text-body-s flex items-center gap-[6px] text-[var(--color-text-primary)]">
      <span className="text-[var(--color-text-secondary)]">★</span>
      <span>{item.rating}</span>
      <span className="text-[var(--color-text-secondary)]">• {item.reviews}</span>
    </div>
    {stepper && (
      <div className="text-body-m mt-[2px] flex items-center justify-between rounded-[12px] bg-[var(--color-surface-muted)] px-[10px] py-[4px] text-[var(--color-text-link)]">
        <button onClick={() => onStep(-1)}>
          −
        </button>
        <span className="text-body-s font-[var(--font-weight-semibold)] text-[var(--color-text-primary)]">
          {stepper}
        </span>
        <button onClick={() => onStep(1)}>
          +
        </button>
      </div>
    )}
  </div>
);

const SegmentedControl = ({ items, activeId, onChange }) => (
  <div className="flex gap-[10px]">
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          onChange(item.id);
          console.log("Segment", item.id);
        }}
        className={`text-title-m flex flex-1 items-center justify-center gap-[6px] rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-[12px] py-[8px] ${
          activeId === item.id
            ? "text-[var(--color-text-primary)]"
            : "text-[var(--color-text-secondary)]"
        }`}
      >
        <span className="text-title-m">{item.icon}</span>
        <span>{item.label}</span>
      </button>
    ))}
  </div>
);

const BottomNav = ({ activeTab, onChange, debugStyle }) => (
  <div className="sticky bottom-0 z-30 w-full" style={debugStyle}>
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
              onChange(tab.id);
              console.log("Navigate", tab.id);
            }}
            className="flex h-[var(--size-bottomnav-h)] w-[var(--size-bottomtab-w)] items-center justify-center"
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

const App = ({ debug }) => {
  const [favorites, setFavorites] = useState(() => new Set(["prod-1", "prod-3", "v-1"]));
  const [activeTab, setActiveTab] = useState("account");
  const [stepperCounts, setStepperCounts] = useState(() => ({ "v-1": 1, "v-4": 2 }));
  const [segment, setSegment] = useState("shops");
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

  const handleStepper = (id, delta) => {
    setStepperCounts((prev) => {
      const nextCount = Math.max(0, (prev[id] || 0) + delta);
      return { ...prev, [id]: nextCount };
    });
  };

  const horizontalFavorites = useMemo(() => new Set([...favorites].filter((id) => id.startsWith("prod"))), [
    favorites,
  ]);

  return (
    <div className="flex h-full w-full flex-col">
      <StatusBar debugStyle={debugStyle} />
      <div
        className="sticky top-0 z-20 w-full"
        style={debugStyle}
      >
        <HStack className="box-border h-[var(--size-header-h)] w-[390px] items-end pb-[var(--space-2)] pl-[var(--space-4)] pr-0">
          <Island className="flex h-[var(--size-header-island-h)] flex-1 items-center gap-[var(--space-3)] rounded-[var(--radius-32)] px-[var(--space-3)]">
            <Avatar />
            <VStack className="min-w-0 gap-[var(--space-0_5)]">
              <HStack className="gap-[var(--space-1)]">
                <p className="text-title-s truncate text-[var(--color-text-primary)]">
                  {mockUser.name}
                </p>
                {mockUser.isPremium && (
                  <span className="h-[var(--size-premium-icon)] w-[var(--size-premium-icon)]">
                    <Icon name="premium" alt="premium" className="h-full w-full" />
                  </span>
                )}
              </HStack>
              <p className="text-body-s truncate text-[var(--color-text-secondary)]">
                {mockUser.subscribers} подписчиков • {mockUser.subscriptions} подписчика
              </p>
            </VStack>
          </Island>
          <HStack className="ml-[var(--space-2)] gap-[var(--space-2)]">
            <IconButton
              iconName="chat"
              badgeIconName="chat-badge"
              onClick={() => console.log("Open messages")}
            />
            <IconButton iconName="menu" onClick={() => console.log("Open menu")} />
          </HStack>
        </HStack>
      </div>
      <div className="flex-1 overflow-y-auto" style={debugStyle}>
        <div
          className="w-full box-border"
          style={{ paddingBottom: "0px" }}
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
            <HStack
              className="h-[var(--size-order-row-h)] w-[390px] gap-[var(--space-2)] overflow-x-auto"
            >
              <div className="flex min-w-[var(--size-barcode-tile-w)] items-center justify-center rounded-l-none rounded-r-[var(--radius-16)] bg-black">
                <span className="h-[var(--size-icon-m)] w-[var(--size-icon-m)]">
                  <Icon name="barcode" alt="barcode" className="h-full w-full" />
                </span>
              </div>
              {orderItems.map((order) => (
                <OrderTrackingCard key={order.id} order={order} />
              ))}
            </HStack>
          </Section>
          <div className="h-[var(--space-1)]" />
          <div className="w-[390px] box-border">
            <MorkovskEntryPoint debugStyle={debugStyle} />
          </div>
          <div className="h-[var(--space-1)]" />
          <div className="w-[390px] box-border">
            <FinanceSection debugStyle={debugStyle} />
          </div>
        </div>
      </div>
      <BottomNav activeTab={activeTab} onChange={setActiveTab} debugStyle={debugStyle} />
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
