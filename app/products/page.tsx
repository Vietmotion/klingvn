"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";

const productKeys = [
  {
    title: "AI Video",
    description:
      "Generate cinematic video from text prompts, reference images, and story-driven briefs with richer scene continuity.",
    highlights: ["Text-to-video", "Image-to-video", "Scene continuity", "Prompt control"],
  },
  {
    title: "AI Image",
    description:
      "Create polished visuals, concept art, and product imagery with strong composition and style control.",
    highlights: ["Image generation", "Style variation", "Creative ideation", "Brand visuals"],
  },
  {
    title: "Motion Control",
    description:
      "Shape movement, camera direction, and dynamic pacing to make each shot feel intentional and cinematic.",
    highlights: ["Camera motion", "Shot control", "Pacing", "Cinematic timing"],
  },
  {
    title: "Video Editor",
    description:
      "Refine footage, assemble edits, and streamline production workflows from concept to final output.",
    highlights: ["Cut & assemble", "Scene refinement", "Workflow simplification", "Publishing-ready output"],
  },
] as const;

const videoSlides = [
  {
    title: "Audio-Visual Performance for Realistic Results",
    description: "Stable dynamic motions and an immersive audio-visual experience, taking video generation to professional-grade production.",
    src: "/footages/footage-01.mp4",
  },
  {
    title: "Omni Reference for Greater Creative Control",
    description: "More reference options and more consistent results, making it easy to recreate creative videos.",
    src: "/footages/footage-02.mp4",
  },
  {
    title: "Narrative Upgrade for Seamless Storytelling",
    description: "Native 3.0 generation with precise control over every narrative beat, turning a spark of inspiration into a complete story.",
    src: "/footages/footage-01.mp4",
  },
  {
    title: "Diverse Content for Creative Freedom",
    description: "Greater creative freedom, with no limits to your imagination.",
    src: "/footages/footage-01.mp4",
  },
] as const;

const imageGallery = [
  {
    title: "Citrus Micro Motion",
    prompt: "A fruit still life of colorful berries and kiwi frozen in ice, soft studio lighting, glossy reflections, cinematic macro composition.",
    aspect: "portrait",
    background:
      "radial-gradient(circle at 30% 20%, rgba(255, 214, 102, 0.25), transparent 18%), linear-gradient(135deg, rgba(13,23,31,0.9), rgba(74,55,31,0.5) 35%, rgba(16,24,34,0.9))",
  },
  {
    title: "Golden Coastline",
    prompt: "Sunset beach scene with warm golden light, soft horizon, cinematic color grading, minimal yet atmospheric environment.",
    aspect: "landscape",
    background:
      "radial-gradient(circle at 50% 25%, rgba(255, 185, 94, 0.18), transparent 20%), linear-gradient(135deg, rgba(24,31,38,0.9), rgba(88,62,42,0.45) 38%, rgba(16,24,32,0.92))",
  },
  {
    title: "Refreshment Scene",
    prompt: "A person holding a fruit drink outdoors in soft natural light, clean composition, lifestyle photography feel, warm summer mood.",
    aspect: "portrait",
    background:
      "radial-gradient(circle at 65% 22%, rgba(242, 212, 148, 0.2), transparent 18%), linear-gradient(120deg, rgba(19,34,33,0.9), rgba(83,103,75,0.42) 42%, rgba(19,31,37,0.9))",
  },
  {
    title: "City Transit",
    prompt: "Cinematic underground transit scene, muted urban tones, a confident subject in motion, realistic silhouettes and soft depth.",
    aspect: "landscape",
    background:
      "radial-gradient(circle at 55% 30%, rgba(255, 217, 166, 0.18), transparent 16%), linear-gradient(120deg, rgba(18,24,33,0.92), rgba(66,72,90,0.54) 38%, rgba(18,24,33,0.92))",
  },
  {
    title: "Business Portrait",
    prompt: "A man in a dark navy outfit standing in a bustling station, cinematic portrait with natural light and realistic expression.",
    aspect: "portrait",
    background:
      "radial-gradient(circle at 35% 24%, rgba(255, 224, 174, 0.16), transparent 18%), linear-gradient(135deg, rgba(15,25,38,0.92), rgba(57,66,75,0.48) 40%, rgba(13,18,25,0.9))",
  },
  {
    title: "Loft Bedroom",
    prompt: "A bright bedroom interior with clean linens, natural sunlight, warm minimal furniture, premium residential styling.",
    aspect: "square",
    background:
      "radial-gradient(circle at 48% 18%, rgba(255, 240, 208, 0.18), transparent 18%), linear-gradient(135deg, rgba(123,126,120,0.65), rgba(230,223,211,0.4) 45%, rgba(94,88,79,0.56))",
  },
  {
    title: "Modern Interior",
    prompt: "A modern open-plan living room with warm wood tones, elegant furniture, soft shadows, and contemporary architecture.",
    aspect: "portrait",
    background:
      "radial-gradient(circle at 60% 24%, rgba(240, 224, 202, 0.16), transparent 16%), linear-gradient(120deg, rgba(181,164,147,0.58), rgba(238,228,217,0.45) 38%, rgba(116,97,82,0.58))",
  },
  {
    title: "Rainy Window",
    prompt: "A cinematic close-up of a face reflected in a rainy car window, moody story lighting, soft reflections, dramatic realism.",
    aspect: "landscape",
    background:
      "radial-gradient(circle at 52% 28%, rgba(145, 176, 221, 0.14), transparent 16%), linear-gradient(135deg, rgba(26,35,49,0.9), rgba(72,82,96,0.52) 38%, rgba(16,22,30,0.9))",
  },
  {
    title: "Man in the Rain",
    prompt: "A mature man in a rain-soaked street scene, soft cinematic lighting, subtle textures, dramatic urban mood.",
    aspect: "portrait",
    background:
      "radial-gradient(circle at 50% 28%, rgba(200, 213, 219, 0.14), transparent 16%), linear-gradient(120deg, rgba(51,54,60,0.95), rgba(104,115,117,0.5) 42%, rgba(22,25,29,0.92))",
  },
  {
    title: "Signal Light",
    prompt: "A neon-lit urban portrait with soft glow, cinematic contrast, realistic face features, refined character study.",
    aspect: "landscape",
    background:
      "radial-gradient(circle at 45% 18%, rgba(125, 228, 255, 0.16), transparent 14%), linear-gradient(135deg, rgba(18,26,35,0.94), rgba(56,74,94,0.5) 38%, rgba(12,18,26,0.9))",
  },
  {
    title: "Civic Portrait",
    prompt: "A detailed portrait of a person in a city environment, soft midday contrast, realism, subtle grain, polished composition.",
    aspect: "square",
    background:
      "radial-gradient(circle at 32% 24%, rgba(250, 213, 144, 0.18), transparent 18%), linear-gradient(135deg, rgba(116,97,74,0.7), rgba(30,34,41,0.8) 40%, rgba(88,78,66,0.7))",
  },
  {
    title: "Ambient Corridor",
    prompt: "A moody hallway with cinematic lighting, quiet stillness, surface reflections, and elegant architectural framing.",
    aspect: "portrait",
    background:
      "radial-gradient(circle at 55% 16%, rgba(202, 223, 255, 0.14), transparent 16%), linear-gradient(135deg, rgba(29,32,38,0.94), rgba(69,83,90,0.5) 38%, rgba(15,18,24,0.94))",
  },
  {
    title: "Desert Calm",
    prompt: "A warm desert scene with earthy tones, cinematic light and shadow, calm composition, premium travel photography feel.",
    aspect: "landscape",
    background:
      "radial-gradient(circle at 42% 20%, rgba(255, 191, 121, 0.2), transparent 18%), linear-gradient(135deg, rgba(96,60,38,0.78), rgba(196,142,75,0.38) 38%, rgba(33,23,18,0.82))",
  },
  {
    title: "Crystal Detail",
    prompt: "Macro shot of sparkling water and fruit textures, crisp reflections, high-detail material rendering, premium lifestyle still.",
    aspect: "square",
    background:
      "radial-gradient(circle at 50% 18%, rgba(144, 235, 255, 0.2), transparent 18%), linear-gradient(135deg, rgba(19,38,49,0.9), rgba(84,144,160,0.36) 42%, rgba(19,30,42,0.88))",
  },
  {
    title: "Curious Stare",
    prompt: "A portrait of a person looking into the distance with gentle expression, realistic skin tones and rich cinematic atmosphere.",
    aspect: "portrait",
    background:
      "radial-gradient(circle at 60% 25%, rgba(224, 197, 160, 0.18), transparent 16%), linear-gradient(120deg, rgba(23,32,42,0.9), rgba(72,61,53,0.48) 40%, rgba(17,22,28,0.92))",
  },
  {
    title: "Warehouse Mood",
    prompt: "An industrial interior with soft natural light, cinematic contrast, calm atmosphere, realistic surfaces and textures.",
    aspect: "landscape",
    background:
      "radial-gradient(circle at 52% 24%, rgba(216, 180, 124, 0.18), transparent 18%), linear-gradient(135deg, rgba(68,58,52,0.86), rgba(161,145,124,0.38) 38%, rgba(25,24,24,0.9))",
  },
  {
    title: "Night Silhouette",
    prompt: "A dramatic night portrait with soft motion blur and deep contrast, intimate storytelling still, elegant cinematic lighting.",
    aspect: "portrait",
    background:
      "radial-gradient(circle at 40% 20%, rgba(147, 182, 255, 0.18), transparent 16%), linear-gradient(135deg, rgba(8,14,22,0.96), rgba(31,41,68,0.52) 38%, rgba(12,15,20,0.94))",
  },
  {
    title: "Field View",
    prompt: "An open landscape scene with warm golden grass, soft haze, cinematic composition, premium editorial style.",
    aspect: "landscape",
    background:
      "radial-gradient(circle at 52% 18%, rgba(255, 217, 144, 0.18), transparent 18%), linear-gradient(135deg, rgba(75,94,58,0.82), rgba(164,135,92,0.4) 38%, rgba(28,36,24,0.88))",
  },
  {
    title: "Quiet Detail",
    prompt: "A minimal close-up of a product detail in natural light, ultra-clean composition, premium editorial still, realistic texture.",
    aspect: "square",
    background:
      "radial-gradient(circle at 48% 24%, rgba(255, 219, 164, 0.16), transparent 16%), linear-gradient(135deg, rgba(118,111,101,0.75), rgba(229,216,200,0.42) 38%, rgba(98,90,74,0.68))",
  },
  {
    title: "Wild Iris",
    prompt: "A macro still of a vivid iris with layered colors and highly realistic texture, cinematic detail, reflective surfaces.",
    aspect: "square",
    background:
      "radial-gradient(circle at 50% 32%, rgba(136, 242, 255, 0.18), transparent 18%), linear-gradient(135deg, rgba(18,31,51,0.92), rgba(34,100,117,0.42) 42%, rgba(12,18,25,0.9))",
  },
] as const;

const galleryRows = [
  [
    { ...imageGallery[0], widthClass: "w-[150px]" },
    { ...imageGallery[1], widthClass: "w-[260px]" },
    { ...imageGallery[2], widthClass: "w-[150px]" },
    { ...imageGallery[3], widthClass: "w-[260px]" },
    { ...imageGallery[4], widthClass: "w-[150px]" },
    { ...imageGallery[5], widthClass: "w-[210px]" },
    { ...imageGallery[6], widthClass: "w-[150px]" },
    { ...imageGallery[7], widthClass: "w-[260px]" },
    { ...imageGallery[8], widthClass: "w-[150px]" },
    { ...imageGallery[9], widthClass: "w-[260px]" },
  ],
  [
    { ...imageGallery[10], widthClass: "w-[210px]" },
    { ...imageGallery[11], widthClass: "w-[150px]" },
    { ...imageGallery[12], widthClass: "w-[260px]" },
    { ...imageGallery[13], widthClass: "w-[150px]" },
    { ...imageGallery[14], widthClass: "w-[260px]" },
    { ...imageGallery[15], widthClass: "w-[150px]" },
    { ...imageGallery[16], widthClass: "w-[210px]" },
    { ...imageGallery[17], widthClass: "w-[150px]" },
    { ...imageGallery[18], widthClass: "w-[260px]" },
    { ...imageGallery[19], widthClass: "w-[210px]" },
  ],
] as const;

const galleryTrackRows = galleryRows.map((row) => [...row, ...row]);

export default function ProductsPage() {
  const [videoIndex, setVideoIndex] = useState(0);
  const currentVideo = videoSlides[videoIndex];

  const handlePrev = () => {
    setVideoIndex((prev) => (prev === 0 ? videoSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setVideoIndex((prev) => (prev + 1) % videoSlides.length);
  };

  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Products</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Kling product ecosystem</h1>
        <p className="mt-4 text-base text-foreground/75 sm:text-lg">
          Core product pillars designed for modern creation workflows: AI video generation, image creation,
          motion control, and editing tools built for creators and teams.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {productKeys.map((product) => (
          <div key={product.title} className="rounded-[var(--radius-box)] border border-border bg-surface p-4 shadow-sm sm:p-5">
            <div className="aspect-[16/10] rounded-lg border border-dashed border-border bg-surface-muted" />
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">{product.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/72">{product.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-8">
        <section className="rounded-[1.25rem] border border-border bg-surface p-3 shadow-sm sm:p-4">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-black">
              <div className="relative h-[35rem] w-full overflow-hidden bg-black">
                <video
                  key={currentVideo.src}
                  src={currentVideo.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={handlePrev}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0d1b2a]/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition hover:bg-[#122334]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-white" aria-hidden="true">
                      <path d="M15 6l-6 6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    onClick={handleNext}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0d1b2a]/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition hover:bg-[#122334]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-white" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{currentVideo.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">{currentVideo.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pb-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">AI Video</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Kling v4 brings the next era of AI video</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/72">
                  The latest Kling update brings sharper motion, richer detail, and more cinematic storytelling for
                  creative teams and solo creators.
                </p>
              </div>

              <a
                href="https://kling.ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface-muted px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-foreground/30 hover:bg-surface"
              >
                Create now
              </a>
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              {videoSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setVideoIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === videoIndex ? "w-8 bg-foreground" : "w-2.5 bg-foreground/30 hover:bg-foreground/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[1.25rem] border border-border bg-surface p-4 shadow-sm sm:p-5">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[clamp(2.5rem,5vw,6rem)] font-semibold tracking-[-0.06em] text-white">Kling Image 3.0</h3>

            <div className="mt-10 grid w-full gap-8 text-left md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="text-[clamp(1.1rem,2vw,2rem)] font-semibold tracking-tight text-white">
                  Enhanced Cinematic Storytelling
                </h4>
                <p className="text-base leading-relaxed text-foreground/75">
                  Understands cinematic language with precision, giving every still image the narrative power of film.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[clamp(1.1rem,2vw,2rem)] font-semibold tracking-tight text-white">
                  Native 4K Ultra-HD Generation
                </h4>
                <p className="text-base leading-relaxed text-foreground/75">
                  Generates stunning native 4K visuals with fine textures and sharp, lifelike details.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[clamp(1.1rem,2vw,2rem)] font-semibold tracking-tight text-white">
                  New Series Image Generation
                </h4>
                <p className="text-base leading-relaxed text-foreground/75">
                  Supports multiple ways to generate image series, with coherent storytelling and a consistent visual style.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden px-2 pb-2 sm:px-3">
            <div className="flex w-full flex-col gap-[6px]">
              {galleryTrackRows.map((row, rowIndex) => (
                <div key={`gallery-row-${rowIndex}`} className="marquee-track flex w-max gap-[6px]">
                  {row.map((item, index) => (
                    <div
                      key={`${item.title}-${rowIndex}-${index}`}
                      className={`group relative h-[220px] shrink-0 overflow-hidden rounded-[4px] border border-white/10 bg-black/40 ${item.widthClass}`}
                    >
                      <div
                        className="relative h-full w-full overflow-hidden rounded-[4px]"
                        style={{
                          background: item.background,
                        }}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.14),transparent_16%),linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.28)_55%,rgba(0,0,0,0.7)_100%)]" />
                        <div className="absolute inset-x-3 bottom-3 h-14 rounded-full bg-white/5 blur-2xl" />
                        <div className="absolute left-3 top-3 h-7 w-7 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm" />
                        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-2 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div className="rounded-md border border-white/10 bg-black/55 p-2 text-[10px] leading-relaxed text-white/80 backdrop-blur-sm">
                          {item.prompt}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            .marquee-track {
              animation: marquee 28s linear infinite;
              will-change: transform;
            }

            .marquee-track:hover {
              animation-play-state: paused;
            }

            @keyframes marquee {
              from {
                transform: translate3d(0, 0, 0);
              }
              to {
                transform: translate3d(-50%, 0, 0);
              }
            }
          `}</style>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
            >
              Try Now
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>

        {productKeys
          .filter((product) => product.title !== "AI Video" && product.title !== "AI Image")
          .map((product) => (
            <section key={`${product.title}-detail`} className="rounded-[var(--radius-box)] border border-border bg-surface p-4 shadow-sm sm:p-6">
              <div className={`grid gap-6 lg:items-center ${product.title === "Motion Control" ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1.1fr_1.9fr]"}`}>
                <div className={`${product.title === "Motion Control" ? "aspect-video" : "aspect-[16/10]"} rounded-lg border border-dashed border-border bg-surface-muted`} />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Product</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{product.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-foreground/72">{product.description}</p>

                  <ul className="mt-5 grid gap-2 text-sm text-foreground/75 sm:grid-cols-2">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
      </div>
    </Section>
  );
}
