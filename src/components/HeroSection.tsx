import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TennisBall, ArrowRight } from "@phosphor-icons/react";
import screenHome from "@/assets/screen-home.jpeg";
import screenClub from "@/assets/screen-club.jpeg";
import screenBooking from "@/assets/screen-booking.jpeg";

const slides = [screenHome, screenClub, screenBooking];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-b2b-surface">
      {/* Decorative gradient circle */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-b2b-primary/10 to-cyan/10 rounded-full blur-3xl animate-float opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-b2b-primary/10 rounded-full mb-6 animate-fade-in">
              <TennisBall size={20} weight="duotone" className="text-b2b-primary" />
              <span className="text-sm font-semibold text-b2b-primary">
                Запуск в марте 2025
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-b2b-text-primary mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Не можешь найти{" "}
              <span className="text-b2b-primary">партнера</span>{" "}
              для игры?
            </h1>

            {/* Subtext */}
            <p className="text-lg text-b2b-text-secondary max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Courtoo объединяет игроков в падел и теннис, упрощает бронирование кортов и помогает экономить на аренде.
            </p>

            {/* CTA */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button
                onClick={scrollToWaitlist}
                className="bg-b2b-primary hover:bg-b2b-primary-hover text-white rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              >
                Получить ранний доступ
                <ArrowRight size={20} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-phone-float" style={{ perspective: "1000px" }}>
              {/* Phone Frame */}
              <div className="phone-mockup w-[280px] md:w-[320px] lg:w-[340px]">
                <div className="phone-screen aspect-[9/19.5] relative">
                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide}
                      alt={`Экран приложения ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-b2b-primary w-6"
                        : "bg-b2b-border hover:bg-b2b-text-muted"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
