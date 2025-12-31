import { useEffect, useRef, useState } from "react";
import { NumberCircleOne, NumberCircleTwo, NumberCircleThree } from "@phosphor-icons/react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <NumberCircleOne size={64} weight="duotone" />,
    title: "Открой приложение",
    description:
      "Заходи с любого устройства — работает в браузере, не нужно ничего скачивать.",
  },
  {
    icon: <NumberCircleTwo size={64} weight="duotone" />,
    title: "Найди игроков или корт",
    description:
      "Смотри открытые матчи, выбирай клуб на карте, проверяй свободное время.",
  },
  {
    icon: <NumberCircleThree size={64} weight="duotone" />,
    title: "Бронируй и играй",
    description:
      "Подтверди бронь, получи напоминание, приезжай и наслаждайся игрой.",
  },
];

const HowItWorks = () => {
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
      id="how-it-works"
      ref={sectionRef}
      className="py-24 md:py-32 gradient-blue text-white"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2
          className={`text-display-lg text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Как это работает
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 text-white/90">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-display-md mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed text-base max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;