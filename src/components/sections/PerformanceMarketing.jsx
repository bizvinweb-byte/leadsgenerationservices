"use client";

import { useRef, useState, useEffect } from "react";
import {
  Filter,
  ShoppingCart,
  Smartphone,
  Megaphone,
  MousePointerClick,
  Store,
  Users,
  Calendar,
  RotateCw,
  Package,
  PlaySquare,
  BadgeCheck,
  Briefcase,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function PerformanceMarketing() {
  const scrollRef = useRef(null);
  const [activeGoalId, setActiveGoalId] = useState("ecommerce");
  const [isHovered, setIsHovered] = useState(false);

  const scrollToForm = (e) => {
    if (e) e.preventDefault();
    const formElement =
      document.getElementById("strategy-call-form") ||
      document.getElementById("hero");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Row 1 Pill Goals matching Reference UI
  const row1Goals = [
    {
      id: "lead-gen",
      title: "Lead Generation",
      icon: Filter,
      headline: "High-Intent Qualified Leads for High-Ticket & B2B Businesses",
      description:
        "Capture pre-qualified prospects with friction-free multi-step funnels, custom landing pages, and instant CRM automation.",
      metrics: ["45% CPA Reduction", "Instant CRM & WhatsApp Sync", "Verified Lead Data"],
    },
    {
      id: "ecommerce",
      title: "E-commerce Sales",
      icon: ShoppingCart,
      headline: "Scale DTC & E-Commerce Revenue with 3.5x-5x Target ROAS",
      description:
        "Leverage Meta Advantage+ shopping campaigns, dynamic product catalogs, and aggressive remarketing to drive consistent first-time and repeat purchases.",
      metrics: ["Dynamic Catalog Ads (DPA)", "High-Converting Checkout Funnels", "Automated Cart Recovery Sequences"],
    },
    {
      id: "app-installs",
      title: "App Installs",
      icon: Smartphone,
      headline: "Cost-Effective Mobile App Installs & In-App Transactions",
      description:
        "Acquire high-LTV mobile users with targeted SKAdNetwork & Google App Campaigns that drive post-install transactions.",
      metrics: ["Optimized CPI (Cost Per Install)", "Post-Install Event Tracking", "Deep-Linking Onboarding Funnels"],
    },
    {
      id: "brand-awareness",
      title: "Brand Awareness",
      icon: Megaphone,
      headline: "Dominate Market Share with Massive High-Recall Reach",
      description:
        "Establish top-of-mind brand authority using high-impact video placements, influencer UGC, and high-frequency demographic targeting.",
      metrics: ["High Brand Recall Score", "Lowest CPM Across Audiences", "Multi-Touch Frequency Capping"],
    },
    {
      id: "website-traffic",
      title: "Website Traffic",
      icon: MousePointerClick,
      headline: "Laser-Targeted High-Converting Traffic to Your Landing Pages",
      description:
        "Drive engaged buyers who spend time, interact with your offer, and move into your retargeting funnel with zero wasted budget.",
      metrics: ["High Average Time on Page", "Low Bounce Rate Optimization", "UTM Tracking & Attribution"],
    },
    {
      id: "local-business",
      title: "Local Business Growth",
      icon: Store,
      headline: "Drive Foot Traffic, In-Store Visits & Hyper-Local Inquiries",
      description:
        "Geofence high-income zip codes to turn local searchers into physical store customers and localized booking leads.",
      metrics: ["Hyper-Local Geofencing Ads", "Direct Call & WhatsApp Inquiries", "Store Visit Multiplier Tracking"],
    },
    {
      id: "high-ticket",
      title: "High-Ticket Sales",
      icon: Briefcase,
      headline: "Exclusive Pipeline Generation for High-Value Transactions",
      description:
        "Generate qualified sales conversations for real estate, luxury goods, coaching, and premium enterprise engagements.",
      metrics: ["Application-First Funnels", "Lead Scoring & Pre-Vetting", "Senior Ad Strategist Optimization"],
    },
  ];

  // Row 2 Pill Goals matching Reference UI
  const row2Goals = [
    {
      id: "b2b-lead-gen",
      title: "B2B Lead Generation",
      icon: Users,
      headline: "Account-Based Marketing (ABM) & High-Ticket Decision Makers",
      description:
        "Target founders, CXOs, and procurement directors with precision LinkedIn & Meta B2B campaigns tailored to complex sales cycles.",
      metrics: ["Decision-Maker Targeting", "High-Converting Lead Magnets", "Automated Sales Pipeline Filling"],
    },
    {
      id: "online-bookings",
      title: "Online Bookings",
      icon: Calendar,
      headline: "Automate Calendar Appointments for Consultations & Clinics",
      description:
        "Fill your sales calendar with qualified discovery calls, medical consultations, and test drive appointments.",
      metrics: ["Calendar Scheduling Integration", "Automated SMS/WhatsApp Reminders", "Zero No-Show Optimization"],
    },
    {
      id: "retargeting",
      title: "Retargeting Campaigns",
      icon: RotateCw,
      headline: "Recover 40%+ of Lost Prospects Who Didn't Convert",
      description:
        "Deploy sequential multi-platform retargeting that overcomes objections and re-engages visitors across Meta, Google, and YouTube.",
      metrics: ["Cross-Device Audience Pools", "Sequential Social Proof Ads", "Dynamic Price Drop Notifications"],
    },
    {
      id: "product-launch",
      title: "Product Launch Campaigns",
      icon: Package,
      headline: "Create High-Converting Buzz & Day-One Demand for New Launches",
      description:
        "Build pre-launch VIP waitlists and unleash coordinated multi-channel media buying for record-breaking product debuts.",
      metrics: ["Pre-Launch VIP Waitlist Ads", "Scarcity & Countdown Triggers", "Day-One Sales Velocity Tracking"],
    },
    {
      id: "video-reels",
      title: "Video & Reels Ads",
      icon: PlaySquare,
      headline: "High-Engagement Short-Form Video Funnels that Stop the Scroll",
      description:
        "Engage mobile audiences with hook-heavy Reels, TikTok, and YouTube Shorts that educate and convert in under 30 seconds.",
      metrics: ["3-Second Hook Rate Optimization", "Thumbstop Ratio > 35%", "Vertical Full-Screen Immersion"],
    },
    {
      id: "influencer-ugc",
      title: "Influencer & UGC Campaigns",
      icon: BadgeCheck,
      headline: "Authentic Creator Content that Sells Without Feeling Like an Ad",
      description:
        "Amplify high-converting user-generated videos through creator whitelisting and direct-response spark ads for unmatched trust.",
      metrics: ["Creator Whitelisting Integration", "High Authenticity Conversion Lift", "Rights-Cleared Ad Assets"],
    },
    {
      id: "full-funnel",
      title: "Full-Funnel Scaling",
      icon: TrendingUp,
      headline: "Complete Top-to-Bottom Customer Acquisition Machine",
      description:
        "Unify awareness, consideration, conversion, and retention into an automated revenue-generating engine built to scale.",
      metrics: ["Unified Customer Journey", "Blended ROAS Maximization", "Predictable Scaling Playbooks"],
    },
  ];

  // Optional subtle auto-scroll on mobile to show more pills smoothly
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: "instant" });
        } else {
          scrollRef.current.scrollBy({ left: 160, behavior: "smooth" });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="performance-marketing"
      aria-label="Performance Marketing Solutions For Every Business Goal"
      className="site-section relative w-full bg-white overflow-hidden"
    >
      {/* Background Soft Ambient Light Accents for Depth */}
      <div className="absolute top-1/3 -left-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#fb8002]/10 via-[#fa5500]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-bl from-[#fb8002]/10 via-[#fa5500]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* ===================================================================
            HEADER: Tag Badge, Headline & Editorial Subtitle
            =================================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-10 lg:mb-12">
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#fb8002] animate-pulse" />
            <span>PERFORMANCE MARKETING</span>
          </div>

          {/* Main Headline matching Reference UI */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0b0f19] tracking-tight leading-tight">
            Performance Marketing Solutions
            <br />
            <span className="text-[#fb8002]">For Every Business Goal</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            From lead generation to sales and app installs, we run data-driven
            campaigns across multiple platforms to help your business grow faster.
          </p>
        </div>

        {/* ===================================================================
            2-ROW PILL BADGES SLIDER (Full-width on Mobile + Clean Edge Fades on Desktop)
            =================================================================== */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="relative w-full max-w-6xl mx-auto"
        >
          {/* Desktop Left/Right Floating Gradient Masks */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

          {/* Left Arrow Button (Floats cleanly on desktop, hidden on tiny mobile so pills get 100% width) */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200/90 hover:border-[#fb8002] text-slate-500 hover:text-[#fb8002] hover:scale-105 active:scale-95 items-center justify-center shadow-md transition-all focus:outline-none cursor-pointer"
            aria-label="Scroll solutions left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button (Floats cleanly on desktop, hidden on tiny mobile) */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200/90 hover:border-[#fb8002] text-slate-500 hover:text-[#fb8002] hover:scale-105 active:scale-95 items-center justify-center shadow-md transition-all focus:outline-none cursor-pointer"
            aria-label="Scroll solutions right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable 2-Row Pills Container: Full 100% Mobile Width with Touch Momentum */}
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto no-scrollbar scroll-smooth py-2 px-1 sm:px-4"
          >
            <div className="flex flex-col gap-2.5 sm:gap-3.5 min-w-max">
              {/* Row 1 */}
              <div className="flex items-center gap-2 sm:gap-3">
                {row1Goals.map((goal) => {
                  const Icon = goal.icon;
                  const isActive = activeGoalId === goal.id;
                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => setActiveGoalId(goal.id)}
                      className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer select-none ${
                        isActive
                          ? "bg-[#fff5ec] border border-[#fb8002] text-slate-900 shadow-sm ring-2 ring-[#fb8002]/20 font-bold"
                          : "bg-white border border-slate-200/90 text-slate-700 hover:border-[#fb8002]/45 hover:bg-orange-50/20 shadow-2xs"
                      }`}
                    >
                      <Icon
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${
                          isActive ? "text-[#fb8002]" : "text-[#fb8002]/85"
                        }`}
                      />
                      <span>{goal.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Row 2 */}
              <div className="flex items-center gap-2 sm:gap-3">
                {row2Goals.map((goal) => {
                  const Icon = goal.icon;
                  const isActive = activeGoalId === goal.id;
                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => setActiveGoalId(goal.id)}
                      className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer select-none ${
                        isActive
                          ? "bg-[#fff5ec] border border-[#fb8002] text-slate-900 shadow-sm ring-2 ring-[#fb8002]/20 font-bold"
                          : "bg-white border border-slate-200/90 text-slate-700 hover:border-[#fb8002]/45 hover:bg-orange-50/20 shadow-2xs"
                      }`}
                    >
                      <Icon
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${
                          isActive ? "text-[#fb8002]" : "text-[#fb8002]/85"
                        }`}
                      />
                      <span>{goal.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Swipe Navigation Controls (Bottom Bar for easy thumb tapping) */}
          <div className="flex sm:hidden items-center justify-between px-2 pt-2">
            <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#fb8002]" />
              Swipe or tap arrows to explore 14+ goals
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[#fb8002] flex items-center justify-center shadow-xs active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[#fb8002] flex items-center justify-center shadow-xs active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
