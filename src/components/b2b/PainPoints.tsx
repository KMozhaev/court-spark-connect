import { ReactNode } from "react";
import { 
  UserMinus, 
  Users, 
  CalendarX, 
  TrendDown, 
  CurrencyDollar, 
  Clock 
} from "@phosphor-icons/react";

interface PainCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  fact: string;
  source: string;
  cost: string;
}

const PainCard = ({ icon, title, description, fact, source, cost }: PainCardProps) => (
  <div className="bg-white border border-b2b-border rounded-xl p-6 group hover:border-b2b-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 rounded-full bg-b2b-primary/10 flex items-center justify-center mb-4 text-b2b-primary group-hover:bg-b2b-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    
    <h3 className="text-xl font-display font-bold mb-3 text-b2b-text-primary">
      {title}
    </h3>
    
    <p className="text-b2b-text-secondary mb-4 text-sm leading-relaxed">
      {description}
    </p>
    
    <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded mb-4">
      <p className="text-sm font-semibold text-b2b-text-primary">
        {fact}
        {source !== "—" && (
          <sup className="text-xs text-b2b-text-muted ml-1">{source}</sup>
        )}
      </p>
    </div>
    
    <div className="text-sm text-red-500 font-semibold flex items-center gap-1">
      💸 {cost}
    </div>
  </div>
);

const painPointsData: PainCardProps[] = [
  {
    icon: <UserMinus size={24} weight="duotone" />,
    title: "Клиенты уходят молча",
    description: "Не знаете кто ушёл и почему. Целевой процент ушедших: меньше 5% в месяц. У большинства клубов: 7%+ каждый месяц.",
    fact: "Целевой churn: <5%/месяц, факт: 7%+ в большинстве клубов",
    source: "⁵",
    cost: "Каждый ушедший клиент = минус годовой абонемент"
  },
  {
    icon: <Users size={24} weight="duotone" />,
    title: "Новички не задерживаются",
    description: "Приходят 1-2 раза и исчезают. Не могут найти партнёров своего уровня.",
    fact: "Игроки без постоянных партнёров уходят на 56% чаще",
    source: "⁶",
    cost: "Нужна система поиска партнёров"
  },
  {
    icon: <CalendarX size={24} weight="duotone" />,
    title: "Корты пустуют днём",
    description: "С 10 до 16 корты простаивают. Средняя загрузка по индустрии: 60%. Цель: 75-85% (лучшие клубы: 90%+).",
    fact: "Средняя загрузка кортов: 60%, target: 75-85%",
    source: "⁵",
    cost: "5 часов × цена корта × кол-во кортов × 30 дней"
  },
  {
    icon: <TrendDown size={24} weight="duotone" />,
    title: "Не понимаете откуда прибыль",
    description: "Какие абонементы выгодные? Сколько приносит каждый клиент за год?",
    fact: "Средний клиент: 30-60 тыс₽/год, в хороших клубах: 60-100 тыс₽/год",
    source: "⁵",
    cost: "Как у вас?"
  },
  {
    icon: <CurrencyDollar size={24} weight="duotone" />,
    title: "Привлечение съедает деньги",
    description: "Реклама, скидки для новых клиентов. Но вы продолжаете тратить на рекламу вместо удержания.",
    fact: "Привлечь нового в 5-25 раз дороже чем удержать. Удержание +5% = прибыль +25-95%",
    source: "²",
    cost: "Пересмотрите приоритеты в маркетинге"
  },
  {
    icon: <Clock size={24} weight="duotone" />,
    title: "Тонете в рутине",
    description: "Excel, звонки, напоминания вручную. Владельцы тратят 15-20 часов в неделю на администрирование.",
    fact: "Хотите открыть второй клуб? Умножайте время на 2",
    source: "—",
    cost: "Масштабирование невозможно без автоматизации"
  }
];

const PainPoints = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-b2b-text-primary mb-4">
            Знакомые проблемы?
          </h2>
          <p className="text-lg text-b2b-text-secondary max-w-2xl mx-auto">
            Мы знаем с чем сталкиваются владельцы клубов каждый день. 
            Вот самые частые вызовы:
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
