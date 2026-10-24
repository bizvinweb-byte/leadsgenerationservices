"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientReviews() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: "rev-1",
      name: "Rajneesh Choudhary",
      role: "Verified Client • 1 review",
      time: "a year ago",
      rating: 5,
      avatarBg: "bg-[#e65100]",
      avatarText: "R",
      content:
        "Brandmingo is the best digital marketing agency in Noida! They managed our Meta ads and social media perfectly — our reach and engagement improved, and sales have increased a lot.",
    },
    {
      id: "rev-2",
      name: "Dipika",
      role: "Verified Client • 6 reviews",
      time: "8 months ago",
      rating: 5,
      avatarBg: "bg-[#7b1fa2]",
      avatarText: "D",
      content:
        "Brandmingo is really good ....their work is so professional and client focused ...I highly recommend them for their excellent services ...their team is highly supportive and helpful.",
    },
    {
      id: "rev-3",
      name: "Mahil Hasan",
      role: "Verified Client • 6 reviews",
      time: "a year ago",
      rating: 5,
      avatarBg: "bg-[#00897b]",
      avatarText: "MH",
      content:
        "I had an amazing experience with Brandmingo. They were professional, creative and truly wonderful people . Website they built very fast , modern with beautiful designs.",
    },
    {
      id: "rev-4",
      name: "N K",
      role: "Verified Client • 3 reviews",
      time: "a year ago",
      rating: 5,
      avatarBg: "bg-[#5e35b1]",
      avatarText: "NK",
      content:
        "The team coordinated well , being from different city they delivered the work as per exact requirements. They were patient while doing all the changes,and hit and trials while designing,till we ended up on the final design.",
    },
    {
      id: "rev-5",
      name: "Marque Career",
      role: "Enterprise Partner • 2 reviews",
      time: "3 years ago",
      rating: 5,
      avatarUrl: "https://brandmingo.com/Cloudinary-images/10_lwmtta.png",
      avatarBg: "bg-white",
      avatarText: "MC",
      content:
        "I can confidently say that they are best development company. I would definitely recommend their services to anyone seeking top-tier development solutions.",
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
            <span>VERIFIED GOOGLE REVIEWS</span>
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
            Real 5-star Google reviews from business founders and brands scaled by Brandmingo.
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
                className="w-[82vw] sm:w-[320px] md:w-[330px] lg:w-[350px] shrink-0 snap-start bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_rgba(251,128,2,0.1)] hover:border-[#fb8002]/40 transition-all duration-300 flex flex-col justify-between min-h-[235px] sm:min-h-[250px]"
              >
                {/* Top: 5 Stars + Google Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Google Verified Review Badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/90 text-[10.5px] font-semibold text-slate-700 shadow-2xs">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span>Google</span>
                  </div>
                </div>

                {/* Middle: Review Quote Text */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal mb-4 flex-1 flex items-start">
                  &ldquo;{rev.content}&rdquo;
                </p>

                {/* Bottom: Reviewer Avatar, Name & Meta */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  {rev.avatarUrl ? (
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white ring-1 ring-slate-200 shrink-0 p-0.5 flex items-center justify-center">
                      <Image
                        src={rev.avatarUrl}
                        alt={rev.name}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-9 h-9 rounded-full ${rev.avatarBg || "bg-[#fb8002]"} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs ring-2 ring-white`}
                    >
                      {rev.avatarText || rev.name.charAt(0)}
                    </div>
                  )}
                  <div className="text-left leading-tight">
                    <h3 className="font-bold text-sm text-[#0b0f19] tracking-tight">
                      {rev.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {rev.role} • {rev.time}
                    </p>
                  </div>
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
