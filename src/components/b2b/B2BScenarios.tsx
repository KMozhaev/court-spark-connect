import { X, Check, ArrowRight } from "lucide-react";

const scenarios = [
  {
    id: 1,
    title: "Бронирование корта",
    before: {
      title: "Было",
      items: [
        "Клиент звонит в клуб",
        "Администратор ищет свободное время в Excel",
        "Записывает в блокнот или таблицу",
        "Перезванивает клиенту для подтверждения",
        "Риск двойного бронирования"
      ],
      time: "15-20 минут"
    },
    after: {
      title: "Стало",
      items: [
        "Клиент открывает приложение",
        "Видит все свободные слоты в реальном времени",
        "Бронирует и оплачивает онлайн",
        "Получает автоматическое подтверждение",
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
        "Учёт в таблице Excel",
        "Ручная проверка оплаты",
        "Забытые продления",
        "Клиенты уходят без напоминания",
        "Нет аналитики по удержанию"
      ],
      time: "Потери клиентов"
    },
    after: {
      title: "Стало",
      items: [
        "Автоматический учёт всех абонементов",
        "Напоминания о продлении за 7 дней",
        "Онлайн-оплата продления",
        "Статистика удержания клиентов",
        "Персональные предложения"
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
        "Корты простаивают в непопулярные часы",
        "Скидки не работают без рекламы",
        "Нет способа быстро найти игроков",
        "Упущенная выручка каждый день",
        "Администратор не успевает обзванивать"
      ],
      time: "30% простоя"
    },
    after: {
      title: "Стало",
      items: [
        "Динамические цены на непопулярные часы",
        "Push-уведомления о выгодных слотах",
        "Открытые матчи для поиска партнёров",
        "Waitlist для популярных часов",
        "Аналитика загрузки в реальном времени"
      ],
      time: "85%+ загрузка"
    }
  }
];

const B2BScenarios = () => {
  return (
    <section className="py-16 md:py-24 bg-b2b-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-b2b-primary/10 text-b2b-primary rounded-full text-sm font-medium mb-4">
            Трансформация
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-b2b-text-primary mb-4">
            Как меняется работа клуба
          </h2>
          <p className="text-b2b-text-muted text-lg md:text-xl">
            Реальные сценарии до и после внедрения Courtoo
          </p>
        </div>

        {/* Scenarios */}
        <div className="space-y-8 md:space-y-12">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-b2b-background-secondary border border-b2b-border rounded-2xl p-6 md:p-8 overflow-hidden"
            >
              {/* Scenario Title */}
              <h3 className="text-xl md:text-2xl font-bold text-b2b-text-primary mb-6 text-center">
                {scenario.title}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-6 lg:gap-4 items-stretch">
                {/* Before */}
                <div className="bg-b2b-danger/5 border border-b2b-danger/20 rounded-xl p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-b2b-danger/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-b2b-danger" />
                    </div>
                    <span className="font-semibold text-b2b-danger">{scenario.before.title}</span>
                  </div>
                  <ul className="space-y-3 mb-4">
                    {scenario.before.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-b2b-text-secondary">
                        <span className="text-b2b-danger mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-b2b-danger/20">
                    <span className="text-sm text-b2b-text-muted">Результат:</span>
                    <p className="font-semibold text-b2b-danger">{scenario.before.time}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-b2b-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-b2b-primary" />
                  </div>
                </div>
                <div className="lg:hidden flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-b2b-primary/10 flex items-center justify-center rotate-90">
                    <ArrowRight className="w-5 h-5 text-b2b-primary" />
                  </div>
                </div>

                {/* After */}
                <div className="bg-b2b-success/5 border border-b2b-success/20 rounded-xl p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-b2b-success/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-b2b-success" />
                    </div>
                    <span className="font-semibold text-b2b-success">{scenario.after.title}</span>
                  </div>
                  <ul className="space-y-3 mb-4">
                    {scenario.after.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-b2b-text-secondary">
                        <Check className="w-4 h-4 text-b2b-success mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-b2b-success/20">
                    <span className="text-sm text-b2b-text-muted">Результат:</span>
                    <p className="font-semibold text-b2b-success">{scenario.after.time}</p>
                  </div>
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
