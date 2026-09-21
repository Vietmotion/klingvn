import { Section } from "@/components/ui/section";

export default function PricingPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Pricing</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Simple pricing overview</h1>
        <p className="mt-4 text-base text-foreground/75 sm:text-lg">
          Choose a plan type based on your stage, usage and operational needs.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">Individual / Creator</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for individual and creator-level access tiers.</p>
        </article>
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">API</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for model usage rates and volume discounts.</p>
        </article>
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for enterprise contracts and dedicated support.</p>
        </article>
      </div>
    </Section>
  );
}
