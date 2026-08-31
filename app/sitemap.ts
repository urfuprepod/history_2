import { MetadataRoute } from "next";

const BASE_URL = "https://worldhistory-urfu.ru";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date("2026-08-31"),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/professors`,
            lastModified: new Date("2026-08-31"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
