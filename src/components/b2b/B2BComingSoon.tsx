import { UsersThree, ChartLineUp, DeviceMobile, Rocket } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface ComingSoonCardProps {
  icon: Icon;
  title: string;
  timing: string;
  what: string;
}

const ComingSoonCard = ({ icon: IconComponent, title, timing, what }: ComingSoonCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
      {/* Timing Badge */}
      <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 mb-4">
        <span className="text-xs font-medium text-white/90">{timing}</span>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
          <IconComponent size={32} weight="duotone" className="text-white" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-white mb-3">
        {title}
      </h3>

      {/* What */}
      <div className="bg-white/10 rounded-lg px-4 py-3 flex items-start gap-2">
        <Rocket size={16} weight="duotone" className="text-cyan-300 shrink-0 mt-0.5" />
        <p className="text-white/90 text-sm">
          {what}
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
    what: "Система подбора партнёров по уровню"
  },
  {
    icon: ChartLineUp,
    title: "Dashboard аналитики",
    timing: "Март 2026",
    what: "Визуализация + предиктивная аналитика"
  },
  {
    icon: DeviceMobile,
    title: "Мобильное приложение",
    timing: "Март 2026",
    what: "iOS/Android для клиентов"
  }
];

const B2BComingSoon = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-b2b-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <Rocket size={20} weight="duotone" className="text-cyan-400" />
            <span className="text-sm font-medium text-white">Скоро в Courtoo</span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Развиваемся вместе с вами
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
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
