import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carldrechsel.com"),
  title: {
    default: "Carl Drechsel | Enterprise AI Transformation & Digital Workplace Strategy",
    template: "%s | Carl Drechsel"
  },
  description:
    "Carl Drechsel is a Technical Solutions Architect focused on enterprise AI transformation, Microsoft Copilot strategy, Microsoft 365, digital workplace modernization, collaboration architecture, and secure productivity.",
  openGraph: {
    title: "Carl Drechsel | Enterprise AI Transformation & Digital Workplace Strategy",
    description:
      "Enterprise AI transformation, Copilot strategy, Microsoft 365 modernization, and digital workplace leadership.",
    url: "https://carldrechsel.com",
    siteName: "Carl Drechsel",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Carl Drechsel | Enterprise AI Transformation & Digital Workplace Strategy",
    description:
      "Senior Technical Solutions Architect focused on AI transformation, Microsoft 365, Copilot strategy, and digital workplace modernization."
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
