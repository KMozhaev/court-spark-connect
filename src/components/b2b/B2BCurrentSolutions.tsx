import { Bell, Clock, ChartLine, Database, ChartBar, CheckCircle } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface SolutionCardProps {
  icon: Icon;
  iconColor: string;
  title: string;
  problem: string;
  stat: string;
  solutions: string[];
}

const SolutionCard = ({ icon: IconComponent, iconColor, title, problem, stat, solutions }: SolutionCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-b2b-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl ${iconColor}`}>
          <IconComponent size={28} weight="duotone" className="text-current" />
        </div>
        <h3 className="font-display font-bold text-lg text-b2b-text-primary leading-tight pt-1">
          {title}
        </h3>
      </div>

      {/* Problem */}
      <p className="text-b2b-text-secondary text-sm mb-3">
        {problem}
      </p>

      {/* Stat */}
      <div className="bg-b2b-surface rounded-lg px-3 py-2 mb-4 flex items-center gap-2">
        <ChartBar size={16} weight="duotone" className="text-b2b-primary shrink-0" />
        <p className="text-sm font-medium text-b2b-text-primary">
          {stat}
        </p>
      </div>

      {/* Solutions */}
      <ul className="space-y-2">
        {solutions.map((solution, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-b2b-text-secondary">
            <CheckCircle size={18} weight="duotone" className="text-b2b-success shrink-0 mt-0.5" />
            <span>{solution}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const solutionsData: SolutionCardProps[] = [
  {
    icon: Bell,
    iconColor: "bg-red-100 text-red-600",
    title: "Забыли напомнить — клиент забыл про вас",
    problem: "Абонемент истёк, забыли позвонить, клиент ушёл",
    stat: "30-40% не продлевают без напоминания",
    solutions: [
      "SMS/email за 3 дня до окончания",
      "Продление в один клик онлайн",
      "История всех абонементов"
    ]
  },
  {
    icon: Clock,
    iconColor: "bg-blue-100 text-blue-600",
    title: "Звонят в 22:00 — вы спите, корт не забронирован",
    problem: "Клиенты хотят бронировать вечером, вы не отвечаете",
    stat: "73% предпочитают онлайн бронирование",
    solutions: [
      "Клиенты бронируют и оплачивают в любое время",
      "Видят свободные слоты онлайн",
      "Автоматическое подтверждение"
    ]
  },
  {
    icon: ChartLine,
    iconColor: "bg-orange-100 text-orange-600",
    title: "С 10 до 16 корты пустые",
    problem: "Дневные слоты простаивают, деньги не капают",
    stat: "60% средняя загрузка vs 75-85% target",
    solutions: [
      "Динамические цены по часам",
      "Скидки на дневные слоты",
      "Акции для заполнения off-peak"
    ]
  },
  {
    icon: Database,
    iconColor: "bg-green-100 text-green-600",
    title: "Администратор увольняется — знания уходят",
    problem: "Вся информация в голове одного человека",
    stat: "2-3 недели обучение нового сотрудника",
    solutions: [
      "Вся информация в одном месте",
      "История визитов и покупок",
      "Любой админ видит всё сразу"
    ]
  }
];

const B2BCurrentSolutions = () => {
  return (
    <section className="py-20 lg:py-28 bg-b2b-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-b2b-text-primary mb-4">
            Проблемы которые Courtoo решает сейчас
          </h2>
          <p className="text-b2b-text-secondary text-lg max-w-2xl mx-auto">
            Автоматизируем рутину, чтобы вы фокусировались на клиентах
          </p>
        </div>

        {/* Cards Grid - 2 columns on desktop */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutionsData.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BCurrentSolutions;
