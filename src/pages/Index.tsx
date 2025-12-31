import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeatureSection from "@/components/FeatureSection";
import MatchesMockup from "@/components/MatchesMockup";
import BookingMockup from "@/components/BookingMockup";
import PaymentMockup from "@/components/PaymentMockup";
import ProfileMockup from "@/components/ProfileMockup";
import HowItWorks from "@/components/HowItWorks";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeatureSection title="Найди партнеров за секунды" description="Просматривай открытые матчи, фильтруй по уровню игры и присоединяйся одним кликом." features={["Видишь уровень игроков сразу (3.0, 4.5, etc.)", "Место, время и свободные слоты — всё на одном экране", "Присоединиться можно за 10 секунд", "Опция игры с тренером"]} mockupContent={<MatchesMockup />} grayBg />
        <FeatureSection title="Бронируй корт в пару кликов" description="Все клубы города в одном приложении. Выбери корт, время и забронируй мгновенно." features={["Единая система для всех клубов города", "Видишь доступные слоты в реальном времени", "Создаёшь матч или бронируешь для себя", "Расстояние до клуба и цены сразу видны"]} mockupContent={<BookingMockup />} reversed />
        <FeatureSection title="Плати только за свою часть" description="Экономь на аренде, разделяя стоимость корта с другими игроками." features={["Видишь свою долю ещё до бронирования", "Автоматический расчёт при добавлении игроков", "Покупка и управление абонементами клубов", "Списание сеансов прямо при бронировании"]} mockupContent={<PaymentMockup />} grayBg />
        <FeatureSection title="Расти как игрок" description="Отслеживай свой прогресс и находи партнёров своего уровня." features={["Рейтинговая система для честного матчмейкинга", "Статистика игр и времени на корте", "История всех матчей и бронирований", "База друзей и постоянных партнёров"]} mockupContent={<ProfileMockup />} reversed />
        <HowItWorks />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
