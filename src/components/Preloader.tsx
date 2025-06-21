import { useState, useEffect } from "react";

const messages = [
  "Тут скоро будет маркетплейс",
  "Скоро анонс",
  "Готовится к запуску нового marketplace со стритвиром...",
];

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Показать логотип через 500мс
    const logoTimer = setTimeout(() => setShowLogo(true), 500);

    // Переключение сообщений каждые 1.5 секунды
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(messageInterval);
          setTimeout(onComplete, 1000);
          return prev;
        }
      });
    }, 1500);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Логотип SPOT */}
      <div
        className={`mb-8 transition-all duration-1000 ${
          showLogo ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="text-8xl font-bold text-black tracking-tighter">
          SPOT
        </div>
        <div className="w-full h-1 bg-black mt-2 transform origin-left animate-scale-in"></div>
      </div>

      {/* Анимированные сообщения */}
      <div className="text-center px-6 min-h-[60px] flex items-center">
        <p className="text-xl text-gray-600 animate-fade-in">
          {messages[currentMessage]}
        </p>
      </div>

      {/* Индикатор загрузки */}
      <div className="mt-8 flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i <= currentMessage ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
