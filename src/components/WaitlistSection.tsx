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
      className="py-20 lg:py-28 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Запишись в лист ожидания
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-lg mb-10">
            Запуск в марте 2025. Успей получить эксклюзивные условия для первых пользователей.
          </p>

          {/* Promo Box */}
          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-4 text-left">
              <Gift size={32} weight="duotone" className="text-cyan-600 flex-shrink-0" />
              <div>
                <h3 className="font-display font-bold text-lg mb-1 text-slate-900">
                  Бонус для ранних пользователей
                </h3>
                <p className="text-slate-600">
                  Первые 500 человек получат бесплатный месяц Premium и скидку 20% на первый абонемент
                </p>
              </div>
            </div>
          </div>

          {/* Form or Success Message */}
          {isSubmitted ? (
            <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-8 animate-scale-in">
              <CheckCircle size={48} weight="fill" className="text-cyan-600 mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl mb-2 text-slate-900">Спасибо!</h3>
              <p className="text-slate-600">
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
                className="h-14 rounded-lg bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-14 rounded-lg bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-14 rounded-lg bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {isLoading ? "Отправка..." : "Записаться в лист ожидания"}
              </Button>
              <p className="text-slate-500 text-sm">
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
