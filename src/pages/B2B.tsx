import { Helmet } from "react-helmet";
import B2BHeader from "@/components/b2b/B2BHeader";
import B2BHero from "@/components/b2b/B2BHero";
import B2BCurrentSolutions from "@/components/b2b/B2BCurrentSolutions";
import B2BSolutionTabs from "@/components/b2b/B2BSolutionTabs";
import B2BScenarios from "@/components/b2b/B2BScenarios";

import B2BIndustryInsights from "@/components/b2b/B2BIndustryInsights";
import B2BOpenMatch from "@/components/b2b/B2BOpenMatch";
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
          {/* 1. Hero - захват внимания */}
          <B2BHero />
          
          {/* 2. Проблема - боли клиентов */}
          <section id="features">
            <B2BCurrentSolutions />
          </section>

          {/* 3. Решение - возможности Courtoo */}
          <B2BSolutionTabs />

          {/* 4. Трансформация - Было/Стало */}
          <B2BScenarios />

          {/* 5. Социальное доказательство - кейсы */}
          <B2BIndustryInsights />

          {/* 7. Будущее - Открытые матчи (март 2026) */}
          <B2BOpenMatch />

          {/* 8. Pricing */}
          <B2BPricing />

          {/* 9. CTA - Contact Form */}
          <B2BContactForm />
        </main>
        <B2BFooter />
      </div>
    </>
  );
};

export default B2B;
