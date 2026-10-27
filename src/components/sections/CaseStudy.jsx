"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { BarChart3, ShoppingCart, ShieldCheck } from "lucide-react";

export default function CaseStudy() {
  const logoStripRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const caseMetrics = [
    {
      icon: BarChart3,
      value: "200%",
      label: "Improved ROAS",
    },
    {
      icon: ShoppingCart,
      value: "130%",
      label: "Increase in AOV",
    },
    {
      icon: ShieldCheck,
      value: "99%",
      label: "Reduction in Fake Orders",
    },
  ];

  // Client partner logos from Trusted by Growing Brands section
  const clientLogos = [
    {
      name: "Tiffytots",
      url: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1792752788/tiffytots_vtf3mg.png",
      alt: "Tiffytots - Scaled with Brandmingo Best Lead Generation Service in Noida & India",
    },
    {
      name: "Picturejar",
      url: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1792752794/picturejar_pxbjck.png",
      alt: "Picturejar - Meta Ads & Best Lead Generation Services in Noida by Brandmingo",
    },
    {
      name: "High-Ticket Client",
      url: "https://brandmingo.com/Cloudinary-images/10_lwmtta.png",
      alt: "Real Estate & High-Ticket Lead Generation Company in Noida Client",
    },
    {
      name: "Brand Partner",
      url: "https://brandmingo.com/Cloudinary-images/15_aui2yn.png",
      alt: "High-Growth Brand - Scaled by Best Lead Generation Agency in Noida",
    },
    {
      name: "Cliva",
      url: "https://brandmingo.com/Cloudinary-images/14_ekrye0.png",
      alt: "Cliva - Lead Generation Service in India Client Scaled by Brandmingo",
    },
    {
      name: "Suryatra",
      url: "https://brandmingo.com/Cloudinary-images/11_epm0ux.png",
      alt: "Suryatra - Best Lead Generation Service Client in Noida & Delhi NCR",
    },
    {
      name: "Fast Scaling D2C",
      url: "https://brandmingo.com/Cloudinary-images/4_ky3yra.png",
      alt: "D2C Brand - High ROAS Lead Generation Service in India",
    },
    {
      name: "Bovomo",
      url: "https://brandmingo.com/Cloudinary-images/2_etbkdt.png",
      alt: "Bovomo - E-Commerce Performance Marketing & Lead Generation Services Partner",
    },
  ];

  // Mobile Auto-Slider: smoothly advances by 1 logo when screen is narrower than full strip
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (logoStripRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = logoStripRef.current;
        // If all logos fit (desktop), no need to scroll
        if (scrollWidth <= clientWidth + 10) return;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          logoStripRef.current.scrollTo({ left: 0, behavior: "instant" });
        } else {
          // Advance by 1 logo width on mobile (approx 1/3 of clientWidth)
          const step = clientWidth / 3;
          logoStripRef.current.scrollBy({ left: step, behavior: "smooth" });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="case-study"
      aria-label="Case Study - Real Results. Real Growth."
      className="site-section relative w-full bg-white overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 right-0 translate-x-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-[#fb8002]/10 via-orange-100/30 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* ===================================================================
            HEADER: Tag Badge, Main Title with Curve Underline & Subtitle
            =================================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-10 lg:mb-12">
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
            <span>CASE STUDY</span>
          </div>

          {/* Heading with Underline strictly under "Real Growth." */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            Real Results.{" "}
            <span className="text-[#fb8002]">
              <span className="relative inline-block">
                Real Growth.
                {/* Hand-drawn double-stroke curve underline under Real Growth. */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#fb8002] overflow-visible pointer-events-none"
                  viewBox="0 0 220 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9.5C45 4 130 3.5 215 7"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 12C55 8 140 7.5 195 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />
                </svg>
              </span>
            </span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Data-driven campaigns that deliver measurable business impact.
          </p>
        </div>

        {/* ===================================================================
            MAIN CASE STUDY SHOWCASE (Phone Mockup Left + Metric Cards Right)
            =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Phone Mockup with Ambient Warm Backdrop */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Warm Radial Orange Aura behind Mockup */}
            <div className="absolute inset-0 max-w-[380px] max-h-[380px] m-auto rounded-full bg-gradient-to-tr from-[#fb8002]/20 via-orange-200/35 to-transparent blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] transition-transform duration-500 ease-out hover:scale-[1.015]">
              <Image
                src="/images/case study.png"
                alt="PawsIndia E-commerce Scaling - Best Lead Generation Service in Noida & India Case Study by Brandmingo"
                width={1229}
                height={1280}
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 400px"
                className="w-full h-auto object-contain drop-shadow-xl"
                priority
              />

              {/* Floating Verified Trust Pill */}
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-1 left-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-md text-xs font-bold text-slate-800 select-none pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Client Performance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Heading & 3 High-Impact Metric Cards */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0b0f19] tracking-tight leading-tight">
              Improved ROAS by 200%
              <br />
              on Meta &amp; Google
            </h3>

            {/* 3 Metric Cards matching Reference UI */}
            <div className="space-y-3.5 sm:space-y-4">
              {caseMetrics.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-lg hover:border-[#fb8002]/45 transition-all duration-300 p-4 sm:p-5 flex items-center justify-between gap-4 group"
                  >
                    {/* Left: Icon & Metric Text */}
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-orange-50 border border-orange-100/70 text-[#fb8002] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <p className="text-2xl sm:text-3xl font-extrabold text-[#fb8002] tracking-tight leading-none">
                          {item.value}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                          {item.label}
                        </p>
                      </div>
                    </div>

                    {/* Right: Rising Trend Graphic matching Reference Screenshot */}
                    <div className="flex items-end gap-1 sm:gap-1.5 h-10 shrink-0 relative pr-2 select-none pointer-events-none">
                      <div className="w-1.5 h-3 rounded-full bg-orange-100" />
                      <div className="w-1.5 h-4.5 rounded-full bg-orange-200" />
                      <div className="w-1.5 h-6 rounded-full bg-orange-300" />
                      <div className="w-1.5 h-7.5 rounded-full bg-[#fb8002]/70" />
                      <div className="w-1.5 h-9 rounded-full bg-[#fb8002]" />

                      {/* Ascending Trend Arrow */}
                      <svg
                        className="absolute -top-1 -right-0.5 w-5 h-5 text-[#fb8002]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 17C9 13 15 10 20 6"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M14 6H20V12"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================================================================
            BOTTOM CLIENT LOGOS DIVIDER STRIP (Exactly 3 on Mobile + Auto-Slide)
            =================================================================== */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100"
        >
          <div
            ref={logoStripRef}
            className="flex items-center overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {clientLogos.map((client, i) => (
              <div
                key={i}
                className="w-1/3 min-w-[33.333%] sm:w-1/4 sm:min-w-[25%] lg:w-[12.5%] lg:min-w-[12.5%] flex items-center justify-center px-2 sm:px-4 lg:px-5 border-r border-slate-200/80 last:border-r-0 shrink-0 select-none group"
              >
                <div className="relative h-10 sm:h-12 lg:h-14 w-full max-w-[95px] sm:max-w-[125px] lg:max-w-[135px] flex items-center justify-center">
                  <Image
                    src={client.url}
                    alt={client.alt}
                    fill
                    sizes="(max-width: 640px) 95px, (max-width: 1024px) 125px, 135px"
                    className="object-contain opacity-100 filter contrast-[1.2] brightness-[0.88] group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
