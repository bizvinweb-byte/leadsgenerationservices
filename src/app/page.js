import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui";
import { StrategyModalProvider } from "@/context/StrategyModalContext";
import {
  Hero,
  TrustedBrands,
  Opportunity,
  CaseStudy,
  RealCampaigns,
  WhySqroot,
  OurServices,
  PerformanceMarketing,
  NoidaHubs,
  OurProcess,
  SearchingForUs,
  ClientReviews,
  FAQSection,
  GetStarted,
} from "@/components/sections";



export default function Home() {
  return (
    <StrategyModalProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#fb8002] selection:text-white">
        {/* Floating Quick Action Buttons (Call + WhatsApp) */}
        <FloatingActions />

      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Semantic Content Area for 100% SEO */}
      <main className="flex-1 flex flex-col w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trusted By Growing Brands Slider */}
        <TrustedBrands />

        {/* 4. The Opportunity */}
        <Opportunity />

        {/* 5. Case Study Impact & Metrics */}
        <CaseStudy />

        {/* 5b. Real Campaigns & Measurable Growth (Live Meta Ads Manager Carousel) */}
        <RealCampaigns />

        {/* 6. Why Brandmingo */}
        <WhySqroot />

        {/* 7. Our Services */}
        <OurServices />

        {/* 8. Performance Marketing */}
        <PerformanceMarketing />

        {/* 8b. Hyper-Local Noida Commercial Hubs & Sectors (SEO Topical Authority) */}
        <NoidaHubs />

        {/* 9. Our Process */}
        <OurProcess />

        {/* 10. Searching For Us */}
        <SearchingForUs />

        {/* 11. Client Reviews */}
        <ClientReviews />

        {/* 11b. Frequently Asked Questions (SEO & Conversions) */}
        <FAQSection />

        {/* 12. Get Started */}
        <GetStarted />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
    </StrategyModalProvider>
  );
}
