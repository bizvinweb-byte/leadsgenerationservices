"use client";

import { useState, useRef } from "react";
import {
  FileSearch,
  Route,
  ImagePlus,
  Cog,
  BarChart3,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  BarChart,
  ShieldCheck,
} from "lucide-react";

export default function OurProcess() {
  const [activeMobileStep, setActiveMobileStep] = useState(0);
  const mobileScrollRef = useRef(null);

  const steps = [
    {
      id: "01",
      number: "01",
      title: "Discovery & Research",
      description:
        "We deeply analyze your business, historical data, ideal customer profile and market opportunities.",
      icon: FileSearch,
      deliverable: "Audience Audit & Competitor Spy",
    },
    {
      id: "02",
      number: "02",
      title: "Strategy & Planning",
      description:
        "We build a full-funnel campaign roadmap with audience segmentation, offer positioning and budgets.",
      icon: Route,
      deliverable: "Funnel Architecture & Budget Plan",
    },
    {
      id: "03",
      number: "03",
      title: "Creative Development",
      description:
        "We design high-performing ad creatives (static, video, and copy) aligned with your goals.",
      icon: ImagePlus,
      deliverable: "Statics, UGC Reels & Ad Copy",
    },
    {
      id: "04",
      number: "04",
      title: "Campaign Setup",
      description:
        "We set up and launch campaigns with precise targeting, tracking and conversion optimization.",
      icon: Cog,
      deliverable: "Pixel & CAPI Server Tracking",
    },
    {
      id: "05",
      number: "05",
      title: "Monitoring & Optimization",
      description:
        "We continuously analyze performance, run A/B tests and optimize for better results.",
      icon: BarChart3,
      deliverable: "Daily A/B Testing & Bid Scaling",
    },
    {
      id: "06",
      number: "06",
      title: "Reporting & Scaling",
      description:
        "We share clear reports, insights and scale what works to maximize your ROI.",
      icon: TrendingUp,
      deliverable: "Live ROAS Dashboard & Scaling",
    },
  ];

  // Sync active step on mobile swipe
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const scrollLeft = mobileScrollRef.current.scrollLeft;
    const cardWidth = mobileScrollRef.current.offsetWidth * 0.82;
    const newIndex = Math.round(scrollLeft / (cardWidth + 12));
    if (newIndex >= 0 && newIndex < steps.length) {
      setActiveMobileStep(newIndex);
    }
  };

  const scrollToStep = (index) => {
    if (!mobileScrollRef.current) return;
    const cardWidth = mobileScrollRef.current.offsetWidth * 0.82;
    mobileScrollRef.current.scrollTo({
      left: index * (cardWidth + 12),
      behavior: "smooth",
    });
    setActiveMobileStep(index);
  };

  // Structured Schema.org HowTo for Google Ranking
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Our Meta Ads Process - Brandmingo",
    description:
      "A structured, data-driven 6-step process to plan, execute and scale Meta ad campaigns that deliver real business growth.",
    step: steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.title,
      text: s.description,
      url: "https://leadsgenerationservices.in/#process",
    })),
  };

  return (
    <section
      id="process"
      aria-label="Our Meta Ads Process"
      className="site-section relative w-full bg-white overflow-hidden"
    >
      {/* Schema.org for Google Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 -left-28 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-bl from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* ===================================================================
            HEADER: Tag Badge, Headline with Hand-Drawn Curve Underline, Subtitle
            =================================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-10 lg:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
            <span>OUR PROCESS</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            Our{" "}
            <span className="relative inline-block text-[#fb8002]">
              Lead Generation
              {/* Hand-drawn double-stroke curve underline */}
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
            </span>{" "}
            Process in Noida
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed pt-1">
            A structured, 6-step lead qualification framework engineered by Noida&apos;s leading performance marketing team to deliver sales-ready leads.
          </p>
        </div>

        {/* ===================================================================
            DESKTOP VIEW (1024px+): Exact 6 Equal Width & Equal Height Grid
            CSS Grid guarantees mathematically 100% equal width and height!
            =================================================================== */}
        <div className="hidden lg:grid grid-cols-6 gap-3.5 xl:gap-4 relative w-full items-stretch">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="relative flex flex-col h-full">
                {/* Step Card (100% Equal Height & Width) */}
                <div className="group relative flex flex-col items-center text-center justify-between w-full h-full min-h-[300px] xl:min-h-[320px] bg-white rounded-2xl xl:rounded-3xl border border-slate-200/80 p-4 xl:p-5 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_14px_30px_rgba(251,128,2,0.12)] hover:border-[#fb8002]/45 hover:-translate-y-1.5 transition-all duration-300">
                  {/* Top: Pill Badge */}
                  <div className="px-3 py-0.5 rounded-full border border-[#ffeedd] bg-[#fff5ec] text-[#fb8002] text-xs font-bold tracking-wide mb-3 shadow-2xs">
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-[#fff5ec] border border-[#ffeedd] flex items-center justify-center text-[#fb8002] mb-3 group-hover:scale-110 group-hover:bg-[#ffeedd] transition-all duration-300 shadow-2xs">
                    <Icon className="w-6.5 h-6.5 xl:w-7 xl:h-7 stroke-[1.85]" />
                  </div>

                  {/* Title (Consistent fixed vertical allocation) */}
                  <h3 className="text-sm xl:text-[15.5px] font-bold text-[#0b0f19] tracking-tight leading-snug mb-2 min-h-[44px] flex items-center justify-center text-center">
                    {step.title}
                  </h3>

                  {/* Description (Evenly distributed) */}
                  <p className="text-xs text-slate-500 leading-relaxed text-center flex-1 flex items-start justify-center">
                    {step.description}
                  </p>

                  {/* Bottom Deliverable Micro-Tag (Adds Domain Authority & Depth) */}
                  <div className="mt-3 w-full pt-2.5 border-t border-slate-100/90">
                    <span className="text-[10px] xl:text-[11px] font-semibold text-[#fb8002] bg-[#fff8f2] px-2 py-0.5 rounded-md inline-block max-w-full truncate">
                      {step.deliverable}
                    </span>
                  </div>
                </div>

                {/* Floating Connector Arrow (Positioned exactly on the right edge between cards) */}
                {!isLast && (
                  <div
                    className="absolute top-1/2 -right-3 xl:-right-3.5 -translate-y-1/2 w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#fb8002] z-20 pointer-events-none"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 stroke-[2.25]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ===================================================================
            TABLET VIEW (640px - 1023px): 3x2 Equal Grid with Connected Arrows
            =================================================================== */}
        <div className="hidden sm:grid lg:hidden grid-cols-3 gap-4 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const showArrow = index % 3 !== 2 && index !== steps.length - 1;

            return (
              <div key={step.id} className="relative flex flex-col h-full">
                <div className="group relative flex flex-col items-center text-center justify-between w-full h-full min-h-[290px] bg-white rounded-2xl border border-slate-200/80 p-4 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-[#fb8002]/40 transition-all duration-300">
                  <div className="px-2.5 py-0.5 rounded-full border border-[#ffeedd] bg-[#fff5ec] text-[#fb8002] text-xs font-bold mb-3 shadow-2xs">
                    {step.number}
                  </div>

                  <div className="w-13 h-13 rounded-full bg-[#fff5ec] border border-[#ffeedd] flex items-center justify-center text-[#fb8002] mb-3 group-hover:scale-108 transition-transform duration-300 shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[1.85]" />
                  </div>

                  <h3 className="text-sm font-bold text-[#0b0f19] tracking-tight leading-snug mb-1.5 min-h-[40px] flex items-center justify-center">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed flex-1 flex items-start justify-center">
                    {step.description}
                  </p>

                  <div className="mt-2.5 w-full pt-2 border-t border-slate-100">
                    <span className="text-[10.5px] font-semibold text-[#fb8002] bg-[#fff8f2] px-2 py-0.5 rounded-md inline-block">
                      {step.deliverable}
                    </span>
                  </div>
                </div>

                {showArrow && (
                  <div
                    className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#fb8002] z-20 pointer-events-none"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-3 h-3 stroke-[2]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ===================================================================
            MOBILE VIEW (< 640px): 100% Equal Size Swipe Deck with Full Fluidity
            =================================================================== */}
        <div className="sm:hidden">
          {/* Scrollable Track with Peek Preview */}
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-3 overflow-x-auto pb-3 pt-1 px-4 -mx-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeMobileStep === index;
              const nextStep = steps[index + 1];

              return (
                <div
                  key={step.id}
                  className={`w-[82vw] max-w-[300px] min-h-[300px] shrink-0 snap-center rounded-2xl border transition-all duration-300 p-4.5 flex flex-col items-center text-center justify-between bg-white ${
                    isActive
                      ? "border-[#fb8002]/55 shadow-[0_10px_26px_rgba(251,128,2,0.14)] scale-[1.01]"
                      : "border-slate-200/90 shadow-2xs opacity-90"
                  }`}
                >
                  {/* Top Bar on Mobile Card */}
                  <div className="w-full flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full border border-[#ffeedd] bg-[#fff5ec] text-[#fb8002] text-xs font-bold">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Step {index + 1} of {steps.length}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-[#fff5ec] border border-[#ffeedd] flex items-center justify-center text-[#fb8002] my-2 shadow-2xs">
                    <Icon className="w-6.5 h-6.5 stroke-[1.85]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0b0f19] tracking-tight leading-snug mb-1 min-h-[42px] flex items-center justify-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-2.5 flex-1 flex items-center justify-center">
                    {step.description}
                  </p>

                  {/* Next Step Micro Pill */}
                  <div className="w-full pt-2.5 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
                    {nextStep ? (
                      <>
                        <span>Next: {nextStep.title}</span>
                        <ArrowRight className="w-3 h-3 text-[#fb8002]" />
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-[#fb8002]" />
                        <span className="text-[#fb8002] font-semibold">
                          Continuous Scaling & Growth
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Bottom Thumb Navigation Bar */}
          <div className="mt-4 flex items-center justify-between px-2 pt-1">
            {/* Step Counter Indicator */}
            <div className="text-xs font-semibold text-slate-500">
              <span className="text-[#fb8002] font-bold">
                Step 0{activeMobileStep + 1}
              </span>{" "}
              / 06
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-1.5">
              {steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToStep(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeMobileStep === i
                      ? "w-6 bg-[#fb8002]"
                      : "w-1.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Circular Tap Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollToStep(Math.max(0, activeMobileStep - 1))}
                disabled={activeMobileStep === 0}
                aria-label="Previous step"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shadow-2xs hover:border-[#fb8002] hover:text-[#fb8002] active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  scrollToStep(Math.min(steps.length - 1, activeMobileStep + 1))
                }
                disabled={activeMobileStep === steps.length - 1}
                aria-label="Next step"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shadow-2xs hover:border-[#fb8002] hover:text-[#fb8002] active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================================
            HUMAN AGENCY TRUST BAR: Removes any 'generic AI' feel and adds
            high-converting agency credibility with real SLA commitments
            =================================================================== */}
        <div className="mt-8 sm:mt-10 lg:mt-12 rounded-2xl bg-[#fafafa] border border-slate-200/70 p-3.5 sm:p-4 max-w-4xl mx-auto shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70">
            {/* 1. Fast Setup */}
            <div className="flex items-center justify-center gap-2.5 px-2 pt-1 sm:pt-0">
              <div className="w-7 h-7 rounded-full bg-[#fff5ec] text-[#fb8002] flex items-center justify-center shrink-0">
                <Zap className="w-3.5 h-3.5 stroke-[2.2]" />
              </div>
              <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
                7-Day Fast-Track Campaign Launch
              </span>
            </div>

            {/* 2. Transparent Reporting */}
            <div className="flex items-center justify-center gap-2.5 px-2 pt-2.5 sm:pt-0">
              <div className="w-7 h-7 rounded-full bg-[#fff5ec] text-[#fb8002] flex items-center justify-center shrink-0">
                <BarChart className="w-3.5 h-3.5 stroke-[2.2]" />
              </div>
              <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
                100% Live ROAS & CPL Dashboards
              </span>
            </div>

            {/* 3. Dedicated Strategist */}
            <div className="flex items-center justify-center gap-2.5 px-2 pt-2.5 sm:pt-0">
              <div className="w-7 h-7 rounded-full bg-[#fff5ec] text-[#fb8002] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 stroke-[2.2]" />
              </div>
              <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
                Dedicated Senior Growth Strategist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
