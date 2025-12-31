import { useState, useEffect } from "react";
import { CaretDown, Rocket } from "@phosphor-icons/react";
import screen1 from "@/assets/screen-1.jpeg";
import screen2 from "@/assets/screen-2.jpeg";
import screen3 from "@/assets/screen-3.jpeg";

const screenshots = [screen1, screen2, screen3];

const HeroSection = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden gradient-hero">
      {/* Decorative Circle */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none hero-decoration" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green animate-fade-in">
              <Rocket size={18} weight="duotone" />
              <span className="font-medium text-sm">Запуск в марте 2025</span>
            </div>

            {/* Headline */}
            <h1 
              className="text-display-xl text-foreground animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Не можешь найти партнера для игры?
            </h1>

            {/* Subheadline */}
            <p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Courtoo объединяет игроков в падел и теннис. Находи партнёров, 
              бронируй корты и играй больше — всё в одном приложении.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="#waitlist"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-full btn-hover"
              >
                Получить ранний доступ
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] md:w-[320px] phone-float">
              {/* Phone Frame */}
              <div className="phone-frame">
                {/* Notch */}
                <div className="phone-notch" />
                
                {/* Screen */}
                <div className="phone-screen relative aspect-[9/19]">
                  {screenshots.map((screen, index) => (
                    <img
                      key={index}
                      src={screen}
                      alt={`Courtoo экран ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain bg-white transition-opacity duration-500 ${
                        currentScreen === index ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-sm font-medium">Листай вниз</span>
          <CaretDown size={20} weight="bold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;