import { useState, useEffect } from "react";
import { TennisBall } from "@phosphor-icons/react";
import mockupHome from "@/assets/mockup-home.jpeg";
import mockupClub from "@/assets/mockup-club.jpeg";
import mockupBookings from "@/assets/mockup-bookings.jpeg";

const slides = [
  { image: mockupHome, alt: "Главный экран" },
  { image: mockupClub, alt: "Бронирование" },
  { image: mockupBookings, alt: "Мои брони" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden gradient-hero">
      {/* Background Circle */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full animate-fade-in-up">
              <TennisBall size={20} weight="duotone" />
              <span>Запуск в марте 2025</span>
            </div>

            {/* Headline */}
            <h1 className="text-display-xl text-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Не можешь найти{" "}
              <span className="text-primary">партнера</span>{" "}
              для игры?
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Courtoo объединяет игроков в падел и теннис, упрощает бронирование кортов и помогает экономить на аренде.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-display font-bold rounded-full hover:-translate-y-1 hover:shadow-xl hover:bg-blue-dark transition-all duration-300"
              >
                Получить ранний доступ
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] md:w-[320px] animate-phone-float">
              {/* Phone Frame */}
              <div className="relative bg-gray-800 rounded-[40px] p-3 shadow-phone">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="relative bg-white rounded-[32px] overflow-hidden aspect-[9/19.5]">
                  {slides.map((slide, index) => (
                    <img
                      key={slide.alt}
                      src={slide.image}
                      alt={slide.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>

            {/* Slide Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
