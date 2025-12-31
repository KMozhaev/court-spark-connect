const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <a
          href="/"
          className="inline-block font-display text-2xl font-extrabold mb-4"
        >
          Courtoo
        </a>

        {/* Tagline */}
        <p className="text-white/60 mb-6">
          Играй в падел и теннис без лишних проблем
        </p>

        {/* Copyright */}
        <p className="text-sm text-white/40">
          © {currentYear} Courtoo. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
