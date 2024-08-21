import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.refundkorea.com",
      lastModified: new Date(),
    },
  ];
}
