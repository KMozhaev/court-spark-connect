import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isB2B = location.pathname === "/" || location.pathname === "/b2b";
  const isPlayers = location.pathname === "/players";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-b2b-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop: CSS Grid with 3 columns */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-20">
          {/* Left: Logo */}
          <div className="justify-self-start">
            <Link to={isPlayers ? "/players" : "/"} className="font-display font-extrabold text-2xl text-b2b-text-primary">
              Courtoo
            </Link>
          </div>

          {/* Center: Toggle Switch - always centered */}
          <div className="justify-self-center flex items-center bg-slate-100 rounded-full p-1 border-2 border-slate-200">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isB2B
                  ? "bg-b2b-primary text-white shadow-md"
                  : "text-b2b-text-secondary hover:text-b2b-text-primary"
              }`}
            >
              Для клубов
            </Link>
            <Link
              to="/players"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isPlayers
                  ? "bg-b2b-primary text-white shadow-md"
                  : "text-b2b-text-secondary hover:text-b2b-text-primary"
              }`}
            >
              Для игроков
            </Link>
          </div>

          {/* Right: Nav + CTA - visibility hidden on Players page to preserve layout */}
          <div className={`justify-self-end flex items-center gap-8 ${isPlayers ? "invisible" : ""}`}>
            <nav className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-b2b-text-secondary hover:text-b2b-primary transition-colors"
              >
                Возможности
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium text-b2b-text-secondary hover:text-b2b-primary transition-colors"
              >
                Тарифы
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-b2b-text-secondary hover:text-b2b-primary transition-colors"
              >
                Контакты
              </button>
            </nav>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-b2b-primary hover:bg-b2b-primary-hover text-white rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Оставить заявку
            </Button>
          </div>
        </div>

        {/* Mobile: Flex layout */}
        <div className="md:hidden flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={isPlayers ? "/players" : "/"} className="font-display font-extrabold text-2xl text-b2b-text-primary">
            Courtoo
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-b2b-text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} weight="bold" />
            ) : (
              <List size={28} weight="bold" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-b2b-border animate-fade-in bg-white">
            {/* Mobile Toggle */}
            <div className="flex items-center bg-slate-100 rounded-full p-1 mb-6 border-2 border-slate-200">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex-1 text-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isB2B
                    ? "bg-b2b-primary text-white shadow-md"
                    : "text-b2b-text-secondary"
                }`}
              >
                Для клубов
              </Link>
              <Link
                to="/players"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex-1 text-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isPlayers
                    ? "bg-b2b-primary text-white shadow-md"
                    : "text-b2b-text-secondary"
                }`}
              >
                Для игроков
              </Link>
            </div>

            {/* Nav links - only show on B2B */}
            {isB2B && (
              <nav className="flex flex-col gap-4 mb-6">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-b2b-text-secondary hover:text-b2b-primary transition-colors"
                >
                  Возможности
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-b2b-text-secondary hover:text-b2b-primary transition-colors"
                >
                  Тарифы
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-b2b-text-secondary hover:text-b2b-primary transition-colors"
                >
                  Контакты
                </button>
              </nav>
            )}

            {/* CTA Button */}
            <Button
              onClick={() => {
                if (isPlayers) {
                  scrollToSection("waitlist");
                } else {
                  scrollToSection("contact");
                }
              }}
              className="w-full bg-b2b-primary hover:bg-b2b-primary-hover text-white rounded-lg py-3 font-semibold"
            >
              {isPlayers ? "Записаться в лист ожидания" : "Оставить заявку"}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
