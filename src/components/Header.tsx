import { useState, useEffect } from "react";
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
          <a href="/" className="font-display font-extrabold text-2xl text-foreground">
            Courtoo
          </a>

          {/* Desktop CTA */}
          <div className="hidden md:block">
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
