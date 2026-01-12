import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import EnterprisePartnershipHero from "../../components/Partner-program/EnterprisePartnershipHero";
import EnterpriseBenefitsSection from "../../components/Partner-program/EnterpriseBenefitsSection";
import CommissionRatesSection from "../../components/Partner-program/CommissionRatesSection";
import PartnershipLevelsSection from "../../components/Partner-program/PartnershipLevelsSection";
import Partners from "../../components/Partner-program/Partners"
import PartnerSuccessStoriesSection from "../../components/Partner-program/PartnerSuccessStoriesSection";
import FAQSection from "../../components/Partner-program/FAQSection";
import EnterpriseCTASection from "../../components/Partner-program/EnterpriseCTASection";

import SEO from "../../components/SEO";

export default function A() {
  return (
    
    <div className="bg-white overflow-x-hidden">
      <SEO 
        title="Become a Partner - Rupy.Money Partner Program" 
        description="Join the Rupy.Money Partner Program and earn high commissions by referring loans and credit cards. Zero investment required."
      />
      
      <Header />

      <main className="pt-20">
       
      </main>
      <EnterprisePartnershipHero />
      <EnterpriseBenefitsSection />
      <CommissionRatesSection />
      <PartnershipLevelsSection />
      <Partners />
      <PartnerSuccessStoriesSection />
      <FAQSection />
      <EnterpriseCTASection />
      <Footer />
    </div>
    
  );
}
