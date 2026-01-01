import { Link } from "react-router-dom";
import { Envelope, Phone, TelegramLogo } from "@phosphor-icons/react";

const B2BFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display font-extrabold text-2xl text-white mb-4 block">
              Courtoo
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Система управления для падел и теннисных клубов. Автоматизируйте бронирование, удерживайте клиентов и
              зарабатывайте больше.
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/kirillmozhaev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-b2b-primary transition-colors"
                aria-label="Telegram"
              >
                <TelegramLogo size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Контакты
                </a>
              </li>
              <li>
                <Link to="/players" className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Для игроков
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:office@courtoo.ru"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Envelope size={18} weight="duotone" />
                  office@courtoo.ru
                </a>
              </li>
              <li>
                <a
                  href="tel:+79150954686"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone size={18} weight="duotone" />
                  +7 (915) 095-46-86
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/kirillmozhaev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <TelegramLogo size={18} weight="duotone" />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footnotes */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h5 className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Источники</h5>
          <div className="grid md:grid-cols-2 gap-2 text-xs text-slate-500">
            <a href="https://gitnux.org/tennis-participation-statistics" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">¹ gitnux.org/tennis-participation-statistics (40% lack of partner)</a>
            <a href="https://glofox.com/retention-statistics" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">² glofox.com/retention-statistics (7-9x CAC vs retention)</a>
            <a href="https://hbr.org/value-of-keeping-customers" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">³ hbr.org/value-of-keeping-customers (+25-95% profit)</a>
            <a href="https://playtomic.com/global-padel-report" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">⁴ playtomic.com/global-padel-report (92% return rate)</a>
            <a href="https://financialmodelslab.com/tennis-club-kpi" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">⁵ financialmodelslab.com/tennis-club-kpi (65% utilization target)</a>
            <a href="https://usta.com/participation-report-2025" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">⁶ usta.com/participation-report-2025 (25.7M players)</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {currentYear} Courtoo. Все права защищены.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default B2BFooter;
