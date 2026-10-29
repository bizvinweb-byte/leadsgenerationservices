"use client";

import Image from "next/image";
import { ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";
import { useStrategyModal } from "@/context/StrategyModalContext";

export default function Opportunity() {
  const { openModal } = useStrategyModal();

  return (
    <section
      id="opportunity"
      aria-label="The Opportunity - Why Meta Ads Dominate Digital Marketing"
      className="site-section relative w-full bg-white overflow-hidden"
    >
      {/* Background Soft Ambient Light Accents for Premium Visual Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 -left-28 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/12 via-[#fa5500]/6 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ===================================================================
              LEFT COLUMN: EDITORIAL HEADLINE, PARAGRAPH COPY & PRIMARY CTA
              =================================================================== */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
              <span>THE OPPORTUNITY</span>
            </div>

            {/* Main Section H2 Headline matching Reference UI */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-[1.16]">
              Why Paid Ads Drive
              <br className="hidden sm:inline" />
              {" "}The Highest ROI For{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#fb8002]">
                <span className="relative inline-block">
                  Lead Generation
                  {/* Hand-drawn double-stroke curve underline under 'Lead Generation' */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#fb8002] overflow-visible pointer-events-none"
                    viewBox="0 0 250 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 9.5C52 4 148 3.5 245 7"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 12C62 8 158 7.5 225 11"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeOpacity="0.85"
                    />
                  </svg>
                </span>
              </span>{" "}
              in Noida
            </h2>

            {/* Persuasive Editorial Copy with High-Value SEO Keywords */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
              <p>
                In competitive commercial hubs like Noida and Delhi NCR, relying solely on organic reach or static directories is no longer enough to scale your pipeline.
              </p>

              <p>
                Targeted <strong className="font-semibold text-slate-900">lead generation services in Noida</strong> utilizing Meta Ads and Google Search capture prospects at the exact moment of commercial intent.
              </p>

              <p>
                Whether you&apos;re a real estate developer booking on-site visits in Sector 150 or a B2B firm signing corporate clients in Sector 62, our automated lead generation funnels consistently deliver high-converting sales opportunities.
              </p>

              {/* Fixed single-line flow without orphan dot */}
              <p className="text-slate-800 font-medium pt-1">
                Partner with Brandmingo &mdash; the premier{" "}
                <button
                  type="button"
                  onClick={() => openModal("The Opportunity Section")}
                  className="text-[#fb8002] font-semibold hover:underline decoration-[#fb8002]/40 underline-offset-4 cursor-pointer inline p-0 bg-transparent border-0 font-inherit"
                >
                  lead generation company in Noida.
                </button>
              </p>
            </div>

            {/* High-Converting CTA Pill Button matching Reference UI */}
            <div className="pt-2 sm:pt-4 space-y-2.5">
              <button
                type="button"
                onClick={() => openModal("The Opportunity Section")}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#fb8002] to-[#fa5500] hover:from-[#fa5500] hover:to-[#ea4e00] text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
              >
                <span>BOOK A STRATEGY CALL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fb8002] animate-ping" />
                <span>Take Action Now! October Slots are Filling Fast</span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: HIGH-RES SHOWCASE GRAPHIC (OPPORTUNITY.png)
              =================================================================== */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            {/* Ambient Warm Radial Aura Behind Floating Visuals */}
            <div className="absolute inset-0 max-w-[480px] max-h-[480px] m-auto rounded-full bg-gradient-to-tr from-[#fb8002]/15 via-orange-100/35 to-transparent blur-3xl pointer-events-none" />

            {/* User's Exact UI/UX Graphic with Floating Accents & Hover Micro-Interaction */}
            <div className="relative w-full max-w-[540px] lg:max-w-[580px] group transition-transform duration-500 ease-out hover:scale-[1.015]">
              <Image
                src="/images/OPPORTUNITY.png"
                alt="Meta & Google Ads Funnels Comparison - Best Lead Generation Service in Noida & India by Brandmingo"
                width={1353}
                height={1163}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 580px"
                className="w-full h-auto object-contain drop-shadow-xl"
                priority
              />

              {/* Floating Verified Trust Pill (Bottom Left) */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-3 left-4 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/5 select-none pointer-events-none">
                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-tight">Verified Meta Partner</p>
                  <p className="text-[11px] text-slate-500 leading-tight">High-Converting Ad Frameworks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
