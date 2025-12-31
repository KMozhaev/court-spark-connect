import { useState, FormEvent, useRef, useEffect } from "react";
import { toast } from "sonner";
import { Gift, CheckCircle } from "@phosphor-icons/react";

const WaitlistCTA = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSuccess(true);
    toast.success("Вы успешно записаны в лист ожидания!");
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 3000);
    
    setIsSubmitting(false);
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="section-padding gradient-dark relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2
            className={`text-display-lg text-white mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Запишись в лист ожидания
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg text-white/70 mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Запуск в марте 2025. Успей получить эксклюзивные условия для первых пользователей.
          </p>

          {/* Promo Box */}
          <div
            className={`p-6 rounded-2xl bg-accent/20 border border-accent/30 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift size={24} weight="duotone" className="text-accent" />
              <h3 className="text-lg font-display font-bold text-white">
                Бонус для ранних пользователей
              </h3>
            </div>
            <p className="text-white/80">
              Первые 500 человек получат бесплатный месяц Premium и скидку 20% на первый абонемент
            </p>
          </div>

          {/* Form or Success */}
          {isSuccess ? (
            <div
              className="p-6 rounded-2xl bg-accent/20 border border-accent/30"
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle size={24} weight="fill" className="text-accent" />
                <p className="text-white font-semibold">
                  Спасибо! Мы отправим вам приглашение в марте 2025
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col gap-4 max-w-md mx-auto transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-glass"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-glass"
                required
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input-glass"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white font-display font-bold rounded-full hover:-translate-y-0.5 hover:shadow-xl hover:bg-blue-dark transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Отправка..." : "Записаться в лист ожидания"}
              </button>
              <p className="text-sm text-white/50">
                Мы не передаём ваши данные третьим лицам и не спамим
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
