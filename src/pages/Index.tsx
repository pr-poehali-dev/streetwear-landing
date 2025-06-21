import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import GraffitiCanvas from "@/components/GraffitiCanvas";
import SellerModal from "@/components/SellerModal";
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
        {/* Граффити-холст */}
        <div className="flex justify-center mb-12">
          <GraffitiCanvas />
        </div>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
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
        <div className="text-center mt-16 max-w-2xl mx-auto">
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
