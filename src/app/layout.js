import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Lead Generation Services in Noida | #1 B2B & B2C Leads Agency - Brandmingo",
  description:
    "Scale your business with the top lead generation services in Noida & Delhi NCR by Brandmingo. Verified, high-intent B2B & B2C sales leads using data-driven Meta Ads, Google Ads, high-converting funnels & automated qualification.",
  keywords: [
    "lead generation services in noida",
    "lead generation company in noida",
    "lead generation agency noida",
    "b2b lead generation company noida",
    "lead generation services noida sector 62",
    "digital marketing agency in noida",
    "performance marketing agency in noida",
    "meta ads agency noida",
    "real estate lead generation noida",
    "google ads agency noida",
    "lead generation services in delhi ncr",
    "b2b lead generation delhi ncr",
    "lead generation services in india",
    "lead generation company in india",
    "high ticket client acquisition noida",
    "brandmingo noida",
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
    siteName: "Lead Generation Services in Noida | Brandmingo",
    title: "Lead Generation Services in Noida | #1 B2B & B2C Leads Agency - Brandmingo",
    description:
      "Looking for verified, high-intent sales leads in Noida & Delhi NCR? Partner with Brandmingo for data-driven Meta Ads, Google Ads & automated qualifying funnels.",
    images: [
      {
        url: "/images/logo/blacktransprint.png",
        width: 1200,
        height: 630,
        alt: "Brandmingo - Lead Generation Services in Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Services in Noida | Brandmingo",
    description:
      "Get high-converting, sales-qualified B2B & B2C leads in Noida & Delhi NCR using performance marketing funnels by Brandmingo.",
    images: ["/images/logo/blacktransprint.png"],
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
        logo: "https://leadsgenerationservices.in/images/logo/blacktransprint.png",
        sameAs: [
          "https://www.linkedin.com/company/brandmingo",
          "https://instagram.com/brandmingo",
          "https://www.facebook.com/brandmingo",
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
        name: "Lead Generation Services in Noida by Brandmingo",
        url: "https://leadsgenerationservices.in",
        parentOrganization: {
          "@id": "https://brandmingo.com/#organization",
        },
        image: "https://leadsgenerationservices.in/images/logo/blacktransprint.png",
        telephone: "+91-9990613140",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sector 62",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201309",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.6280",
          longitude: "77.3649",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Noida",
          },
          {
            "@type": "AdministrativeArea",
            name: "Delhi NCR",
          },
          {
            "@type": "City",
            name: "Greater Noida",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Lead Generation Services Noida",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "B2B Lead Generation Services Noida",
                description: "High-intent B2B sales leads for Noida & Delhi NCR companies via LinkedIn, Google Ads & ABM funnels.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Real Estate & High-Ticket Lead Generation Noida",
                description: "Pre-qualified property buyers and investors leads for Noida & Expressway real estate developers.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Meta & Google Ads Funnel Optimization",
                description: "Data-driven paid media campaigns optimized for lowest cost per qualified lead in Noida & pan-India.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Education & Study Abroad Student Enquiries",
                description: "Scalable student recruitment funnels for MBBS, B.Tech & Overseas Counselling admissions.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-Commerce & D2C Revenue Scaling",
                description: "High ROAS paid customer acquisition funnels for consumer brands.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://leadsgenerationservices.in/#website",
        url: "https://leadsgenerationservices.in",
        name: "Lead Generation Services in Noida | Brandmingo",
        publisher: {
          "@id": "https://brandmingo.com/#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": "https://leadsgenerationservices.in/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is the best lead generation agency in Noida?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Brandmingo is widely recognized as the leading lead generation agency in Noida and Delhi NCR, delivering verified, high-intent B2B and B2C sales leads using data-driven Meta Ads, Google Ads, and custom qualification funnels.",
            },
          },
          {
            "@type": "Question",
            name: "Can Brandmingo handle lead generation for real estate developers in Noida?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Brandmingo specializes in Real Estate lead generation for developers across Noida Expressway, Central Noida, and Greater Noida, delivering verified investor and luxury home-buyer inquiries.",
            },
          },
          {
            "@type": "Question",
            name: "How do you filter out fake or low-intent leads in Noida campaigns?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We implement custom lead forms with multi-step qualifying questions (budget, intent, timeline), OTP/phone verification, and strict audience exclusion rules to eliminate unqualified inquiries.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly can we launch campaigns and start receiving leads?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our complete setup—from campaign audit, funnel build, ad creative design, and tracking installation—takes 3 to 5 business days, after which qualified leads start flowing immediately.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://leadsgenerationservices.in/#breadcrumbs",
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
            name: "Lead Generation Services in Noida",
            item: "https://leadsgenerationservices.in/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Case Studies",
            item: "https://leadsgenerationservices.in/#case-study",
          },
        ],
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
