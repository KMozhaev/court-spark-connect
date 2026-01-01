import { Link } from "react-router-dom";
import { Envelope, Phone, MapPin, TelegramLogo, InstagramLogo } from "@phosphor-icons/react";

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
                href="#"
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
                  href="mailto:hello@courtoo.ru"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Envelope size={18} />
                  hello@courtoo.ru
                </a>
              </li>
              <li>
                <a
                  href="tel:+74951234567"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-slate-400">
                  <MapPin size={18} />
                  Москва, Россия
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footnotes */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h5 className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Источники</h5>
          <div className="grid md:grid-cols-2 gap-2 text-xs text-slate-500">
            <p>¹ gitnux.org/tennis-participation-statistics (40% lack of partner)</p>
            <p>² glofox.com/retention-statistics (7-9x CAC vs retention)</p>
            <p>³ hbr.org/value-of-keeping-customers (+25-95% profit)</p>
            <p>⁴ playtomic.com/global-padel-report (92% return rate)</p>
            <p>⁵ financialmodelslab.com/tennis-club-kpi (65% utilization target)</p>
            <p>⁶ usta.com/participation-report-2025 (25.7M players)</p>
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
