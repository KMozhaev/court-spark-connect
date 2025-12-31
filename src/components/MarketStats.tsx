import { useEffect, useRef, useState } from "react";
import { Buildings, Users, Globe, TrendUp } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Stat {
  Icon: Icon;
  value: string;
  label: string;
  trend: string;
}

const stats: Stat[] = [
  {
    Icon: Buildings,
    value: "560+",
    label: "кортов в России",
    trend: "+400% за 3 года",
  },
  {
    Icon: TrendUp,
    value: "6.2 млрд ₽",
    label: "оборот рынка",
    trend: "×2 за год",
  },
  {
    Icon: Globe,
    value: "25 млн",
    label: "игроков в мире",
    trend: "×2 за 5 лет",
  },
];

const MarketStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className={`text-display-lg md:text-display-xl mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Падел в России — 2025
          </h2>
          <p
            className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Самый быстрорастущий вид спорта
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Icon */}
              <stat.Icon 
                size={32} 
                weight="duotone" 
                className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" 
              />

              {/* Value */}
              <div className="font-display text-5xl md:text-6xl font-bold text-primary neon-text mb-4">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-medium text-foreground mb-3">
                {stat.label}
              </div>

              {/* Trend Badge */}
              <span className="inline-block px-4 py-1.5 text-sm text-muted-foreground bg-primary/10 rounded-full">
                {stat.trend}
              </span>
            </div>
          ))}
        </div>

        {/* Source Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          Источник: Коммерсантъ, FitnessData, 2025
        </p>
      </div>
    </section>
  );
};

export default MarketStats;
