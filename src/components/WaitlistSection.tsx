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
      className="py-20 lg:py-28 bg-b2b-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-b2b-text-primary mb-4">
            Запишись в лист ожидания
          </h2>

          {/* Subtitle */}
          <p className="text-b2b-text-secondary text-lg mb-10">
            Запуск в марте 2025. Успей получить эксклюзивные условия для первых пользователей.
          </p>

          {/* Promo Box */}
          <div className="bg-b2b-primary/10 border border-b2b-primary/20 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-4 text-left">
              <Gift size={32} weight="duotone" className="text-b2b-primary flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-lg mb-1 text-b2b-text-primary">
                  Бонус для ранних пользователей
                </h3>
                <p className="text-b2b-text-secondary">
                  Первые 500 человек получат бесплатный месяц Premium и скидку 20% на первый абонемент
                </p>
              </div>
            </div>
          </div>

          {/* Form or Success Message */}
          {isSubmitted ? (
            <div className="bg-b2b-success/10 border border-b2b-success/20 rounded-2xl p-8 animate-scale-in">
              <CheckCircle size={48} weight="fill" className="text-b2b-success mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl mb-2 text-b2b-text-primary">Спасибо!</h3>
              <p className="text-b2b-text-secondary">
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
                className="h-14 rounded-lg bg-b2b-background-secondary border-b2b-border text-b2b-text-primary placeholder:text-b2b-text-muted focus:border-b2b-primary focus:ring-b2b-primary"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-14 rounded-lg bg-b2b-background-secondary border-b2b-border text-b2b-text-primary placeholder:text-b2b-text-muted focus:border-b2b-primary focus:ring-b2b-primary"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-14 rounded-lg bg-b2b-background-secondary border-b2b-border text-b2b-text-primary placeholder:text-b2b-text-muted focus:border-b2b-primary focus:ring-b2b-primary"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-b2b-primary hover:bg-b2b-primary-hover text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {isLoading ? "Отправка..." : "Записаться в лист ожидания"}
              </Button>
              <p className="text-b2b-text-muted text-sm">
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
