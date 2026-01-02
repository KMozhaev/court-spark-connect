import { Users, UserPlus, Bell, Calendar, TrendingUp, Clock, Target, Repeat } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Игрок ищет партнёра",
    description: "Клиент открывает приложение и видит доступные слоты для игры с возможностью найти партнёра"
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Присоединение к матчу",
    description: "Другие игроки видят открытый матч и могут присоединиться одним нажатием"
  },
  {
    number: "03",
    icon: Bell,
    title: "Автоматические уведомления",
    description: "Система отправляет напоминания всем участникам и подтверждает бронирование"
  },
  {
    number: "04",
    icon: Calendar,
    title: "Матч состоялся",
    description: "Корт заполнен, игроки довольны, клуб получает доход с пустого слота"
  }
];

const results = [
  {
    icon: TrendingUp,
    value: "+25%",
    label: "заполняемость в непопулярные часы"
  },
  {
    icon: Clock,
    value: "0 мин",
    label: "времени администратора"
  },
  {
    icon: Target,
    value: "4.8★",
    label: "удовлетворённость игроков"
  },
  {
    icon: Repeat,
    value: "+40%",
    label: "повторных визитов"
  }
];

const B2BOpenMatch = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-b2b-background to-b2b-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-b2b-accent/10 text-b2b-accent rounded-full text-sm font-medium mb-4">
            Уникальная функция
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-b2b-text mb-4">
            Открытые матчи
          </h2>
          <p className="text-b2b-text-muted text-lg md:text-xl">
            Пусть игроки сами находят друг друга. Заполняйте пустые слоты без усилий администратора.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-16">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-b2b-accent/20 via-b2b-accent to-b2b-accent/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-b2b-card border border-b2b-border rounded-2xl p-6 h-full hover:border-b2b-accent/50 transition-colors">
                  {/* Step number with icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-b2b-accent/10 flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-b2b-accent" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-b2b-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-b2b-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-b2b-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2">
                    <div className="w-0.5 h-6 bg-b2b-accent/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-b2b-card border border-b2b-border rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-semibold text-b2b-text text-center mb-8">
            Результаты внедрения
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-b2b-accent/10 flex items-center justify-center">
                  <result.icon className="w-6 h-6 text-b2b-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-b2b-accent mb-1">
                  {result.value}
                </div>
                <div className="text-b2b-text-muted text-sm">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BOpenMatch;
