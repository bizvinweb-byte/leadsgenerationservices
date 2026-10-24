"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  TrendingUp,
  Users,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Mobile Accordion States (Keeps mobile footer ultra-compact)
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const servicesLinks = [
    { label: "Meta Ads (FB & Insta)", href: "#performance-marketing" },
    { label: "Google & PMax Ads", href: "#performance-marketing" },
    { label: "YouTube Ad Funnels", href: "#performance-marketing" },
    { label: "Creative Strategy", href: "#services" },
    { label: "Funnel CRO", href: "#services" },
    { label: "E-Commerce Scaling", href: "#opportunity" },
    { label: "Lead Gen Funnels", href: "#process" },
  ];

  const solutionLinks = [
    { label: "D2C & E-Commerce", href: "#case-study" },
    { label: "Real Estate Growth", href: "#case-study" },
    { label: "B2B & SaaS Funnels", href: "#case-study" },
    { label: "High-Ticket Pipeline", href: "#case-study" },
    { label: "EdTech Scaling", href: "#case-study" },
    { label: "Automobile & Retail", href: "#case-study" },
    { label: "Ad Account Audit", href: "#get-started" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#why-sqroot" },
    { label: "Case Studies", href: "#case-study" },
    { label: "Why Brandmingo", href: "#why-sqroot" },
    { label: "Our Process", href: "#process" },
    { label: "Client Reviews", href: "#reviews" },
    { label: "Contact Us", href: "#get-started" },
  ];

  const popularSearches = [
    "Performance Marketing Agency India",
    "Meta Ads Agency",
    "Google Ads Expert",
    "E-Commerce ROAS Optimization",
    "Facebook Ad Scaling",
    "High-Ticket Lead Generation",
    "Conversion Rate Optimization",
    "Creative Strategy Agency",
    "Shopify Growth Marketing",
    "Brandmingo Scaling",
  ];

  return (
    <footer
      aria-label="Brandmingo Footer"
      className="relative w-full bg-gradient-to-r from-[#fb8002] via-[#fa5500] to-[#f03c00] text-white pt-8 sm:pt-10 lg:pt-12 pb-6 lg:pb-8 overflow-hidden"
    >
      {/* Subtle glossy glass wave highlight overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.22),_transparent_70%)]" />

      <div className="site-container relative z-10">
        {/* ===================================================================
            TOP MAIN SECTION: 5 Columns (Desktop) / Smart Accordions (Mobile)
            =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.85fr_0.9fr_0.75fr_1.4fr] gap-6 lg:gap-8 pb-6 sm:pb-8">
          {/* Column 1: Brand Info & 3 Badges in 1 Single Row */}
          <div className="space-y-3">
            <Link href="/" className="inline-block group focus:outline-none">
              <div className="relative h-8 sm:h-9 lg:h-10 w-36 sm:w-42 lg:w-46 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/logo/white-logo.png"
                  alt="Brandmingo Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 140px, 180px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-white/90 text-xs leading-relaxed max-w-sm">
              We design, develop, and scale high-converting performance marketing funnels, paid media campaigns, and profitable growth engines for modern brands.
            </p>

            {/* 3 Trust Badges in 1 Row (No Scrollbar, Responsive Flex) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5 pt-1">
              {/* Badge 1 */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] sm:text-[10.5px] font-bold text-white whitespace-nowrap">Meta & Google</p>
                  <p className="text-[9px] sm:text-[9.5px] text-white/80 whitespace-nowrap">Certified</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 shadow-xs">
                  <Users className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] sm:text-[10.5px] font-bold text-white whitespace-nowrap">End-to-End</p>
                  <p className="text-[9px] sm:text-[9.5px] text-white/80 whitespace-nowrap">Support</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] sm:text-[10.5px] font-bold text-white whitespace-nowrap">Growth</p>
                  <p className="text-[9px] sm:text-[9.5px] text-white/80 whitespace-nowrap">Focused</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Services (Desktop: Open List | Mobile: Tap to Expand) */}
          <div className="border-t border-white/15 pt-3 lg:border-t-0 lg:pt-0">
            {/* Mobile Header (Tap to toggle) */}
            <button
              type="button"
              onClick={() => toggleSection("services")}
              className="w-full flex items-center justify-between text-left lg:hidden py-1"
            >
              <h3 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white">
                Services
              </h3>
              <ChevronDown
                className={`w-4 h-4 text-white/80 transition-transform duration-200 ${
                  openSection === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Desktop Static Header */}
            <h3 className="hidden lg:block text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white mb-2.5">
              Services
            </h3>

            {/* Links List */}
            <ul
              className={`space-y-1.5 pt-1.5 lg:pt-0 ${
                openSection === "services" ? "block" : "hidden lg:block"
              }`}
            >
              {servicesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs text-white/85 hover:text-white transition-colors py-0.5 whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions (Desktop: Open List | Mobile: Tap to Expand) */}
          <div className="border-t border-white/15 pt-3 lg:border-t-0 lg:pt-0">
            <button
              type="button"
              onClick={() => toggleSection("solutions")}
              className="w-full flex items-center justify-between text-left lg:hidden py-1"
            >
              <h3 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white">
                Solutions
              </h3>
              <ChevronDown
                className={`w-4 h-4 text-white/80 transition-transform duration-200 ${
                  openSection === "solutions" ? "rotate-180" : ""
                }`}
              />
            </button>

            <h3 className="hidden lg:block text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white mb-2.5">
              Solutions
            </h3>

            <ul
              className={`space-y-1.5 pt-1.5 lg:pt-0 ${
                openSection === "solutions" ? "block" : "hidden lg:block"
              }`}
            >
              {solutionLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs text-white/85 hover:text-white transition-colors py-0.5 whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company (Desktop: Open List | Mobile: Tap to Expand) */}
          <div className="border-t border-white/15 pt-3 lg:border-t-0 lg:pt-0">
            <button
              type="button"
              onClick={() => toggleSection("company")}
              className="w-full flex items-center justify-between text-left lg:hidden py-1"
            >
              <h3 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white">
                Company
              </h3>
              <ChevronDown
                className={`w-4 h-4 text-white/80 transition-transform duration-200 ${
                  openSection === "company" ? "rotate-180" : ""
                }`}
              />
            </button>

            <h3 className="hidden lg:block text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white mb-2.5">
              Company
            </h3>

            <ul
              className={`space-y-1.5 pt-1.5 lg:pt-0 ${
                openSection === "company" ? "block" : "hidden lg:block"
              }`}
            >
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs text-white/85 hover:text-white transition-colors py-0.5 whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Stay Updated & Social */}
          <div className="border-t border-white/15 pt-3 lg:border-t-0 lg:pt-0 space-y-2.5">
            <h3 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white">
              Stay Updated
            </h3>
            <p className="text-white/90 text-xs leading-relaxed">
              Get weekly performance marketing playbooks and scaling insights.
            </p>

            {/* Newsletter Input Capsule */}
            <form onSubmit={handleSubscribe} className="space-y-1.5 pt-0.5 w-full">
              <div className="relative flex items-center rounded-full bg-white/20 backdrop-blur-md p-1 border border-white/35 focus-within:ring-2 focus-within:ring-white/60 transition-all shadow-xs w-full">
                <Mail className="w-3.5 h-3.5 text-white/80 ml-2.5 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className="w-full min-w-0 bg-transparent px-2.5 py-1 text-xs text-white placeholder-white/75 focus:outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-white text-[#fb8002] hover:bg-slate-50 text-[11px] font-bold shrink-0 transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Subscribe
                </button>
              </div>

              {subscribed && (
                <p className="flex items-center gap-1.5 text-xs text-white font-medium animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Subscribed successfully!</span>
                </p>
              )}
            </form>

            {/* Social Icons (5 Circular Translucent Pills) */}
            <div className="flex items-center gap-1.5 pt-1">
              <a
                href="https://www.linkedin.com/company/brandmingo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brandmingo on LinkedIn"
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#fb8002] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              >
                <FaLinkedinIn className="w-3 h-3" />
              </a>
              <a
                href="https://www.instagram.com/brandmingo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brandmingo on Instagram"
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#fb8002] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              >
                <FaInstagram className="w-3 h-3" />
              </a>
              <a
                href="https://www.facebook.com/brandmingo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brandmingo on Facebook"
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#fb8002] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              >
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a
                href="https://www.youtube.com/@brandmingo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brandmingo on YouTube"
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#fb8002] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              >
                <FaYoutube className="w-3 h-3" />
              </a>
              <a
                href="https://x.com/brandmingo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brandmingo on X Twitter"
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#fb8002] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              >
                <FaXTwitter className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================================
            MIDDLE BAR: Divider & Centered Copyright
            =================================================================== */}
        <div className="py-3.5 border-t border-white/20 flex items-center justify-center text-center text-xs text-white/90">
          <div>
            &copy; 2026 Brandmingo Media Pvt. Ltd. All rights reserved.
          </div>
        </div>

        {/* ===================================================================
            BOTTOM POPULAR SEARCHES SEO BOOSTER BOX (Compact & Clean)
            =================================================================== */}
        <div className="mt-1 rounded-2xl bg-white/10 backdrop-blur-xs p-3 sm:p-3.5 border border-white/15 flex flex-col lg:flex-row items-start lg:items-center gap-2 sm:gap-3.5 text-xs">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold shrink-0">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
            <span>Popular Searches</span>
          </div>

          {/* Keywords List */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-white/90 leading-relaxed text-[11px] sm:text-[11.5px]">
            {popularSearches.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-2.5">
                <Link
                  href="#services"
                  className="hover:text-white hover:underline transition-colors"
                >
                  {item}
                </Link>
                {index < popularSearches.length - 1 && (
                  <span className="text-white/40">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
