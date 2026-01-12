import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import HeroSection from "../../components/About/HeroSection";
import PurposeSection from "../../components/About/PurposeSection";
import TrustStatsSection from "../../components/About/TrustStatsSection";
import JourneyTimelineSection from "../../components/About/JourneyTimelineSection";
import CoreValuesSection from "../../components/About/CoreValuesSection";
import AdvisorsSection from "../../components/About/AdvisorsSection";
import SecurityComplianceSection from "../../components/About/SecurityComplianceSection";   
import JoinOurJourneyCTA from "../../components/About/JoinOurJourneyCTA";

import SEO from "../../components/SEO";

export default function AboutPage() {
    return (

        <div className="bg-white overflow-x-hidden">
            <SEO 
                title="About Us - Rupy.Money | Best Financial Marketplace" 
                description="We are Rupy.Money, India's most trusted financial marketplace for loans, credit cards, and credit scores."
            />

            <Header />

            <main className="pt-20">

            </main>
            <HeroSection />
            <PurposeSection />
            <TrustStatsSection />
            <JourneyTimelineSection />
            <CoreValuesSection />
            <AdvisorsSection />
            <SecurityComplianceSection />
            <JoinOurJourneyCTA />
            <Footer />
        </div>

    );
}
