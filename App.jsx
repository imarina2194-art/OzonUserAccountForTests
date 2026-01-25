import React, { useMemo, useState } from "react";

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
  { id: "home", label: "Главная", icon: "🏠" },
  { id: "fresh", label: "Ozon Fresh", icon: "🥬" },
  { id: "finance", label: "Финансы", icon: "💳" },
  { id: "favorites", label: "Избранное", icon: "❤" },
  { id: "cart", label: "Корзина", icon: "🛒" },
  { id: "account", label: "Профиль", icon: "👤" },
];

const StatusBar = () => (
  <HStack className="h-[var(--size-statusbar-h)] justify-between bg-[var(--color-bg-header)] px-[var(--space-4)] text-[var(--font-size-body)] text-[var(--color-text-primary)]">
    <span className="font-[var(--font-weight-semibold)]">9:30</span>
    <HStack className="w-[var(--size-status-icons-w)] justify-end gap-[var(--space-0-5)] text-[var(--font-size-caption)]">
      <span>●</span>
      <span>●</span>
      <span>●</span>
      <span className="ml-[var(--space-0-5)]">87%</span>
    </HStack>
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

const Pill = ({ className, children, ...props }) => (
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

const IconButton = ({ iconName, badgeIconName, onClick }) => (
  <button
    onClick={onClick}
    className="relative flex h-[var(--size-icon-button)] w-[var(--size-icon-button)] items-center justify-center rounded-full bg-[var(--color-surface)]"
  >
    <span className="h-[var(--size-icon-button-icon)] w-[var(--size-icon-button-icon)]">
      <Icon name={iconName} alt="" className="h-full w-full" />
    </span>
    {badgeIconName && (
      <Badge className="absolute -right-[var(--space-0-5)] -top-[var(--space-1)] h-[var(--size-badge)] min-w-[var(--size-badge)] p-[var(--space-0-5)] text-[var(--font-size-caption)] font-[var(--font-weight-semibold)]">
        <span className="h-[var(--size-badge-icon)] w-[var(--size-badge-icon)]">
          <Icon name={badgeIconName} alt="" className="h-full w-full" />
        </span>
      </Badge>
    )}
  </button>
);

const ShortcutCard = ({ title, subtitle, iconName }) => (
  <Pill className="flex h-[var(--size-shortcut-pill-h)] flex-1 flex-col gap-[var(--space-1)] rounded-[var(--radius-m)] p-[var(--space-2)]">
    <span className="flex h-[var(--size-shortcut-icon)] w-[var(--size-shortcut-icon)] items-center justify-center">
      <Icon name={iconName} alt={title} className="h-full w-full" />
    </span>
    <p className="text-[var(--font-size-body)] font-[var(--font-weight-semibold)] leading-[var(--line-height-body)] text-[var(--color-text-primary)]">
      {title}
    </p>
    <p className="text-[var(--font-size-caption)] leading-[var(--line-height-caption)] text-[var(--color-text-secondary)]">
      {subtitle}
    </p>
  </Pill>
);

const OrderTrackingCard = ({ order }) => (
  <Island className="flex min-w-[252px] items-center gap-[var(--space-2)] rounded-[var(--radius-m)] p-[var(--space-2)]">
    <div className="flex h-[var(--size-order-image)] w-[var(--size-order-image)] items-center justify-center rounded-[var(--radius-s)] bg-[var(--color-text-primary)] text-[var(--color-surface)]">
      ▥
    </div>
    <VStack className="h-[var(--size-order-text-h)] flex-1 justify-center gap-[var(--space-0-5)]">
      <p className="text-[var(--font-size-body)] font-[var(--font-weight-semibold)] leading-[var(--line-height-body)] text-[var(--color-text-primary)]">
        {order.status}
      </p>
      <p className="text-[var(--font-size-caption)] leading-[var(--line-height-caption)] text-[var(--color-text-secondary)]">
        {order.carrier}
      </p>
      <p className="text-[var(--font-size-caption)] leading-[var(--line-height-caption)] text-[var(--color-text-secondary)]">
        {order.delivery}
      </p>
    </VStack>
    <div className="relative">
      <img
        src={order.image}
        alt="order"
        className="h-[var(--size-order-image)] w-[var(--size-order-image)] rounded-[var(--radius-s)] object-cover"
      />
      <span className="absolute -bottom-[var(--space-1)] -left-[var(--space-1)] flex h-[var(--size-badge)] w-[var(--size-badge)] items-center justify-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--font-size-caption)] font-[var(--font-weight-semibold)] text-[var(--color-text-primary)]">
        {order.count}
      </span>
    </div>
  </Island>
);

const MorkovskEntryPoint = () => (
  <Island className="flex items-center justify-between rounded-[var(--radius-l)] p-[var(--space-4)]">
    <VStack className="gap-[var(--space-2)]">
      <HStack className="gap-[var(--space-2)]">
        <p className="text-[var(--font-size-title)] font-[var(--font-weight-semibold)] leading-[var(--line-height-title)] text-[var(--color-text-primary)]">
          Морковск
        </p>
        <Pill className="rounded-[var(--radius-s)] px-[var(--space-2)] py-[var(--space-0-5)] text-[var(--font-size-body)] leading-[var(--line-height-body)] text-[var(--color-text-primary)]">
          312
        </Pill>
      </HStack>
      <p className="text-[var(--font-size-body)] leading-[var(--line-height-body)] text-[var(--color-text-secondary)]">
        Суперприз — квартира
      </p>
      <button className="text-[var(--font-size-body)] font-[var(--font-weight-semibold)] leading-[var(--line-height-body)] text-[var(--color-text-link)]">
        Узнать больше
      </button>
    </VStack>
    <img
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=200&q=80"
      alt="bunny"
      className="h-[var(--size-morkovsk-illustration)] w-[var(--size-morkovsk-illustration)] rounded-full object-cover"
    />
  </Island>
);

const FinanceSection = () => (
  <div className="rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-[14px] py-[10px]">
    <div className="flex items-center justify-between">
      <p className="text-[20px] font-bold text-[var(--color-text-primary)]">Финансы</p>
      <button className="text-[14px] font-semibold text-[var(--color-text-link)]">Баллы и бонусы</button>
    </div>
    <div className="mt-[8px] grid grid-cols-2 gap-[10px]">
      <div className="flex flex-col gap-[8px]">
        {financeCells.map((cell) => (
          <div
            key={cell.id}
            className="rounded-[12px] bg-[var(--color-surface-muted)] px-[12px] py-[8px]"
          >
            <p className="text-[12px] text-[var(--color-text-secondary)]">{cell.title}</p>
            <p className="text-[16px] font-semibold text-[var(--color-text-primary)]">{cell.value}</p>
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-[12px] bg-[var(--color-surface-muted)] px-[12px] py-[8px]">
        <p className="text-[16px] font-semibold text-[var(--color-text-primary)]">Ozon Premium</p>
        <p className="text-[14px] text-[var(--color-text-link)]">Получить больше привилегий</p>
        <div className="absolute bottom-[8px] right-[8px] h-[28px] w-[28px] rounded-[8px] bg-[var(--color-surface)]" />
      </div>
    </div>
  </div>
);

const ProductCardCompact = ({ item, isFavorite, onToggle }) => (
  <div className="flex w-[140px] flex-col gap-[4px]">
    <div className="relative overflow-hidden rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
      <img src={item.image} alt={item.title} className="h-[116px] w-full object-cover" />
      <button
        onClick={onToggle}
        className="absolute right-[6px] top-[6px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--color-surface)]"
      >
        <span className="text-[12px] text-[var(--color-text-primary)]">{isFavorite ? "❤" : "♡"}</span>
      </button>
    </div>
    <p className="text-[14px] font-semibold text-[var(--color-text-primary)]">{item.price}</p>
    <div className="flex items-center gap-[6px] text-[12px] font-semibold">
      <span className="text-[var(--color-text-secondary)] line-through">{item.oldPrice}</span>
      <span className="text-[var(--color-text-primary)]">{item.discount}</span>
    </div>
    <p className="text-[12px] text-[var(--color-text-secondary)]">{item.title}</p>
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
        <span className="text-[13px] text-[var(--color-text-primary)]">{isFavorite ? "❤" : "♡"}</span>
      </button>
    </div>
    <p className="text-[14px] font-semibold text-[var(--color-text-primary)]">{item.price}</p>
    <div className="flex items-center gap-[6px] text-[12px] font-semibold">
      <span className="text-[var(--color-text-secondary)] line-through">{item.oldPrice}</span>
      <span className="text-[var(--color-text-primary)]">{item.discount}</span>
    </div>
    <p className="text-[12px] text-[var(--color-text-secondary)]">{item.title}</p>
    <div className="flex items-center gap-[6px] text-[12px] text-[var(--color-text-primary)]">
      <span className="text-[var(--color-text-secondary)]">★</span>
      <span>{item.rating}</span>
      <span className="text-[var(--color-text-secondary)]">• {item.reviews}</span>
    </div>
    {stepper && (
      <div className="mt-[2px] flex items-center justify-between rounded-[12px] bg-[var(--color-surface-muted)] px-[10px] py-[4px] text-[var(--color-text-link)]">
        <button onClick={() => onStep(-1)} className="text-[14px]">
          −
        </button>
        <span className="text-[12px] font-semibold text-[var(--color-text-primary)]">{stepper}</span>
        <button onClick={() => onStep(1)} className="text-[14px]">
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
        className={`flex flex-1 items-center justify-center gap-[6px] rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-[12px] py-[8px] text-[16px] font-semibold ${
          activeId === item.id
            ? "text-[var(--color-text-primary)]"
            : "text-[var(--color-text-secondary)]"
        }`}
      >
        <span className="text-[16px]">{item.icon}</span>
        <span>{item.label}</span>
      </button>
    ))}
  </div>
);

const BottomNav = ({ activeTab, onChange }) => (
  <div className="fixed bottom-0 left-0 right-0 z-30 flex justify-center">
    <div className="flex w-[382px] items-center justify-between rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-[12px] py-[8px]">
      {bottomTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            onChange(tab.id);
            console.log("Navigate", tab.id);
          }}
          className="flex flex-1 flex-col items-center gap-[2px]"
        >
          <span className={`text-[16px] ${activeTab === tab.id ? "text-[var(--color-text-link)]" : "text-[var(--color-text-secondary)]"}`}>
            {tab.icon}
          </span>
          <span className={`text-[10px] ${activeTab === tab.id ? "text-[var(--color-text-link)]" : "text-[var(--color-text-secondary)]"}`}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  </div>
);

const App = () => {
  const [favorites, setFavorites] = useState(() => new Set(["prod-1", "prod-3", "v-1"]));
  const [activeTab, setActiveTab] = useState("account");
  const [stepperCounts, setStepperCounts] = useState(() => ({ "v-1": 1, "v-4": 2 }));
  const [segment, setSegment] = useState("shops");

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
    <div className="flex justify-center bg-[var(--color-bg-page)] pb-[96px]">
      <div className="relative w-[390px] rounded-[var(--radius-l)] bg-[var(--color-bg-page)] pb-[120px]">
        <StatusBar />
        <div className="sticky top-0 z-20 bg-[var(--color-bg-header)]">
          <HStack className="h-[var(--size-header-h)] items-end bg-[var(--color-bg-header)] pb-[var(--space-2)] pl-[var(--space-4)] pr-[var(--space-4)]">
            <Island className="flex h-[var(--size-island-h)] flex-1 items-center gap-[var(--space-3)] rounded-[var(--radius-island-pill)] px-[var(--space-3)]">
              <Avatar />
              <VStack className="gap-[var(--space-0-5)]">
                <HStack className="gap-[var(--space-1)]">
                  <p className="text-[var(--font-size-title)] font-[var(--font-weight-semibold)] leading-[var(--line-height-title)] text-[var(--color-text-primary)]">
                    {mockUser.name}
                  </p>
                  {mockUser.isPremium && (
                    <span className="h-[var(--size-premium-icon)] w-[var(--size-premium-icon)]">
                      <Icon name="premium" alt="premium" className="h-full w-full" />
                    </span>
                  )}
                </HStack>
                <p className="text-[var(--font-size-caption)] leading-[var(--line-height-caption)] text-[var(--color-text-secondary)]">
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
        </VStack>

        <VStack className="gap-[var(--space-3)] px-[var(--space-4)] pt-[var(--space-3)]">
          <Section className="h-[var(--size-shortcuts-h)] rounded-[var(--radius-l)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-4)]">
            <div className="grid h-full grid-cols-3 gap-[var(--space-2)]">
              {shortcutItems.map((item) => (
                <ShortcutCard key={item.id} title={item.title} subtitle={item.subtitle} iconName={item.iconName} />
              ))}
            </div>
          </Section>

          <HStack className="h-[var(--size-order-row-h)] gap-[var(--space-2)] overflow-x-auto pb-[var(--space-1)]">
            <div className="flex min-w-[var(--size-barcode-tile-w)] flex-col items-center justify-center rounded-r-[var(--radius-m)] bg-[var(--color-text-primary)] p-[var(--space-2)] text-[var(--color-surface)]">
              <span className="h-[var(--size-barcode-icon)] w-[var(--size-barcode-icon)]">
                <Icon name="barcode" alt="barcode" className="h-full w-full" />
              </span>
              <span className="text-[var(--font-size-caption)] leading-[var(--line-height-caption)]">Штрихкод</span>
            </div>
            {orderItems.map((order) => (
              <OrderTrackingCard key={order.id} order={order} />
            ))}
          </HStack>

          <VStack className="gap-[var(--space-1)]">
            <MorkovskEntryPoint />
            <FinanceSection />
          </VStack>

          <div>
            <p className="pb-[4px] text-[20px] font-bold text-[var(--color-text-primary)]">Вы смотрели</p>
            <div className="flex gap-[10px] overflow-x-auto pb-[4px]">
              {horizontalItems.map((item) => (
                <ProductCardCompact
                  key={item.id}
                  item={item}
                  isFavorite={horizontalFavorites.has(item.id)}
                  onToggle={() => toggleFavorite(item.id)}
                />
              ))}
            </div>
          </div>

          <SegmentedControl
            items={[
              { id: "shops", label: "Мои магазины", icon: "🏬" },
              { id: "feed", label: "Лента обзоров", icon: "▶" },
            ]}
            activeId={segment}
            onChange={setSegment}
          />

          <div>
            <p className="pb-[4px] text-[20px] font-bold text-[var(--color-text-primary)]">Возможно, вам понравится</p>
            <div className="grid grid-cols-2 gap-[12px]">
              {verticalItems.map((item) => (
                <VerticalProductCard
                  key={item.id}
                  item={item}
                  isFavorite={favorites.has(item.id)}
                  onToggle={() => toggleFavorite(item.id)}
                  stepper={stepperCounts[item.id]}
                  onStep={(delta) => handleStepper(item.id, delta)}
                />
              ))}
            </div>
          </div>
        </VStack>
      </div>
      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export default App;
