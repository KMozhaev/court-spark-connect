import { Users, TrendingDown, TrendingUp, UserCheck } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
  source: string;
  sourceLink: string;
  variant: "danger" | "warning" | "success" | "primary";
}

const variantStyles = {
  danger: {
    bg: "bg-red-50",
    border: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    valueColor: "text-red-600",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    valueColor: "text-amber-600",
  },
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    valueColor: "text-emerald-600",
  },
  primary: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    valueColor: "text-blue-600",
  },
};

const StatCard = ({ icon, value, label, sublabel, source, sourceLink, variant }: StatCardProps) => {
  const styles = variantStyles[variant];
  
  return (
    <div className={`${styles.bg} ${styles.border} border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
      {/* Icon */}
      <div className={`w-12 h-12 ${styles.iconBg} rounded-xl flex items-center justify-center mb-4`}>
        <div className={styles.iconColor}>{icon}</div>
      </div>
      
      {/* Value */}
      <div className={`font-display font-bold text-4xl ${styles.valueColor} mb-2`}>
        {value}
      </div>
      
      {/* Label */}
      <p className="text-b2b-text-primary font-medium mb-1">
        {label}
      </p>
      
      {/* Sublabel */}
      <p className="text-b2b-text-muted text-sm mb-4">
        {sublabel}
      </p>
      
      {/* Source */}
      <a 
        href={sourceLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-b2b-text-muted hover:text-b2b-primary transition-colors"
      >
        Источник {source}
      </a>
    </div>
  );
};

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-b2b-text-primary mb-4">
            Почему это важно
          </h2>
          <p className="text-b2b-text-secondary text-lg max-w-2xl mx-auto">
            Статистика показывает: удержание клиентов — ключ к успеху клуба
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Main reason for customer churn */}
          <StatCard 
            icon={<Users className="w-6 h-6" />}
            value="40%"
            label="бросают играть из-за отсутствия партнера"
            sublabel="Помогите им найти партнёров — они останутся"
            source="¹"
            sourceLink="https://gitnux.org/tennis-participation-statistics/"
            variant="danger"
          />

          {/* Card 2: Acquisition vs retention cost */}
          <StatCard 
            icon={<TrendingDown className="w-6 h-6" />}
            value="7–9x"
            label="дороже привлечь нового клиента"
            sublabel="чем удержать существующего"
            source="²"
            sourceLink="https://www.glofox.com/blog/the-gym-membership-retention-statistics-worth-retaining-in-2019/"
            variant="warning"
          />

          {/* Card 3: Retention ROI */}
          <StatCard 
            icon={<TrendingUp className="w-6 h-6" />}
            value="+25–95%"
            label="рост прибыли при повышении удержания на 5%"
            sublabel="Фокус на текущих клиентах = больше прибыли"
            source="³"
            sourceLink="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
            variant="success"
          />

          {/* Card 4: Proof that it works */}
          <StatCard 
            icon={<UserCheck className="w-6 h-6" />}
            value="92%"
            label="игроков возвращаются в падел"
            sublabel="после первой игры — формируйте привычку"
            source="⁴"
            sourceLink="https://playtomic.com/global-padel-report"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
