import { useEffect, useRef, useState } from "react";
import { Globe, Lightning, UsersThree } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Feature {
  Icon: Icon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: Globe,
    title: "Вся экосистема",
    description:
      "Не нужно 10 приложений. Все корты, все игроки, все турниры — в одном месте.",
  },
  {
    Icon: Lightning,
    title: "Мгновенно",
    description:
      "Хочешь сыграть сегодня? Открой приложение, найди матч, забронируй корт. 3 минуты — готово.",
  },
  {
    Icon: UsersThree,
    title: "Живое комьюнити",
    description:
      "Находи партнёров, заводи друзей, расти вместе с сообществом игроков.",
  },
];

const FeaturesSection = () => {
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
      <div className="container mx-auto">
        {/* Section Title */}
        <h2
          className={`text-display-lg md:text-display-xl text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Почему Courtoo?
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group text-center p-8 rounded-3xl transition-all duration-500 hover:bg-card ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <feature.Icon
                size={72}
                weight="duotone"
                className="text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: "drop-shadow(0 0 20px hsl(152 100% 50% / 0.4))",
                }}
              />
              <h3 className="text-display-sm mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
