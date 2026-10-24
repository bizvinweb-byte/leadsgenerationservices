"use client";

import { Phone } from "lucide-react";

export default function FloatingActions() {
  const PHONE_NUMBER = "+919990613140";
  const WHATSAPP_URL =
    "https://wa.me/919990613140?text=Hi%20Brandmingo,%20I%20would%20like%20to%20book%20a%20Free%20Strategy%20Call%20for%20my%20brand.";

  return (
    <div
      aria-label="Quick Contact Actions"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none"
    >
      {/* 1. CALL BUTTON (Vibrant Brandmingo Orange - 100% visible on white backgrounds) */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Brandmingo directly at +91 9990613140"
        className="pointer-events-auto group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#fa5500] to-[#fb8002] text-white shadow-[0_8px_25px_rgba(250,85,0,0.4)] hover:shadow-[0_12px_32px_rgba(250,85,0,0.55)] hover:scale-108 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        {/* Tooltip on Desktop */}
        <span className="hidden sm:group-hover:inline-flex absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0b0f19] text-white text-xs font-semibold whitespace-nowrap shadow-lg pointer-events-none transition-all duration-200 items-center gap-1.5 animate-in fade-in slide-in-from-right-1">
          <span>Call Us: +91 9990613140</span>
        </span>

        {/* Call Icon in Pure White */}
        <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white group-hover:rotate-12 transition-transform duration-300 stroke-[2.25]" />
      </a>

      {/* 2. WHATSAPP BUTTON */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Brandmingo on WhatsApp"
        className="pointer-events-auto group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.38)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.52)] hover:scale-108 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        {/* Active Green Ping Ring */}
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-white animate-ping pointer-events-none" />
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white pointer-events-none" />

        {/* Tooltip on Desktop */}
        <span className="hidden sm:group-hover:inline-flex absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0b0f19] text-white text-xs font-semibold whitespace-nowrap shadow-lg pointer-events-none transition-all duration-200 items-center gap-1.5 animate-in fade-in slide-in-from-right-1">
          <span>Chat on WhatsApp</span>
        </span>

        {/* Official WhatsApp SVG Vector */}
        <svg
          className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current group-hover:scale-105 transition-transform duration-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.495 2 2 6.494 2 12.03c0 1.996.586 3.856 1.602 5.424L2.08 22l4.673-1.492c1.514.938 3.3 1.488 5.278 1.488 5.535 0 10.03-4.494 10.03-10.03S17.566 2 12.031 2zm5.795 14.156c-.244.686-1.218 1.298-1.99 1.442-.533.098-1.229.176-3.563-.787-2.986-1.233-4.912-4.269-5.06-4.466-.145-.198-1.206-1.607-1.206-3.064 0-1.458.766-2.176 1.038-2.47.272-.294.595-.367.794-.367.198 0 .398.002.57.01.184.009.432-.07.674.512.248.595.845 2.062.918 2.213.075.148.124.324.025.52-.099.198-.148.322-.296.496-.149.174-.313.388-.446.52-.149.148-.305.31-.131.608.174.298.773 1.274 1.657 2.062 1.137 1.013 2.096 1.327 2.394 1.475.297.148.471.124.645-.074.174-.199.744-.868.943-1.165.198-.298.397-.249.67-.149.273.1.1.728 2.088 1.026 2.237.148.148.248.223.297.371.05.149.05.864-.194 1.55z" />
        </svg>
      </a>
    </div>
  );
}
