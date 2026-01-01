import { useState } from "react";
import { Check, Star, Rocket, Lightning } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTierProps {
  name: string;
  courtsSubheading: string;
  monthlyPrice: string;
  yearlyPrice: string;
  isYearly: boolean;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
  icon: React.ReactNode;
  isCustom?: boolean;
}

const PricingTier = ({ name, courtsSubheading, monthlyPrice, yearlyPrice, isYearly, features, cta, popular, icon, isCustom }: PricingTierProps) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayPrice = isCustom ? "По запросу" : (isYearly ? yearlyPrice : monthlyPrice);

  return (
    <div className={`relative bg-white rounded-2xl p-6 lg:p-8 border-2 transition-all duration-300 hover:-translate-y-1 ${
      popular 
        ? "border-b2b-primary shadow-xl scale-[1.02]" 
        : "border-b2b-border shadow-sm hover:shadow-lg hover:border-b2b-border-hover"
    }`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-b2b-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
            <Star size={14} weight="fill" />
            Популярный
          </div>
        </div>
      )}

      {/* Icon & Name */}
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          popular ? "bg-b2b-primary/10" : "bg-b2b-surface"
        }`}>
          {icon}
        </div>
        <h3 className="font-display font-bold text-xl text-b2b-text-primary">{name}</h3>
      </div>

      {/* Courts Subheading */}
      <p className="text-sm text-b2b-text-muted mb-4 pl-15">{courtsSubheading}</p>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-b2b-border">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-display font-bold text-b2b-text-primary">{displayPrice}</span>
          {!isCustom && <span className="text-b2b-text-muted">/месяц</span>}
        </div>
        {!isCustom && isYearly && (
          <p className="text-xs text-b2b-success mt-1">Экономия при оплате за год</p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check 
              size={20} 
              weight="bold" 
              className={feature.included ? "text-b2b-success shrink-0 mt-0.5" : "text-b2b-text-muted shrink-0 mt-0.5"} 
            />
            <span className={feature.included ? "text-b2b-text-secondary text-sm" : "text-b2b-text-muted text-sm"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        onClick={scrollToContact}
        className={`w-full py-3 font-semibold transition-all duration-300 ${
          popular
            ? "bg-b2b-primary hover:bg-b2b-primary-hover text-white"
            : "bg-white border-2 border-b2b-primary text-b2b-primary hover:bg-b2b-primary hover:text-white"
        }`}
      >
        {cta}
      </Button>
    </div>
  );
};

const B2BPricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const pricingTiers: Omit<PricingTierProps, 'isYearly'>[] = [
    {
      name: "Старт",
      courtsSubheading: "До 4 кортов",
      monthlyPrice: "5 900₽",
      yearlyPrice: "4 900₽",
      icon: <Lightning size={24} weight="duotone" className="text-b2b-primary" />,
      cta: "Попробовать бесплатно",
      features: [
        { text: "Онлайн-бронирование 24/7", included: true },
        { text: "Интеграция с ЮКассой", included: true },
        { text: "SMS-напоминания", included: true },
        { text: "Email-уведомления", included: true },
        { text: "Базовая аналитика", included: true },
        { text: "Поддержка по email", included: true },
        { text: "Открытые матчи", included: false },
        { text: "API интеграции", included: false },
      ]
    },
    {
      name: "Профи",
      courtsSubheading: "До 8 кортов",
      monthlyPrice: "11 900₽",
      yearlyPrice: "9 900₽",
      icon: <Star size={24} weight="duotone" className="text-b2b-primary" />,
      cta: "Попробовать бесплатно",
      popular: true,
      features: [
        { text: "Всё из тарифа Старт", included: true },
        { text: "Управление абонементами", included: true },
        { text: "Динамическое ценообразование", included: true },
        { text: "Расширенная аналитика", included: true },
        { text: "Приоритетная поддержка", included: true },
        { text: "Обучение персонала", included: true },
        { text: "Открытые матчи (скоро)", included: true },
        { text: "API интеграции", included: false },
      ]
    },
    {
      name: "Бизнес",
      courtsSubheading: "Неограниченно кортов",
      monthlyPrice: "",
      yearlyPrice: "",
      isCustom: true,
      icon: <Rocket size={24} weight="duotone" className="text-b2b-primary" />,
      cta: "Связаться с нами",
      features: [
        { text: "Всё из тарифа Профи", included: true },
        { text: "Мультилокация", included: true },
        { text: "API интеграции", included: true },
        { text: "White-label решение", included: true },
        { text: "Персональный менеджер", included: true },
        { text: "SLA 99.9%", included: true },
        { text: "Кастомная разработка", included: true },
        { text: "Onboarding команды", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-b2b-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-b2b-text-primary mb-4">
            Простое и прозрачное ценообразование
          </h2>
          <p className="text-b2b-text-secondary text-lg max-w-2xl mx-auto">
            Первый месяц бесплатно. Никаких скрытых платежей.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-b2b-text-primary' : 'text-b2b-text-muted'}`}>
            Ежемесячно
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
              isYearly ? 'bg-b2b-primary' : 'bg-b2b-border'
            }`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isYearly ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-b2b-text-primary' : 'text-b2b-text-muted'}`}>
            Ежегодно
          </span>
          {isYearly && (
            <span className="bg-b2b-success/10 text-b2b-success text-xs font-semibold px-2 py-1 rounded-full">
              -17%
            </span>
          )}
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} isYearly={isYearly} />
          ))}
        </div>

        {/* Additional Note */}
        <div className="text-center mt-12">
          <p className="text-b2b-text-secondary text-sm max-w-2xl mx-auto">
            Все тарифы включают бесплатное подключение и обучение. 
            Эксклюзивные условия по эквайрингу ЮКассы от 0.7%
          </p>
        </div>
      </div>
    </section>
  );
};

export default B2BPricing;
