import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface DropTimerProps {
  releaseDate: Date;
  brandName: string;
  itemName: string;
  imageUrl: string;
  limitedQuantity: number;
}

const DropTimer = ({
  releaseDate,
  brandName,
  itemName,
  imageUrl,
  limitedQuantity,
}: DropTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  return (
    <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={itemName}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
          {limitedQuantity} шт
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
          {brandName}
        </div>
        <h3 className="font-bold text-lg mb-3">{itemName}</h3>

        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <div className="text-2xl font-bold text-red-400">
              {timeLeft.days}
            </div>
            <div className="text-xs text-gray-400">дней</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-400">
              {timeLeft.hours}
            </div>
            <div className="text-xs text-gray-400">часов</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-400">
              {timeLeft.minutes}
            </div>
            <div className="text-xs text-gray-400">минут</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-400">
              {timeLeft.seconds}
            </div>
            <div className="text-xs text-gray-400">секунд</div>
          </div>
        </div>

        <button className="w-full mt-4 bg-white text-black font-bold py-2 rounded hover:bg-gray-100 transition-colors">
          <Icon name="Bell" size={16} className="inline mr-2" />
          Уведомить о дропе
        </button>
      </div>
    </div>
  );
};

export default DropTimer;
