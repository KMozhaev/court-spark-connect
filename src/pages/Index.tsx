import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

// Import screenshots
import screenHome from "@/assets/screen-home.jpeg";
import screenClub from "@/assets/screen-club.jpeg";
import screenMatchDetails from "@/assets/screen-match-details.jpeg";
import screenProfile from "@/assets/screen-profile.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />

        {/* Feature 1: Find Partners */}
        <FeatureSection
          title="Найди партнеров за секунды"
          description="Просматривай открытые матчи, фильтруй по уровню игры и присоединяйся одним кликом."
          features={[
            "Видишь уровень игроков сразу (3.0, 4.5, etc.)",
            "Место, время и свободные слоты — всё на одном экране",
            "Присоединиться можно за 10 секунд",
            "Опция игры с тренером",
          ]}
          image={screenHome}
          imageAlt="Экран открытых матчей"
          bgLight
        />

        {/* Feature 2: Book Courts */}
        <FeatureSection
          title="Бронируй корт в пару кликов"
          description="Единая система бронирования для всех клубов города."
          features={[
            "Единая система для всех клубов города",
            "Видишь доступные слоты в реальном времени",
            "Создаёшь матч или бронируешь для себя",
            "Расстояние до клуба и цены сразу видны",
          ]}
          image={screenClub}
          imageAlt="Экран бронирования"
          reversed
        />

        {/* Feature 3: Split Payment */}
        <FeatureSection
          title="Плати только за свою часть"
          description="Автоматическое разделение стоимости между игроками."
          features={[
            "Видишь свою долю ещё до бронирования",
            "Автоматический расчёт при добавлении игроков",
            "Покупка и управление абонементами клубов",
            "Списание сеансов прямо при бронировании",
          ]}
          image={screenMatchDetails}
          imageAlt="Экран деталей матча"
          bgLight
        />

        {/* Feature 4: Grow as Player */}
        <FeatureSection
          title="Расти как игрок"
          description="Отслеживай прогресс и находи подходящих партнёров."
          features={[
            "Рейтинговая система для честного матчмейкинга",
            "Статистика игр и времени на корте",
            "История всех матчей и бронирований",
            "База друзей и постоянных партнёров",
          ]}
          image={screenProfile}
          imageAlt="Экран профиля"
          reversed
        />

        <HowItWorks />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
