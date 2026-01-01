import { Envelope, Phone, TelegramLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link to="/players" className="font-display font-extrabold text-2xl block mb-2">
              Courtoo
            </Link>
            <p className="text-slate-400">
              Играй в падел и теннис без лишних проблем
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:office@courtoo.ru"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Envelope size={20} weight="duotone" />
              <span className="hidden sm:inline">office@courtoo.ru</span>
            </a>
            <a
              href="tel:+79150954686"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Phone size={20} weight="duotone" />
              <span className="hidden sm:inline">+7 915 095-46-86</span>
            </a>
            <a
              href="https://t.me/kirillmozhaev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              title="Telegram"
            >
              <TelegramLogo size={20} weight="duotone" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Courtoo. Все права защищены.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
