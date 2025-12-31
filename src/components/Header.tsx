import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-2xl font-extrabold text-foreground hover:text-primary transition-colors"
          >
            Courtoo
          </a>

          {/* CTA Button */}
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold text-sm rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:bg-blue-dark transition-all duration-300"
          >
            Записаться в лист ожидания
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
