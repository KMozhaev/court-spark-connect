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
    <section className="py-20 lg:py-28 bg-primary" id="how-it-works">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-display-md text-primary-foreground text-center mb-12 lg:mb-16">
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
                  className="text-primary-foreground/80 icon-hover"
                />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mb-3 text-primary-foreground">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-primary-foreground/80 leading-relaxed max-w-xs mx-auto">
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
