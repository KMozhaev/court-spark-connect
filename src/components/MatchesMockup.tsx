import PhoneMockup from "./PhoneMockup";
import { MapPin } from "@phosphor-icons/react";

const MatchesMockup = () => {
  return (
    <PhoneMockup>
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="pt-6 pb-2">
          <p className="text-sm text-muted-foreground">Привет, Александр</p>
          <h3 className="text-xl font-display font-bold">Готов к игре?</h3>
        </div>

        {/* Match Cards */}
        <div className="space-y-3">
          {/* Match 1 */}
          <div className="p-4 bg-background rounded-xl border border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-primary/30 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center text-xs text-gray-400">+</div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center text-xs text-gray-400">+</div>
                </div>
                <span className="px-2 py-1 bg-primary text-white text-xs font-semibold rounded-full">3.0</span>
              </div>
              <span className="text-sm font-semibold text-primary">2 места</span>
            </div>
            <p className="text-sm font-semibold mb-1">Сегодня в 18:00</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
              <MapPin size={14} weight="fill" className="text-primary" />
              <span>Олимп • 1.2 км</span>
            </div>
            <button className="w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-full">
              Играть
            </button>
          </div>

          {/* Match 2 */}
          <div className="p-4 bg-background rounded-xl border border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center text-xs text-gray-400">+</div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center text-xs text-gray-400">+</div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center text-xs text-gray-400">+</div>
                </div>
                <span className="px-2 py-1 bg-primary text-white text-xs font-semibold rounded-full">2.0</span>
                <span className="px-2 py-1 bg-amber-400 text-amber-900 text-xs font-semibold rounded-full">+ТРЕНЕР</span>
              </div>
              <span className="text-sm font-semibold text-primary">3 места</span>
            </div>
            <p className="text-sm font-semibold mb-1">Завтра в 10:00</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin size={14} weight="fill" className="text-primary" />
              <span>Спарта • 2.5 км</span>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
};

export default MatchesMockup;
