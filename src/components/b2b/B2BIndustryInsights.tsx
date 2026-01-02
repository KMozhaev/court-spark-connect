import { TrendingUp, Clock, Users, Heart, Building2, BarChart3 } from "lucide-react";

interface CaseStudyProps {
  caseNumber: number;
  title: string;
  before: string;
  implemented: string;
  results: { icon: React.ReactNode; text: string }[];
  source: string;
}

const CaseStudyCard = ({ caseNumber, title, before, implemented, results, source }: CaseStudyProps) => (
  <div className="bg-b2b-background-secondary border border-b2b-border rounded-2xl p-6 md:p-8 hover:border-b2b-primary/30 hover:shadow-lg transition-all duration-300 group">
    <div className="text-sm font-semibold text-b2b-primary mb-3">КЕЙС {caseNumber}</div>
    <h3 className="text-xl md:text-2xl font-bold text-b2b-text-primary mb-6">{title}</h3>

    <div className="space-y-5 mb-6">
      <div>
        <div className="text-sm font-medium text-b2b-text-muted mb-1">Было:</div>
        <div className="text-b2b-text-secondary">{before}</div>
      </div>

      <div>
        <div className="text-sm font-medium text-b2b-text-muted mb-1">Внедрили:</div>
        <div className="text-b2b-text-secondary">{implemented}</div>
      </div>

      <div>
        <div className="text-sm font-medium text-b2b-text-muted mb-2">Результат:</div>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start text-b2b-text-secondary">
              <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">{result.icon}</span>
              <span className="text-sm">{result.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="text-xs text-b2b-text-muted border-t border-b2b-border pt-4">{source}</div>
  </div>
);

const caseStudies: CaseStudyProps[] = [
  {
    caseNumber: 1,
    title: "Автоматизация бронирования",
    before: "Excel, путаница, двойные бронирования",
    implemented: "Систему онлайн-бронирования",
    results: [
      { icon: <TrendingUp size={16} />, text: "Загрузка дневных слотов +40%" },
      { icon: <Clock size={16} />, text: "Владелец освободил 15 часов в неделю" },
    ],
    source: "Источник: Опыт клубов на платформе Playtomic⁴",
  },
  {
    caseNumber: 2,
    title: "Поиск партнёров",
    before: "Новички приходили 1-2 раза и уходили",
    implemented: "Функцию поиска партнёров",
    results: [
      { icon: <Users size={16} />, text: "92% игроков вернулись после первой игры" },
      { icon: <Heart size={16} />, text: "85% нашли постоянных партнёров" },
    ],
    source: "Источник: Playtomic Global Padel Report 2025⁴",
  },
  {
    caseNumber: 3,
    title: "Масштабирование сети",
    before: "3 клуба, каждый на своей системе, хаос",
    implemented: "Единую систему управления",
    results: [
      { icon: <Building2 size={16} />, text: "Открыли 4-й клуб без найма доп персонала" },
      { icon: <BarChart3 size={16} />, text: "Централизованная аналитика по всем клубам" },
    ],
    source: "Источник: Практика управления сетями клубов",
  },
];

const B2BIndustryInsights = () => {
  return (
    <section className="py-20 md:py-28 bg-b2b-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-b2b-primary/10 text-b2b-primary text-sm font-medium mb-4">
            Кейсы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-b2b-text-primary mb-4">
            Как другие клубы решили эти проблемы
          </h2>
          <p className="text-lg text-b2b-text-secondary max-w-2xl mx-auto">
            Примеры из практики европейских теннисных и падел клубов, которые внедряют специализированные решения для
            автоматизации
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.caseNumber} {...caseStudy} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 md:p-12 bg-gradient-to-r from-b2b-primary/10 to-b2b-accent/10 rounded-2xl border border-b2b-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-b2b-text-primary mb-3">
            Клубы с системами бронирования зарабатывают в 3-5 раз больше
            <sup className="text-lg text-b2b-text-muted ml-1">⁴</sup>
          </h3>
          <p className="text-lg text-b2b-text-secondary mb-6">Не отставайте от мирового тренда</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-b2b-primary text-white font-semibold rounded-xl hover:bg-b2b-primary-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Узнать как это работает
          </a>
        </div>
      </div>
    </section>
  );
};

export default B2BIndustryInsights;
