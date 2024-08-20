import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title About",
  description: "SEO Description About",
  keywords: ["About Page", "Fernando", "información", "..."],
};

export default function AboutPage() {
  return <span className="text-7xl">About Page</span>;
}
