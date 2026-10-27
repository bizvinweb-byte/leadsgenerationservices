import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui";
import { StrategyModalProvider } from "@/context/StrategyModalContext";
import StrategyCallForm from "@/components/forms/StrategyCallForm";
import {
  TrustedBrands,
  Opportunity,
  CaseStudy,
  RealCampaigns,
  WhySqroot,
  OurServices,
  PerformanceMarketing,
  OurProcess,
  SearchingForUs,
  ClientReviews,
} from "@/components/sections";
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import {
  MapPin,
  Building2,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  TrendingUp,
  Star,
} from "lucide-react";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const loc = getLocationBySlug(resolvedParams.slug);

  if (!loc) {
    return {
      title: "Location Not Found | Brandmingo",
    };
  }

  const title = `${loc.h1} | #1 B2B & B2C Leads Agency - Brandmingo`;
  const description = loc.description;
  const canonicalUrl = `https://leadsgenerationservices.in/locations/${loc.slug}`;

  return {
    title,
    description,
    keywords: [
      `lead generation services in ${loc.name.toLowerCase()}`,
      `lead generation service in ${loc.name.toLowerCase()}`,
      `best lead generation service in ${loc.name.toLowerCase()}`,
      `best lead generation services in ${loc.name.toLowerCase()}`,
      `lead generation company in ${loc.name.toLowerCase()}`,
      `lead generation agency ${loc.name.toLowerCase()}`,
      `b2b lead generation company ${loc.name.toLowerCase()}`,
      `meta ads agency ${loc.name.toLowerCase()}`,
      `google ads agency in ${loc.name.toLowerCase()}`,
      `lead generation services in india`,
      `best lead generation service in india`,
      `lead generation service`,
      `brandmingo ${loc.name.toLowerCase()}`,
      `brandmingo lead generation`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: `Brandmingo - Lead Generation Services in ${loc.name}`,
      images: [
        {
          url: "/images/logo/blacktransprint.png",
          width: 1200,
          height: 630,
          alt: `${loc.h1} - Brandmingo`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logo/blacktransprint.png"],
    },
  };
}

export default async function LocationPage({ params }) {
  const resolvedParams = await params;
  const loc = getLocationBySlug(resolvedParams.slug);

  if (!loc) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://leadsgenerationservices.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: "https://leadsgenerationservices.in/#service-areas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: loc.name,
            item: `https://leadsgenerationservices.in/locations/${loc.slug}`,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `https://leadsgenerationservices.in/locations/${loc.slug}#service`,
        name: `${loc.h1} by Brandmingo`,
        url: `https://leadsgenerationservices.in/locations/${loc.slug}`,
        parentOrganization: {
          "@type": "Organization",
          name: "Brandmingo",
          url: "https://brandmingo.com",
        },
        image: "https://leadsgenerationservices.in/images/logo/blacktransprint.png",
        telephone: "+91-9990613140",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: loc.name,
          addressRegion: loc.state,
          addressCountry: "IN",
        },
        areaServed: {
          "@type": loc.type === "state" ? "AdministrativeArea" : "City",
          name: loc.name,
        },
        description: loc.description,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "135",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Which is the best lead generation agency in ${loc.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Brandmingo is recognized as the leading performance marketing and lead generation agency in ${loc.name}, delivering pre-qualified B2B & B2C inquiries with an average 3.8x ROAS.`,
            },
          },
          {
            "@type": "Question",
            name: `What industries does Brandmingo generate leads for in ${loc.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `In ${loc.name}, Brandmingo specializes in Real Estate, Higher Education, B2B SaaS, Healthcare Clinics, D2C Brands, and Automotive Dealerships.`,
            },
          },
          {
            "@type": "Question",
            name: `How quickly can campaigns go live for businesses in ${loc.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Campaigns are typically live within 4-7 working days following strategic audience profiling, landing page optimization, and creative angle testing.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <StrategyModalProvider>
      {/* Schema.org Injection for Rich Google Search Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#fb8002] selection:text-white">
        <FloatingActions />
        <Navbar />

        <main className="flex-1 flex flex-col w-full">
          {/* ===================================================================
              LOCALIZED HERO SECTION (Tailored for target city/state)
              =================================================================== */}
          <section className="relative w-full overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 lg:pb-12">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[420px] sm:w-[580px] lg:w-[720px] h-[420px] sm:h-[580px] lg:h-[720px] rounded-full bg-gradient-to-bl from-[#fb8002]/20 via-[#fa5500]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="site-container relative z-10">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-4 text-xs text-slate-500 font-medium">
                <ol className="flex items-center gap-1.5 flex-wrap">
                  <li>
                    <Link href="/" className="hover:text-[#fb8002] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <span className="text-slate-400">Locations</span>
                  </li>
                  <li>/</li>
                  <li className="text-[#fb8002] font-semibold">{loc.name}</li>
                </ol>
              </nav>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Localized Copy */}
                <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                  {/* City Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ec] border border-[#ffeedd] text-xs font-bold text-[#fb8002] tracking-wider uppercase shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 text-[#fb8002]" />
                    <span>Serving {loc.name} &bull; {loc.state}</span>
                  </div>

                  {/* Main H1 Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#0b0f19] tracking-tight leading-[1.14]">
                    {loc.h1} &mdash;{" "}
                    <span className="text-[#fb8002]">
                      <span className="relative inline-block">
                        High-Converting
                        <svg
                          className="absolute -bottom-1.5 -left-1 w-[calc(100%+6px)] h-3 text-[#fb8002] overflow-visible pointer-events-none"
                          viewBox="0 0 240 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 11C55 4.5 140 3 237 7.5"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>{" "}
                      Sales Leads
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-[16.5px] text-slate-700 leading-relaxed font-normal">
                    {loc.description}
                  </p>

                  {/* Local Business Hubs Pill Tags */}
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Active Business Hubs &amp; Industrial Clusters in {loc.name}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {loc.hubs.map((hub, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200/80"
                        >
                          <Building2 className="w-3 h-3 text-[#fb8002]" />
                          {hub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trust Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-50/50 border border-orange-100">
                      <ShieldCheck className="w-4 h-4 text-[#fb8002] shrink-0" />
                      <span className="font-semibold text-slate-800">100% Verified Leads</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-50/50 border border-orange-100">
                      <TrendingUp className="w-4 h-4 text-[#fb8002] shrink-0" />
                      <span className="font-semibold text-slate-800">3.8x Avg ROAS</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-50/50 border border-orange-100 col-span-2 sm:col-span-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-800">4.9/5 Rated on Google</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Embedded Form Tagged with City */}
                <div className="lg:col-span-5 w-full">
                  <StrategyCallForm source={`Location Page - ${loc.name}`} />
                </div>
              </div>
            </div>
          </section>

          {/* Core Sections Loaded for High Conversion */}
          <TrustedBrands />
          <Opportunity />
          <CaseStudy />
          <RealCampaigns />
          <WhySqroot />
          <OurServices />
          <PerformanceMarketing />
          <OurProcess />
          <SearchingForUs />
          <ClientReviews />

          {/* ===================================================================
              PAN-INDIA INTERLINKING DIRECTORY SECTION (Boosts SEO Spider Crawl)
              =================================================================== */}
          <section id="service-areas" className="site-section bg-slate-50/60 border-t border-slate-100">
            <div className="site-container">
              <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#fb8002]">
                  Pan-India Lead Generation Network
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Explore Lead Generation Services Across India
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Headquartered in Noida &bull; Serving growing enterprises in every major Indian commercial corridor.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {LOCATIONS.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/locations/${item.slug}`}
                    className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                      item.slug === loc.slug
                        ? "bg-[#fb8002] text-white border-[#fb8002] shadow-sm shadow-orange-500/20"
                        : "bg-white text-slate-700 border-slate-200/80 hover:border-[#fb8002] hover:text-[#fb8002] hover:shadow-xs"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.name}</span>
                    </div>
                    <span className="block text-[10px] opacity-75 font-normal">
                      {item.type === "state" ? "State-wide" : item.state}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </StrategyModalProvider>
  );
}
