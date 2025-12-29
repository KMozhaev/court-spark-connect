import { ChevronDown } from "lucide-react";
import mockupHome from "@/assets/mockup-home.jpeg";
import mockupClub from "@/assets/mockup-club.jpeg";
import mockupMatch from "@/assets/mockup-match.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden gradient-radial noise-overlay">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary/50 bg-primary/10 neon-border animate-fade-in">
              <span className="text-xl">🔥</span>
              <span className="font-medium text-sm text-foreground">
                Первые 100 человек получают скидку 30%
              </span>
            </div>

            {/* Headline */}
            <h1 className="space-y-2">
              <span className="block text-display-xl md:text-[4.5rem] lg:text-[5rem] text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Найди игроков.
              </span>
              <span className="block text-display-xl md:text-[4.5rem] lg:text-[5rem] text-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Забронируй корт.
              </span>
              <span className="block text-display-xl md:text-[4.5rem] lg:text-[5rem] text-primary neon-text animate-fade-in" style={{ animationDelay: "0.3s" }}>
                Сыграй сегодня.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Экосистема для игроков в падел и теннис.
              <br />
              Все корты города на одной платформе.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="#waitlist"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-full hover:scale-105 transition-all duration-300 pulse-glow"
              >
                Записаться в лист ожидания
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-foreground font-display font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                Как это работает
                <ChevronDown size={18} />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span> Бесплатно навсегда
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span> Работает в браузере
              </span>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="lg:col-span-5 relative h-[500px] md:h-[600px] lg:h-[700px] hidden lg:block">
            {/* Main Phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] z-30 float">
              <div className="phone-mockup phone-mockup-glow">
                <img
                  src={mockupHome}
                  alt="Courtoo главный экран"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>

            {/* Secondary Phone - Back Left */}
            <div className="absolute top-[5%] left-[0%] w-[200px] z-10 float-delayed opacity-70">
              <div className="phone-mockup rotate-[-8deg]">
                <img
                  src={mockupClub}
                  alt="Courtoo клуб"
                  className="w-full h-auto blur-[1px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Tertiary Phone - Back Right */}
            <div className="absolute bottom-[5%] right-[0%] w-[200px] z-10 float-slow opacity-70">
              <div className="phone-mockup rotate-[8deg]">
                <img
                  src={mockupMatch}
                  alt="Courtoo матч"
                  className="w-full h-auto blur-[1px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground bounce-slow">
          <span className="text-sm">Листай вниз</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
