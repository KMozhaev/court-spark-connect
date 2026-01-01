import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  PaperPlaneTilt, 
  Phone, 
  Envelope, 
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
    contactName: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation - only phone is required
    if (!formData.phone.trim()) {
      toast({
        title: "Заполните обязательные поля",
        description: "Телефон обязателен",
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
      <section id="contact" className="py-20 lg:py-28 bg-slate-100/50">
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
    <section id="contact" className="py-20 lg:py-28 bg-slate-100/50">
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
                  className="border-b2b-border focus:border-b2b-primary bg-white/60"
                  maxLength={20}
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
                  className="border-b2b-border focus:border-b2b-primary bg-white/60"
                  maxLength={100}
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
                  className="border-b2b-border focus:border-b2b-primary min-h-[100px] resize-none bg-white/60"
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
            <div className="bg-white rounded-2xl p-8 mb-8 border border-b2b-border">
              <h3 className="font-display font-bold text-xl text-b2b-text-primary mb-6">
                Или свяжитесь напрямую
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:office@courtoo.ru"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-b2b-border hover:border-b2b-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-b2b-primary/10 flex items-center justify-center group-hover:bg-b2b-primary/20 transition-colors">
                    <Envelope size={24} weight="duotone" className="text-b2b-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-b2b-text-muted">Email</div>
                    <div className="font-medium text-b2b-text-primary">office@courtoo.ru</div>
                  </div>
                </a>

                <a 
                  href="tel:+79150954686"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-b2b-border hover:border-b2b-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-b2b-primary/10 flex items-center justify-center group-hover:bg-b2b-primary/20 transition-colors">
                    <Phone size={24} weight="duotone" className="text-b2b-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-b2b-text-muted">Телефон</div>
                    <div className="font-medium text-b2b-text-primary">+7 (915) 095-46-86</div>
                  </div>
                </a>

                <a 
                  href="https://t.me/kirillmozhaev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-b2b-border hover:border-b2b-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-b2b-primary/10 flex items-center justify-center group-hover:bg-b2b-primary/20 transition-colors">
                    <TelegramLogo size={24} weight="duotone" className="text-b2b-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-b2b-text-muted">Telegram</div>
                    <div className="font-medium text-b2b-text-primary">Написать в Telegram</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Trust signals */}
            <div className="bg-gradient-to-br from-b2b-primary/5 to-cyan/5 rounded-2xl p-6 border border-b2b-primary/10">
              <h4 className="font-display font-bold text-b2b-text-primary mb-4">
                Почему клубы выбирают нас
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-b2b-text-secondary">
                  <CheckCircle size={20} weight="duotone" className="text-b2b-success shrink-0 mt-0.5" />
                  <span>Единственная РФ платформа созданная специально под задачи теннисных и падел клубов</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-b2b-text-secondary">
                  <CheckCircle size={20} weight="duotone" className="text-b2b-success shrink-0" />
                  Подключение за 1 день
                </li>
                <li className="flex items-center gap-3 text-sm text-b2b-text-secondary">
                  <CheckCircle size={20} weight="duotone" className="text-b2b-success shrink-0" />
                  Бесплатный пробный период 1 месяц
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
