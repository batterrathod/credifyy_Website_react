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

export default function AboutPage() {
    return (

        <div className="bg-white overflow-x-hidden">

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
