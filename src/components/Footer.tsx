import { Envelope, Phone, TelegramLogo } from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="/" className="font-display text-2xl font-bold text-foreground">
              Courtoo
            </a>
            <p className="text-muted-foreground text-sm">
              Твой ракеточный круг
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/courtoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <TelegramLogo size={24} weight="duotone" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">
                Для игроков
              </h4>
              <nav className="space-y-3">
                <a
                  href="#how-it-works"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Как это работает
                </a>
                <a
                  href="#features"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Возможности
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">
                Для клубов
              </h4>
              <nav className="space-y-3">
                <a
                  href="https://courtoo.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Подключить клуб
                </a>
                <a
                  href="https://courtoo.ru#plans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Тарифы
                </a>
              </nav>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">
              Контакты
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:office@courtoo.ru"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Envelope size={16} weight="duotone" />
                office@courtoo.ru
              </a>
              <a
                href="tel:+79150954686"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} weight="duotone" />
                +7 915 095 46 86
              </a>
            </div>
            <div className="text-xs text-muted-foreground space-y-1 pt-4">
              <p>ИНН 505308480137</p>
              <p>ОГРНИП 321774600306142</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Courtoo. Все права защищены.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Политика конфиденциальности
            </a>
            <span>•</span>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
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
