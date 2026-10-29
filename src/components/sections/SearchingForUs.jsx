"use client";

import { Search, ArrowRight } from "lucide-react";
import { useStrategyModal } from "@/context/StrategyModalContext";

export default function SearchingForUs() {
  const { openModal } = useStrategyModal();
  const searchQueries = [
    {
      id: "q1",
      prefix: "best ",
      highlight: "lead generation services in Noida",
      suffix: "",
      fullQuery: "best lead generation services in Noida",
    },
    {
      id: "q2",
      prefix: "top ",
      highlight: "lead generation company in Noida",
      suffix: " Sector 62",
      fullQuery: "top lead generation company in Noida Sector 62",
    },
    {
      id: "q3",
      prefix: "verified ",
      highlight: "real estate lead generation",
      suffix: " Noida Expressway",
      fullQuery: "verified real estate lead generation Noida Expressway",
    },
    {
      id: "q4",
      prefix: "high-intent ",
      highlight: "B2B lead generation services",
      suffix: " in Delhi NCR",
      fullQuery: "high-intent B2B lead generation services in Delhi NCR",
    },
    {
      id: "q5",
      prefix: "affordable ",
      highlight: "lead generation agency in Noida",
      suffix: " for startups",
      fullQuery: "affordable lead generation agency in Noida for startups",
    },
    {
      id: "q6",
      prefix: "performance-driven ",
      highlight: "Google & Meta ads lead generation",
      suffix: " Noida",
      fullQuery: "performance-driven Google & Meta ads lead generation Noida",
    },
  ];

  // Structured Data for Google SEO indexing
  const searchIntentSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Target Lead Generation Search Queries in Noida - Brandmingo",
    description:
      "Target high-intent search queries for lead generation services in Noida, B2B business inquiries, and real estate marketing in Delhi NCR.",
    itemListElement: searchQueries.map((q, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: q.fullQuery,
    })),
  };

  return (
    <section
      id="searching-for-us"
      aria-label="Searching for Lead Generation Services in Noida"
      className="site-section relative w-full bg-white overflow-hidden"
    >
      {/* Schema.org ItemList for 100% Google SEO indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchIntentSchema) }}
      />

      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 -right-28 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-bl from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* ===================================================================
            HEADER: Tag Badge, Headline with Hand-Drawn Curve Underline, Subtitle
            =================================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-6 sm:mb-8 lg:mb-9">
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
            <span>SEARCHING FOR NOIDA LEADS?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            Searching for Lead Generation
            <br className="hidden sm:inline" />
            {" "}Services in{" "}
            <span className="relative inline-block text-[#fb8002]">
              Noida?
              {/* Hand-drawn double-stroke curve underline under 'Noida?' */}
              <svg
                className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#fb8002] overflow-visible pointer-events-none"
                viewBox="0 0 170 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9.5C40 4 110 3.5 165 7"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12C50 8 120 7.5 155 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed pt-0.5">
            If you are looking for premier <strong className="font-semibold text-slate-800">lead generation services in Noida</strong> to fill your sales pipeline with verified buyers, your search ends here.
          </p>
        </div>

        {/* ===================================================================
            SEARCH QUERIES CONTAINER (Google Search Bars Grid - Non-Clickable Display)
            =================================================================== */}
        <div className="max-w-5xl mx-auto">
          {/* Section Subheading Label */}
          <p className="text-sm sm:text-[15px] font-bold text-[#0b0f19] mb-3 text-left">
            If you&apos;re Googling:
          </p>

          {/* 2-Column Search Bars Grid (1-column on mobile) - No truncation, fits full text */}
          <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3"
          >
            {searchQueries.map((item) => (
              <div
                key={item.id}
                role="listitem"
                className="relative w-full flex items-center justify-between rounded-full border border-slate-200/90 bg-white px-3.5 py-2.5 sm:px-4.5 sm:py-3 shadow-2xs select-none"
              >
                {/* Left: Search Icon + Vertical Divider + Query Text (Full text visible, no ellipsis) */}
                <div className="flex items-center min-w-0 pr-2">
                  {/* Search Icon */}
                  <Search
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#fb8002] shrink-0 stroke-[2.25]"
                    aria-hidden="true"
                  />

                  {/* Vertical Divider Line */}
                  <span
                    className="w-px h-3.5 sm:h-4 bg-slate-200 mx-2.5 sm:mx-3 shrink-0"
                    aria-hidden="true"
                  />

                  {/* Query Text - No truncation so Googlebot and users see the complete high-intent search query */}
                  <span className="text-xs sm:text-[13px] lg:text-[13.5px] text-slate-600 leading-snug">
                    {item.prefix}
                    <strong className="font-bold text-[#0b0f19]">
                      {item.highlight}
                    </strong>
                    {item.suffix}
                  </span>
                </div>

                {/* Right: Static Subtle Arrow */}
                <ArrowRight
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0 ml-1.5"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* ===================================================================
              BOTTOM CONVERSION CARD: Compact Warm Callout with Primary CTA Button
              =================================================================== */}
          <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl bg-[#fff5ec]/80 border border-[#ffeedd] p-4.5 sm:p-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
            {/* Left Copy */}
            <div className="space-y-0.5">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0b0f19] tracking-tight">
                Then it&apos;s time to speak to Brandmingo.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Let&apos;s turn your ad spend into real business growth.
              </p>
            </div>

            {/* Right CTA Button */}
            <button
              type="button"
              onClick={() => openModal("Searching For Us Section")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#fa5500] to-[#fb8002] hover:from-[#e54e00] hover:to-[#ea7600] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_4px_16px_rgba(250,85,0,0.28)] hover:shadow-[0_6px_22px_rgba(250,85,0,0.38)] active:scale-95 transition-all duration-200 shrink-0 cursor-pointer"
            >
              <span>BOOK A STRATEGY CALL</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
