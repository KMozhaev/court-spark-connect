import { Envelope, Phone } from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white/70">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="/" className="font-display text-2xl font-extrabold text-white">
              Courtoo
            </a>
            <p className="text-sm">
              Твой ракеточный круг
            </p>
          </div>

          {/* Navigation Column */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-white text-base">
                Для игроков
              </h4>
              <nav className="space-y-3">
                <a
                  href="#how-it-works"
                  className="block text-sm hover:text-white transition-colors"
                >
                  Как это работает
                </a>
                <a
                  href="#features"
                  className="block text-sm hover:text-white transition-colors"
                >
                  Возможности
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-white text-base">
                Для клубов
              </h4>
              <nav className="space-y-3">
                <a
                  href="https://courtoo.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-white transition-colors"
                >
                  Подключить клуб
                </a>
                <a
                  href="https://courtoo.ru#plans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-white transition-colors"
                >
                  Тарифы
                </a>
              </nav>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-base">
              Контакты
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:office@courtoo.ru"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Envelope size={16} weight="duotone" />
                office@courtoo.ru
              </a>
              <a
                href="tel:+79150954686"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Phone size={16} weight="duotone" />
                +7 915 095 46 86
              </a>
            </div>
            <div className="text-xs space-y-1 pt-4 text-white/50">
              <p>ИНН 505308480137</p>
              <p>ОГРНИП 321774600306142</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {currentYear} Courtoo. Все права защищены.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <span>•</span>
            <a
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;