import { Section } from "@/components/ui/section";

export default function ProductsPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Products</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Kling product ecosystem</h1>
        <p className="mt-4 text-base text-foreground/75 sm:text-lg">
          Explore Kling models and tools designed for modern video and image generation.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">AI Video</h2>
          <div className="mt-4 aspect-[16/10] rounded-2xl border border-dashed border-border bg-surface-muted" />
          <p className="mt-4 text-sm text-foreground/70">Placeholder for future video model pages and use cases.</p>
        </article>

        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">AI Image</h2>
          <div className="mt-4 aspect-[16/10] rounded-2xl border border-dashed border-border bg-surface-muted" />
          <p className="mt-4 text-sm text-foreground/70">Placeholder for image model capabilities and styles.</p>
        </article>

        <article className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">AI Creation Tools</h2>
          <div className="mt-4 aspect-[16/10] rounded-2xl border border-dashed border-border bg-surface-muted" />
          <p className="mt-4 text-sm text-foreground/70">Placeholder for workflow tools, editing and collaboration features.</p>
        </article>
      </div>
    </Section>
  );
}
