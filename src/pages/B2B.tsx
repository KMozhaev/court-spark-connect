import { Helmet } from "react-helmet";
import B2BHeader from "@/components/b2b/B2BHeader";
import B2BHero from "@/components/b2b/B2BHero";
import B2BCurrentSolutions from "@/components/b2b/B2BCurrentSolutions";
import B2BComingSoon from "@/components/b2b/B2BComingSoon";
import B2BPricing from "@/components/b2b/B2BPricing";
import B2BContactForm from "@/components/b2b/B2BContactForm";
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
          
          {/* Pain Points - Current Solutions */}
          <section id="features">
            <B2BCurrentSolutions />
            <B2BComingSoon />
          </section>

          {/* Pricing */}
          <B2BPricing />

          {/* Contact Form */}
          <B2BContactForm />
        </main>
        <B2BFooter />
      </div>
    </>
  );
};

export default B2B;
