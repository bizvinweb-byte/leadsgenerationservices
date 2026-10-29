"use client";

import Image from "next/image";
import {
  Award,
  BarChart3,
  Users,
  PenTool,
  Filter,
  PieChart,
  ArrowRight,
} from "lucide-react";
import { useStrategyModal } from "@/context/StrategyModalContext";

export default function WhySqroot() {
  const { openModal } = useStrategyModal();

  const differentiators = [
    {
      icon: Award,
      title: "Meta-Certified Experts",
    },
    {
      icon: PenTool,
      title: "Creative & Copy Optimization",
    },
    {
      icon: BarChart3,
      title: "Proven Performance Marketing Playbooks",
    },
    {
      icon: Filter,
      title: "Full-Funnel Retargeting",
    },
    {
      icon: Users,
      title: "Industry-Specific Strategies",
    },
    {
      icon: PieChart,
      title: "Real-Time Reporting Dashboards",
    },
  ];

  return (
    <section
      id="why-sqroot"
      aria-label="Why Choose Brandmingo as Your Meta Ads Partner"
      className="site-section relative w-full bg-white overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 -left-28 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/12 via-[#fa5500]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ===================================================================
              LEFT COLUMN: EDITORIAL COPY, FEATURE CARD & PRIMARY CTA
              =================================================================== */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
              <span>WHY BRANDMINGO</span>
            </div>

            {/* Main Headline with Hand-Drawn Curve Underline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-[1.2]">
              Why Choose Brandmingo
              <br className="hidden sm:block" />
              {" "}for{" "}
              <span className="text-[#fb8002]">
                <span className="relative inline-block whitespace-nowrap">
                  Lead Generation Services in Noida?
                  {/* Hand-drawn double-stroke curve underline */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#fb8002] overflow-visible pointer-events-none"
                    viewBox="0 0 260 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 9.5C55 4 160 3.5 255 7"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 12C65 8 165 7.5 235 11"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeOpacity="0.85"
                    />
                  </svg>
                </span>
              </span>
            </h2>

            {/* Persuasive Editorial Copy matching Reference UI */}
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
              <p>
                We are recognized as the top{" "}
                <strong className="font-semibold text-slate-900">
                  lead generation company in Noida
                </strong>{" "}
                and Delhi NCR because we never sell stale or recycled databases. Our specialized{" "}
                <strong className="font-semibold text-slate-900">
                  lead generation services in Noida
                </strong>{" "}
                engineer custom, live acquisition pipelines designed exclusively for your business.
              </p>

              <p>
                From tech startups in <strong className="font-semibold text-slate-900">Noida Sector 62 &amp; Sector 63</strong> to luxury real estate developers along the <strong className="font-semibold text-slate-900">Noida Expressway</strong>, Brandmingo blends local market intelligence with aggressive media buying to deliver verified, sales-ready decision-makers.
              </p>
            </div>

            {/* "What Sets Us Apart?" Feature Card matching Reference UI */}
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_rgba(15,23,42,0.04)] p-5 sm:p-6 space-y-4">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wide">
                What Sets Us Apart?
              </div>

              {/* 2-Column Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4.5 pt-1">
                {differentiators.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100/80 text-[#fb8002] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* High-Converting CTA Pill Button matching Reference UI */}
            <div className="pt-2 sm:pt-3 space-y-2.5">
              <button
                type="button"
                onClick={() => openModal("Why Brandmingo Section")}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#fb8002] to-[#fa5500] hover:from-[#fa5500] hover:to-[#ea4e00] text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
              >
                <span>BOOK A STRATEGY CALL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fb8002] animate-ping" />
                <span>Limited Discovery Call Slots Available This Month</span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: HIGH-RES SHOWCASE GRAPHIC (WhyChoose.png)
              =================================================================== */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            {/* Warm Radial Orange Aura behind Graphic */}
            <div className="absolute inset-0 max-w-[480px] max-h-[480px] m-auto rounded-full bg-gradient-to-tr from-[#fb8002]/15 via-orange-100/35 to-transparent blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[520px] lg:max-w-[560px] transition-transform duration-500 ease-out hover:scale-[1.015]">
              <Image
                src="/images/WhyChoose.png"
                alt="Why Choose Brandmingo - Best Lead Generation Service in Noida & Delhi NCR | Meta & Google Ads Company"
                width={1214}
                height={1295}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 560px"
                className="w-full h-auto object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
