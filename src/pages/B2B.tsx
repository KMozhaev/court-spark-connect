import { Helmet } from "react-helmet";
import B2BHeader from "@/components/b2b/B2BHeader";
import B2BHero from "@/components/b2b/B2BHero";
import B2BFooter from "@/components/b2b/B2BFooter";

const B2B = () => {
  return (
    <>
      <Helmet>
        <title>Courtoo - Система управления для падел и теннисных клубов</title>
        <meta 
          name="description" 
          content="Автоматизация бронирования и управления клубом. Заполняйте корты, удерживайте клиентов, зарабатывайте больше. Бесплатный пробный период 1 месяц." 
        />
        <meta 
          name="keywords" 
          content="система бронирования кортов, crm для теннисного клуба, падел клуб автоматизация" 
        />
        <meta property="og:title" content="Courtoo - Система управления для клубов" />
        <meta property="og:description" content="Автоматизация бронирования и управления" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-b2b-background">
        <B2BHeader />
        <main>
          <B2BHero />
          
          {/* Placeholder sections for Phase 2 & 3 */}
          <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-display font-bold text-b2b-text-primary mb-4">
                Возможности
              </h2>
              <p className="text-b2b-text-secondary">
                Раздел будет добавлен в Phase 2
              </p>
            </div>
          </section>

          <section id="pricing" className="py-24 bg-b2b-surface">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-display font-bold text-b2b-text-primary mb-4">
                Тарифы
              </h2>
              <p className="text-b2b-text-secondary">
                Раздел будет добавлен в Phase 3
              </p>
            </div>
          </section>

          <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-display font-bold text-b2b-text-primary mb-4">
                Оставить заявку
              </h2>
              <p className="text-b2b-text-secondary">
                Форма будет добавлена в Phase 2
              </p>
            </div>
          </section>
        </main>
        <B2BFooter />
      </div>
    </>
  );
};

export default B2B;
