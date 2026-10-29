import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Lead Generation Services in Noida | Brandmingo",
  description:
    "Get verified, high-intent B2B & real estate leads in Noida with Meta & Google Ads funnels by Brandmingo. Scale revenue today. Book your free strategy call!",
  keywords: [
    "lead generation services in Noida",
    "lead generation company in Noida",
    "best lead generation company in Noida for real estate",
    "B2B lead generation companies in Noida Sector 62",
    "digital marketing lead generation Noida",
    "real estate lead generation Noida",
    "performance marketing agency Noida",
    "how to get more leads for my business in Noida",
    "lead generation services in Delhi NCR",
    "B2B lead generation services India",
    "lead generation agency India",
    "Facebook ads lead generation India",
    "Google ads lead generation services",
    "affordable lead generation services",
    "qualified leads for business",
    "lead generation for startups India",
    "lead generation cost in India",
    "lead generation service in noida",
    "best lead generation service in noida",
    "best lead generation services in noida",
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
    title: "Lead Generation Services in Noida | Brandmingo",
    description:
      "Get verified, high-intent B2B & real estate leads in Noida with Meta & Google Ads funnels by Brandmingo. Scale revenue today. Book your free strategy call!",
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
      "Get verified, high-intent B2B & real estate leads in Noida with Meta & Google Ads funnels by Brandmingo. Scale revenue today. Book your free strategy call!",
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "19:00",
          },
        ],
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
            name: "Why is Brandmingo considered the best lead generation company in Noida?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Brandmingo is recognized as the leading lead generation agency in Noida and Delhi NCR because we never sell stale or recycled databases. Instead, we engineer custom, high-converting Meta Ads and Google Ads funnels with multi-step qualification, OTP verification, and custom CRM integration, ensuring your sales team only speaks with genuine, high-intent decision-makers.",
            },
          },
          {
            "@type": "Question",
            name: "How do you generate verified leads for real estate developers in Noida & Greater Noida?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our real estate lead generation campaigns in Noida, Noida Expressway, Sector 150, and Greater Noida West use hyper-local geo-targeting, luxury lifestyle affinity audiences, and micro-budget filters, capturing verified site-visit inquiries from HNIs and prospective home-buyers.",
            },
          },
          {
            "@type": "Question",
            name: "What is the typical lead generation cost in Noida and Delhi NCR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In Noida and Delhi NCR, high-intent B2B and SaaS leads typically range from ₹250 to ₹650 per qualified inquiry, Real Estate investor leads range from ₹180 to ₹500, and consumer/education leads range from ₹40 to ₹120.",
            },
          },
          {
            "@type": "Question",
            name: "How do you filter out fake, duplicate, or low-intent leads?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We deploy a robust 3-stage lead qualification framework: (1) Interactive multi-step survey funnels asking critical intent questions, (2) Phone number validation and OTP verification, and (3) Negative audience exclusions and algorithmic pixel optimization.",
            },
          },
          {
            "@type": "Question",
            name: "Can Brandmingo help startups and SMEs in Noida Sector 62 with affordable lead generation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! We offer agile, results-oriented lead generation packages specifically structured for startups, consulting firms, and SMEs in Noida Sector 62, Sector 63, and across Delhi NCR with complete end-to-end service and transparent reporting.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly can our lead generation campaigns go live in Noida?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our onboarding sprint takes only 3 to 5 business days, including competitor research, landing page construction, ad creative design, and tracking pixel integration. Qualified leads begin arriving within 24 to 48 hours of launch.",
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
