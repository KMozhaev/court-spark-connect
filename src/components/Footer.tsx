import { Mail, Phone } from "lucide-react";

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
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
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
                <Mail size={16} />
                office@courtoo.ru
              </a>
              <a
                href="tel:+79150954686"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} />
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
