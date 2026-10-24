import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Lead Generation Services in India | High-Quality B2B & B2C Leads Agency - Brandmingo",
  description:
    "Scale your business with India's premier lead generation agency by Brandmingo. We deliver verified, high-intent B2B & B2C sales leads using data-driven Meta Ads, Google Search, high-converting funnels & automated qualification.",
  keywords: [
    "lead generation services",
    "lead generation services in india",
    "b2b lead generation company",
    "lead generation agency india",
    "real estate lead generation",
    "high ticket client acquisition",
    "meta ads lead generation",
    "google ads lead generation agency",
    "performance marketing lead gen",
    "cost per lead optimization",
    "qualified sales leads",
    "brandmingo lead generation",
    "brandmingo",
  ],
  authors: [{ name: "Brandmingo Media Pvt. Ltd.", url: "https://brandmingo.com" }],
  creator: "Brandmingo",
  publisher: "Brandmingo",
  metadataBase: new URL("https://leadsgenerationservices.in"),
  alternates: {
    canonical: "https://leadsgenerationservices.in",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://leadsgenerationservices.in",
    siteName: "Lead Generation Services India | Brandmingo",
    title: "Lead Generation Services in India | High-Quality B2B & B2C Leads Agency - Brandmingo",
    description:
      "Drive verified, high-converting sales pipeline with India's top lead generation company. Meta Ads, Google Ads & automated CRO funnels.",
    images: [
      {
        url: "/images/logo/white-logo.png",
        width: 1200,
        height: 630,
        alt: "Brandmingo - Lead Generation Services in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Services in India | Brandmingo",
    description:
      "Get high-converting, sales-qualified B2B & B2C leads using performance marketing funnels by Brandmingo.",
    images: ["/images/logo/white-logo.png"],
  },
  category: "Business & Marketing",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://brandmingo.com/#organization",
        name: "Brandmingo",
        legalName: "Brandmingo Media Pvt. Ltd.",
        url: "https://brandmingo.com",
        logo: "https://leadsgenerationservices.in/images/logo/white-logo.png",
        sameAs: [
          "https://www.linkedin.com/company/brandmingo",
          "https://www.instagram.com/brandmingo",
          "https://www.facebook.com/brandmingo",
          "https://www.youtube.com/@brandmingo",
          "https://x.com/brandmingo",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9990613140",
          contactType: "sales",
          areaServed: ["IN", "US", "AE", "GB"],
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://leadsgenerationservices.in/#service",
        name: "Lead Generation Services by Brandmingo",
        url: "https://leadsgenerationservices.in",
        parentOrganization: {
          "@id": "https://brandmingo.com/#organization",
        },
        image: "https://leadsgenerationservices.in/images/logo/white-logo.png",
        telephone: "+91-9990613140",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Lead Generation Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "B2B Lead Generation",
                description: "High-intent B2B sales leads via LinkedIn, Google Ads & Email Funnels.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Real Estate & High-Ticket Lead Generation",
                description: "Pre-qualified buyer and investor leads for real estate developers & luxury brands.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Meta & Google Ads Funnel Optimization",
                description: "Data-driven paid media campaigns optimized for lowest cost per qualified lead.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://leadsgenerationservices.in/#website",
        url: "https://leadsgenerationservices.in",
        name: "Lead Generation Services India",
        publisher: {
          "@id": "https://brandmingo.com/#organization",
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-[#fb8002] selection:text-white">
        {children}
      </body>
    </html>
  );
}

