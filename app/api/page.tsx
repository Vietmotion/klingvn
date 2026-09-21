import { Section } from "@/components/ui/section";

export default function ApiPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">API</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Integrate Kling API</h1>
        <p className="mt-4 text-base text-foreground/75 sm:text-lg">
          Kling API enables businesses and developers to integrate Kling video and image models into products and internal workflows.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">Video API</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for endpoints, model options and throughput guidance.</p>
        </article>
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">Image API</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for prompt, style and output configuration details.</p>
        </article>
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">API Documentation</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for auth, quickstart, examples and SDK references.</p>
        </article>
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">API Pricing</h2>
          <p className="mt-3 text-sm text-foreground/70">Placeholder for model-based and volume-based API pricing details.</p>
        </article>
      </div>
    </Section>
  );
}
