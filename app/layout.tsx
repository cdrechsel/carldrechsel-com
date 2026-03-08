import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carldrechsel.com"),
  title: {
    default: "Carl Drechsel | AI Enablement and Digital Workplace Transformation",
    template: "%s | Carl Drechsel"
  },
  description:
    "Enterprise architect helping organizations modernize work with AI, Microsoft 365, and secure productivity platforms.",
  openGraph: {
    title: "Carl Drechsel | AI Enablement and Digital Workplace Transformation",
    description:
      "Enterprise architect helping organizations modernize work with AI, Microsoft 365, and secure productivity platforms.",
    url: "https://carldrechsel.com",
    siteName: "Carl Drechsel",
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "https://carldrechsel.com"
  },
  keywords: [
    "Carl Drechsel",
    "AI Enablement",
    "Microsoft Copilot Strategy",
    "Digital Workplace Transformation",
    "Microsoft 365",
    "Enterprise Architecture",
    "Zero Trust"
  ]
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
        <div id="top" className="min-h-screen bg-white">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
