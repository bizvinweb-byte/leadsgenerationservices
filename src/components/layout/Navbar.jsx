"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X, Phone, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const WHATSAPP_URL =
    "https://wa.me/919990613140?text=Hi%20Brandmingo,%20I%20would%20like%20to%20book%20a%20Free%20Strategy%20Call%20for%20my%20brand.";

  // Exact landing page sequence of sections
  const navLinks = [
    { label: "Home", id: "hero", href: "#hero" },
    { label: "Opportunity", id: "opportunity", href: "#opportunity" },
    { label: "Case Studies", id: "case-study", href: "#case-study" },
    { label: "Why Us", id: "why-sqroot", href: "#why-sqroot" },
    { label: "Services", id: "services", href: "#services" },
    { label: "Process", id: "process", href: "#process" },
    { label: "Contact Us", id: "get-started", href: "#get-started" },
  ];

  // Dynamic ScrollSpy + Scrolled State Listener
  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact elevated state when scrolled
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180; // offset for sticky floating header

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            return;
          }
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full pointer-events-none transition-all duration-300 ${
        scrolled ? "pt-2 sm:pt-2.5" : "pt-3 sm:pt-4 lg:pt-5"
      }`}
    >
      <div className="site-container pointer-events-auto">
        {/* Floating Capsule Bar - Sleek, Proportionate on Laptop, Tablet & Desktop */}
        <nav
          aria-label="Main Navigation"
          className={`relative w-full rounded-full px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-3 bg-gradient-to-r from-[#fb8002] via-[#fa5500] to-[#f03c00] ring-1 transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? "min-h-[58px] sm:min-h-[64px] lg:min-h-[68px] shadow-[0_20px_45px_-10px_rgba(251,128,2,0.45)] ring-white/35 backdrop-blur-md"
              : "min-h-[62px] sm:min-h-[68px] lg:min-h-[72px] shadow-[0_16px_36px_-10px_rgba(251,128,2,0.35)] ring-white/25"
          }`}
        >
          {/* Subtle glossy glass wave overlay */}
          <div className="absolute inset-0 rounded-full pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.25),_transparent_75%)]" />

          {/* COLUMN 1: Brandmingo Logo with White Round Patch */}
          <div className="relative z-10 flex-1 flex items-center justify-start">
            <Link
              href="/"
              onClick={() => setActiveSection("hero")}
              className="inline-flex items-center group focus:outline-none"
              aria-label="Brandmingo Homepage"
            >
              <div className="bg-white rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-sm ring-1 ring-white/60 group-hover:shadow-md group-hover:scale-105 transition-all duration-200 flex items-center justify-center">
                <div className="relative h-6 sm:h-7 lg:h-7.5 w-28 sm:w-32 lg:w-36">
                  <Image
                    src="/images/logo/blacktransprint.png"
                    alt="Brandmingo - Best Lead Generation Service in Noida & India | B2B & B2C Agency"
                    fill
                    priority
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* COLUMN 2: Balanced Navigation Tabs (Optimized for Laptop 1024px - 1440px & Ultra-Wide) */}
          <div className="relative z-10 hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 2xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-2.5 xl:px-3.5 2xl:px-4 py-1.5 xl:py-1.5 rounded-full text-xs xl:text-[13px] 2xl:text-sm font-semibold tracking-normal transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-white/25 text-white backdrop-blur-xs shadow-xs ring-1 ring-white/35 font-bold"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* COLUMN 3: Right CTA Button */}
          <div className="relative z-10 hidden md:flex flex-1 items-center justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 xl:px-6 xl:py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#fb8002] hover:text-[#e07000] text-xs xl:text-[13px] font-bold tracking-wide shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1.5 xl:gap-2 whitespace-nowrap"
            >
              <span>Free Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#fb8002] transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="relative z-10 flex lg:hidden items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white transition-all focus:outline-none ring-1 ring-white/25 shadow-xs"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* ===================================================================
          PREMIUM MOBILE FULL-SCREEN / BLURRED DRAWER SYSTEM
          =================================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-start">
          {/* Backdrop Blur Dark Overlay */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="relative z-50 mx-4 mt-4 sm:mx-6 sm:mt-6 rounded-[2rem] bg-white border border-slate-100 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-250">
            {/* Top Bar with Prominent Logo & Close Button */}
            <div className="px-6 py-4 bg-gradient-to-r from-[#fb8002] via-[#fa5500] to-[#f03c00] flex items-center justify-between">
              <div className="bg-white rounded-full px-3.5 py-1.5 shadow-sm flex items-center justify-center">
                <div className="relative h-6.5 w-30">
                  <Image
                    src="/images/logo/blacktransprint.png"
                    alt="Brandmingo - Best Lead Generation Service in Noida & India | B2B & B2C Agency"
                    fill
                    priority
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all active:scale-95"
                aria-label="Close Navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items List */}
            <div className="p-5 max-h-[calc(100vh-220px)] overflow-y-auto space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`group flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-orange-50 text-[#fb8002] font-bold border border-orange-200/70 shadow-xs"
                        : "text-slate-800 hover:text-[#fb8002] hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-2 h-2 rounded-full transition-all ${
                          isActive ? "bg-[#fb8002] scale-125" : "bg-slate-300 group-hover:bg-[#fb8002]"
                        }`}
                      />
                      <span>{link.label}</span>
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? "text-[#fb8002] translate-x-0.5"
                          : "text-slate-400 group-hover:text-[#fb8002] group-hover:translate-x-1"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Actions Card (Phone + WhatsApp Redirect Button) */}
            <div className="p-5 pt-3 bg-slate-50/70 border-t border-slate-100 space-y-3">
              <a
                href="tel:+919990613140"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200/80 hover:border-orange-200 hover:text-[#fb8002] transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#fb8002] fill-[#fb8002]" />
                <span>Call Us: +91 99906 13140</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#fb8002] via-[#fa5500] to-[#f03c00] text-white text-sm font-bold tracking-wide shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.99] transition-all"
              >
                <span>Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
