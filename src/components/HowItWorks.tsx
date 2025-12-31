import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Находишь игру",
    description: "Смотришь открытые матчи или создаёшь свой, выбирая корт и время",
  },
  {
    number: "2",
    title: "Присоединяешься",
    description: "Выбираешь матч по уровню и месту, бронируешь одним кликом",
  },
  {
    number: "3",
    title: "Играешь и платишь",
    description: "Приходишь на корт, играешь и платишь только свою часть",
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
      className="section-padding gradient-blue text-white relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <h2
          className={`text-display-lg text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Как это работает
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Number Circle */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl font-display font-bold">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
