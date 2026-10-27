"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrustedBrands() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 5; // 5 progress indicator segments matching reference UI

  const brandLogos = [
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
      name: "Azend",
      url: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1792752784/azend_tl13fi.png",
      alt: "Azend - Lead Generation Service in India Client Scaled by Brandmingo",
    },
    {
      name: "D2C Brand Partner",
      url: "https://brandmingo.com/Cloudinary-images/15_aui2yn.png",
      alt: "High-Growth Brand - Scaled by Best Lead Generation Company in Noida Brandmingo",
    },
    {
      name: "Enterprise Client",
      url: "https://brandmingo.com/Cloudinary-images/14_ekrye0.png",
      alt: "Enterprise Client - Best Lead Generation Service in Noida & Delhi NCR",
    },
    {
      name: "Growth Partner",
      url: "https://brandmingo.com/Cloudinary-images/11_epm0ux.png",
      alt: "Enterprise Brand Generating High-Intent Leads with Brandmingo Lead Generation Service in India",
    },
    {
      name: "High-Ticket Client",
      url: "https://brandmingo.com/Cloudinary-images/10_lwmtta.png",
      alt: "Real Estate & High-Ticket Lead Generation Services in Noida Client",
    },
    {
      name: "E-Commerce Leader",
      url: "https://brandmingo.com/Cloudinary-images/2_etbkdt.png",
      alt: "E-Commerce ROAS Optimization & Best Lead Generation Service in India",
    },
    {
      name: "Fast Scaling D2C",
      url: "https://brandmingo.com/Cloudinary-images/4_ky3yra.png",
      alt: "D2C Brand - Scaled by Best Lead Generation Agency in Noida Brandmingo",
    },
    {
      name: "Tech SaaS Partner",
      url: "https://brandmingo.com/Cloudinary-images/14_xe4e63.png",
      alt: "B2B SaaS Lead Generation Service in Noida & India - Brandmingo Client",
    },
    {
      name: "Healthcare Partner",
      url: "https://brandmingo.com/Cloudinary-images/3_wehha6.png",
      alt: "Healthcare & High-Ticket Lead Generation Service in Noida Partner",
    },
  ];

  // Smooth scroll handler
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      if (direction === "left") {
        if (scrollLeft <= 10) {
          sliderRef.current.scrollTo({
            left: scrollWidth - clientWidth,
            behavior: "instant",
          });
        } else {
          sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
        }
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "instant" });
        } else {
          sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
        }
      }
    }
  };

  // Track scroll position to update segmented progress indicators
  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        const ratio = scrollLeft / maxScroll;
        const currentSegment = Math.min(
          totalSlides - 1,
          Math.max(0, Math.floor(ratio * totalSlides))
        );
        setActiveIndex(currentSegment);
      }
    }
  };

  // Jump to specific segment
  const jumpToSegment = (index) => {
    if (sliderRef.current) {
      const { scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const targetScroll = (maxScroll / (totalSlides - 1)) * index;
      sliderRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  // Auto-scroll effect: advances smoothly; when reaching the end, resets instantly to 0 without backwards rewind animation
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Instant reset to beginning so it does NOT animate backwards across all cards
          sliderRef.current.scrollTo({ left: 0, behavior: "instant" });
        } else {
          sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="trusted-brands"
      aria-label="Trusted by Growing Brands"
      className="relative w-full pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 bg-white overflow-hidden"
    >
      <div className="site-container text-center">
        {/* ===================================================================
            HEADER: Tag Badge & Heading with Curved Underline
            =================================================================== */}
        <div className="max-w-3xl mx-auto space-y-2.5 mb-6 sm:mb-8">
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
            <span>Trusted by Growing Brands</span>
          </div>

          {/* Heading matching Reference UI: "50+ Brands. One Growth Mindset." */}
          {/* Underline is strictly under "One Growth", leaving "Mindset." clean */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            50+ Brands.{" "}
            <span className="text-[#fb8002]">
              <span className="relative inline-block">
                One Growth
                {/* Hand-drawn double-stroke curve underline strictly under "One Growth" */}
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#fb8002] overflow-visible pointer-events-none"
                  viewBox="0 0 170 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9.5C45 4 115 3.5 167 7"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 12C50 8 122 7.5 152 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />
                </svg>
              </span>{" "}
              Mindset.
            </span>
          </h2>
        </div>

        {/* ===================================================================
            LOGO CARDS SLIDER (Exact card style as in user screenshot)
            =================================================================== */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full"
        >
          {/* Scrollable Container with Smooth Native Drag & Snap */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1 text-left"
          >
            {brandLogos.map((brand, index) => (
              <div
                key={index}
                className="w-[160px] sm:w-[185px] lg:w-[205px] h-[90px] sm:h-[100px] lg:h-[110px] rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-[#fb8002]/45 transition-all duration-300 flex items-center justify-center p-2.5 sm:p-3 group shrink-0 select-none cursor-pointer"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.url}
                    alt={brand.alt}
                    fill
                    sizes="(max-width: 640px) 160px, 205px"
                    className="object-contain p-1 opacity-95 group-hover:opacity-100 group-hover:scale-110 filter contrast-[1.12] brightness-[0.92] transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ===================================================================
              BOTTOM CONTROLS BAR: Segmented Progress Bar (Center) & Arrows (Right)
              =================================================================== */}
          <div className="mt-8 flex items-center justify-between sm:justify-center relative">
            {/* Center: Segmented Progress Bar (Matching reference UI) */}
            <div className="flex items-center gap-2 mx-auto">
              {[...Array(totalSlides)].map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => jumpToSegment(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "w-8 sm:w-10 bg-[#fb8002]"
                      : "w-4 sm:w-5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide group ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right: Circular Navigation Buttons (Matching reference UI) */}
            <div className="flex items-center gap-2 sm:absolute sm:right-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full bg-white border border-slate-200/90 hover:border-[#fb8002] text-slate-500 hover:text-[#fb8002] hover:scale-105 active:scale-95 flex items-center justify-center transition-all shadow-2xs focus:outline-none cursor-pointer"
                aria-label="Previous brand logos"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full bg-white border border-slate-200/90 hover:border-[#fb8002] text-slate-500 hover:text-[#fb8002] hover:scale-105 active:scale-95 flex items-center justify-center transition-all shadow-2xs focus:outline-none cursor-pointer"
                aria-label="Next brand logos"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
