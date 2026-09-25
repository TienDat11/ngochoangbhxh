import type { MetadataRoute } from "next";
import { requireSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = requireSiteUrl();
  return [{ url: siteUrl.toString(), changeFrequency: "monthly", priority: 1 }];
}
