import { MetadataRoute } from "next";

const BASE_URL = "https://worldhist-urfu.ru/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-07-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/professors`,
      lastModified: new Date("2026-07-15"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}