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
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 text-center mb-12 lg:mb-16">
          Знакомые проблемы?
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-cyan-200 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <problem.icon
                  size={56}
                  weight="duotone"
                  className="text-cyan-600"
                />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mb-3 text-slate-900">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
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
