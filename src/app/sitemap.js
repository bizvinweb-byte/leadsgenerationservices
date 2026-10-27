import { LOCATIONS } from "@/data/locations";

export default function sitemap() {
  const baseUrl = "https://leadsgenerationservices.in";
  const currentDate = new Date();

  // 1. Primary Homepage (Maximum Priority)
  const homeEntry = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  };

  // 2. City & State-Wise Indexing Entries (Programmatic SEO for Google Search Console)
  const locationEntries = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: currentDate,
    changeFrequency: loc.isPrimary ? "daily" : "weekly",
    priority: loc.isPrimary ? 0.95 : 0.85,
  }));

  return [homeEntry, ...locationEntries];
}
