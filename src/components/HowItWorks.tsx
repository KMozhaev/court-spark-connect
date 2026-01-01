import { NumberCircleOne, NumberCircleTwo, NumberCircleThree } from "@phosphor-icons/react";

const steps = [
  {
    icon: NumberCircleOne,
    title: "Находишь игру",
    description: "Смотришь открытые матчи или создаёшь свой, выбирая корт и время",
  },
  {
    icon: NumberCircleTwo,
    title: "Присоединяешься",
    description: "Выбираешь матч по уровню и месту, бронируешь одним кликом",
  },
  {
    icon: NumberCircleThree,
    title: "Играешь и платишь",
    description: "Приходишь на корт, играешь и платишь только свою часть",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-b2b-primary" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12 lg:mb-16">
          Как это работает
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <step.icon
                  size={80}
                  weight="duotone"
                  className="text-white/80 icon-hover"
                />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mb-3 text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed max-w-xs mx-auto">
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
