"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";

const capabilities = [
  {
    number: "01",
    title: "Tạo video bằng AI",
    titleEn: "AI video generation",
    description:
      "Biến mô tả văn bản hoặc hình ảnh tham chiếu thành video. Phát triển ý tưởng thành những cảnh quay sinh động mà không cần bắt đầu từ một trường quay.",
    descriptionEn:
      "Turn text prompts or reference images into video. Bring ideas to life as dynamic scenes without starting on a physical set.",
    tags: ["Text-to-video", "Image-to-video", "Multi-image-to-video"],
    tagsEn: ["Text-to-video", "Image-to-video", "Multi-image-to-video"],
    footage: "/footages/footage-01.mp4",
  },
  {
    number: "02",
    title: "Sáng tạo và chỉnh sửa hình ảnh",
    titleEn: "Image creation and editing",
    description:
      "Tạo hình ảnh từ mô tả, phát triển biến thể từ hình ảnh đầu vào và hoàn thiện tài sản sáng tạo trong cùng quy trình.",
    descriptionEn:
      "Generate images from prompts, create variations from source images, and refine creative assets in one workflow.",
    tags: ["Text-to-image", "Image-to-image", "Biến thể sáng tạo"],
    tagsEn: ["Text-to-image", "Image-to-image", "Creative variations"],
    footage: "/img-gen/product/img4.png",
  },
  {
    number: "03",
    title: "Mở rộng quy trình video",
    titleEn: "Extend your video workflow",
    description:
      "Kết hợp các khả năng như mở rộng video, chỉnh sửa nhiều yếu tố và tạo nội dung nhân vật để xây dựng trải nghiệm sáng tạo phong phú hơn.",
    descriptionEn:
      "Combine capabilities such as video extension, multi-element editing, and character creation to build richer creative experiences.",
    tags: ["Mở rộng video", "Chỉnh sửa nhiều yếu tố", "Avatar"],
    tagsEn: ["Video extension", "Multi-element editing", "Avatar"],
    footage: "/footages/worker-finds-something_cut.mp4",
  },
  {
    number: "04",
    title: "Âm thanh và đồng bộ khẩu hình",
    titleEn: "Audio and lip sync",
    description:
      "Bổ sung trải nghiệm âm thanh và đồng bộ lời thoại với nhân vật để nội dung hoàn chỉnh, tự nhiên và sẵn sàng cho nhiều định dạng.",
    descriptionEn:
      "Add audio and synchronize dialogue with characters for polished, natural content ready for a range of formats.",
    tags: ["Lip sync", "Text-to-audio", "Video-to-audio"],
    tagsEn: ["Lip sync", "Text-to-audio", "Video-to-audio"],
    footage: "/footages/footage-02-co-gai-dan-toc.mp4",
  },
] as const;

const benefits = [
  {
    title: "Tích hợp vào sản phẩm của bạn",
    titleEn: "Integrate into your product",
    description:
      "Đưa khả năng tạo nội dung AI vào ứng dụng, nền tảng hoặc quy trình nội bộ thay vì phải chuyển đổi giữa nhiều công cụ.",
    descriptionEn:
      "Bring AI content generation into your app, platform, or internal workflow instead of switching between multiple tools.",
  },
  {
    title: "Linh hoạt theo nhu cầu sáng tạo",
    titleEn: "Flexible creative capabilities",
    description:
      "Kết hợp các mô hình và khả năng tạo video, hình ảnh, âm thanh để phù hợp với từng trải nghiệm và mục tiêu sản phẩm.",
    descriptionEn:
      "Combine video, image, and audio models to fit your product goals and the experience you want to create.",
  },
  {
    title: "Sẵn sàng cho quy trình đội nhóm",
    titleEn: "Built for team workflows",
    description:
      "Tự động hóa những bước lặp lại, kết nối với hệ thống hiện có và mở rộng quy trình khi nhu cầu sử dụng tăng lên.",
    descriptionEn:
      "Automate repetitive steps, connect to existing systems, and scale workflows as your needs grow.",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Trao đổi nhu cầu",
    titleEn: "Discuss your needs",
    description:
      "Chia sẻ sản phẩm, quy mô sử dụng và loại nội dung bạn muốn tạo để đội ngũ tư vấn hướng triển khai phù hợp.",
    descriptionEn:
      "Tell us about your product, expected usage, and the content you want to create so our team can recommend an approach.",
  },
  {
    number: "02",
    title: "Tham khảo tài liệu chính thức",
    titleEn: "Review the official documentation",
    description:
      "Xem hướng dẫn xác thực, danh sách mô hình, tham số và quy trình gửi tác vụ trong tài liệu Kling AI Developer.",
    descriptionEn:
      "Review authentication, available models, parameters, and task submission workflows in the Kling AI Developer documentation.",
  },
  {
    number: "03",
    title: "Tích hợp và triển khai",
    titleEn: "Integrate and launch",
    description:
      "Kết nối API vào ứng dụng của bạn, thử nghiệm đầu ra và hoàn thiện quy trình trước khi đưa vào sử dụng.",
    descriptionEn:
      "Connect the API to your application, test outputs, and refine your workflow before launch.",
  },
] as const;

const faqs = [
  {
    question: "Kling API có thể dùng để xây dựng những sản phẩm nào?",
    questionEn: "What kinds of products can I build with Kling API?",
    answer:
      "API có thể được tích hợp vào các ứng dụng sáng tạo, công cụ marketing, nền tảng thương mại điện tử và quy trình sản xuất nội dung. Khả năng cụ thể phụ thuộc vào mô hình và API được hỗ trợ tại thời điểm triển khai.",
    answerEn:
      "The API can be integrated into creative apps, marketing tools, e-commerce platforms, and content production workflows. Specific capabilities depend on the models and APIs available at implementation time.",
  },
  {
    question: "Tôi có thể xem tài liệu kỹ thuật và danh sách mô hình ở đâu?",
    questionEn: "Where can I find technical documentation and available models?",
    answer:
      "Tài liệu cập nhật về xác thực, mô hình, tham số và cách sử dụng được đăng trên Kling AI Developer Platform. Hãy truy cập tài liệu chính thức để xem thông tin mới nhất trước khi tích hợp.",
    answerEn:
      "Current documentation for authentication, models, parameters, and usage is available on the Kling AI Developer Platform. Check the official documentation for the latest information before integrating.",
  },
  {
    question: "Chi phí sử dụng API được tính như thế nào?",
    questionEn: "How is API usage priced?",
    answer:
      "Chi phí tùy thuộc vào mô hình và cách sử dụng. Bạn có thể tham khảo trang Bảng giá để xem thông tin hiện có hoặc liên hệ Mighty Stone để được tư vấn theo nhu cầu doanh nghiệp.",
    answerEn:
      "Pricing depends on the model and usage. Visit our Pricing page for current information or contact Mighty Stone for advice tailored to your business.",
  },
  {
    question: "Mighty Stone có hỗ trợ khách hàng tại Việt Nam không?",
    questionEn: "Does Mighty Stone support customers in Vietnam?",
    answer:
      "Mighty Stone là đối tác phân phối chính thức KlingAI tại Việt Nam, hỗ trợ tư vấn giải pháp, gói dịch vụ và quy trình mua API cho doanh nghiệp.",
    answerEn:
      "Mighty Stone is an official KlingAI distributor in Vietnam, providing businesses with guidance on solutions, service plans, and API purchasing.",
  },
] as const;

export default function ApiPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <>
      <Section className="pt-8 sm:pt-12">
        <div className="overflow-hidden rounded-[var(--radius-box)] border border-border bg-surface">
          <div className="relative min-h-[34rem] overflow-hidden sm:min-h-[38rem]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/hero-placeholder.svg"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/footages/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" aria-hidden="true" />
            <div className="relative z-10 flex min-h-[34rem] items-center px-6 py-14 sm:min-h-[38rem] sm:px-10 lg:px-16">
              <div className="max-w-3xl text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  {isEn ? "Kling AI Developer Platform" : "Nền tảng nhà phát triển Kling AI"}
                </p>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  {isEn ? (
                    <>Kling AI creativity,<br className="hidden sm:block" /> built into your product</>
                  ) : (
                    <>Sức sáng tạo Kling AI,<br className="hidden sm:block" /> tích hợp vào sản phẩm của bạn</>
                  )}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                  {isEn
                    ? "Bring AI video, image, and creative experiences directly into your app and workflows with Kling API."
                    : "Tạo video, hình ảnh và trải nghiệm sáng tạo bằng AI ngay trong ứng dụng và quy trình của bạn với Kling API."}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact" className="bg-white text-black hover:bg-white/90">
                    {isEn ? "Talk to an expert" : "Trao đổi với chuyên gia"}
                  </Button>
                  <a
                    href="https://kling.ai/document-api/guides/get-started/overview"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/40 px-5 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    {isEn ? "View Kling API docs" : "Xem tài liệu Kling API"}
                    <span className="ml-2" aria-hidden="true">↗</span>
                  </a>
                </div>
                <p className="mt-6 text-sm text-white/65">
                  {isEn ? "Official KlingAI distributor in Vietnam: Mighty Stone" : "Đối tác phân phối chính thức KlingAI tại Việt Nam: Mighty Stone"}
                </p>
              </div>
            </div>
          </div>
          <div className="grid divide-y divide-border bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              [isEn ? "Video" : "Video", isEn ? "Generate and extend motion content" : "Tạo và mở rộng nội dung chuyển động"],
              [isEn ? "Images" : "Hình ảnh", isEn ? "Create visuals for any idea" : "Phát triển hình ảnh cho mọi ý tưởng"],
              [isEn ? "Audio" : "Âm thanh", isEn ? "Create seamless audiovisual experiences" : "Tạo trải nghiệm nghe nhìn liền mạch"],
            ].map(([title, description]) => (
              <div key={title} className="px-6 py-5 sm:px-8">
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-sm text-foreground/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "API CAPABILITIES" : "KHẢ NĂNG API"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {isEn ? "From creative ideas to scalable workflows" : "Từ ý tưởng sáng tạo đến quy trình có thể mở rộng"}
          </h2>
          <p className="mt-4 text-base leading-7 text-foreground/70 sm:text-lg">
            {isEn
              ? "Explore the capabilities of the Kling Developer Platform and choose the tools that fit your product."
              : "Khám phá các nhóm khả năng của Kling Developer Platform và lựa chọn những công cụ phù hợp với sản phẩm của bạn."}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="overflow-hidden rounded-[var(--radius-box)] border border-border bg-surface"
            >
              <div className="relative h-56 overflow-hidden bg-surface-muted sm:h-64">
                {capability.footage.endsWith(".mp4") ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                  >
                    <source src={capability.footage} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={capability.footage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                )}
                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {capability.number}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-semibold tracking-tight">{isEn ? capability.titleEn : capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/70">{isEn ? capability.descriptionEn : capability.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${isEn ? "Capabilities:" : "Khả năng"} ${isEn ? capability.titleEn : capability.title}`}>
                  {(isEn ? capability.tagsEn : capability.tags).map((tag) => (
                    <li key={tag} className="rounded-full bg-surface-muted px-3 py-1.5 text-xs font-medium text-foreground/75">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-foreground/55">
          {isEn
            ? "Feature availability depends on the models and current Kling API documentation. Please check the official documentation for the latest information."
            : "Tính khả dụng của từng tính năng phụ thuộc vào mô hình và tài liệu Kling API hiện hành. Vui lòng kiểm tra tài liệu chính thức để biết thông tin mới nhất."}
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "WHY INTEGRATE KLING API?" : "VÌ SAO TÍCH HỢP KLING API?"}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {isEn ? "Bring creative capabilities right where you need them" : "Thêm năng lực sáng tạo vào đúng nơi bạn cần"}
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground/70">
              {isEn
                ? "Connect AI models to your existing products and workflows so your team can focus on experiences and ideas."
                : "Kết nối các mô hình AI với sản phẩm và quy trình hiện có để đội ngũ tập trung hơn vào trải nghiệm và ý tưởng."}
            </p>
            <div className="mt-7">
              <Button href="/contact">{isEn ? "Discuss API solutions" : "Tư vấn giải pháp API"}</Button>
            </div>
          </div>
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="rounded-[var(--radius-box)] border border-border bg-surface p-6 sm:p-7">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-muted text-sm font-semibold">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{isEn ? benefit.titleEn : benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/70">{isEn ? benefit.descriptionEn : benefit.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="rounded-[var(--radius-box)] border border-border bg-surface-muted/60 p-6 sm:p-9 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "GET STARTED" : "BẮT ĐẦU TÍCH HỢP"}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {isEn ? "A clear path from day one" : "Rõ ràng từ bước đầu tiên"}
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground/70">
              {isEn
                ? "Detailed authentication and API usage guides are maintained on the official platform. The Mighty Stone team can help you choose an implementation approach and service plan."
                : "Tài liệu chi tiết về xác thực và cách gọi API được duy trì trên nền tảng chính thức. Đội ngũ Mighty Stone có thể hỗ trợ bạn xác định hướng triển khai và gói dịch vụ phù hợp."}
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                <p className="text-sm font-semibold text-foreground/50">{step.number}</p>
                <h3 className="mt-4 text-lg font-semibold">{isEn ? step.titleEn : step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{isEn ? step.descriptionEn : step.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://kling.ai/document-api/guides/get-started/overview"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              {isEn ? "Open developer documentation" : "Mở tài liệu dành cho nhà phát triển"}
              <span className="ml-2" aria-hidden="true">↗</span>
            </a>
            <Button href="/pricing" variant="secondary">{isEn ? "View pricing" : "Xem bảng giá"}</Button>
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "FREQUENTLY ASKED QUESTIONS" : "CÂU HỎI THƯỜNG GẶP"}</p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight sm:text-4xl">{isEn ? "About Kling API" : "Thông tin về Kling API"}</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold marker:hidden">
                  {isEn ? faq.questionEn : faq.question}
                  <span className="shrink-0 text-xl text-foreground/50 transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-6 text-foreground/70">{isEn ? faq.answerEn : faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="overflow-hidden rounded-[var(--radius-box)] bg-foreground px-6 py-10 text-center text-background sm:px-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-background/60">{isEn ? "KLING API IN VIETNAM" : "KLING API TẠI VIỆT NAM"}</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {isEn ? "Bring your AI ideas to life" : "Cùng đưa ý tưởng AI của bạn vào thực tế"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-background/75 sm:text-base">
            {isEn
              ? "Contact Mighty Stone to discuss Kling API integration, service plans, and support for businesses in Vietnam."
              : "Liên hệ Mighty Stone để trao đổi về nhu cầu tích hợp Kling API, chính sách dịch vụ và hỗ trợ dành cho doanh nghiệp tại Việt Nam."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-background px-5 text-sm font-semibold text-foreground hover:opacity-90"
            >
              {isEn ? "Talk to our team" : "Liên hệ tư vấn"}
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center justify-center rounded-full border border-background/35 px-5 text-sm font-semibold text-background hover:bg-background/10"
            >
              {isEn ? "View pricing" : "Tham khảo bảng giá"}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
