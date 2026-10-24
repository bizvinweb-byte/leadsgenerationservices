"use client";

import { Search, ArrowRight } from "lucide-react";

export default function SearchingForUs() {
  const searchQueries = [
    {
      id: "q1",
      prefix: "best ",
      highlight: "meta ads agency",
      suffix: " near me",
      fullQuery: "best meta ads agency near me",
    },
    {
      id: "q2",
      prefix: "performance-focused ",
      highlight: "facebook ad management",
      suffix: " services",
      fullQuery: "performance-focused facebook ad management services",
    },
    {
      id: "q3",
      prefix: "top ",
      highlight: "facebook marketing companies",
      suffix: " in India",
      fullQuery: "top facebook marketing companies in India",
    },
    {
      id: "q4",
      prefix: "trusted ",
      highlight: "digital marketing agency",
      suffix: " Instagram experts",
      fullQuery: "trusted digital marketing agency Instagram experts",
    },
    {
      id: "q5",
      prefix: "affordable ",
      highlight: "instagram marketer",
      suffix: " for small business",
      fullQuery: "affordable instagram marketer for small business",
    },
    {
      id: "q6",
      prefix: "meta ads agency for ",
      highlight: "e-commerce",
      suffix: "",
      fullQuery: "meta ads agency for e-commerce",
    },
  ];

  const handleCtaClick = () => {
    const target = document.getElementById("strategy-call-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Structured Data for Google SEO indexing
  const searchIntentSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Common Meta Ads Search Queries - Brandmingo",
    description:
      "Target high-intent search queries for Meta ads, Facebook marketing and Instagram advertising services in India.",
    itemListElement: searchQueries.map((q, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: q.fullQuery,
    })),
  };

  return (
    <section
      id="searching-for-us"
      aria-label="Searching for a Meta Ads Agency That Delivers Real ROI"
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
            <span>SEARCHING FOR US?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            Searching for a Meta Ads Agency
            <br className="hidden sm:inline" />
            {" "}That Delivers{" "}
            <span className="relative inline-block text-[#fb8002]">
              Real ROI?
              {/* Hand-drawn double-stroke curve underline under 'Real ROI?' */}
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
            We work with growing businesses across India that want to go beyond vanity
            metrics and actually scale their business.
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
                Then it&apos;s time to speak to Sqroot.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Let&apos;s turn your ad spend into real business growth.
              </p>
            </div>

            {/* Right CTA Button */}
            <button
              type="button"
              onClick={handleCtaClick}
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
