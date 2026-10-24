"use client";

import { useState, useRef, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  Target,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Lock,
  Check,
  X,
} from "lucide-react";

export default function StrategyCallForm({
  title = "Book a Free Strategy Call",
  subtitle = "Tell us about your business and our experts will get back to you with a customized growth plan.",
  tagText = "GET A FREE CONSULTATION",
  source = "Hero Section",
  className = "",
  id,
  privacyText = "Your information is 100% secure and will never be shared with anyone.",
  onClose = null,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    industry: "",
    goal: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Custom Dropdown Open States
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isGoalOpen, setIsGoalOpen] = useState(false);
  const industryRef = useRef(null);
  const goalRef = useRef(null);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (industryRef.current && !industryRef.current.contains(e.target)) {
        setIsIndustryOpen(false);
      }
      if (goalRef.current && !goalRef.current.contains(e.target)) {
        setIsGoalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Strictly 10 numeric digits only
  const handlePhoneChange = (e) => {
    const numericVal = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: numericVal }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: null }));
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone || formData.phone.length !== 10) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.businessName.trim() || formData.businessName.trim().length < 2) {
      newErrors.businessName = "Please enter your business name";
    }

    if (!formData.industry) {
      newErrors.industry = "Please select your industry";
    }

    if (!formData.goal) {
      newErrors.goal = "Please select your primary goal";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          businessName: formData.businessName.trim(),
          industry: formData.industry,
          goal: formData.goal,
          message: formData.message.trim(),
          source: source || "Website Lead",
          submittedAt: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const industryOptions = [
    "Real Estate & Infrastructure",
    "E-Commerce & D2C Brands",
    "BFSI, Fintech & Insurance",
    "Education & EdTech",
    "Healthcare, Pharma & Wellness",
    "B2B SaaS & Tech Enterprise",
    "Automobile & Dealerships",
    "High-Ticket Consulting & Services",
    "Other",
  ];

  const goalOptions = [
    "Generate High-Quality Qualified Leads",
    "Scale E-Commerce Revenue & ROAS",
    "Lower Cost Per Lead (CPL) & CAC",
    "Full-Funnel Paid Ads Optimization",
    "Launch & Test New Market / Product",
    "Other",
  ];

  const whatsappMessage = encodeURIComponent(
    `Hi Brandmingo, I just submitted the Strategy Call request from ${source} on leadsgenerationservices.in.\n\n` +
      `Name: ${formData.name}\n` +
      `Business: ${formData.businessName}\n` +
      `Phone: +91 ${formData.phone}\n` +
      `Industry: ${formData.industry}\n` +
      `Goal: ${formData.goal}\n` +
      (formData.message ? `Notes: ${formData.message}` : "")
  );

  return (
    <div
      id={id}
      className={`relative rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08),_0_8px_24px_-6px_rgba(251,128,2,0.12)] p-5 sm:p-7 lg:p-8 pb-6 sm:pb-8 lg:pb-8 text-left transition-all ${className}`}
    >
      {/* Decorative Subtle Corner Accent */}
      <div className="absolute top-0 right-8 w-24 h-1 bg-gradient-to-r from-transparent via-[#fb8002]/40 to-transparent rounded-full pointer-events-none" />

      {/* Modal Close Button */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close form popup"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Form Tag Badge */}
      {tagText && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-[11px] font-bold text-[#fb8002] tracking-wider uppercase mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fb8002] animate-pulse" />
          <span>{tagText}</span>
        </div>
      )}

      {/* Form Title & Subtitle */}
      {title && (
        <h2 className="text-2xl sm:text-[27px] font-bold text-[#0b0f19] tracking-tight leading-snug">
          {title.includes("Free Strategy Call") ? (
            <>
              {title.replace("Free Strategy Call", "")}
              <span className="text-[#fb8002]">Free Strategy Call</span>
            </>
          ) : title.includes("Strategy Call") ? (
            <>
              {title.replace("Strategy Call", "")}
              <span className="text-[#fb8002]">Strategy Call</span>
            </>
          ) : (
            title
          )}
        </h2>
      )}

      {subtitle && (
        <p className="text-xs sm:text-[13.5px] text-slate-500 mt-1.5 mb-5 leading-normal">
          {subtitle}
        </p>
      )}

      {/* Confirmation State */}
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#fb8002] shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-[#fb8002]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">Consultation Booked!</h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-800">{formData.name}</strong> from{" "}
              <strong className="text-slate-800">{formData.businessName}</strong>. Our senior growth
              strategist will contact you at <strong className="text-slate-800">+91 {formData.phone}</strong>{" "}
              within 15 minutes.
            </p>
          </div>

          <a
            href={`https://wa.me/919990613140?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#fb8002] via-[#fa5500] to-[#f03c00] hover:from-[#e07000] hover:to-[#d03500] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>Connect on WhatsApp Instantly</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                businessName: "",
                industry: "",
                goal: "",
                message: "",
              });
            }}
            className="text-[11px] text-slate-400 hover:text-slate-700 underline transition-colors cursor-pointer"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
          {/* ROW 1: Your Name * & Email Address * */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Field 1: Your Name */}
            <div className="space-y-1">
              <div
                className={`relative flex items-center rounded-2xl bg-white border overflow-hidden transition-all duration-200 ${
                  errors.name
                    ? "border-red-400 bg-red-50/20 ring-2 ring-red-300"
                    : "border-slate-200/90 hover:border-slate-300 focus-within:border-[#fb8002] focus-within:ring-3 focus-within:ring-[#fb8002]/15 shadow-2xs"
                }`}
              >
                <div className="pl-3.5 pr-1 flex items-center justify-center">
                  <User className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your Name *"
                  required
                  className="w-full bg-transparent px-2.5 py-3 text-xs sm:text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              {errors.name && (
                <p className="text-[11px] text-red-500 pl-1 font-medium">{errors.name}</p>
              )}
            </div>

            {/* Field 2: Email Address */}
            <div className="space-y-1">
              <div
                className={`relative flex items-center rounded-2xl bg-white border overflow-hidden transition-all duration-200 ${
                  errors.email
                    ? "border-red-400 bg-red-50/20 ring-2 ring-red-300"
                    : "border-slate-200/90 hover:border-slate-300 focus-within:border-[#fb8002] focus-within:ring-3 focus-within:ring-[#fb8002]/15 shadow-2xs"
                }`}
              >
                <div className="pl-3.5 pr-1 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Email Address *"
                  required
                  className="w-full bg-transparent px-2.5 py-3 text-xs sm:text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              {errors.email && (
                <p className="text-[11px] text-red-500 pl-1 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          {/* ROW 2: Phone Number * & Business Name * */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Field 3: Phone Number (Strict 10 Digits - Clean without ugly counter) */}
            <div className="space-y-1">
              <div
                className={`relative flex items-center rounded-2xl bg-white border overflow-hidden transition-all duration-200 ${
                  errors.phone
                    ? "border-red-400 bg-red-50/20 ring-2 ring-red-300"
                    : "border-slate-200/90 hover:border-slate-300 focus-within:border-[#fb8002] focus-within:ring-3 focus-within:ring-[#fb8002]/15 shadow-2xs"
                }`}
              >
                <div className="pl-3.5 pr-1 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-xs text-slate-500 pl-1.5 pr-2 font-semibold border-r border-slate-200 select-none">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-transparent px-2.5 py-3 text-xs sm:text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none tracking-wide"
                />
              </div>
              {errors.phone && (
                <p className="text-[11px] text-red-500 pl-1 font-medium">{errors.phone}</p>
              )}
            </div>

            {/* Field 4: Business Name */}
            <div className="space-y-1">
              <div
                className={`relative flex items-center rounded-2xl bg-white border overflow-hidden transition-all duration-200 ${
                  errors.businessName
                    ? "border-red-400 bg-red-50/20 ring-2 ring-red-300"
                    : "border-slate-200/90 hover:border-slate-300 focus-within:border-[#fb8002] focus-within:ring-3 focus-within:ring-[#fb8002]/15 shadow-2xs"
                }`}
              >
                <div className="pl-3.5 pr-1 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="organization"
                  autoComplete="organization"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange("businessName", e.target.value)}
                  placeholder="Business Name *"
                  required
                  className="w-full bg-transparent px-2.5 py-3 text-xs sm:text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              {errors.businessName && (
                <p className="text-[11px] text-red-500 pl-1 font-medium">{errors.businessName}</p>
              )}
            </div>
          </div>

          {/* ROW 3: Select Your Industry * (Bespoke Brandmingo Themed Dropdown) */}
          <div ref={industryRef} className="space-y-1 relative">
            <button
              type="button"
              onClick={() => {
                setIsIndustryOpen(!isIndustryOpen);
                setIsGoalOpen(false);
              }}
              aria-haspopup="listbox"
              aria-expanded={isIndustryOpen}
              className={`relative w-full flex items-center justify-between rounded-2xl bg-white border px-3.5 py-3 transition-all duration-200 cursor-pointer text-left ${
                errors.industry
                  ? "border-red-400 bg-red-50/20 ring-2 ring-red-300"
                  : isIndustryOpen
                  ? "border-[#fb8002] ring-3 ring-[#fb8002]/15 shadow-sm"
                  : "border-slate-200/90 hover:border-slate-300 shadow-2xs"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <Building2
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    formData.industry ? "text-[#fb8002]" : "text-slate-400"
                  }`}
                />
                <span
                  className={`text-xs sm:text-[13.5px] truncate ${
                    formData.industry ? "text-slate-900 font-medium" : "text-slate-400"
                  }`}
                >
                  {formData.industry || "Select Your Industry *"}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                  isIndustryOpen ? "rotate-180 text-[#fb8002]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Custom Floating Popover Menu */}
            {isIndustryOpen && (
              <div
                role="listbox"
                className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-2xl bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-[0_16px_36px_rgba(15,23,42,0.12),0_4px_12px_rgba(251,128,2,0.06)] p-1.5 max-h-56 sm:max-h-64 overflow-y-auto no-scrollbar animate-in fade-in zoom-in-95 duration-150"
              >
                {industryOptions.map((opt) => {
                  const isSelected = formData.industry === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        handleInputChange("industry", opt);
                        setIsIndustryOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-[#fff5ec] text-[#fb8002] font-semibold border border-[#ffeedd]"
                          : "text-slate-700 hover:bg-[#fff8f2] hover:text-[#fb8002]"
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#fb8002] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {errors.industry && (
              <p className="text-[11px] text-red-500 pl-1 font-medium">{errors.industry}</p>
            )}
          </div>

          {/* ROW 4: Your Goal with Meta Ads * (Bespoke Brandmingo Themed Dropdown) */}
          <div ref={goalRef} className="space-y-1 relative">
            <button
              type="button"
              onClick={() => {
                setIsGoalOpen(!isGoalOpen);
                setIsIndustryOpen(false);
              }}
              aria-haspopup="listbox"
              aria-expanded={isGoalOpen}
              className={`relative w-full flex items-center justify-between rounded-2xl bg-white border px-3.5 py-3 transition-all duration-200 cursor-pointer text-left ${
                errors.goal
                  ? "border-red-400 bg-red-50/20 ring-2 ring-red-300"
                  : isGoalOpen
                  ? "border-[#fb8002] ring-3 ring-[#fb8002]/15 shadow-sm"
                  : "border-slate-200/90 hover:border-slate-300 shadow-2xs"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <Target
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    formData.goal ? "text-[#fb8002]" : "text-slate-400"
                  }`}
                />
                <span
                  className={`text-xs sm:text-[13.5px] truncate ${
                    formData.goal ? "text-slate-900 font-medium" : "text-slate-400"
                  }`}
                >
                  {formData.goal || "Your Goal with Meta Ads *"}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                  isGoalOpen ? "rotate-180 text-[#fb8002]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Custom Floating Popover Menu */}
            {isGoalOpen && (
              <div
                role="listbox"
                className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-2xl bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-[0_16px_36px_rgba(15,23,42,0.12),0_4px_12px_rgba(251,128,2,0.06)] p-1.5 max-h-56 sm:max-h-64 overflow-y-auto no-scrollbar animate-in fade-in zoom-in-95 duration-150"
              >
                {goalOptions.map((opt) => {
                  const isSelected = formData.goal === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        handleInputChange("goal", opt);
                        setIsGoalOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-[#fff5ec] text-[#fb8002] font-semibold border border-[#ffeedd]"
                          : "text-slate-700 hover:bg-[#fff8f2] hover:text-[#fb8002]"
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#fb8002] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {errors.goal && (
              <p className="text-[11px] text-red-500 pl-1 font-medium">{errors.goal}</p>
            )}
          </div>

          {/* ROW 5: Tell us more about your business (Optional) */}
          <div className="space-y-1">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 focus-within:border-[#fb8002] focus-within:ring-3 focus-within:ring-[#fb8002]/15 shadow-2xs transition-all overflow-hidden">
              <div className="flex items-start pt-3">
                <div className="pl-3.5 pr-1 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-slate-400 mt-0.5" />
                </div>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us more about your business (Optional)"
                  className="w-full bg-transparent px-2.5 py-0.5 text-xs sm:text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON: Sleek Rounded 2xl Capsule with Proper Bottom Gap */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-gradient-to-r from-[#fb8002] via-[#fa5500] to-[#f03c00] hover:from-[#e07000] hover:to-[#d03500] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <span>Securing Your Slot...</span>
              ) : (
                <>
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/* Micro Trust Proof with Clean Spacing */}
          <div className="pt-1.5 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
            <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{privacyText}</span>
          </div>
        </form>
      )}
    </div>
  );
}
