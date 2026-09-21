import { CTASection } from "@/components/cta-section";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const productItems = [
  {
    title: "AI Video",
    description: "Generate cinematic video outputs for campaigns, storytelling and branded content.",
    href: "/products",
  },
  {
    title: "AI Image",
    description: "Create polished visual assets with consistent quality across styles and formats.",
    href: "/products",
  },
  {
    title: "AI Creation Tools",
    description: "Use practical tools that speed up creative workflow from concept to final output.",
    href: "/products",
  },
] as const;

export default function Home() {
  return (
    <>
      <Section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Official in Vietnam</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Create more.
              <br />
              Let Kling handle the hard work.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              Kling AI brings advanced AI video and image generation to creators, teams and businesses in Vietnam.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/products">Explore Kling</Button>
              <Button href="/api" variant="secondary">
                Explore API
              </Button>
            </div>
          </div>
          <div className="aspect-[16/11] w-full rounded-3xl border border-dashed border-border bg-surface-muted" aria-label="Hero visual placeholder" />
        </div>
      </Section>

      <Section id="products">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Products</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A focused creation ecosystem</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {productItems.map((item) => (
            <ProductCard key={item.title} title={item.title} description={item.description} href={item.href} />
          ))}
        </div>
      </Section>

      <Section id="why-kling">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Why Kling</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Built for serious creative output</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="text-lg font-semibold">High-quality generation</h3>
            <p className="mt-2 text-sm text-foreground/75">Deliver consistent visual quality across video and image workflows.</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="text-lg font-semibold">Powerful creative control</h3>
            <p className="mt-2 text-sm text-foreground/75">Guide style, pacing and outcomes with practical controls for teams.</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="text-lg font-semibold">Built for professional workflows</h3>
            <p className="mt-2 text-sm text-foreground/75">Fit Kling into production pipelines without heavy process changes.</p>
          </article>
        </div>
      </Section>

      <Section id="teams">
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Kling for Teams</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">For Agencies &amp; Creative Teams</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
                Integrate Kling into creative production workflows, content creation and client projects.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">For Enterprises</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
                Access scalable AI generation, API integration and business support.
              </p>
              <Button href="/contact" className="mt-6" variant="secondary">
                Explore Business Solutions
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="api-pricing" className="pt-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">API &amp; Pricing</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Build with Kling</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
              Integrate Kling&apos;s video and image generation models into your own workflow, platform or product.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/api">View API</Button>
              <Button href="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-6">
            <div className="mb-3 aspect-[16/10] w-full rounded-2xl border border-dashed border-border bg-surface-muted" />
            <p className="text-sm text-foreground/70">Pricing preview placeholder</p>
            {/* Future support: API pricing calculator, discount tiers, enterprise pricing, model-based pricing. */}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
