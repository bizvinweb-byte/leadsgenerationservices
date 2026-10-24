"use client";

import { CheckCircle2 } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      id: "01",
      title: "Facebook Ads Management",
      description:
        "As an experienced Facebook Ads agency, we manage your complete ad ecosystem. We tailor campaigns for every stage of the funnel — awareness, consideration, and conversion.",
      checklistHeading: "Our Facebook Ad Management Services Include:",
      items: [
        "Ad Account & Pixel Setup",
        "Campaign Planning & Structuring",
        "Target Audience Research",
        "Creative Testing (Static + Video)",
        "Budget Scaling & ROAS Optimization",
        "Lead Gen, Sales, App Installs, and More",
        "Funnel-Based Retargeting",
        "Conversion API (CAPI) Integration",
      ],
    },
    {
      id: "02",
      title: "Instagram Advertising Services",
      description:
        "With visual-first content and high engagement rates, Instagram is one of the best platforms to influence purchase decisions. As your Instagram advertising agency, we make your brand stand out on Reels, Stories, Explore, and Feed.",
      checklistHeading: "Our Instagram Marketing Services Include:",
      items: [
        "Reels Ad Creation & Optimization",
        "Story Ad Strategies",
        "Influencer-Style UGC Ads",
        "Hashtag Targeting",
        "Hook-Based Video Editing",
        "Instagram Shop & Product Tag Integration",
        "Ongoing Performance Tracking",
      ],
    },
    {
      id: "03",
      title: "Meta Ads Creative Strategy",
      description:
        "Meta is a creative-first platform. Even the best targeting fails without the right creative strategy. At Sqroot, we have an in-house team of copywriters, designers, editors, and media buyers who work together to test, iterate, and scale creatives.",
      checklistHeading: "We Create:",
      items: [
        "Scroll-stopping visuals",
        "UGC-style videos with voiceovers",
        "Hook-led scripts for Reels & Stories",
        "Product demos and explainers",
        "Statics, Carousels, and GIF Ads",
        "Weekly creative A/B testing",
      ],
    },
  ];

  return (
    <section
      id="services"
      aria-label="Meta Ads Services We Offer"
      className="site-section relative w-full bg-white overflow-hidden"
    >
      {/* Background Soft Ambient Light for Depth */}
      <div className="absolute top-1/4 -right-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-bl from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* ===================================================================
            HEADER: Tag Badge, Headline & Editorial Subtitle
            =================================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-10 lg:mb-12">
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
            <span>OUR SERVICES</span>
          </div>

          {/* Heading matching Reference UI */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            <span className="text-[#fb8002]">Meta Ads</span> Services We Offer
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            As a full-stack Meta advertising agency, we offer everything you need
            to run high-performing Facebook and Instagram ad campaigns — from
            creative development to strategy, media buying, and reporting.
          </p>
        </div>

        {/* ===================================================================
            SERVICE CARDS (01, 02, 03 - Compact Split Layout with Soft Hairline Divider)
            =================================================================== */}
        <div className="space-y-4 sm:space-y-5 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-lg hover:border-[#fb8002]/35 transition-all duration-300 p-5 sm:p-7 lg:p-8 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Number Badge, Title, Description */}
                <div className="lg:col-span-5 space-y-2.5 text-left">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-11 h-9.5 rounded-xl bg-[#fff5ec] border border-[#ffeedd] text-[#fb8002] font-black text-base tracking-wide shadow-2xs">
                    {service.id}
                  </div>

                  <h3 className="text-2xl sm:text-[26px] font-bold text-[#0b0f19] tracking-tight pt-0.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right Column: Checklist Header & Items with Soft Light Grey Hairline Divider */}
                <div className="lg:col-span-7 lg:border-l lg:border-slate-200/60 lg:pl-8 xl:pl-10 space-y-3 text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0b0f19] tracking-tight">
                    {service.checklistHeading}
                  </h4>

                  <div className="space-y-2 sm:space-y-2.5">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#fb8002] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-[13px] font-medium text-slate-800 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
