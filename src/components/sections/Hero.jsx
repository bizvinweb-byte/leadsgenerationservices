"use client";

import StrategyCallForm from "@/components/forms/StrategyCallForm";
import { Star, ShieldCheck, TrendingUp, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Lead Generation Agency Hero Section"
      className="relative w-full overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 lg:pb-12"
    >
      {/* ===================================================================
          BACKGROUND AMBIENT ORANGE GLOWS & SUBTLE ARCHITECTURAL GRID
          =================================================================== */}
      {/* Delicate dot grid pattern for depth (no flat template feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Top-Right Soft Radial Orange Light Beam */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[420px] sm:w-[580px] lg:w-[720px] h-[420px] sm:h-[580px] lg:h-[720px] rounded-full bg-gradient-to-bl from-[#fb8002]/20 via-[#fa5500]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Bottom-Left Soft Ambient Organic Glow */}
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[360px] sm:w-[500px] lg:w-[620px] h-[360px] sm:h-[500px] lg:h-[620px] rounded-full bg-gradient-to-tr from-[#fb8002]/18 via-[#fa5500]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ===================================================================
              LEFT COLUMN: HERO HEADLINE & HIGH-INTENT EDITORIAL COPY (7 Cols)
              =================================================================== */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
              <span>Performance Marketing &bull; Lead Generation</span>
            </div>

            {/* Main H1 Headline with Refined 700 Font Weight & Exact Hand-Drawn Underline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#0b0f19] tracking-tight leading-[1.12]">
              Drive Scalable Growth with India&apos;s Leading{" "}
              <span className="text-[#fb8002]">
                <span className="relative inline-block">
                  Lead Generation
                  {/* Hand-drawn double-stroke curve underline strictly under Lead Generation */}
                  <svg
                    className="absolute -bottom-1.5 sm:-bottom-2 -left-1 w-[calc(100%+6px)] h-3 sm:h-3.5 text-[#fb8002] overflow-visible pointer-events-none"
                    viewBox="0 0 240 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    {/* Primary organic brush stroke */}
                    <path
                      d="M3 11C55 4.5 140 3 237 7.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    {/* Secondary subtle sketch stroke for hand-drawn authenticity */}
                    <path
                      d="M15 13.8C65 9.5 155 8.5 215 13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeOpacity="0.85"
                    />
                  </svg>
                </span>{" "}
                Agency
              </span>
            </h1>

            {/* Sub-Headline Paragraph 1 - Clear, Professional & Authoritative */}
            <p className="text-sm sm:text-base lg:text-[16.5px] text-slate-700 leading-relaxed font-normal">
              If you&apos;re looking to unlock serious ROI on{" "}
              <strong className="font-semibold text-slate-900">Facebook, Instagram, and Google Ads</strong>, you
              need more than just a basic ad setup &mdash; you need expert strategy, tested high-intent creatives,
              advanced audience targeting, and continuous funnel optimization.
            </p>

            {/* Sub-Headline Paragraph 2 - Natural Agency Positioning (No AI Keyword Rainbow) */}
            <p className="text-sm sm:text-base lg:text-[15.5px] text-slate-600 leading-relaxed font-normal">
              At <strong className="font-semibold text-slate-900">Brandmingo</strong>, we build high-velocity client
              acquisition funnels that deliver sales-ready, pre-qualified leads. Whether you&apos;re scaling in{" "}
              <span className="text-slate-800 font-medium">real estate</span>,{" "}
              <span className="text-slate-800 font-medium">e-commerce</span>,{" "}
              <span className="text-slate-800 font-medium">BFSI &amp; fintech</span>,{" "}
              <span className="text-slate-800 font-medium">higher education</span>, or{" "}
              <span className="text-slate-800 font-medium">automobile dealerships</span>, we turn paid media into your
              most predictable revenue stream.
            </p>

            {/* Social Proof & Credibility Bar (Human, Trusted & Authoritative) */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-100">
              {/* Avatar Stack + Star Rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#fb8002] to-[#fa5500] text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-white">
                    BM
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-white">
                    RE
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-white">
                    D2C
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-white">
                    SaaS
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="text-xs font-bold text-slate-800 ml-1.5">4.9/5</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">Trusted by 120+ Scaling Brands</p>
                </div>
              </div>

              {/* Verified Performance Metric Badge */}
              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-200 text-xs">
                <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5 text-[#fb8002]" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900 leading-tight">₹45Cr+ Ad Spend</p>
                  <p className="text-[11px] text-slate-500 leading-tight">Managed with 3.8x Avg ROAS</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: PREMIUM BESPOKE STRATEGY CALL FORM (5 Cols)
              =================================================================== */}
          <div id="strategy-call-form" className="lg:col-span-5 w-full scroll-mt-28">
            <StrategyCallForm source="Hero Section" />
          </div>
        </div>
      </div>
    </section>
  );
}
