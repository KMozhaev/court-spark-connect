import { MagnifyingGlass, DeviceMobile, CurrencyCircleDollar } from "@phosphor-icons/react";

const problems = [
  {
    icon: MagnifyingGlass,
    title: "Поиск партнеров",
    description: "Тратите часы в Telegram-чатах, пытаясь найти игрока нужного уровня",
  },
  {
    icon: DeviceMobile,
    title: "Разные приложения",
    description: "У каждого клуба своя система бронирования или вообще только телефон",
  },
  {
    icon: CurrencyCircleDollar,
    title: "Дорого играть",
    description: "Приходится оплачивать весь корт, когда играете вдвоем",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-b2b-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-b2b-text-primary text-center mb-12 lg:mb-16">
          Знакомые проблемы?
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-b2b-background-secondary rounded-2xl p-8 border border-b2b-border shadow-sm hover:shadow-lg hover:border-b2b-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <problem.icon
                  size={56}
                  weight="duotone"
                  className="text-b2b-primary"
                />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mb-3 text-b2b-text-primary">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-b2b-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
