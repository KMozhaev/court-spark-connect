import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, CheckCircle } from "@phosphor-icons/react";
import { toast } from "sonner";

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    toast.success("Вы успешно записались в лист ожидания!");

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="waitlist"
      className="py-20 lg:py-28 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Запишись в лист ожидания
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-lg mb-10">
            Запуск в марте 2025. Успей получить эксклюзивные условия для первых пользователей.
          </p>

          {/* Promo Box */}
          <div className="bg-b2b-primary/20 border border-b2b-primary/30 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-4 text-left">
              <Gift size={32} weight="duotone" className="text-b2b-primary flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-lg mb-1">
                  Бонус для ранних пользователей
                </h3>
                <p className="text-white/70">
                  Первые 500 человек получат бесплатный месяц Premium и скидку 20% на первый абонемент
                </p>
              </div>
            </div>
          </div>

          {/* Form or Success Message */}
          {isSubmitted ? (
            <div className="bg-b2b-success/20 border border-b2b-success/30 rounded-2xl p-8 animate-scale-in">
              <CheckCircle size={48} weight="fill" className="text-b2b-success mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl mb-2">Спасибо!</h3>
              <p className="text-white/70">
                Мы отправим вам приглашение в марте 2025
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <Input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-b2b-primary focus:ring-b2b-primary"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-b2b-primary focus:ring-b2b-primary"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-b2b-primary focus:ring-b2b-primary"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-b2b-primary hover:bg-b2b-primary-hover text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {isLoading ? "Отправка..." : "Записаться в лист ожидания"}
              </Button>
              <p className="text-white/50 text-sm">
                Мы не передаём ваши данные третьим лицам и не спамим
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
