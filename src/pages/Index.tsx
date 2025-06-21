import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import GraffitiCanvas from "@/components/GraffitiCanvas";
import SellerModal from "@/components/SellerModal";
import DropTimer from "@/components/DropTimer";
import BrandCard from "@/components/BrandCard";
import StreetVibes from "@/components/StreetVibes";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showSellerModal, setShowSellerModal] = useState(false);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/+QgiLIa1gFRY4Y2Iy", "_blank");
  };

  // Моковые данные для дропов
  const upcomingDrops = [
    {
      releaseDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      brandName: "VOID STREET",
      itemName: "Hoodie 'Neon Dreams'",
      imageUrl:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      limitedQuantity: 50,
    },
    {
      releaseDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      brandName: "URBAN LEGEND",
      itemName: "Кроссовки 'City Run'",
      imageUrl:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      limitedQuantity: 30,
    },
  ];

  // Моковые данные брендов
  const featuredBrands = [
    {
      name: "VOID STREET",
      city: "Москва",
      followers: 12500,
      imageUrl:
        "https://images.unsplash.com/photo-1607081692251-5ba8dbeeb586?w=100",
      telegramUrl: "https://t.me/voidstreet",
      vibe: "Темный урбан с неоновыми акцентами",
    },
    {
      name: "URBAN LEGEND",
      city: "СПб",
      followers: 8900,
      imageUrl:
        "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=100",
      telegramUrl: "https://t.me/urbanlegend",
      vibe: "Классика стрита с современным взглядом",
    },
    {
      name: "NEON CULTURE",
      city: "Казань",
      followers: 6700,
      imageUrl:
        "https://images.unsplash.com/photo-1611689102395-003ba503d8e5?w=100",
      telegramUrl: "https://t.me/neonculture",
      vibe: "Яркие краски уличного искусства",
    },
  ];

  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Хедер с логотипом */}
      <header className="text-center py-8">
        <div className="text-6xl md:text-8xl font-bold text-black tracking-tighter">
          SPOT
        </div>
        <div className="w-20 h-1 bg-black mx-auto mt-2"></div>
        <p className="text-gray-600 mt-4 text-lg">
          Стритвир маркетплейс нового поколения
        </p>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-6 pb-16">
        {/* Предстоящие дропы */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="Clock" size={24} />
            <h2 className="text-2xl font-bold">Скоро дроп</h2>
            <div className="flex-1 h-0.5 bg-black ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {upcomingDrops.map((drop, index) => (
              <DropTimer key={index} {...drop} />
            ))}
          </div>
        </section>

        {/* Граффити-холст */}
        <section className="mb-12">
          <div className="flex justify-center">
            <GraffitiCanvas />
          </div>
        </section>

        {/* Твой вайб */}
        <section className="mb-12">
          <StreetVibes />
        </section>

        {/* Избранные бренды */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="Star" size={24} />
            <h2 className="text-2xl font-bold">Культовые бренды</h2>
            <div className="flex-1 h-0.5 bg-black ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredBrands.map((brand, index) => (
              <BrandCard key={index} {...brand} />
            ))}
          </div>
        </section>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-16">
          <Button
            onClick={() => setShowSellerModal(true)}
            className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 text-lg"
          >
            <Icon name="Store" size={20} className="mr-2" />
            Стать продавцом
          </Button>

          <Button
            onClick={handleTelegramClick}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 text-lg"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить скидку
          </Button>
        </div>

        {/* Информационный блок */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">
            Новая эра стритвира
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            SPOT — это не просто маркетплейс. Это культурная платформа, где
            каждый бренд может найти свою аудиторию, а каждый покупатель —
            уникальные вещи с историей.
          </p>
        </div>
      </main>

      {/* Модальное окно */}
      <SellerModal open={showSellerModal} onOpenChange={setShowSellerModal} />
    </div>
  );
};

export default Index;
