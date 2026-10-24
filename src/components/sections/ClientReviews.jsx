"use client";

import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientReviews() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: "rev-1",
      name: "Rohit Mehta",
      role: "E-commerce & D2C Brand",
      rating: 5,
      content:
        "Our ROAS improved significantly within the first month. Great strategy, clear communication and consistent support across Meta campaigns.",
      location: "Mumbai",
    },
    {
      id: "rev-2",
      name: "Priya Sharma",
      role: "Education Platform",
      rating: 5,
      content:
        "Professional, data-driven and results focused. They truly understand Meta Ads algorithms and scaled our qualified lead pipeline while cutting CPL.",
      location: "Bengaluru",
    },
    {
      id: "rev-3",
      name: "Aman Verma",
      role: "Real Estate Business",
      rating: 5,
      content:
        "We saw a 3x increase in qualified leads with zero wasted budget. Their audience exclusions and high-intent targeting deliver real buyers.",
      location: "Delhi NCR",
    },
    {
      id: "rev-4",
      name: "Neha Kapoor",
      role: "D2C Beauty & Lifestyle",
      rating: 5,
      content:
        "Amazing ad creatives and consistent weekend performance. Our monthly online sales have grown steadily with a 3.8x blended ROAS.",
      location: "Delhi",
    },
    {
      id: "rev-5",
      name: "Karan Singh",
      role: "Healthcare Business",
      rating: 5,
      content:
        "Transparent reporting, live dashboards and excellent communication throughout the campaign. Appointment bookings jumped by 140%.",
      location: "Hyderabad",
    },
    {
      id: "rev-6",
      name: "Ananya Deshmukh",
      role: "Jewelry & Luxury Retail",
      rating: 5,
      content:
        "Their dynamic catalog ads and high-AOV bundle strategies revived our Facebook ROAS. AOV went up by 35% in under 45 days.",
      location: "Jaipur",
    },
    {
      id: "rev-7",
      name: "Vikram Singhania",
      role: "B2B SaaS Solutions",
      rating: 5,
      content:
        "Hands down the best performance marketing team. Scaled our inbound demo requests by 210% with hyper-targeted funnel architecture.",
      location: "Bengaluru",
    },
  ];

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = 340;
    const newIdx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(reviews.length - 1, Math.max(0, newIdx)));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -360 : 360;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Structured Schema.org for Google Search Rich Snippets
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Brandmingo Meta Ads Performance Marketing",
    description:
      "Data-driven Meta Ads and Performance Marketing Agency helping businesses across India scale profitably.",
    brand: {
      "@type": "Brand",
      name: "Brandmingo",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "127",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
      },
      reviewBody: r.content,
    })),
  };

  return (
    <section
      id="reviews"
      aria-label="Client Reviews and Testimonials"
      className="site-section relative w-full bg-white overflow-hidden"
    >
      {/* Schema.org for Google Search Star Ratings Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Background Soft Glows */}
      <div className="absolute top-1/2 -left-28 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-bl from-[#fb8002]/8 via-[#fa5500]/4 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* ===================================================================
            HEADER: Tag Badge, Headline with Hand-Drawn Curve Underline, Subtitle
            =================================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-7 sm:mb-9 lg:mb-11">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
            <span>CLIENT REVIEWS</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            Loved by{" "}
            <span className="relative inline-block text-[#fb8002]">
              Growing Brands
              {/* Hand-drawn double-stroke curve underline under 'Growing Brands' */}
              <svg
                className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#fb8002] overflow-visible pointer-events-none"
                viewBox="0 0 250 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9.5C60 4 165 3.5 245 7"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M15 12C70 8 175 7.5 230 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed pt-1">
            Real feedback from businesses that scaled with our Meta Ads strategies.
          </p>
        </div>

        {/* ===================================================================
            CAROUSEL WRAPPER WITH FLOATING ARROWS & FLUID SNAP TRACK
            =================================================================== */}
        <div className="relative max-w-7xl mx-auto">
          {/* Floating Left Arrow (Desktop / Tablet) */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous review"
            className={`hidden md:flex absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-slate-200/90 shadow-md items-center justify-center text-slate-700 transition-all duration-200 cursor-pointer ${
              canScrollLeft
                ? "hover:border-[#fb8002] hover:text-[#fb8002] hover:scale-105 active:scale-95"
                : "opacity-40 cursor-not-allowed pointer-events-none"
            }`}
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.25]" />
          </button>

          {/* Floating Right Arrow (Desktop / Tablet) */}
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next review"
            className={`hidden md:flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-slate-200/90 shadow-md items-center justify-center text-slate-700 transition-all duration-200 cursor-pointer ${
              canScrollRight
                ? "hover:border-[#fb8002] hover:text-[#fb8002] hover:scale-105 active:scale-95"
                : "opacity-40 cursor-not-allowed pointer-events-none"
            }`}
          >
            <ChevronRight className="w-5 h-5 stroke-[2.25]" />
          </button>

          {/* Review Cards Track (Equal Width, Equal Height, Smooth Momentum) */}
          <div
            ref={scrollRef}
            className="flex gap-4 xl:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-1 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="w-[82vw] sm:w-[320px] md:w-[330px] lg:w-[345px] shrink-0 snap-start bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_rgba(251,128,2,0.1)] hover:border-[#fb8002]/40 transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[235px]"
              >
                {/* Top: 5 Stars */}
                <div className="flex items-center gap-1 mb-3" aria-label="5 out of 5 stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#fb8002] text-[#fb8002]"
                    />
                  ))}
                </div>

                {/* Middle: Review Quote Text */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal mb-4 flex-1 flex items-start">
                  &ldquo;{rev.content}&rdquo;
                </p>

                {/* Bottom: Reviewer Name & Industry Role */}
                <div className="pt-3 border-t border-slate-100">
                  <h3 className="font-bold text-sm sm:text-[15px] text-[#0b0f19] tracking-tight">
                    {rev.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    {rev.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Bottom Thumb Navigation */}
          <div className="md:hidden mt-5 flex items-center justify-between px-2">
            {/* Step Counter */}
            <span className="text-xs font-semibold text-slate-500">
              <span className="text-[#fb8002] font-bold">
                Review 0{activeIndex + 1}
              </span>{" "}
              / 0{reviews.length}
            </span>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({
                        left: i * 310,
                        behavior: "smooth",
                      });
                    }
                  }}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-5 bg-[#fb8002]"
                      : "w-1.5 bg-slate-200"
                  }`}
                />
              ))}
            </div>

            {/* Circular Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous review"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shadow-2xs hover:border-[#fb8002] hover:text-[#fb8002] active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next review"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shadow-2xs hover:border-[#fb8002] hover:text-[#fb8002] active:scale-95 transition-all"
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
