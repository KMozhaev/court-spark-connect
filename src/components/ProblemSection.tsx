import { useEffect, useRef, useState } from "react";
import { MagnifyingGlass, DeviceMobile, CurrencyCircleDollar } from "@phosphor-icons/react";

interface PainCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const painCards: PainCard[] = [
  {
    icon: <MagnifyingGlass size={48} weight="duotone" />,
    title: "Поиск партнеров",
    description:
      "Хочешь сыграть сегодня, но друзья заняты. Пишешь в чаты — никто не отвечает. Снова сидишь дома.",
  },
  {
    icon: <DeviceMobile size={48} weight="duotone" />,
    title: "Разные приложения",
    description:
      "Каждый клуб — отдельный сайт. Приходится звонить в 5 мест, чтобы найти свободное время.",
  },
  {
    icon: <CurrencyCircleDollar size={48} weight="duotone" />,
    title: "Дорого играть",
    description:
      "Платишь за весь корт один, когда партнёры отменяют. Сложно разделить стоимость.",
  },
];

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background-secondary"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2
          className={`text-display-lg text-center mb-16 md:mb-20 text-foreground transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Знакомые проблемы?
        </h2>

        {/* Pain Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {painCards.map((card, index) => (
            <div
              key={card.title}
              className={`group p-8 rounded-3xl bg-surface hover:bg-surface-hover transition-all duration-500 card-hover ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="text-primary mb-6">{card.icon}</div>
              <h3 className="text-display-sm mb-4 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;