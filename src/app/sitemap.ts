import { MetadataRoute } from "next";
import { getBlogsData } from "@/lib/db/db-helper";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const Blogs = await getBlogsData();
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...Blogs.map((o) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${o.indexedTitle}`,
    })),
  ];
}
