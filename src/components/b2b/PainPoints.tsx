import { ReactNode } from "react";
import { 
  Bell, 
  Users, 
  Clock, 
  ChartBar, 
  Database, 
  Globe,
  Check
} from "@phosphor-icons/react";

interface PainCardProps {
  icon: ReactNode;
  title: string;
  problem: string;
  stats: string;
  solution: {
    title: string;
    features: string[];
    comingSoon?: string;
  };
  result: string;
}

const PainCard = ({ icon, title, problem, stats, solution, result }: PainCardProps) => (
  <div className="bg-white border border-b2b-border rounded-xl p-6 group hover:border-b2b-primary hover:shadow-lg transition-all duration-300">
    {/* Header */}
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-display font-bold text-b2b-text-primary leading-tight">
          {title}
        </h3>
      </div>
    </div>

    {/* Problem */}
    <div className="mb-4">
      <p className="text-sm text-b2b-text-secondary leading-relaxed">
        {problem}
      </p>
    </div>

    {/* Stats */}
    <div className="p-3 bg-amber-50 border-l-4 border-amber-400 rounded mb-5">
      <p className="text-sm font-medium text-b2b-text-primary">
        📊 {stats}
      </p>
    </div>

    {/* Solution */}
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 bg-b2b-primary rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" weight="bold" />
        </div>
        <span className="font-bold text-b2b-primary text-sm">Решение Courtoo:</span>
      </div>
      
      {/* Features */}
      <div className="pl-9 mb-3">
        <div className="font-semibold text-b2b-text-primary text-sm mb-2">
          {solution.title}
        </div>
        <ul className="space-y-1.5">
          {solution.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-b2b-text-secondary">
              <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Coming Soon */}
      {solution.comingSoon && (
        <div className="pl-9 pt-3 border-t border-gray-200">
          <div className="flex items-start gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-purple-100 text-purple-700 whitespace-nowrap mt-0.5">
              Скоро
            </span>
            <span className="text-sm text-b2b-text-muted">
              {solution.comingSoon}
            </span>
          </div>
        </div>
      )}
    </div>

    {/* Result */}
    <div className="pt-4 border-t border-gray-100">
      <p className="text-sm font-semibold text-green-600 flex items-center gap-2">
        ✨ {result}
      </p>
    </div>
  </div>
);

const painPointsData: PainCardProps[] = [
  {
    icon: <Bell size={24} weight="duotone" />,
    title: "Забыли напомнить — клиент забыл про вас",
    problem: "Абонемент истёк, забыли позвонить, клиент ушёл к конкурентам.",
    stats: "30-40% не продлевают без напоминания, churn 7%+, -200k₽/год",
    solution: {
      title: "Автоматические SMS/email за 3 дня до окончания",
      features: [
        "SMS/email за 3 дня до окончания",
        "Продление в один клик",
        "История всех абонементов",
        "Никто не выпадает из системы"
      ],
      comingSoon: "Dashboard аналитики риска ухода — видите кто не был 2+ недели"
    },
    result: "Автоматические напоминания = автоматические продления"
  },
  {
    icon: <Users size={24} weight="duotone" />,
    title: "Новички приходят 2 раза и пропадают",
    problem: "Не могут найти партнёра своего уровня, стесняются спрашивать, уходят.",
    stats: "40% бросают из-за отсутствия партнёра, игроки без партнёров уходят на 56% чаще",
    solution: {
      title: "Открытые матчи — система подбора партнёров",
      features: [
        "Подбор по уровню и времени",
        "Открытые слоты для присоединения",
        "Рейтинг и отзывы игроков",
        "Создание сообщества в клубе"
      ],
      comingSoon: "Запуск открытых матчей — март 2026"
    },
    result: "Новички находят партнёров = остаются надолго"
  },
  {
    icon: <Clock size={24} weight="duotone" />,
    title: "С 10 до 16 корты пустые",
    problem: "Прайм-тайм забит, а днём корты простаивают. Средняя загрузка: 60%.",
    stats: "Цель загрузки: 75-85%, лучшие клубы: 90%+, упущенная выручка: 5ч × цена × корты × 30 дней",
    solution: {
      title: "Гибкое ценообразование по времени",
      features: [
        "Динамические цены по часам",
        "Скидки на непопулярные слоты",
        "Акции для дневных бронирований",
        "Аналитика загрузки в реальном времени"
      ]
    },
    result: "Заполненные дневные слоты = дополнительная выручка"
  },
  {
    icon: <ChartBar size={24} weight="duotone" />,
    title: "Не понимаете какие абонементы прибыльные",
    problem: "Какие абонементы приносят деньги? Сколько стоит каждый клиент?",
    stats: "Средний клиент: 30-60 тыс₽/год, в хороших клубах: 60-100 тыс₽/год",
    solution: {
      title: "Revenue Per Member аналитика",
      features: [
        "LTV каждого клиента",
        "Прибыльность абонементов",
        "Сравнение периодов",
        "Прогноз выручки"
      ]
    },
    result: "Данные для решений = рост прибыли"
  },
  {
    icon: <Database size={24} weight="duotone" />,
    title: "Администратор увольняется — знания уходят",
    problem: "Всё в голове у одного человека. Excel, записки, устные договорённости.",
    stats: "Потеря ключевого сотрудника = 2-3 месяца хаоса и потерь",
    solution: {
      title: "Централизованная CRM для клуба",
      features: [
        "Вся история клиентов в системе",
        "Заметки и предпочтения",
        "Передача дел за 1 день",
        "Никакой зависимости от одного человека"
      ]
    },
    result: "Система вместо Excel = масштабирование возможно"
  },
  {
    icon: <Globe size={24} weight="duotone" />,
    title: "Звонят в 22:00 — вы спите, корт не забронирован",
    problem: "Клиенты хотят бронировать вечером, вы не отвечаете, идут к конкурентам.",
    stats: "73% хотят онлайн-бронирование, 42% сменят клуб ради удобства",
    solution: {
      title: "Онлайн-бронирование через веб-платформу",
      features: [
        "Бронирование 24/7 без звонков",
        "Свободные слоты в реальном времени",
        "Оплата онлайн через ЮКасса",
        "Автоматические подтверждения"
      ],
      comingSoon: "Нативное мобильное приложение iOS/Android (Q2 2026)"
    },
    result: "Бронирования даже когда вы спите"
  }
];

const PainPoints = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-b2b-text-primary mb-4">
            Знакомые проблемы?
          </h2>
          <p className="text-lg text-b2b-text-secondary max-w-2xl mx-auto">
            Мы знаем с чем сталкиваются владельцы клубов каждый день. 
            Вот как Courtoo решает самые частые вызовы:
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPointsData.map((pain, index) => (
            <PainCard key={index} {...pain} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
