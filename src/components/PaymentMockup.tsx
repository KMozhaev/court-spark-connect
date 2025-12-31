import PhoneMockup from "./PhoneMockup";
import { Ticket } from "@phosphor-icons/react";

const PaymentMockup = () => {
  return (
    <PhoneMockup>
      <div className="p-4 space-y-4 pt-8">
        {/* Cost Card */}
        <div className="p-4 bg-background rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-display font-bold">Падел 2×2</h4>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              3.0 • Средний
            </span>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Стоимость корта:</span>
              <span className="font-semibold">2,500 ₽</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground text-sm">Ваша часть:</span>
              <span className="text-2xl font-display font-bold text-primary">625 ₽</span>
            </div>
          </div>

          {/* Player Bubbles */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full border-2 border-white" />
              <div className="w-10 h-10 bg-primary/70 rounded-full border-2 border-white" />
              <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white border-dashed flex items-center justify-center">
                <span className="text-gray-400 text-lg">+</span>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white border-dashed flex items-center justify-center">
                <span className="text-gray-400 text-lg">+</span>
              </div>
            </div>
            <span className="text-sm text-muted-foreground">2/4 игрока</span>
          </div>
        </div>

        {/* Subscription Card */}
        <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Ticket size={24} weight="duotone" className="text-cyan-600" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Списать 1 сеанс</p>
              <p className="text-sm text-cyan-600">Останется 7 из 12</p>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
};

export default PaymentMockup;
