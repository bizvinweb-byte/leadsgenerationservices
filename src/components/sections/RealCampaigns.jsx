"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  TrendingUp,
  BarChart3,
  Users,
  Eye,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Target,
  ShoppingCart,
} from "lucide-react";
import { useStrategyModal } from "@/context/StrategyModalContext";

export default function RealCampaigns() {
  const { openModal } = useStrategyModal();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const caseStudies = [
    {
      id: "education-lead-gen",
      slideNumber: "01 / 03",
      tagNumber: "01",
      industry: "Education & Study Abroad",
      title: "Education Lead Generation",
      subtitle: "Student enquiries at scale across India & Abroad.",
      dashboardAccount: "Career Clinic Ad Account (Results from 155 campaigns)",
      imageSrc: "/images/one.jpg",
      imageAlt:
        "Meta Ads Manager Dashboard showing ₹17.64 Lakhs Ad Spend, 22,000+ MQLs, 1.85 Crore Impressions for Education Admission Campaigns",
      metrics: [
        {
          icon: BarChart3,
          value: "₹17.64L+",
          label: "Ad Spend Managed",
        },
        {
          icon: Users,
          value: "22,000+",
          label: "Estimated Leads (MQLs)",
        },
        {
          icon: Target,
          value: "₹80",
          label: "Avg. Cost Per Lead",
        },
        {
          icon: Eye,
          value: "1.85Cr+",
          label: "Total Impressions",
        },
      ],
      checklist: [
        "155 Meta campaigns executed & continuously optimised",
        "MBBS India, MBBS Abroad, B.Tech & Overseas Counselling",
        "Country-wise & state-wise precision audience targeting",
        "Custom lead forms with qualifying questions & counsellor feedback",
      ],
    },
    {
      id: "d2c-purchase-growth",
      slideNumber: "02 / 03",
      tagNumber: "02",
      industry: "D2C & E-Commerce",
      title: "D2C Purchase Growth",
      subtitle: "High-intent paid media scaling for D2C apparel brand.",
      dashboardAccount: "Velence Official (Results from 59 campaigns)",
      imageSrc: "/images/tow.jpg",
      imageAlt:
        "Meta Ads Manager Dashboard showing 44 days, 2,106 Purchases, 3.28X ROAS for D2C Brand scaled by Brandmingo",
      metrics: [
        {
          icon: BarChart3,
          value: "₹4.22L+",
          label: "Total Ad Spend",
        },
        {
          icon: ShoppingCart,
          value: "2,106",
          label: "Website Purchases",
        },
        {
          icon: TrendingUp,
          value: "3.28X",
          label: "Purchase ROAS",
        },
        {
          icon: Target,
          value: "₹200",
          label: "Avg. Cost per Purchase",
        },
      ],
      checklist: [
        "Optimised for prepaid and partial-paid high-intent orders",
        "11.36 Lakhs+ people reached & 25.24 Lakhs+ impressions",
        "84,769 high-intent website link clicks generated",
        "Product-focused video creative testing & continuous retargeting",
      ],
    },
    {
      id: "health-wellness-revenue",
      slideNumber: "03 / 03",
      tagNumber: "03",
      industry: "Health & Wellness",
      title: "Health & Wellness Revenue",
      subtitle: "Prepaid order funnel scaling in Health & Wellness.",
      dashboardAccount: "AANI Health & Wellness (Results from 44 campaigns)",
      imageSrc: "/images/three.jpg",
      imageAlt:
        "Meta Ads Manager Dashboard showing ₹52.57 Lakhs Revenue from Prepaid Orders at 2.49X ROAS by Brandmingo",
      metrics: [
        {
          icon: BarChart3,
          value: "₹52.57L+",
          label: "Tracked Revenue Value",
        },
        {
          icon: ShoppingCart,
          value: "2,178",
          label: "Website Purchases",
        },
        {
          icon: TrendingUp,
          value: "2.49X",
          label: "Top Campaign ROAS",
        },
        {
          icon: Target,
          value: "₹1,253",
          label: "Avg. Cost per Purchase",
        },
      ],
      checklist: [
        "₹52.57 Lakhs revenue from verified prepaid & partial orders",
        "Best performing campaign delivered 647 purchases @ 2.49X ROAS",
        "Creative communication + audience segmentation engine",
        "Payment-focused checkout funnel optimisation & retargeting",
      ],
    },
  ];

  const totalSlides = caseStudies.length;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-advance slider every 8.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 8500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentStudy = caseStudies[activeSlide];

  return (
    <section
      id="real-campaigns"
      aria-label="Real Campaigns and Measurable Growth - Performance Marketing Case Studies"
      className="site-section relative w-full bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Ambience matching WhySqroot and SearchingForUs */}
      <div className="absolute top-1/2 -right-28 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-bl from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* ===================================================================
            HEADER: 100% Matching Global System (Tag Badge, Curve Underline, Subtitle)
            =================================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-6 sm:mb-8 lg:mb-9">
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
            <span>PERFORMANCE MARKETING CASE STUDIES</span>
          </div>

          {/* Main Headline with Global Theme Colors & Hand-Drawn Curve Underline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            Real Campaigns.{" "}
            <span className="relative inline-block text-[#fb8002]">
              Measurable Growth.
              {/* Hand-drawn double-stroke curve underline identical to WhySqroot / SearchingForUs */}
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
                  d="M12 12C50 7.5 120 7 155 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto pt-1 leading-relaxed">
            Actual campaign data. Proven strategies. Real business results.
          </p>
        </div>

        {/* ===================================================================
            MAIN SLIDER CARD WRAPPER WITH SLEEK FLOATING ARROWS
            =================================================================== */}
        <div className="relative max-w-6xl mx-auto">
          {/* Floating Left Navigation Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Case Study"
            className="hidden md:flex absolute -left-5 sm:-left-6 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#fb8002] hover:border-[#fb8002] shadow-md items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Floating Right Navigation Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Case Study"
            className="hidden md:flex absolute -right-5 sm:-right-6 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#fb8002] hover:border-[#fb8002] shadow-md items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Main Content Card (Clean, Compact & Proportionate) */}
          <div className="rounded-3xl sm:rounded-[2rem] bg-white border border-slate-200/90 shadow-[0_16px_40px_-15px_rgba(0,0,0,0.06)] p-5 sm:p-7 lg:p-8 relative overflow-hidden transition-all duration-300">
            {/* Subtle soft orange radial accent on top-right */}
            <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(251,128,2,0.06),_transparent_70%)]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* =============================================================
                  LEFT COLUMN: Slide Badge, Title, 4 Metrics, Checklist & CTA
                  ============================================================= */}
              <div className="lg:col-span-5 space-y-4 text-left">
                {/* Slide Number & Category Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-[#fb8002] text-[11px] font-bold tracking-wide">
                  <span>{currentStudy.slideNumber}</span>
                  <span className="text-[#fb8002]/40">•</span>
                  <span className="text-slate-600 font-semibold">
                    {currentStudy.industry}
                  </span>
                </div>

                {/* Main Heading & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b0f19] tracking-tight leading-tight">
                    {currentStudy.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] font-medium mt-1 leading-snug">
                    {currentStudy.subtitle}
                  </p>
                </div>

                {/* 4 Metric Cards Grid (2x2 Compact) */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-0.5">
                  {currentStudy.metrics.map((metric, i) => {
                    const IconComp = metric.icon;
                    return (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-[#fffaf5] border border-orange-100/80 hover:border-orange-200 transition-all shadow-2xs"
                      >
                        <div className="flex items-center gap-1.5 text-[#fb8002] mb-0.5">
                          <IconComp className="w-4 h-4 text-[#fb8002] shrink-0" />
                          <span className="text-base sm:text-lg font-bold text-[#0b0f19] tracking-tight">
                            {metric.value}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-semibold leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Feature Checklist with Orange Check Icons */}
                <ul className="space-y-1.5 pt-0.5 text-slate-700 text-xs sm:text-[12.5px] font-medium leading-relaxed">
                  {currentStudy.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fb8002] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Primary CTA Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      openModal(`Case Study Slide: ${currentStudy.title}`)
                    }
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#fb8002] via-[#fa5500] to-[#f03c00] hover:from-[#fa5500] hover:to-[#ea4e00] text-white text-xs sm:text-[13px] font-bold tracking-wide shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
                  >
                    <span>Explore Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* =============================================================
                  RIGHT COLUMN: High-Fidelity Meta Ads Manager Dashboard
                  (Clean White Frame Matching 2.2:1 Aspect Ratio - NO Black Letterbox!)
                  ============================================================= */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Clean Browser/Mac Header Bar */}
                  <div className="px-3.5 py-2 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between gap-2.5 text-xs">
                    {/* OS Traffic Light Dots */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>

                    {/* Meta Campaign Account Tag */}
                    <div className="flex items-center gap-2 truncate text-slate-700 font-semibold text-[11px] sm:text-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">
                        {currentStudy.dashboardAccount}
                      </span>
                    </div>

                    {/* Click to Zoom / Lightbox Trigger */}
                    <button
                      type="button"
                      onClick={() => setLightboxImage(currentStudy)}
                      aria-label="Enlarge campaign dashboard screenshot"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-600 hover:text-[#fb8002] hover:border-orange-300 transition-colors shrink-0 cursor-pointer shadow-2xs"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span className="hidden sm:inline">Zoom</span>
                    </button>
                  </div>

                  {/* Clean White Dashboard Canvas - Matching exact ~2.2:1 aspect ratio of Meta Ads Manager */}
                  <div
                    onClick={() => setLightboxImage(currentStudy)}
                    className="relative w-full aspect-[2.18/1] bg-white cursor-pointer overflow-hidden group/img"
                  >
                    <Image
                      src={currentStudy.imageSrc}
                      alt={currentStudy.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 680px"
                      className="object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.01]"
                    />

                    {/* Subtle Glass Hover Indicator */}
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-white text-slate-800 text-[11px] font-bold shadow-md flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#fb8002]" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================
              PAGINATION DOTS (CENTERED BELOW MAIN CARD)
              =================================================================== */}
          <div className="flex items-center justify-center gap-2 pt-4 sm:pt-5">
            {caseStudies.map((study, idx) => (
              <button
                key={study.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to case study slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeSlide === idx
                    ? "w-7 h-2 bg-[#fb8002]"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* ===================================================================
              BOTTOM 3 INTERACTIVE THUMBNAIL SELECTOR CARDS (COMPACT & CLEAN)
              =================================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-5">
            {caseStudies.map((study, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={study.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`text-left p-2.5 sm:p-3 rounded-2xl transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                    isActive
                      ? "bg-[#fffaf5] border-2 border-[#fb8002] ring-2 ring-orange-500/10 shadow-sm"
                      : "bg-white hover:bg-slate-50/60 border border-slate-200/90 hover:border-orange-200"
                  }`}
                >
                  {/* Clean Mini Thumbnail */}
                  <div className="relative w-16 sm:w-20 h-10 sm:h-12 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-white">
                    <Image
                      src={study.imageSrc}
                      alt={`${study.title} - Meta Ads & Performance Marketing Lead Generation Case Study by Brandmingo`}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <span
                      className={`text-[11px] font-black tracking-wide block ${
                        isActive ? "text-[#fb8002]" : "text-slate-400"
                      }`}
                    >
                      {study.tagNumber}
                    </span>
                    <h4
                      className={`text-xs sm:text-[13px] font-bold truncate ${
                        isActive ? "text-[#0b0f19]" : "text-slate-700"
                      }`}
                    >
                      {study.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 truncate">
                      {study.industry}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================================
          EXPANDED LIGHTBOX POPUP MODAL (FOR EXAMINING FULL HIGH-RES DASHBOARD NUMBERS)
          ===================================================================== */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header Bar */}
            <div className="px-5 py-3 bg-[#0b0f19] text-white flex items-center justify-between gap-3">
              <div>
                <h4 className="text-sm sm:text-base font-bold">
                  {lightboxImage.title}
                </h4>
                <p className="text-xs text-slate-400">
                  {lightboxImage.dashboardAccount}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Clean Canvas Displaying Image Without Letterbox Distortions */}
            <div className="relative w-full max-h-[75vh] overflow-auto bg-white flex items-center justify-center p-2 sm:p-4">
              <div className="relative w-full aspect-[2.2/1] min-h-[260px] sm:min-h-[380px]">
                <Image
                  src={lightboxImage.imageSrc}
                  alt={lightboxImage.imageAlt}
                  fill
                  className="object-contain"
                  sizes="1200px"
                  priority
                />
              </div>
            </div>

            {/* Lightbox Footer Bar with Direct CTA */}
            <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-600 text-center sm:text-left">
                Verified Meta Ads Manager data for{" "}
                <strong className="text-slate-900">
                  {lightboxImage.title}
                </strong>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  const title = lightboxImage.title;
                  setLightboxImage(null);
                  openModal(`Case Study Lightbox: ${title}`);
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#fb8002] to-[#fa5500] hover:from-[#fa5500] hover:to-[#ea4e00] text-white text-xs font-bold tracking-wide shadow-md transition-all cursor-pointer"
              >
                Book A Strategy Call For Your Brand
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
