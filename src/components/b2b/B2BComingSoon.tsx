import { UsersThree, ChartLineUp, DeviceMobile, Rocket } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface ComingSoonCardProps {
  icon: Icon;
  title: string;
  timing: string;
  problem: string;
  what: string;
}

const ComingSoonCard = ({ icon: IconComponent, title, timing, problem, what }: ComingSoonCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all">
      {/* Timing Badge */}
      <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 mb-4">
        <span className="text-xs font-medium text-white/90">{timing}</span>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <IconComponent size={48} weight="duotone" className="text-white/90" />
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-white mb-3">
        {title}
      </h3>

      {/* Problem */}
      <p className="text-white/70 text-sm mb-4">
        ⚠️ {problem}
      </p>

      {/* What */}
      <div className="bg-white/10 rounded-lg px-4 py-3">
        <p className="text-white/90 text-sm">
          ✨ {what}
        </p>
      </div>
    </div>
  );
};

const comingSoonData: ComingSoonCardProps[] = [
  {
    icon: UsersThree,
    title: "Открытые матчи",
    timing: "Март 2026",
    problem: "Новички не могут найти партнёров",
    what: "Система подбора партнёров по уровню"
  },
  {
    icon: ChartLineUp,
    title: "Dashboard аналитики",
    timing: "Q1 2026",
    problem: "Не знаете кто в зоне риска",
    what: "Визуализация + предиктивная аналитика"
  },
  {
    icon: DeviceMobile,
    title: "Мобильное приложение",
    timing: "Q2 2026",
    problem: "Нет нативного app опыта",
    what: "iOS/Android для клиентов"
  }
];

const B2BComingSoon = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Rocket size={20} weight="duotone" className="text-white" />
            <span className="text-sm font-medium text-white">Скоро в Courtoo</span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Развиваемся вместе с вами
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Новые возможности, которые сделают ваш клуб ещё успешнее
          </p>
        </div>

        {/* Cards Grid - 3 columns on desktop */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {comingSoonData.map((item, index) => (
            <ComingSoonCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BComingSoon;
