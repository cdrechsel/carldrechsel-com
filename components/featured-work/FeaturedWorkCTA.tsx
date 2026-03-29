import TrackLink from "@/components/site/TrackLink";

type FeaturedWorkCTAProps = {
  backHref?: string;
};

export default function FeaturedWorkCTA({ backHref = "/featured-work" }: FeaturedWorkCTAProps) {
  return (
    <section className="surface-card-padded">
      <h2 className="text-2xl font-semibold tracking-tight">Continue the conversation</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-zinc-600">Open to leadership conversations on cloud solution architecture, customer success execution, Microsoft platform strategy, and enterprise AI transformation.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <TrackLink href="/resume.pdf" eventName="resume_download" label="featured_work_resume" className="btn-primary">Download Resume</TrackLink>
        <TrackLink href="https://www.linkedin.com/in/carldrechsel/" eventName="linkedin_click" label="featured_work_linkedin" className="btn-secondary" target="_blank" rel="noreferrer">Connect on LinkedIn</TrackLink>
        <TrackLink href={backHref} eventName="featured_work_back" className="btn-secondary">Back to Featured Work</TrackLink>
      </div>
    </section>
  );
}
