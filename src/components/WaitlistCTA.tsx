import { useState, FormEvent, useRef, useEffect } from "react";
import { toast } from "sonner";

const WaitlistCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    
    if (!email) {
      toast.error("Пожалуйста, введите email");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Вы успешно записаны в лист ожидания!");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-cta" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/90 text-foreground mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xl">🎉</span>
            <span className="font-medium text-sm">Эксклюзивное предложение</span>
          </div>

          {/* Title */}
          <h2
            className={`text-display-lg md:text-display-xl text-primary-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Стань одним из первых 100
          </h2>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Запишись в лист ожидания и получи 30% скидку на первое бронирование
            через приложение.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <input
              type="email"
              placeholder="Твой email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 md:h-16 px-6 md:px-8 bg-foreground/95 text-background rounded-full text-base font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/50 transition-all"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-14 md:h-16 px-8 md:px-12 bg-background text-foreground font-display font-semibold rounded-full hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? "Загрузка..." : "Записаться →"}
            </button>
          </form>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>✓</span> Отписаться можно в любой момент
            </span>
            <span className="flex items-center gap-2">
              <span>✓</span> Никакого спама
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
