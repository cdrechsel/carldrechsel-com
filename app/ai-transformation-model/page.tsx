import type { Metadata } from "next";
import AITransformationModelSection from "@/components/site/AITransformationModelSection";
import SiteFooter from "@/components/site/SiteFooter";
import TopNav from "@/components/site/TopNav";

export const metadata: Metadata = {
  title: "AI Transformation Model",
  description:
    "A strategic model connecting enterprise AI framework design, workflow-level tool acceleration, and applied operational AI systems."
};

export default function AITransformationModelPage() {
  return (
    <div className="site-shell">
      <TopNav />
      <main id="main-content" className="site-main">
        <AITransformationModelSection />
      </main>
      <SiteFooter />
    </div>
  );
}
