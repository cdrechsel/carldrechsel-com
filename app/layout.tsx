import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carldrechsel.com"),
  title: {
    default: "Carl Drechsel | Cloud Solution Architecture, AI Transformation, and Technical Leadership",
    template: "%s | Carl Drechsel"
  },
  description:
    "Carl Drechsel is a technical leader focused on cloud solution architecture, Azure delivery, enterprise AI transformation, Microsoft platforms, and customer-facing execution across complex enterprise environments.",
  openGraph: {
    title: "Carl Drechsel | Cloud Solution Architecture, AI Transformation, and Technical Leadership",
    description:
      "Cloud solution architecture, Azure delivery leadership, enterprise AI transformation, and customer success execution.",
    url: "https://carldrechsel.com",
    siteName: "Carl Drechsel",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Carl Drechsel | Cloud Solution Architecture, AI Transformation, and Technical Leadership",
    description:
      "Technical leader focused on cloud solution architecture, Azure delivery, enterprise AI transformation, and customer-facing execution."
  },
  alternates: {
    canonical: "https://carldrechsel.com",
    types: {
      "application/rss+xml": [{ url: "https://carldrechsel.com/insights/rss.xml", title: "Carl Drechsel Insights RSS" }]
    }
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-zinc-900 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
