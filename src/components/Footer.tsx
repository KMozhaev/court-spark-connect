const Footer = () => {
  return (
    <footer className="py-12 bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="font-display font-extrabold text-2xl mb-3">
          Courtoo
        </div>

        {/* Tagline */}
        <p className="text-white/60 mb-6">
          Играй в падел и теннис без лишних проблем
        </p>

        {/* Copyright */}
        <p className="text-white/40 text-sm">
          © 2025 Courtoo. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
