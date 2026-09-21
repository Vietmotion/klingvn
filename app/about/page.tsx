import { Section } from "@/components/ui/section";

export default function AboutPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">About Kling AI Vietnam</h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
          Kling AI Vietnam focuses on bringing official access, local support and practical AI creation workflows to creators, agencies, teams and enterprises in Vietnam.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">What this site will evolve into</h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
          This starter website is intentionally minimal so the team can iterate quickly in code first, then expand into a more complete product and business platform.
        </p>
      </div>
    </Section>
  );
}
