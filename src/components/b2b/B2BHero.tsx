import { Check, ChartLineUp, Users, Target, ArrowCircleRight, TrendDown, TrendUp, UserCheck } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  sublabel: string;
  source: string;
  variant: "danger" | "warning" | "success" | "primary";
}

const variantStyles = {
  danger: {
    bg: "bg-white",
    border: "border-2 border-red-300 hover:border-red-400",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    valueColor: "text-red-600",
  },
  warning: {
    bg: "bg-white",
    border: "border-2 border-amber-300 hover:border-amber-400",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    valueColor: "text-amber-600",
  },
  success: {
    bg: "bg-white",
    border: "border-2 border-green-300 hover:border-green-400",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    valueColor: "text-green-600",
  },
  primary: {
    bg: "bg-white",
    border: "border-2 border-blue-300 hover:border-blue-400",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    valueColor: "text-blue-600",
  },
};

const StatCard = ({ icon, value, label, sublabel, source, variant }: StatCardProps) => {
  const styles = variantStyles[variant];
  return (
    <div className={`p-5 ${styles.bg} border ${styles.border} rounded-xl hover:shadow-md transition-all duration-300`}>
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-10 h-10 rounded-lg ${styles.iconBg} flex items-center justify-center shrink-0`}>
          <span className={styles.iconColor}>{icon}</span>
        </div>
        <div className={`text-2xl md:text-3xl font-display font-bold ${styles.valueColor}`}>
          {value}
          <sup className="text-xs text-b2b-text-muted ml-1">{source}</sup>
        </div>
      </div>
      <div className="text-sm font-medium text-b2b-text-primary mb-1">
        {label}
      </div>
      <div className="text-xs text-b2b-text-muted">
        {sublabel}
      </div>
    </div>
  );
};

const B2BHero = () => {
  const scrollToForm = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-[90vh] bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-display font-extrabold leading-[1.1] text-b2b-text-primary mb-6 tracking-tight">
              Корты простаивают, клиенты уходят молча, а вы не знаете откуда прибыль
            </h1>
            
            <p className="text-lg md:text-xl text-b2b-text-secondary mb-8 max-w-2xl">
              Courtoo автоматизирует бронирование и помогает клиентам находить партнёров — заполняйте дневные слоты, удерживайте существующих и зарабатывайте больше
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <StatCard 
                icon={<Users size={22} weight="duotone" />}
                value="40%"
                label="бросают игру из-за отсутствия партнёра"
                sublabel="Помогите им найти партнёров — они останутся"
                source="¹"
                variant="danger"
              />
              <StatCard 
                icon={<TrendDown size={22} weight="duotone" />}
                value="В 7-9 раз"
                label="дороже привлечь нового клиента"
                sublabel="чем удержать существующего"
                source="²"
                variant="warning"
              />
              <StatCard 
                icon={<TrendUp size={22} weight="duotone" />}
                value="+25-95%"
                label="рост прибыли при удержании +5%"
                sublabel="Фокус на существующих = больше прибыли"
                source="³"
                variant="success"
              />
              <StatCard 
                icon={<UserCheck size={22} weight="duotone" />}
                value="92%"
                label="игроков возвращаются в падел"
                sublabel="после первого раза — создайте привычку"
                source="⁴"
                variant="primary"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                onClick={scrollToForm}
                className="bg-b2b-primary hover:bg-b2b-primary-hover text-white rounded-lg px-10 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-h-[56px]"
              >
                Оставить заявку на демонстрацию
                <ArrowCircleRight size={24} className="ml-2" weight="bold" />
              </Button>
              <Button
                onClick={scrollToFeatures}
                variant="outline"
                className="border-2 border-b2b-primary text-b2b-primary hover:bg-b2b-primary hover:text-white [&:hover]:text-white rounded-lg px-10 py-4 text-base font-semibold transition-all duration-300 min-h-[56px]"
              >
                Посмотреть как работает
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-b2b-text-secondary">
              <div className="flex items-center gap-2">
                <Check className="text-b2b-success" size={20} weight="bold" />
                <span>Бесплатный пробный период 1 месяц</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-b2b-success" size={20} weight="bold" />
                <span>Подключение за 1 день</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-b2b-success" size={20} weight="bold" />
                <span>Сниженный процент эквайринга</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Dashboard Preview Placeholder */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-b2b-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 text-sm text-b2b-text-muted">courtoo.ru/admin</span>
                </div>
                
                {/* Mini Dashboard */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <ChartLineUp size={24} className="mx-auto text-b2b-primary mb-2" weight="duotone" />
                      <div className="text-2xl font-bold text-b2b-text-primary">78%</div>
                      <div className="text-xs text-b2b-text-muted">Загрузка</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <Users size={24} className="mx-auto text-b2b-success mb-2" weight="duotone" />
                      <div className="text-2xl font-bold text-b2b-text-primary">156</div>
                      <div className="text-xs text-b2b-text-muted">Клиентов</div>
                    </div>
                    <div className="bg-cyan-50 rounded-lg p-4 text-center">
                      <Target size={24} className="mx-auto text-cyan-500 mb-2" weight="duotone" />
                      <div className="text-2xl font-bold text-b2b-text-primary">23</div>
                      <div className="text-xs text-b2b-text-muted">Матчей</div>
                    </div>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="h-32 bg-gradient-to-t from-blue-100 to-transparent rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end justify-around px-2 gap-1">
                      {[40, 55, 45, 70, 65, 80, 75, 85, 78, 90, 85, 88].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-b2b-primary/80 rounded-t transition-all duration-500"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-b2b-text-muted">Загрузка за месяц</span>
                    <span className="text-b2b-success font-semibold">+12% ↑</span>
                  </div>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-b2b-border animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-b2b-success/20 flex items-center justify-center">
                    <Check size={20} className="text-b2b-success" weight="bold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-b2b-text-primary">Новая бронь</div>
                    <div className="text-xs text-b2b-text-muted">Корт 3 • 18:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BHero;
