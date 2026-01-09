import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/Digital-gold/Hero";
import TrustStats from "../../components/Digital-gold/TrustStats";
import WhyChooseDigitalGold from "../../components/Digital-gold/WhyChooseDigitalGold";
import InvestmentProtection from "../../components/Digital-gold/InvestmentProtection";
import DigitalGoldSteps from "../../components/Digital-gold/DigitalGoldSteps";
import FAQ from "../../components/Digital-gold/FAQ";
import CTA from "../../components/Digital-gold/CTA";

export default function HomePage() {
  return (
    
    <div className="bg-white overflow-x-hidden">
      
      <Header />

      <main className="pt-20">
        <Hero />
        <TrustStats />
        <WhyChooseDigitalGold />
        <DigitalGoldSteps />
        <InvestmentProtection />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
    
  );
}
