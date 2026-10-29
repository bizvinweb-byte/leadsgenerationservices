"use client";

import { Zap, BarChart3, Users, CheckCircle2 } from "lucide-react";
import StrategyCallForm from "@/components/forms/StrategyCallForm";

export default function GetStarted() {
  const valuePillars = [
    {
      icon: Zap,
      title: "Free Strategy Call",
      description: "Get expert advice tailored to your business goals.",
    },
    {
      icon: BarChart3,
      title: "Customized Ad Strategy",
      description: "We create a data-driven plan for your industry.",
    },
    {
      icon: Users,
      title: "No Obligation",
      description: "Just insights, ideas and a clear growth roadmap.",
    },
  ];

  // Structured Schema.org for Google Search Rich Snippets
  const consultationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Meta Ads Growth Strategy Consultation - Brandmingo",
    provider: {
      "@type": "Organization",
      name: "Brandmingo",
      url: "https://leadsgenerationservices.in",
    },
    description:
      "Get a customized 30-minute Meta Ads performance audit and growth strategy session tailored for your business.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <section
      id="get-started"
      aria-label="Ready to Scale Your Business with Meta Ads"
      className="site-section relative w-full bg-white overflow-hidden"
    >
      {/* Schema.org Consultation Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultationSchema) }}
      />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 -left-28 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-bl from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* ===================================================================
              LEFT COLUMN: Tag Badge, Headline with Hand-Drawn Curve, Copy & 3 Pillars
              =================================================================== */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
              <span>GET STARTED WITH NOIDA&apos;S BEST</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0b0f19] tracking-tight leading-[1.15]">
              Ready to Scale
              <br />
              Your Pipeline
              <br />
              with{" "}
              <span className="relative inline-block text-[#fb8002]">
                Lead Generation Services in Noida?
                {/* Hand-drawn double-stroke curve underline */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#fb8002] overflow-visible pointer-events-none"
                  viewBox="0 0 200 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9.5C50 4 130 3.5 195 7"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 12C60 8 140 7.5 185 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Editorial Subtitle */}
            <p className="text-slate-500 text-xs sm:text-sm lg:text-base font-medium max-w-xl leading-relaxed">
              Book a consultation with our senior lead generation strategist in Noida Sector 62. We&apos;ll audit your current customer acquisition flow and design a high-converting growth roadmap.
            </p>

            {/* 3 Value Pillars (Compact on mobile, elegant on desktop) */}
            <div className="space-y-3 sm:space-y-3.5 pt-1">
              {valuePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 sm:gap-3.5 group"
                  >
                    {/* Icon Box */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#fff5ec] border border-[#ffeedd] flex items-center justify-center text-[#fb8002] shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
                    </div>

                    {/* Copy */}
                    <div className="space-y-0.5">
                      <h3 className="font-bold text-sm sm:text-base text-[#0b0f19] tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-500 leading-snug">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Credibility & SLA Micro-Trust Strip (Balances Left Column with Right Form) */}
            <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Slots Open for This Month
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#fb8002]" />
                Zero Spam Guarantee
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-slate-500">15-Min Response</span>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: Global Reusable Strategy Call Form
              =================================================================== */}
          <div className="lg:col-span-6 w-full">
            <StrategyCallForm
              id="get-started-form"
              title="Book a Free Strategy Call"
              subtitle="Tell us a few details and our Meta Ads expert will reach out shortly."
              tagText=""
              source="Get Started Section"
              className="border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              privacyText="Your information is 100% secure and will never be shared with anyone."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
