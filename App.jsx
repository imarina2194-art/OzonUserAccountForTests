import React, { useMemo, useState } from "react";

const mockUser = {
  name: "Александр Р.",
  subscribers: 175,
  subscriptions: 4,
  isPremium: true,
};

const shortcutItems = [
  { id: "favorites", title: "Избранное", subtitle: "250 товаров" },
  { id: "purchases", title: "Покупки", subtitle: "Заказать снова" },
  { id: "reviews", title: "Ждут отзыва", subtitle: "8 товаров" },
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
  <div className="flex items-center justify-between px-[16px] pt-[8px] text-[14px] text-[#070707]">
    <span className="font-semibold">9:30</span>
    <div className="flex items-center gap-[4px] text-[12px] text-[#070707]">
      <span>●</span>
      <span>●</span>
      <span>●</span>
      <span className="ml-[4px]">87%</span>
    </div>
  </div>
);

const Avatar = () => (
  <div className="h-[36px] w-[36px] overflow-hidden rounded-full bg-[#D6DEE8]">
    <img
      className="h-full w-full object-cover"
      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
      alt="avatar"
    />
  </div>
);

const IconButton = ({ icon, badge, onClick }) => (
  <button
    onClick={onClick}
    className="relative flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white"
  >
    <span className="text-[16px]">{icon}</span>
    {badge && (
      <span className="absolute -right-[2px] -top-[4px] flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#FF3B30] px-[4px] text-[10px] font-semibold text-white">
        {badge}
      </span>
    )}
  </button>
);

const PromoBadge = ({ label }) => (
  <span className="rounded-full bg-[#111111] px-[10px] py-[2px] text-[12px] font-semibold text-white">
    {label}
  </span>
);

const CreatorPromotionCell = () => (
  <div className="flex items-center justify-between rounded-[16px] bg-white px-[14px] py-[8px] shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
    <div>
      <p className="text-[16px] font-semibold text-[#070707]">Кабинет блогера</p>
      <p className="text-[14px] text-[#070707] opacity-70">Получайте до 50% с продаж</p>
    </div>
    <PromoBadge label="Новое" />
  </div>
);

const ShortcutCard = ({ title, subtitle }) => (
  <div className="flex flex-1 flex-col gap-[4px] rounded-[16px] bg-white px-[10px] py-[8px] shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
    <div className="h-[18px] w-[18px] rounded-[6px] bg-[#E6E9EF]" />
    <p className="text-[14px] font-semibold text-[#070707]">{title}</p>
    <p className="text-[12px] text-[#070707] opacity-70">{subtitle}</p>
  </div>
);

const OrderTrackingCard = ({ order }) => (
  <div className="flex min-w-[252px] items-center gap-[10px] rounded-[16px] bg-white px-[12px] py-[8px] shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#111111] text-white">
      ▥
    </div>
    <div className="flex-1">
      <p className="text-[16px] font-semibold text-[#070707]">{order.status}</p>
      <p className="text-[12px] text-[#070707] opacity-70">{order.carrier}</p>
      <p className="text-[12px] text-[#070707] opacity-70">{order.delivery}</p>
    </div>
    <div className="relative">
      <img src={order.image} alt="order" className="h-[50px] w-[50px] rounded-[12px] object-cover" />
      <span className="absolute -bottom-[6px] -left-[6px] rounded-full bg-white px-[6px] text-[10px] font-semibold text-[#070707] shadow">
        {order.count}
      </span>
    </div>
  </div>
);

const MorkovskEntryPoint = () => (
  <div className="flex items-center justify-between rounded-[16px] bg-white px-[14px] py-[10px] shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
    <div>
      <p className="text-[20px] font-bold text-[#070707]">Морковск</p>
      <p className="text-[14px] text-[#070707] opacity-70">Суперприз — квартира</p>
      <button className="mt-[4px] text-[14px] font-semibold text-[#5B51DE]">Узнать больше</button>
    </div>
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-[#F7F0FF] px-[10px] py-[2px] text-[16px] text-[#070707]">312</div>
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=200&q=80"
        alt="bunny"
        className="mt-[4px] h-[52px] w-[52px] rounded-full object-cover"
      />
    </div>
  </div>
);

const FinanceSection = () => (
  <div className="rounded-[16px] bg-white px-[14px] py-[10px] shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
    <div className="flex items-center justify-between">
      <p className="text-[20px] font-bold text-[#070707]">Финансы</p>
      <button className="text-[14px] font-semibold text-[#5B51DE]">Баллы и бонусы</button>
    </div>
    <div className="mt-[8px] grid grid-cols-2 gap-[10px]">
      <div className="flex flex-col gap-[8px]">
        {financeCells.map((cell) => (
          <div key={cell.id} className="rounded-[12px] bg-[#F7F7F9] px-[12px] py-[8px]">
            <p className="text-[12px] text-[#070707] opacity-70">{cell.title}</p>
            <p className="text-[16px] font-semibold text-[#070707]">{cell.value}</p>
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-[12px] bg-[#F7F7F9] px-[12px] py-[8px]">
        <p className="text-[16px] font-semibold text-[#070707]">Ozon Premium</p>
        <p className="text-[14px] text-[#5B51DE]">Получить больше привилегий</p>
        <div className="absolute bottom-[8px] right-[8px] h-[28px] w-[28px] rounded-[8px] bg-[#E0D4FF]" />
      </div>
    </div>
  </div>
);

const ProductCardCompact = ({ item, isFavorite, onToggle }) => (
  <div className="flex w-[140px] flex-col gap-[4px]">
    <div className="relative overflow-hidden rounded-[16px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.06)]">
      <img src={item.image} alt={item.title} className="h-[116px] w-full object-cover" />
      <button
        onClick={onToggle}
        className="absolute right-[6px] top-[6px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white"
      >
        <span className="text-[12px] text-[#070707]">{isFavorite ? "❤" : "♡"}</span>
      </button>
    </div>
    <p className="text-[14px] font-semibold text-[#070707]">{item.price}</p>
    <div className="flex items-center gap-[6px] text-[12px] font-semibold">
      <span className="text-[#99A3AE] line-through">{item.oldPrice}</span>
      <span className="text-[#F1117E]">{item.discount}</span>
    </div>
    <p className="text-[12px] text-[#070707]">{item.title}</p>
  </div>
);

const VerticalProductCard = ({ item, isFavorite, onToggle, stepper, onStep }) => (
  <div className="flex flex-col gap-[4px]">
    <div className="relative overflow-hidden rounded-[16px] bg-white shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
      <img src={item.image} alt={item.title} className="h-[144px] w-full object-cover" />
      <button
        onClick={onToggle}
        className="absolute right-[8px] top-[8px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white"
      >
        <span className="text-[13px] text-[#070707]">{isFavorite ? "❤" : "♡"}</span>
      </button>
    </div>
    <p className="text-[14px] font-semibold text-[#070707]">{item.price}</p>
    <div className="flex items-center gap-[6px] text-[12px] font-semibold">
      <span className="text-[#99A3AE] line-through">{item.oldPrice}</span>
      <span className="text-[#F1117E]">{item.discount}</span>
    </div>
    <p className="text-[12px] text-[#070707]">{item.title}</p>
    <div className="flex items-center gap-[6px] text-[12px] text-[#070707]">
      <span className="text-[#F5A000]">★</span>
      <span>{item.rating}</span>
      <span className="text-[#99A3AE]">• {item.reviews}</span>
    </div>
    {stepper && (
      <div className="mt-[2px] flex items-center justify-between rounded-[12px] bg-[#EEF1F7] px-[10px] py-[4px] text-[#5B51DE]">
        <button onClick={() => onStep(-1)} className="text-[14px]">
          −
        </button>
        <span className="text-[12px] font-semibold text-[#070707]">{stepper}</span>
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
        className={`flex flex-1 items-center justify-center gap-[6px] rounded-[16px] px-[12px] py-[8px] text-[16px] font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.06)] ${
          activeId === item.id ? "bg-white text-[#001A34]" : "bg-white/60 text-[#001A34]"
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
    <div className="flex w-[382px] items-center justify-between rounded-[16px] bg-white px-[12px] py-[8px] shadow-[0_-6px_16px_rgba(0,0,0,0.12)]">
      {bottomTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            onChange(tab.id);
            console.log("Navigate", tab.id);
          }}
          className="flex flex-1 flex-col items-center gap-[2px]"
        >
          <span className={`text-[16px] ${activeTab === tab.id ? "text-[#5B51DE]" : "text-[#99A3AE]"}`}>
            {tab.icon}
          </span>
          <span className={`text-[10px] ${activeTab === tab.id ? "text-[#5B51DE]" : "text-[#99A3AE]"}`}>
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
    <div className="flex justify-center bg-[#F5F5F5] pb-[96px] pt-[6px]">
      <div className="relative w-[390px] rounded-[24px] bg-[#F0F2F5] pb-[120px]">
        <StatusBar />
        <div className="sticky top-0 z-20 bg-[#F0F2F5] px-[16px] pt-[8px]">
          <div className="flex items-center justify-between rounded-[18px] bg-white px-[12px] py-[6px] shadow-[0_6px_12px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-[10px]">
              <Avatar />
              <div>
                <div className="flex items-center gap-[6px]">
                  <p className="text-[14px] font-semibold text-[#070707]">{mockUser.name}</p>
                  {mockUser.isPremium && <span className="text-[14px]">👑</span>}
                </div>
                <p className="text-[12px] text-[#070707] opacity-70">
                  {mockUser.subscribers} подписчиков • {mockUser.subscriptions} подписчика
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <IconButton icon="💬" badge="3" onClick={() => console.log("Open messages")} />
              <IconButton icon="☰" onClick={() => console.log("Open menu")} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] px-[16px] pt-[8px]">
          <CreatorPromotionCell />

          <div className="grid grid-cols-3 gap-[10px]">
            {shortcutItems.map((item) => (
              <ShortcutCard key={item.id} title={item.title} subtitle={item.subtitle} />
            ))}
          </div>

          <div className="flex gap-[10px] overflow-x-auto pb-[4px]">
            <div className="flex min-w-[66px] flex-col items-center justify-center rounded-[16px] bg-[#111111] p-[8px] text-white">
              <span className="text-[18px]">▥</span>
              <span className="text-[10px]">Штрихкод</span>
            </div>
            {orderItems.map((order) => (
              <OrderTrackingCard key={order.id} order={order} />
            ))}
          </div>

          <MorkovskEntryPoint />

          <FinanceSection />

          <div>
            <p className="pb-[4px] text-[20px] font-bold text-[#070707]">Вы смотрели</p>
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
            <p className="pb-[4px] text-[20px] font-bold text-[#070707]">Возможно, вам понравится</p>
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
        </div>
      </div>
      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export default App;
