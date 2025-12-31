import { useEffect, useRef, useState } from "react";
import { UserMinus, MapPinLine, DoorOpen } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface PainCard {
  Icon: Icon;
  title: string;
  description: string;
}

const painCards: PainCard[] = [
  {
    Icon: UserMinus,
    title: "Нет партнеров",
    description:
      "Хочешь сыграть сегодня, но друзья заняты. Пишешь в чаты Telegram — никто не отвечает. Снова сидишь дома.",
  },
  {
    Icon: MapPinLine,
    title: "Где корты?",
    description:
      "Каждый клуб — отдельный сайт. Приходится звонить в 5 мест, чтобы найти свободное время.",
  },
  {
    Icon: DoorOpen,
    title: "Закрытые комьюнити",
    description:
      "Переехал или только начал играть? Каждый клуб — своя тусовка. Сложно влиться.",
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
      className="py-24 md:py-32 bg-background-secondary relative"
    >
      {/* Subtle Grain */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <h2
          className={`text-display-lg md:text-display-xl text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Знакомо?
        </h2>

        {/* Pain Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {painCards.map((card, index) => (
            <div
              key={card.title}
              className={`group p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <card.Icon 
                size={64} 
                weight="duotone" 
                className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" 
              />
              <h3 className="text-display-sm mb-4 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
