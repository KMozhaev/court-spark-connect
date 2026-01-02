import { Check, X, AlertTriangle, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ComparisonRowProps {
  feature: string;
  excel: { icon: "no" | "yes" | "warning" | "neutral"; text: string };
  genericCrm: { icon: "no" | "yes" | "warning" | "neutral"; text: string };
  courtoo: { icon: "no" | "yes" | "warning" | "neutral"; text: string };
  highlight?: boolean;
}

const iconMap = {
  no: <X size={18} className="text-red-500" />,
  yes: <Check size={18} className="text-green-500" />,
  warning: <AlertTriangle size={18} className="text-yellow-500" />,
  neutral: <HelpCircle size={18} className="text-b2b-text-muted" />,
};

const ComparisonRow = ({ feature, excel, genericCrm, courtoo, highlight }: ComparisonRowProps) => (
  <tr className={`border-b border-b2b-border ${highlight ? "bg-b2b-primary/5" : ""}`}>
    <td className="text-left p-4 font-medium text-b2b-text-primary">{feature}</td>
    <td className="text-center p-4">
      <div className="flex items-center justify-center gap-2">
        {iconMap[excel.icon]}
        <span className="text-sm text-b2b-text-secondary">{excel.text}</span>
      </div>
    </td>
    <td className="text-center p-4">
      <div className="flex items-center justify-center gap-2">
        {iconMap[genericCrm.icon]}
        <span className="text-sm text-b2b-text-secondary">{genericCrm.text}</span>
      </div>
    </td>
    <td className="text-center p-4 bg-b2b-primary/5">
      <div className="flex items-center justify-center gap-2">
        {iconMap[courtoo.icon]}
        <span className="text-sm font-medium text-b2b-text-primary">{courtoo.text}</span>
      </div>
    </td>
  </tr>
);

const comparisonData: ComparisonRowProps[] = [
  {
    feature: "Онлайн бронирование",
    excel: { icon: "no", text: "Только по телефону" },
    genericCrm: { icon: "yes", text: "Есть" },
    courtoo: { icon: "yes", text: "Специально для кортов" },
  },
  {
    feature: "Поиск партнёров",
    excel: { icon: "no", text: "WhatsApp группы" },
    genericCrm: { icon: "no", text: "Нет" },
    courtoo: { icon: "yes", text: "Открытые матчи" },
    highlight: true,
  },
  {
    feature: "Деление стоимости корта",
    excel: { icon: "no", text: "Считаете вручную" },
    genericCrm: { icon: "warning", text: "Через костыли" },
    courtoo: { icon: "yes", text: "Автоматически" },
  },
  {
    feature: "Аналитика по загрузке",
    excel: { icon: "no", text: "Excel таблицы" },
    genericCrm: { icon: "warning", text: "Общие метрики" },
    courtoo: { icon: "yes", text: "Загрузка кортов, выручка" },
    highlight: true,
  },
  {
    feature: "Подключение",
    excel: { icon: "neutral", text: "—" },
    genericCrm: { icon: "warning", text: "1-2 недели" },
    courtoo: { icon: "yes", text: "1 день" },
  },
  {
    feature: "Соответствие 54-ФЗ",
    excel: { icon: "no", text: "Ваша проблема" },
    genericCrm: { icon: "no", text: "Не всегда" },
    courtoo: { icon: "yes", text: "Полное + ЮКасса" },
  },
  {
    feature: "Поддержка",
    excel: { icon: "neutral", text: "—" },
    genericCrm: { icon: "warning", text: "Не знают специфику" },
    courtoo: { icon: "yes", text: "Знаем падел/теннис" },
  },
  {
    feature: "Цена (до 5 кортов)",
    excel: { icon: "neutral", text: "\"Бесплатно\"*" },
    genericCrm: { icon: "no", text: "От 20-30 тыс₽/мес" },
    courtoo: { icon: "yes", text: "От 6,000₽/мес" },
    highlight: true,
  },
];

// Mobile comparison card
const MobileComparisonCard = ({ feature, excel, genericCrm, courtoo, highlight }: ComparisonRowProps) => (
  <div className={`p-4 rounded-xl border ${highlight ? "border-b2b-primary bg-b2b-primary/5" : "border-b2b-border bg-b2b-surface"}`}>
    <h4 className="font-semibold text-b2b-text-primary mb-4">{feature}</h4>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-b2b-text-muted">Excel/Вручную</span>
        <div className="flex items-center gap-2">
          {iconMap[excel.icon]}
          <span className="text-sm text-b2b-text-secondary">{excel.text}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-b2b-text-muted">Фитнес-CRM</span>
        <div className="flex items-center gap-2">
          {iconMap[genericCrm.icon]}
          <span className="text-sm text-b2b-text-secondary">{genericCrm.text}</span>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 -mx-2 rounded-lg bg-b2b-primary/10">
        <span className="text-sm font-medium text-b2b-primary">Courtoo</span>
        <div className="flex items-center gap-2">
          {iconMap[courtoo.icon]}
          <span className="text-sm font-medium text-b2b-text-primary">{courtoo.text}</span>
        </div>
      </div>
    </div>
  </div>
);

const B2BComparisonTable = () => {
  return (
    <section className="py-20 md:py-28 bg-b2b-background-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-b2b-primary/10 text-b2b-primary text-sm font-medium mb-4">
            Сравнение
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-b2b-text-primary mb-4">
            Чем Courtoo отличается от других решений
          </h2>
          <p className="text-lg text-b2b-text-secondary max-w-2xl mx-auto">
            Мы создали систему специально для падел и теннисных клубов
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse bg-b2b-background-secondary rounded-2xl overflow-hidden">
            <thead>
              <tr className="border-b-2 border-b2b-border bg-b2b-surface">
                <th className="text-left p-5 font-bold text-b2b-text-primary">Возможность</th>
                <th className="text-center p-5 font-bold text-b2b-text-primary">Excel/Вручную</th>
                <th className="text-center p-5 font-bold text-b2b-text-primary">Фитнес-CRM</th>
                <th className="text-center p-5 font-bold text-b2b-text-primary bg-b2b-primary/10">
                  <div className="inline-flex items-center gap-2">
                    Courtoo
                    <Badge className="bg-b2b-primary text-white hover:bg-b2b-primary">
                      Рекомендуем
                    </Badge>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <ComparisonRow key={index} {...row} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <MobileComparisonCard key={index} {...row} />
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center text-sm text-b2b-text-muted">
          * "Бесплатно" = ваше время (15-20 часов в неделю). Считайте стоимость.
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-b2b-primary text-white font-semibold rounded-xl hover:bg-b2b-primary-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Попробовать бесплатно
          </a>
        </div>
      </div>
    </section>
  );
};

export default B2BComparisonTable;
