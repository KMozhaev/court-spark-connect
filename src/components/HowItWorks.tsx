import { useEffect, useRef, useState } from "react";
import { DeviceMobile, MagnifyingGlass, CheckCircle, NumberCircleOne, NumberCircleTwo, NumberCircleThree } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Step {
  NumberIcon: Icon;
  title: string;
  description: string;
  Icon: Icon;
}

const steps: Step[] = [
  {
    NumberIcon: NumberCircleOne,
    title: "Открой приложение",
    description:
      "Заходи с любого устройства — работает в браузере, не нужно ничего скачивать.",
    Icon: DeviceMobile,
  },
  {
    NumberIcon: NumberCircleTwo,
    title: "Найди игроков или корт",
    description:
      "Смотри открытые матчи, выбирай клуб на карте, проверяй свободное время.",
    Icon: MagnifyingGlass,
  },
  {
    NumberIcon: NumberCircleThree,
    title: "Бронируй и играй",
    description:
      "Подтверди бронь, получи напоминание, приезжай и наслаждайся игрой.",
    Icon: CheckCircle,
  },
];

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lineWidth, setLineWidth] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate line after delay
          setTimeout(() => setLineWidth(100), 500);
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
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className={`text-display-lg md:text-display-xl mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Как это работает?
          </h2>
          <p
            className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Три шага до твоей следующей игры
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-border">
            <div
              className="h-full bg-gradient-to-r from-primary via-primary to-neon-blue transition-all duration-1000 ease-out"
              style={{ width: `${lineWidth}%` }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`group relative text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Step Number */}
                <step.NumberIcon 
                  size={64} 
                  weight="duotone" 
                  className="text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    filter: "drop-shadow(0 0 40px hsl(152 100% 50% / 0.4))",
                  }}
                />

                {/* Title */}
                <h3 className="text-display-sm mb-4">{step.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Icon */}
                <step.Icon 
                  size={48} 
                  weight="duotone" 
                  className="text-muted-foreground/50 mx-auto group-hover:text-primary/50 transition-colors duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
