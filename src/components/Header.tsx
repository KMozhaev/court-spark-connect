import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isPlayers = location.pathname === "/players";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
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
        {/* CSS Grid: 3 columns [logo] [switcher] [right] */}
        <div className="hidden md:grid grid-cols-3 items-center h-20">
          {/* Logo - Left */}
          <Link to="/players" className="font-display font-extrabold text-2xl text-b2b-text-primary justify-self-start">
            Courtoo
          </Link>

          {/* Toggle Switch - Center */}
          <div className="flex items-center bg-slate-100 rounded-full p-1 border-2 border-slate-200 justify-self-center">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isPlayers
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

          {/* CTA - Right */}
          <div className="flex items-center gap-4 justify-self-end">
            <Button
              onClick={scrollToWaitlist}
              className="bg-b2b-primary hover:bg-b2b-primary-hover text-white rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Записаться в лист ожидания
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between h-20">
          <Link to="/players" className="font-display font-extrabold text-2xl text-b2b-text-primary">
            Courtoo
          </Link>
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
                className={`flex-1 text-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  !isPlayers
                    ? "bg-b2b-primary text-white shadow-md"
                    : "text-b2b-text-secondary"
                }`}
              >
                Для клубов
              </Link>
              <Link
                to="/players"
                className={`flex-1 text-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isPlayers
                    ? "bg-b2b-primary text-white shadow-md"
                    : "text-b2b-text-secondary"
                }`}
              >
                Для игроков
              </Link>
            </div>

            <Button
              onClick={scrollToWaitlist}
              className="w-full bg-b2b-primary hover:bg-b2b-primary-hover text-white rounded-lg py-3 font-semibold"
            >
              Записаться в лист ожидания
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
