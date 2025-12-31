import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AppShowcase from "@/components/AppShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import MarketStats from "@/components/MarketStats";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <AppShowcase />
        <FeaturesSection />
        <HowItWorks />
        <MarketStats />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
