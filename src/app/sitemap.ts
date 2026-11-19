import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/business";
import { navigation } from "@/data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    changeFrequency: item.href === "/menu" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
