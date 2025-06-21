import Icon from "@/components/ui/icon";

interface BrandCardProps {
  name: string;
  city: string;
  followers: number;
  imageUrl: string;
  telegramUrl: string;
  vibe: string;
}

const BrandCard = ({
  name,
  city,
  followers,
  imageUrl,
  telegramUrl,
  vibe,
}: BrandCardProps) => {
  const handleTelegramClick = () => {
    window.open(telegramUrl, "_blank");
  };

  return (
    <div className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:border-black transition-colors cursor-pointer">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Icon name="MapPin" size={14} />
            {city}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-3 italic">"{vibe}"</p>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <Icon name="Users" size={14} className="inline mr-1" />
          {followers} подписчиков
        </div>
        <button
          onClick={handleTelegramClick}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
        >
          <Icon name="MessageCircle" size={14} className="inline mr-1" />
          TG
        </button>
      </div>
    </div>
  );
};

export default BrandCard;
