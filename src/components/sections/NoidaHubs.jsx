"use client";

import Link from "next/link";
import {
  Building2,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";
import { useStrategyModal } from "@/context/StrategyModalContext";

export default function NoidaHubs() {
  const { openModal } = useStrategyModal();

  const hubs = [
    {
      sector: "Sector 62",
      badge: "B2B Tech & Corporate Hub",
      title: "Sector 62 B2B Lead Generation",
      description:
        "Home to Stellar IT Park, Logix Cyber Park, and leading SaaS & consulting firms. We engineer account-based marketing (ABM) and LinkedIn/Google ad funnels to reach CXOs and corporate buyers.",
      highlights: ["SaaS & Cloud Startups", "IT Consulting", "Corporate Training"],
    },
    {
      sector: "Noida Expressway & Sec 150",
      badge: "Real Estate & HNI Corridor",
      title: "Real Estate & Luxury Lead Generation",
      description:
        "Connecting top builders and real estate developers with verified luxury property buyers and high-net-worth investors across Sector 128, Sector 132, Sector 142, and Sector 150.",
      highlights: ["Luxury 3BHK/4BHK & Villas", "Commercial Studio Inquiries", "HNI Site Visits"],
    },
    {
      sector: "Sector 63",
      badge: "SMEs & Industrial Corridor",
      title: "Industrial & Manufacturing Leads",
      description:
        "Fueling customer acquisition for manufacturing units, industrial exporters, and MSMEs with high-intent Google Search and catalog funnels.",
      highlights: ["Industrial Equipment", "Export Enquiries", "B2B Distribution"],
    },
    {
      sector: "Sector 18 & Central Noida",
      badge: "Retail & Commercial Hub",
      title: "Commercial & Retail Inquiries",
      description:
        "Capturing foot-traffic, clinic appointments, and consumer service bookings for corporate businesses, healthcare centers, and premium outlets in Central Noida.",
      highlights: ["Healthcare & Clinics", "Financial Services", "Retail Footfall"],
    },
    {
      sector: "Greater Noida & West",
      badge: "Education & Large Projects",
      title: "Education & Housing Leads",
      description:
        "Scalable student recruitment funnels for higher education universities and high-volume residential buyer acquisition for Greater Noida West (Noida Extension).",
      highlights: ["College Admissions", "Affordable Housing", "Township Projects"],
    },
    {
      sector: "Sector 132 & 142 Corridor",
      badge: "MNC & Startup Hub",
      title: "Enterprise Sales Pipelines",
      description:
        "Accelerating enterprise sales for companies headquartered in Advant Navis, Express Trade Towers, and surrounding corporate grade-A campuses.",
      highlights: ["Enterprise Contracts", "B2B Service Pipelines", "Decision-Maker Funnels"],
    },
  ];

  return (
    <section
      id="noida-hubs"
      aria-label="Lead Generation Services Across Noida Commercial Hubs"
      className="site-section relative w-full bg-slate-50/70 overflow-hidden border-y border-slate-100"
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/3 -right-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-bl from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* ===================================================================
            HEADER: Tag Badge, Headline, Subtitle
            =================================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-10 lg:mb-12">
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#fb8002]" />
            <span>HYPER-LOCAL NOIDA COVERAGE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            Serving High-Growth Businesses Across{" "}
            <span className="text-[#fb8002]">Noida&apos;s Commercial Corridors</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            From tech giants in Sector 62 to luxury property developers along the Noida Expressway, our specialized lead generation services in Noida deliver verified sales opportunities in your exact market.
          </p>
        </div>

        {/* ===================================================================
            6-CARD NOIDA SECTORS GRID (Topical Authority for Local SEO)
            =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-lg hover:border-[#fb8002]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Sector Pin & Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002]">
                    <MapPin className="w-3 h-3 text-[#fb8002]" />
                    <span>{hub.sector}</span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-100">
                    {hub.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0b0f19] tracking-tight mb-2 group-hover:text-[#fb8002] transition-colors">
                  {hub.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                  {hub.description}
                </p>
              </div>

              {/* Highlights Micro-Tags */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
                  Target Inquiries:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {hub.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#fb8002]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================================
            COMPARISON CALLOUT: BRANDMINGO VS UNVERIFIED DATABASE SELLERS
            =================================================================== */}
        <div className="max-w-5xl mx-auto mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-8">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fb8002]">
              Why Noida Companies Trust Brandmingo
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0b0f19] tracking-tight">
              Live Verified Ad Funnels vs. Buying Unverified Databases
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Stop burning your sales team&apos;s time on stale Excel spreadsheets of cold, uninterested contacts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* The Old Way */}
            <div className="rounded-2xl bg-red-50/50 border border-red-100 p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-xs">✕</span>
                <span>Buying Stale Databases / Scraping</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>60%+ Wrong Numbers:</strong> Unverified contacts, switched-off phones, and fake entries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Zero Intent:</strong> Contacts have never heard of your brand and get irritated by cold calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Resold to 20+ Competitors:</strong> The exact same list is sold to your direct competitors simultaneously.</span>
                </li>
              </ul>
            </div>

            {/* The Brandmingo Way */}
            <div className="rounded-2xl bg-orange-50/60 border border-orange-200/80 p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#fb8002] font-bold text-sm">
                <span className="w-6 h-6 rounded-full bg-[#fb8002] text-white flex items-center justify-center text-xs">✓</span>
                <span>Brandmingo Performance Lead Generation in Noida</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fb8002] shrink-0 mt-0.5" />
                  <span><strong>100% Exclusive Inquiries:</strong> Fresh leads captured specifically for your business only.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fb8002] shrink-0 mt-0.5" />
                  <span><strong>Multi-Step Qualification &amp; OTP:</strong> Confirmed investment budget, requirement, and active phone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fb8002] shrink-0 mt-0.5" />
                  <span><strong>Instant CRM &amp; WhatsApp Sync:</strong> Leads land on your sales rep&apos;s phone in under 60 seconds.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Internal Link to Dedicated Noida Location Page */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#0b0f19]">
                Looking for detailed case studies and pricing for your sector?
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Explore our full Noida city coverage and live performance metrics.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/locations/noida"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fb8002] hover:text-[#e07000] hover:underline"
              >
                <span>View Noida Hub Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => openModal("Noida Hubs Section CTA")}
                className="px-4 py-2 rounded-full bg-[#fb8002] hover:bg-[#fa5500] text-white font-bold text-xs shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
