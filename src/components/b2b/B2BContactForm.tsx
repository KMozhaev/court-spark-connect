import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  PaperPlaneTilt, 
  Phone, 
  Envelope, 
  MapPin, 
  TelegramLogo,
  CheckCircle,
  SpinnerGap
} from "@phosphor-icons/react";
import { useToast } from "@/hooks/use-toast";

const B2BContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clubName: "",
    contactName: "",
    email: "",
    phone: "",
    courtsCount: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.clubName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Заполните обязательные поля",
        description: "Название клуба, email и телефон обязательны",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Некорректный email",
        description: "Пожалуйста, введите корректный email адрес",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов",
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-b2b-success/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} weight="duotone" className="text-b2b-success" />
          </div>
          <h2 className="font-display font-bold text-3xl text-b2b-text-primary mb-4">
            Спасибо за заявку!
          </h2>
          <p className="text-b2b-text-secondary text-lg mb-8">
            Мы свяжемся с вами в течение 24 часов для обсуждения деталей и демонстрации системы.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-b2b-primary text-b2b-primary hover:bg-b2b-primary hover:text-white"
          >
            Отправить ещё одну заявку
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Form */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-b2b-text-primary mb-4">
              Оставьте заявку на демонстрацию
            </h2>
            <p className="text-b2b-text-secondary text-lg mb-8">
              Расскажите о вашем клубе, и мы покажем как Courtoo поможет вам зарабатывать больше
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="clubName" className="block text-sm font-medium text-b2b-text-primary mb-2">
                    Название клуба *
                  </label>
                  <Input
                    id="clubName"
                    name="clubName"
                    value={formData.clubName}
                    onChange={handleChange}
                    placeholder="Tennis Club Moscow"
                    className="border-b2b-border focus:border-b2b-primary"
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-b2b-text-primary mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="border-b2b-border focus:border-b2b-primary"
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-b2b-text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="info@club.ru"
                    className="border-b2b-border focus:border-b2b-primary"
                    maxLength={255}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-b2b-text-primary mb-2">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="border-b2b-border focus:border-b2b-primary"
                    maxLength={20}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="courtsCount" className="block text-sm font-medium text-b2b-text-primary mb-2">
                  Количество кортов
                </label>
                <Input
                  id="courtsCount"
                  name="courtsCount"
                  value={formData.courtsCount}
                  onChange={handleChange}
                  placeholder="Например: 4 теннисных + 2 падел"
                  className="border-b2b-border focus:border-b2b-primary"
                  maxLength={50}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-b2b-text-primary mb-2">
                  Комментарий
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите о ваших задачах или вопросах..."
                  className="border-b2b-border focus:border-b2b-primary min-h-[100px] resize-none"
                  maxLength={1000}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-b2b-primary hover:bg-b2b-primary-hover text-white py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <SpinnerGap size={20} className="animate-spin mr-2" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <PaperPlaneTilt size={20} weight="bold" className="mr-2" />
                    Отправить заявку
                  </>
                )}
              </Button>

              <p className="text-xs text-b2b-text-muted text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:pl-8">
            <div className="bg-b2b-surface rounded-2xl p-8 mb-8">
              <h3 className="font-display font-bold text-xl text-b2b-text-primary mb-6">
                Или свяжитесь напрямую
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:hello@courtoo.ru"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-b2b-border hover:border-b2b-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-b2b-primary/10 flex items-center justify-center group-hover:bg-b2b-primary/20 transition-colors">
                    <Envelope size={24} weight="duotone" className="text-b2b-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-b2b-text-muted">Email</div>
                    <div className="font-medium text-b2b-text-primary">hello@courtoo.ru</div>
                  </div>
                </a>

                <a 
                  href="tel:+74951234567"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-b2b-border hover:border-b2b-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-b2b-primary/10 flex items-center justify-center group-hover:bg-b2b-primary/20 transition-colors">
                    <Phone size={24} weight="duotone" className="text-b2b-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-b2b-text-muted">Телефон</div>
                    <div className="font-medium text-b2b-text-primary">+7 (495) 123-45-67</div>
                  </div>
                </a>

                <a 
                  href="https://t.me/courtoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-b2b-border hover:border-b2b-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-b2b-primary/10 flex items-center justify-center group-hover:bg-b2b-primary/20 transition-colors">
                    <TelegramLogo size={24} weight="duotone" className="text-b2b-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-b2b-text-muted">Telegram</div>
                    <div className="font-medium text-b2b-text-primary">@courtoo</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-b2b-border">
                  <div className="w-12 h-12 rounded-xl bg-b2b-primary/10 flex items-center justify-center">
                    <MapPin size={24} weight="duotone" className="text-b2b-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-b2b-text-muted">Офис</div>
                    <div className="font-medium text-b2b-text-primary">Москва, Россия</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="bg-gradient-to-br from-b2b-primary/5 to-cyan/5 rounded-2xl p-6 border border-b2b-primary/10">
              <h4 className="font-display font-bold text-b2b-text-primary mb-4">
                Почему клубы выбирают нас
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-b2b-text-secondary">
                  <CheckCircle size={20} weight="duotone" className="text-b2b-success shrink-0" />
                  Подключение за 1 день
                </li>
                <li className="flex items-center gap-3 text-sm text-b2b-text-secondary">
                  <CheckCircle size={20} weight="duotone" className="text-b2b-success shrink-0" />
                  Бесплатный пробный период 1 месяц
                </li>
                <li className="flex items-center gap-3 text-sm text-b2b-text-secondary">
                  <CheckCircle size={20} weight="duotone" className="text-b2b-success shrink-0" />
                  Обучение персонала включено
                </li>
                <li className="flex items-center gap-3 text-sm text-b2b-text-secondary">
                  <CheckCircle size={20} weight="duotone" className="text-b2b-success shrink-0" />
                  Техподдержка на русском языке
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BContactForm;
