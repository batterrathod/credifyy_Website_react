import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Hero from "../../components/home/Hero";
import TrustStats from "../../components/home/TrustStats";
import Partners from "../../components/home/Partners";
import Services from "../../components/home/Services";
import Process from "../../components/home/Process";
import Testimonials from "../../components/home/Testimonials";
import About from "../../components/home/About";
import Comparison from "../../components/home/Comparison";
import FAQ from "../../components/home/FAQ";
import CTA from "../../components/home/CTA";
import { Helmet } from "react-helmet-async"; // Import Helmet for meta tags

export default function HomePage() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* SEO Meta Tags */}
      <Helmet>

    
        <title>Rupy.Money - Best Home Loans & Personal Loans in India</title>
        <meta 
          name="description" 
          content="Get instant approval for home loans, personal loans, business loans, and credit cards. Compare best interest rates from top banks. EMI calculator available." 
        />
        <meta 
          name="keywords" 
          content="home loan, personal loan, business loan, credit cards, loan against property, EMI calculator, best interest rates, loan approval, India" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rupy.money/" />
        <meta property="og:title" content="Rupy.Money - Best Home Loans & Personal Loans in India" />
        <meta property="og:description" content="Get instant approval for home loans, personal loans, business loans, and credit cards. Compare best interest rates from top banks." />
        <meta property="og:image" content="https://rupy.money/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rupy.money/" />
        <meta property="twitter:title" content="Rupy.Money - Best Home Loans & Personal Loans in India" />
        <meta property="twitter:description" content="Get instant approval for home loans, personal loans, business loans, and credit cards. Compare best interest rates from top banks." />
        <meta property="twitter:image" content="https://rupy.money/images/twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://rupy.money/" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rupy.Money" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#F97316" /> {/* Primary orange color */}
        
        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Rupy.Money",
            "url": "https://rupy.money/",
            "logo": "https://rupy.money/logo.png",
            "description": "Digital platform for home loans, personal loans, business loans, and credit cards comparison in India",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://www.facebook.com/rupymoney",
              "https://twitter.com/rupymoney",
              "https://www.linkedin.com/company/rupymoney",
              "https://www.instagram.com/rupymoney"
            ]
          })}
        </script>
        
        {/* Additional Schema for Loan Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Loan Services",
            "provider": {
              "@type": "Organization",
              "name": "Rupy.Money"
            },
            "description": "Home loans, personal loans, business loans, loan against property, credit cards, and financial comparison services",
            "areaServed": "India"
          })}
        </script>
      </Helmet>

      <Header />

      <main className="pt-20">
        <Hero />
        <TrustStats />
        <Partners />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <Comparison />
        <FAQ />
        <CTA />
      </main>

      <Footer />     
    </div>
  );
}