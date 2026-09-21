import { Section } from "@/components/ui/section";

export default function LearnPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Learn</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Learn with Kling</h1>
        <p className="mt-4 text-base text-foreground/75 sm:text-lg">
          A focused knowledge hub for product education, workflow guidance and market updates.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">Tutorials</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for practical step-by-step tutorials.</p>
        </article>
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">Guides</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for best-practice guides by role and workflow.</p>
        </article>
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">News</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for launch updates and official announcements.</p>
        </article>
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">Case Studies</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for team and enterprise implementation stories.</p>
        </article>
      </div>
    </Section>
  );
}
