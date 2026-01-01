import { Check, Star, Rocket, Lightning } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTierProps {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
  icon: React.ReactNode;
}

const PricingTier = ({ name, description, price, priceNote, features, cta, popular, icon }: PricingTierProps) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          popular ? "bg-b2b-primary/10" : "bg-b2b-surface"
        }`}>
          {icon}
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-b2b-text-primary">{name}</h3>
          <p className="text-sm text-b2b-text-muted">{description}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-b2b-border">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-display font-bold text-b2b-text-primary">{price}</span>
          <span className="text-b2b-text-muted">{priceNote}</span>
        </div>
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

const pricingTiers: PricingTierProps[] = [
  {
    name: "Старт",
    description: "Для небольших клубов",
    price: "4 900₽",
    priceNote: "/месяц",
    icon: <Lightning size={24} weight="duotone" className="text-b2b-primary" />,
    cta: "Начать бесплатно",
    features: [
      { text: "До 4 кортов", included: true },
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
    description: "Для растущих клубов",
    price: "9 900₽",
    priceNote: "/месяц",
    icon: <Star size={24} weight="duotone" className="text-b2b-primary" />,
    cta: "Выбрать Профи",
    popular: true,
    features: [
      { text: "До 8 кортов", included: true },
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
    description: "Для сети клубов",
    price: "По запросу",
    priceNote: "",
    icon: <Rocket size={24} weight="duotone" className="text-b2b-primary" />,
    cta: "Связаться с нами",
    features: [
      { text: "Неограниченно кортов", included: true },
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

const B2BPricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-b2b-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-b2b-text-primary mb-4">
            Простое и прозрачное ценообразование
          </h2>
          <p className="text-b2b-text-secondary text-lg max-w-2xl mx-auto">
            Первый месяц бесплатно. Никаких скрытых платежей.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        {/* Additional Note */}
        <div className="text-center mt-12">
          <p className="text-b2b-text-muted text-sm">
            Все тарифы включают бесплатное подключение и обучение. 
            Сниженный эквайринг от 1.5% через ЮКассу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default B2BPricing;
