"use client";

import { CTASection } from "@/components/cta-section";
import { WhyKlingCard } from "@/components/why-kling-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { HeroVideo } from "@/components/hero-video";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const whyKlingFeatures = [
    {
      title: "All-in-One Reference: Enhanced Consistency, More Responsive and Dynamic",
      titleVi: "Tham chiếu tất cả trong một: Nhất quán hơn, phản hồi linh hoạt và sống động",
      shortText: "Lock character and scene consistency across complex multi-shot generation.",
      shortTextVi: "Giữ nhân vật và bối cảnh nhất quán trong các cảnh quay phức tạp gồm nhiều khung hình.",
      mediaSources: ["/footages/mountain-guy-01.mp4", "/footages/mountain-guy-02.mp4"],
      longText:
        "VIDEO 3.0 introduces a powerful new All-in-One Reference capability. It supports uploading or recording a 3-8s character video, or providing multiple reference images to precisely lock in an element. Building on image-to-video generation, you can further anchor specific elements by adding multi-image or video-based elements for secondary stabilization. The system also supports extracting original audio from video or assigning a matched voice to static characters-combined with precise lip-sync driving-so every character you create can perform in their true voice.",
      longTextVi:
        "VIDEO 3.0 giới thiệu tính năng Tham chiếu tất cả trong một mạnh mẽ. Bạn có thể tải lên hoặc quay video nhân vật dài 3–8 giây, hoặc cung cấp nhiều ảnh tham chiếu để cố định chính xác từng yếu tố. Bên cạnh khả năng tạo video từ ảnh, bạn có thể thêm ảnh hoặc video để tăng độ ổn định cho các yếu tố cụ thể. Hệ thống cũng hỗ trợ trích xuất âm thanh gốc từ video hoặc gán giọng nói phù hợp cho nhân vật tĩnh, kết hợp đồng bộ khẩu hình chính xác để nhân vật thể hiện đúng giọng của mình.",
    },
    {
      title: "Omni Narrative: 15s Multi-Shot Control, Cinematic in One Click",
      titleVi: "Omni Narrative: Điều khiển nhiều cảnh 15 giây, chất điện ảnh chỉ với một thao tác",
      shortText: "Direct cinematic pacing and shot-level narrative structure in one flow.",
      shortTextVi: "Chủ động nhịp điệu điện ảnh và cấu trúc câu chuyện đến từng cảnh trong một quy trình.",
      mediaSources: ["/footages/footage-02-co-gai-dan-toc.mp4"],
      longText:
        "While preserving flexible duration control, VIDEO 3.0 introduces native storyboard capabilities and extends single-generation length to 15 seconds. You can precisely orchestrate each shot-defining duration, framing, camera movement, and narrative intent at the shot level. With a single generation, craft a rhythmically structured, multi-shot sequence-where every second is purposefully composed to serve your creative vision.",
      longTextVi:
        "VIDEO 3.0 bổ sung khả năng tạo storyboard trực tiếp và kéo dài thời lượng mỗi lần tạo lên đến 15 giây, đồng thời vẫn linh hoạt trong việc kiểm soát thời lượng. Bạn có thể sắp xếp chính xác thời lượng, bố cục, chuyển động camera và ý đồ kể chuyện cho từng cảnh. Chỉ với một lần tạo, hãy xây dựng chuỗi nhiều cảnh có nhịp điệu rõ ràng, nơi từng giây đều phục vụ ý tưởng sáng tạo.",
    },
    {
      title: "Upgraded Native Audio Output with Character Referencing & More Languages",
      titleVi: "Nâng cấp âm thanh gốc với tham chiếu nhân vật và hỗ trợ đa ngôn ngữ",
      shortText: "Map voice, text and characters more precisely across multilingual scenes.",
      shortTextVi: "Đồng bộ giọng nói, văn bản và nhân vật chính xác hơn trong các cảnh đa ngôn ngữ.",
      mediaSources: ["/footages/footage-01.mp4"],
      longText:
        "With a major upgrade to Native Audio, the system achieves precise mapping between text and on-screen characters. In multi-character scenes, you decide exactly who speaks-eliminating ambiguity in speaker attribution. It supports multiple languages, regional dialects, and authentic accents, even seamless code-switching within a single scene.",
      longTextVi:
        "Với nâng cấp lớn cho Native Audio, hệ thống ghép chính xác lời thoại với nhân vật trên màn hình. Trong cảnh có nhiều nhân vật, bạn quyết định ai sẽ nói để tránh nhầm lẫn người thoại. Tính năng hỗ trợ nhiều ngôn ngữ, phương ngữ vùng miền và giọng đọc tự nhiên, kể cả việc chuyển đổi ngôn ngữ liền mạch trong cùng một cảnh.",
    },
  ] as const;

  return (
    <>
      <Section className="relative overflow-hidden py-0" containerClassName="max-w-none px-0">
        <div className="relative isolate min-h-[76vh] sm:min-h-[82vh]">
          <HeroVideo />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex min-h-[76vh] w-full max-w-5xl items-center justify-center px-4 py-20 text-center sm:min-h-[82vh] sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{isEn ? "OFFICIAL IN VIETNAM" : "ĐỐI TÁC CHÍNH THỨC TẠI VIỆT NAM"}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {isEn ? "Create more." : "Sáng tạo nhiều hơn."}
                <br />
                {isEn ? "Let Kling handle the hard work." : "Để Kling đảm nhận phần việc phức tạp."}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {isEn
                  ? "Kling AI brings advanced AI video and image generation to creators, teams, and businesses in Vietnam."
                  : "Kling AI mang công nghệ tạo video và hình ảnh bằng AI tiên tiến đến với nhà sáng tạo, đội nhóm và doanh nghiệp tại Việt Nam."}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button href="/products">{isEn ? "Explore Kling" : "Khám phá Kling"}</Button>
              <Button href="/api" variant="secondary">
                {isEn ? "Explore API" : "Khám phá API"}
              </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="products">
        <div className="rounded-[var(--radius-box)] bg-[#060708] px-4 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">{isEn ? "PRODUCTS" : "SẢN PHẨM"}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Kling 3.0 <span className="font-serif italic">{isEn ? "Model Series" : "Dòng mô hình"}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
              {isEn
                ? "Built on a fully upgraded architecture, Kling 3.0 expands multimodal generation with more consistent scene logic, stronger motion coherence, and precise control for long-form storytelling workflows."
                : "Với kiến trúc được nâng cấp toàn diện, Kling 3.0 mở rộng khả năng tạo nội dung đa phương thức, logic cảnh nhất quán hơn, chuyển động mượt mà hơn và khả năng kiểm soát chính xác cho quy trình kể chuyện dài."}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <div className="relative aspect-[16/9] w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/kling-3-showcase.svg"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/footages/market.mp4" type="video/mp4" />
              </video>
              <div
                aria-hidden="true"
                className="absolute bottom-[12%] left-1/2 flex w-max max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-3 rounded-lg border border-white/10 bg-black/65 p-2.5 text-left text-white shadow-lg backdrop-blur-sm sm:gap-4 sm:p-3"
              >
                <span className="shrink-0 rounded bg-[#2a4c73] px-2 py-1.5 text-xs sm:text-sm">Kling 3.0</span>
                <span className="text-xs leading-snug sm:text-base">
                  {isEn ? "Cinematic multimodal generation for advanced story workflows" : "Tạo nội dung đa phương thức đậm chất điện ảnh cho quy trình kể chuyện chuyên sâu"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/products">{isEn ? "Explore Kling 3.0" : "Khám phá Kling 3.0"}</Button>
            <Button href="/api" variant="secondary" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              {isEn ? "View Model API" : "Xem API mô hình"}
            </Button>
          </div>
        </div>
      </Section>

      <Section id="why-kling">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "WHY KLING" : "VÌ SAO CHỌN KLING"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{isEn ? "Built for precision storytelling" : "Công cụ kể chuyện với độ chính xác cao"}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3 md:items-start">
          {whyKlingFeatures.map((feature) => (
            <WhyKlingCard
              key={feature.title}
              title={isEn ? feature.title : feature.titleVi}
              shortText={isEn ? feature.shortText : feature.shortTextVi}
              longText={isEn ? feature.longText : feature.longTextVi}
              mediaSources={feature.mediaSources}
            />
          ))}
        </div>
      </Section>

      <Section id="teams">
        <div>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "KLING FOR TEAMS" : "KLING DÀNH CHO ĐỘI NHÓM"}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="font-serif italic">{isEn ? "Enterprise Services" : "Giải pháp doanh nghiệp"}</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="group flex rounded-[var(--radius-box)] border border-transparent bg-surface-muted p-8 transition-colors duration-200 hover:border-border hover:bg-surface sm:p-10 lg:min-h-[24rem] lg:flex-col">
              <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">{isEn ? "API Service" : "Dịch vụ API"}</h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                {isEn
                  ? "For developers and enterprises. Integrate leading image and video generation into your products and workflows through secure, scalable APIs built for compliance."
                  : "Dành cho nhà phát triển và doanh nghiệp. Tích hợp công nghệ tạo hình ảnh, video hàng đầu vào sản phẩm và quy trình của bạn thông qua API bảo mật, có khả năng mở rộng và đáp ứng yêu cầu tuân thủ."}
              </p>
              <Button href="/api" className="mt-10 h-12 px-5 lg:mt-auto" variant="secondary">
                {isEn ? "Learn More →" : "Tìm hiểu thêm →"}
              </Button>
            </article>

            <article className="group flex rounded-[var(--radius-box)] border border-transparent bg-surface-muted p-8 transition-colors duration-200 hover:border-border hover:bg-surface sm:p-10 lg:min-h-[24rem] lg:flex-col">
              <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">{isEn ? "Enterprise Plan" : "Gói doanh nghiệp"}</h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                {isEn
                  ? "For enterprise teams. No API integration needed. Use Kling’s creative tools to scale content production with enterprise-ready procurement, asset management, and compliance support."
                  : "Dành cho đội ngũ doanh nghiệp, không cần tích hợp API. Sử dụng công cụ sáng tạo của Kling để mở rộng sản xuất nội dung với quy trình mua sắm, quản lý tài sản và hỗ trợ tuân thủ dành cho doanh nghiệp."}
              </p>
              <Button href="/contact" className="mt-10 h-12 px-5 lg:mt-auto" variant="secondary">
                {isEn ? "Learn More →" : "Tìm hiểu thêm →"}
              </Button>
            </article>
          </div>
        </div>
      </Section>

      <Section id="api-pricing" className="pt-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "API & PRICING" : "API & BẢNG GIÁ"}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{isEn ? "Build with Kling" : "Phát triển cùng Kling"}</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
              {isEn
                ? "Integrate Kling’s video and image generation models into your own workflow, platform, or product."
                : "Tích hợp các mô hình tạo video và hình ảnh của Kling vào quy trình, nền tảng hoặc sản phẩm của bạn."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/api">{isEn ? "View API" : "Xem API"}</Button>
              <Button href="/pricing" variant="secondary">
                {isEn ? "View Pricing" : "Xem bảng giá"}
              </Button>
            </div>
          </div>
          <div className="rounded-[var(--radius-box)] border border-border bg-surface p-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-surface-muted">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/footages/scientist.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Future support: API pricing calculator, discount tiers, enterprise pricing, model-based pricing. */}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
