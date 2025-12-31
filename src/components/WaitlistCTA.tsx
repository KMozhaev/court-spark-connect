import { useState, FormEvent, useRef, useEffect } from "react";
import { toast } from "sonner";
import { Gift, CheckCircle } from "@phosphor-icons/react";

const WaitlistCTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    
    if (!name.trim()) {
      toast.error("Пожалуйста, введите имя");
      return;
    }
    
    if (!email.trim()) {
      toast.error("Пожалуйста, введите email");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Пожалуйста, введите корректный email");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    toast.success("Вы успешно записаны в лист ожидания!");
    setIsSubmitting(false);
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="py-24 md:py-32 gradient-cta text-white"
    >
      <div className="container mx-auto max-w-2xl">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Title */}
          <h2 className="text-display-xl mb-6">
            Стань одним из первых
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
            Запишись в лист ожидания и получи ранний доступ к приложению.
          </p>

          {/* Promo Box */}
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-accent-green/20 border border-accent-green/30 mb-10">
            <Gift size={24} weight="duotone" className="text-accent-green" />
            <span className="text-base font-medium">
              30% скидка на первое бронирование для первых 100 участников
            </span>
          </div>

          {isSubmitted ? (
            /* Success State */
            <div className="p-8 rounded-3xl bg-accent-green/20 border border-accent-green/30">
              <CheckCircle size={64} weight="duotone" className="text-accent-green mx-auto mb-4" />
              <p className="text-xl font-semibold">
                Спасибо! Вы в списке ожидания.
              </p>
              <p className="text-white/70 mt-2">
                Мы сообщим вам о запуске приложения.
              </p>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-14 px-6 bg-white/10 border border-white/20 text-white rounded-full text-base placeholder:text-white/60 focus:outline-none focus:border-white/50 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 px-6 bg-white/10 border border-white/20 text-white rounded-full text-base placeholder:text-white/60 focus:outline-none focus:border-white/50 transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Телефон (опционально)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-14 px-6 bg-white/10 border border-white/20 text-white rounded-full text-base placeholder:text-white/60 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary text-white font-display font-bold text-lg rounded-full btn-hover disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Отправка..." : "Записаться →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;