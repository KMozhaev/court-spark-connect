import { Envelope, Phone, TelegramLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="font-display font-extrabold text-2xl mb-2">
              Courtoo
            </div>
            <p className="text-white/60">
              Играй в падел и теннис без лишних проблем
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:office@courtoo.ru"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Envelope size={20} weight="duotone" />
              <span className="hidden sm:inline">office@courtoo.ru</span>
            </a>
            <a 
              href="tel:+79150954686"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Phone size={20} weight="duotone" />
              <span className="hidden sm:inline">+7 (915) 095-46-86</span>
            </a>
            <a 
              href="https://t.me/kirillmozhaev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <TelegramLogo size={20} weight="duotone" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © 2025 Courtoo. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
