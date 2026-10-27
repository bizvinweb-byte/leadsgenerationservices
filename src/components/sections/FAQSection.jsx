"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, PhoneCall, ShieldCheck } from "lucide-react";
import { useStrategyModal } from "@/context/StrategyModalContext";

export default function FAQSection() {
  const { openModal } = useStrategyModal();
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const faqs = [
    {
      question: "Why is Brandmingo considered the best lead generation company in Noida?",
      answer:
        "Brandmingo is recognized as the leading lead generation agency in Noida and Delhi NCR because we never sell stale or recycled databases. Instead, we engineer custom, high-converting Meta Ads and Google Ads funnels tailored to your exact target demographic. Every inquiry is captured through custom landing pages with multi-step qualification questions, ensuring your sales team only speaks with genuine, high-intent decision-makers.",
      keyword: "Best lead generation company in Noida",
    },
    {
      question: "How do you generate verified leads for real estate developers in Noida & Greater Noida?",
      answer:
        "Our real estate lead generation campaigns in Noida, Noida Expressway, Sector 150, and Greater Noida West use hyper-local geo-targeting, luxury lifestyle affinity audiences, and micro-budget filters. We capture verified site-visit inquiries from HNIs and prospective home-buyers who have confirmed investment timelines and purchasing power.",
      keyword: "Real estate lead generation Noida",
    },
    {
      question: "What is the typical lead generation cost in Noida and Delhi NCR?",
      answer:
        "Lead generation cost depends on your industry niche and customer lifetime value (LTV). In Noida and Delhi NCR, high-intent B2B and SaaS leads typically range from ₹250 to ₹650 per qualified inquiry, Real Estate investor leads range from ₹180 to ₹500, and consumer/education leads range from ₹40 to ₹120. We continuously optimize ad creatives and bidding to achieve the lowest Cost Per Qualified Acquisition (CPQA).",
      keyword: "Lead generation cost in India & Noida",
    },
    {
      question: "How do you filter out fake, duplicate, or low-intent leads?",
      answer:
        "We deploy a robust 3-stage lead qualification framework: (1) Interactive multi-step survey funnels asking critical intent questions (budget, requirement, timeline), (2) Phone number validation and OTP verification, and (3) Negative audience exclusions and machine-learning feedback loops that train Meta and Google algorithms to exclude bot clicks and non-serious users.",
      keyword: "Qualified leads for business",
    },
    {
      question: "Can Brandmingo help startups and SMEs in Noida Sector 62 with affordable lead generation?",
      answer:
        "Yes! We offer agile, results-oriented lead generation packages specifically structured for startups, consulting firms, and SMEs in Noida Sector 62, Sector 63, and across Delhi NCR. You get full end-to-end service — ad copywriting, high-converting creatives, dedicated landing pages, CRM integration, and transparent weekly reporting without long lock-in contracts.",
      keyword: "B2B lead generation companies in Noida Sector 62",
    },
    {
      question: "How quickly can our lead generation campaigns go live in Noida?",
      answer:
        "Our onboarding sprint takes only 3 to 5 business days. During this window, we audit your competitive landscape, construct high-converting landing pages, design high-CTR ad creatives, and install end-to-end conversion tracking. Once approved and published, qualified leads begin populating your CRM or WhatsApp within 24 to 48 hours.",
      keyword: "Digital marketing lead generation Noida",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="site-section bg-gradient-to-b from-slate-50/70 via-white to-orange-50/30 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#fb8002]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#fb8002]" />
            <span>Got Questions? &bull; Noida &amp; Delhi NCR Experts</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0b0f19] tracking-tight leading-[1.18]">
            Lead Generation <span className="text-[#fb8002]">FAQs</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about scaling your revenue with Noida&apos;s #1 performance-driven B2B and real estate lead generation agency.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-white border-[#fb8002]/40 shadow-md shadow-orange-500/5 ring-1 ring-[#fb8002]/20"
                    : "bg-white/90 hover:bg-white border-slate-200/80 hover:border-orange-200 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-5 gap-3 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 sm:gap-3.5 min-w-0">
                    <span
                      className={`text-xs sm:text-sm font-bold shrink-0 mt-0.5 px-2 py-0.5 rounded-md transition-colors ${
                        isOpen
                          ? "bg-[#fb8002] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0b0f19] tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-[#fff5ec] text-[#fb8002] rotate-180"
                        : "bg-slate-100 text-slate-500 hover:bg-orange-50 hover:text-[#fb8002]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 mt-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    <p className="pt-3">{faq.answer}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#fb8002] bg-orange-50/70 px-2.5 py-1 rounded-full border border-orange-100">
                      <Sparkles className="w-3 h-3 text-[#fb8002]" />
                      <span>Focus: {faq.keyword}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="max-w-3xl mx-auto mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#fb8002] via-[#fa5500] to-[#f03c00] text-white shadow-lg shadow-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold">Have a specific question about your industry?</h4>
            <p className="text-xs sm:text-sm text-white/90">
              Speak directly with our senior lead generation strategist in Noida Sector 62.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openModal("FAQ Section CTA")}
            className="px-5 py-2.5 rounded-full bg-white text-[#fb8002] hover:bg-slate-50 font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            Ask a Question &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
