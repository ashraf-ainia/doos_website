import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Real content dates — bump these when a page's content actually changes, so
// `lastmod` stays credible instead of resetting on every deploy.
const HOME_LAST_MODIFIED = "2026-08-07";
const PRIVACY_LAST_MODIFIED = "2026-07-22";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: PRIVACY_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
