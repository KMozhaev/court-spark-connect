import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Users, MessageSquare, TrendingUp, Calendar, BarChart3, DollarSign, PieChart, Smartphone, Clock, RefreshCw, CreditCard, Building2, Eye, Database, Monitor } from "lucide-react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-b2b-surface/50 border border-b2b-border hover:border-b2b-primary/30 transition-all duration-300">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-b2b-primary/10 flex items-center justify-center text-b2b-primary">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-b2b-text-primary mb-1">{title}</h4>
      <p className="text-sm text-b2b-text-secondary">{description}</p>
    </div>
  </div>
);

interface TabData {
  id: string;
  label: string;
  title: string;
  features: { icon: React.ReactNode; title: string; description: string }[];
  result: string;
  resultHighlight: string;
}

const tabsData: TabData[] = [
  {
    id: "retention",
    label: "Удержание",
    title: "Хочу чтобы ни один клиент не ушёл",
    features: [
      { icon: <Bell size={20} />, title: "Автоматические напоминания", description: "Система напоминает клиентам о матчах и продлении абонемента" },
      { icon: <Users size={20} />, title: "Открытые матчи", description: "Клиенты находят партнёров и остаются активными в сообществе" },
      { icon: <MessageSquare size={20} />, title: "Уведомления", description: "Push-уведомления о новых слотах и акциях" },
      { icon: <TrendingUp size={20} />, title: "Аналитика рисков", description: "Видите кто давно не играл и может уйти" },
    ],
    result: "Лучшие клубы удерживают",
    resultHighlight: "80%+ клиентов",
  },
  {
    id: "occupancy",
    label: "Загрузка",
    title: "Хочу чтобы все корты были заняты",
    features: [
      { icon: <Calendar size={20} />, title: "Открытые матчи", description: "Свободные слоты автоматически предлагаются игрокам" },
      { icon: <BarChart3 size={20} />, title: "Видимость загрузки", description: "Видите загрузку каждого корта в реальном времени" },
      { icon: <DollarSign size={20} />, title: "Гибкое ценообразование", description: "Динамические цены в зависимости от спроса" },
      { icon: <PieChart size={20} />, title: "Аналитика загрузки", description: "Понимайте паттерны и оптимизируйте расписание" },
    ],
    result: "Цель: 75-85% загрузка",
    resultHighlight: "(лучшие: 90%+)",
  },
  {
    id: "automation",
    label: "Автоматизация",
    title: "Устал от рутины, хочу заниматься развитием",
    features: [
      { icon: <Smartphone size={20} />, title: "Онлайн-бронирование", description: "Клиенты бронируют сами через приложение 24/7" },
      { icon: <Clock size={20} />, title: "Автоматические напоминания", description: "Система сама напоминает о матчах и платежах" },
      { icon: <RefreshCw size={20} />, title: "Автопродление", description: "Абонементы продлеваются автоматически" },
      { icon: <CreditCard size={20} />, title: "Онлайн-оплата", description: "Интеграция с ЮКасса (сниженный процент)" },
    ],
    result: "Экономия",
    resultHighlight: "15+ часов в неделю",
  },
  {
    id: "scale",
    label: "Масштаб",
    title: "Хочу открыть второй, третий клуб",
    features: [
      { icon: <Building2 size={20} />, title: "Multi-location", description: "Управление всеми клубами из одной системы" },
      { icon: <Eye size={20} />, title: "Единый обзор", description: "Видите что происходит в каждом клубе" },
      { icon: <Database size={20} />, title: "Единая база клиентов", description: "Клиенты могут бронировать в любом вашем клубе" },
      { icon: <Monitor size={20} />, title: "Единая система", description: "Администраторы работают в одном интерфейсе" },
    ],
    result: "Открывайте новые клубы",
    resultHighlight: "без найма доп персонала",
  },
];

const B2BSolutionTabs = () => {
  return (
    <section className="py-20 md:py-28 bg-b2b-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-b2b-primary/10 text-b2b-primary text-sm font-medium mb-4">
            Решения
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-b2b-text-primary mb-4">
            Что вы получаете с Courtoo
          </h2>
          <p className="text-lg text-b2b-text-secondary max-w-2xl mx-auto">
            Выберите вашу главную цель — мы покажем как Courtoo поможет её достичь
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="retention" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-10">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-6 py-3 rounded-full bg-b2b-surface border border-b2b-border text-b2b-text-secondary font-medium transition-all duration-300 data-[state=active]:bg-b2b-primary data-[state=active]:text-white data-[state=active]:border-b2b-primary hover:border-b2b-primary/50"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image/Mockup Placeholder */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-b2b-primary/20 to-b2b-accent/20 border border-b2b-border flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-b2b-primary/20 flex items-center justify-center">
                        {tab.features[0].icon}
                      </div>
                      <p className="text-b2b-text-secondary text-sm">
                        Скриншот интерфейса
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-b2b-text-primary">
                    "{tab.title}"
                  </h3>

                  <div className="space-y-3">
                    {tab.features.map((feature, index) => (
                      <FeatureItem
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                      />
                    ))}
                  </div>

                  {/* Result */}
                  <div className="p-5 rounded-xl bg-gradient-to-r from-b2b-primary/10 to-b2b-accent/10 border border-b2b-primary/20">
                    <p className="text-lg font-medium text-b2b-text-primary">
                      {tab.result}{" "}
                      <span className="text-b2b-primary font-bold">
                        {tab.resultHighlight}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default B2BSolutionTabs;
