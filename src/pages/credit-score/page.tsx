import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/credit-score/Hero";
import TrustStats from "../../components/credit-score/TrustStats";
import ScoreFactors from "../../components/credit-score/ScoreFactors";  
import Services from "../../components/credit-score/Services";
import Process from "../../components/credit-score/Process";
import Testimonials from "../../components/credit-score/Testimonials";
import About from "../../components/credit-score/About";
import Comparison from "../../components/credit-score/Comparison";
import FAQ from "../../components/credit-score/FAQ";
import CTA from "../../components/credit-score/CTA";

export default function HomePage() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Header />

      <main className="pt-20">
        <Hero />
        <TrustStats />
        <ScoreFactors />
        <Services />
        <FAQ />
        <CTA />
        <Process/>
      </main>

      <Footer />
    </div>
  );
}
