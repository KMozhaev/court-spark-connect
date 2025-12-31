import { useEffect, useRef, useState } from "react";
import { MagnifyingGlass, DeviceMobile, CurrencyCircleDollar } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface ProblemCard {
  Icon: Icon;
  title: string;
  description: string;
}

const problemCards: ProblemCard[] = [
  {
    Icon: MagnifyingGlass,
    title: "Поиск партнеров",
    description: "Тратите часы в Telegram-чатах, пытаясь найти игрока нужного уровня",
  },
  {
    Icon: DeviceMobile,
    title: "Разные приложения",
    description: "У каждого клуба своя система бронирования или вообще только телефон",
  },
  {
    Icon: CurrencyCircleDollar,
    title: "Дорого играть",
    description: "Приходится оплачивать весь корт, когда играете вдвоем",
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2
          className={`text-display-lg text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Знакомые проблемы?
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problemCards.map((card, index) => (
            <div
              key={card.title}
              className={`group p-8 bg-background rounded-[20px] transition-all duration-500 hover:shadow-medium hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <card.Icon
                size={48}
                weight="duotone"
                className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-display-sm mb-3 text-foreground">
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
