export default function sitemap() {
  const baseUrl = "https://leadsgenerationservices.in";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}
