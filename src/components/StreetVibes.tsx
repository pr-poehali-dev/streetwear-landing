import Icon from "@/components/ui/icon";

const streetVibes = [
  { emoji: "🎨", text: "Арт", active: true },
  { emoji: "🎵", text: "Музыка", active: false },
  { emoji: "🛹", text: "Скейт", active: true },
  { emoji: "🎮", text: "Гейминг", active: false },
  { emoji: "📱", text: "Тех", active: true },
];

const StreetVibes = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="Zap" size={20} />
        <h2 className="text-xl font-bold">Твой вайб</h2>
      </div>

      <p className="text-sm opacity-90 mb-4">
        Выбери стиль, который отражает твою энергию
      </p>

      <div className="flex flex-wrap gap-2">
        {streetVibes.map((vibe, index) => (
          <button
            key={index}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
              vibe.active
                ? "bg-white text-purple-600"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            <span className="mr-1">{vibe.emoji}</span>
            {vibe.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StreetVibes;
