import { CTASection } from "@/components/cta-section";
import { WhyKlingCard } from "@/components/why-kling-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export default function Home() {
  const whyKlingFeatures = [
    {
      title: "All-in-One Reference: Enhanced Consistency, More Responsive and Dynamic",
      shortText: "Lock character and scene consistency across complex multi-shot generation.",
      longText:
        "VIDEO 3.0 introduces a powerful new All-in-One Reference capability. It supports uploading or recording a 3-8s character video, or providing multiple reference images to precisely lock in an element. Building on image-to-video generation, you can further anchor specific elements by adding multi-image or video-based elements for secondary stabilization. The system also supports extracting original audio from video or assigning a matched voice to static characters-combined with precise lip-sync driving-so every character you create can perform in their true voice.",
    },
    {
      title: "Omni Narrative: 15s Multi-Shot Control, Cinematic in One Click",
      shortText: "Direct cinematic pacing and shot-level narrative structure in one flow.",
      longText:
        "While preserving flexible duration control, VIDEO 3.0 introduces native storyboard capabilities and extends single-generation length to 15 seconds. You can precisely orchestrate each shot-defining duration, framing, camera movement, and narrative intent at the shot level. With a single generation, craft a rhythmically structured, multi-shot sequence-where every second is purposefully composed to serve your creative vision.",
    },
    {
      title: "Upgraded Native Audio Output with Character Referencing & More Languages",
      shortText: "Map voice, text and characters more precisely across multilingual scenes.",
      longText:
        "With a major upgrade to Native Audio, the system achieves precise mapping between text and on-screen characters. In multi-character scenes, you decide exactly who speaks-eliminating ambiguity in speaker attribution. It supports multiple languages, regional dialects, and authentic accents, even seamless code-switching within a single scene.",
    },
  ] as const;

  return (
    <>
      <Section className="relative overflow-hidden py-0" containerClassName="max-w-none px-0">
        <div className="relative isolate min-h-[76vh] sm:min-h-[82vh]">
          <Image
            src="/hero-placeholder.svg"
            alt="Kling hero background placeholder"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex min-h-[76vh] w-full max-w-5xl items-center justify-center px-4 py-20 text-center sm:min-h-[82vh] sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Official in Vietnam</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Create more.
                <br />
                Let Kling handle the hard work.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Kling AI brings advanced AI video and image generation to creators, teams and businesses in Vietnam.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button href="/products">Explore Kling</Button>
              <Button href="/api" variant="secondary">
                Explore API
              </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="products">
        <div className="rounded-2xl bg-[#060708] px-4 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Products</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Kling 3.0 <span className="font-serif italic">Model Series</span>
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
              Built on a fully upgraded architecture, Kling 3.0 expands multimodal generation with more consistent
              scene logic, stronger motion coherence and precise control for long-form storytelling workflows.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/kling-3-showcase.svg"
                alt="Kling 3.0 showcase placeholder"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/products">Explore Kling 3.0</Button>
            <Button href="/api" variant="secondary" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              View Model API
            </Button>
          </div>
        </div>
      </Section>

      <Section id="why-kling">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Why Kling</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Built for precision storytelling</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3 md:items-start">
          {whyKlingFeatures.map((feature) => (
            <WhyKlingCard
              key={feature.title}
              title={feature.title}
              shortText={feature.shortText}
              longText={feature.longText}
            />
          ))}
        </div>
      </Section>

      <Section id="teams">
        <div>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Kling for Teams</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="font-serif italic">Enterprise Services</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="group flex rounded-2xl border border-transparent bg-surface-muted p-8 transition-colors duration-200 hover:border-border hover:bg-surface sm:p-10 lg:min-h-[24rem] lg:flex-col">
              <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">API Service</h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                For Developers &amp; Enterprises. Integrate leading image and video generation into your products and
                workflows through enterprise APIs-secure, scalable, and built for compliance.
              </p>
              <Button href="/api" className="mt-10 h-12 px-5 lg:mt-auto" variant="secondary">
                Learn More →
              </Button>
            </article>

            <article className="group flex rounded-2xl border border-transparent bg-surface-muted p-8 transition-colors duration-200 hover:border-border hover:bg-surface sm:p-10 lg:min-h-[24rem] lg:flex-col">
              <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">Enterprise Plan</h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                For Enterprise Teams. No API integration needed. Use Kling&apos;s creative tools to scale content
                production with enterprise-ready procurement, asset management, and compliance support.
              </p>
              <Button href="/contact" className="mt-10 h-12 px-5 lg:mt-auto" variant="secondary">
                Learn More →
              </Button>
            </article>
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
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-3 aspect-[16/10] w-full rounded-md border border-dashed border-border bg-surface-muted" />
            <p className="text-sm text-foreground/70">Pricing preview placeholder</p>
            {/* Future support: API pricing calculator, discount tiers, enterprise pricing, model-based pricing. */}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
