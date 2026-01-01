import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          ? "glass border-b border-border/50 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/players" className="font-display font-extrabold text-2xl text-foreground">
            Courtoo
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Для клубов →
            </Link>
            <Button
              onClick={scrollToWaitlist}
              className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6 py-2.5 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary-glow"
            >
              Записаться в лист ожидания
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
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
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <Link 
              to="/" 
              className="block text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              Для клубов →
            </Link>
            <Button
              onClick={scrollToWaitlist}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-full py-3 font-semibold"
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
