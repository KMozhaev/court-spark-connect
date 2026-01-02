import { X, Check, ArrowRight } from "lucide-react";

const scenarios = [
  {
    id: 1,
    title: "Бронирование корта",
    before: {
      title: "Было",
      items: [
        "Звонки и поиск в Excel",
        "Риск двойного бронирования",
        "Ручное подтверждение"
      ],
      time: "15-20 минут"
    },
    after: {
      title: "Стало",
      items: [
        "Бронирование онлайн 24/7",
        "Автоматическое подтверждение",
        "Напоминание за час до игры"
      ],
      time: "2 минуты"
    }
  },
  {
    id: 2,
    title: "Управление абонементами",
    before: {
      title: "Было",
      items: [
        "Учёт в Excel, забытые продления",
        "Клиенты уходят без напоминания",
        "Нет аналитики"
      ],
      time: "Потери клиентов"
    },
    after: {
      title: "Стало",
      items: [
        "Автоматический учёт и напоминания",
        "Онлайн-продление",
        "Статистика удержания"
      ],
      time: "+30% удержания"
    }
  },
  {
    id: 3,
    title: "Заполнение пустых слотов",
    before: {
      title: "Было",
      items: [
        "Корты простаивают",
        "Нет способа быстро найти игроков",
        "Упущенная выручка"
      ],
      time: "30% простоя"
    },
    after: {
      title: "Стало",
      items: [
        "Динамические цены",
        "Push-уведомления о слотах",
        "Открытые матчи"
      ],
      time: "85%+ загрузка"
    }
  }
];

const B2BScenarios = () => {
  return (
    <section className="py-12 md:py-16 bg-b2b-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="inline-block px-3 py-1 bg-b2b-primary/10 text-b2b-primary rounded-full text-sm font-medium mb-3">
            Трансформация
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-b2b-text-primary mb-2">
            Как меняется работа клуба
          </h2>
          <p className="text-b2b-text-muted text-base md:text-lg">
            Реальные сценарии до и после внедрения Courtoo
          </p>
        </div>

        {/* Scenarios - horizontal on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-b2b-background-secondary border border-b2b-border rounded-xl p-4 md:p-5"
            >
              {/* Scenario Title */}
              <h3 className="text-lg font-bold text-b2b-text-primary mb-4 text-center">
                {scenario.title}
              </h3>

              <div className="space-y-3">
                {/* Before */}
                <div className="bg-b2b-danger/5 border border-b2b-danger/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-b2b-danger/10 flex items-center justify-center">
                      <X className="w-3 h-3 text-b2b-danger" />
                    </div>
                    <span className="text-sm font-semibold text-b2b-danger">{scenario.before.title}</span>
                    <span className="ml-auto text-xs font-medium text-b2b-danger">{scenario.before.time}</span>
                  </div>
                  <ul className="space-y-1">
                    {scenario.before.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-b2b-text-secondary">
                        <span className="text-b2b-danger">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="bg-b2b-success/5 border border-b2b-success/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-b2b-success/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-b2b-success" />
                    </div>
                    <span className="text-sm font-semibold text-b2b-success">{scenario.after.title}</span>
                    <span className="ml-auto text-xs font-medium text-b2b-success">{scenario.after.time}</span>
                  </div>
                  <ul className="space-y-1">
                    {scenario.after.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-b2b-text-secondary">
                        <Check className="w-3 h-3 text-b2b-success mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BScenarios;
