"use client";

import { Section } from "@/components/ui/section";
import { useLanguage } from "@/components/language-provider";

const latestNewsUrl = "https://kling.ai/release-note/release-notes/Kling_4?type=dialog";

export default function NewsPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "NEWS" : "TIN TỨC"}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {isEn ? "Kling AI News" : "Tin tức Kling AI"}
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground/75 sm:text-lg">
          {isEn
            ? "The latest updates, new features, and stories from Kling AI."
            : "Cập nhật những thông tin, tính năng mới và bài viết đáng chú ý về Kling AI."}
        </p>
      </div>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "LATEST UPDATE" : "CẬP NHẬT MỚI NHẤT"}</p>
        <article className="mt-4 overflow-hidden rounded-[var(--radius-box)] border border-border bg-surface">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-64 flex-col justify-between bg-surface-muted p-6 sm:p-8 lg:min-h-80">
              <span className="w-fit rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-foreground/70">
                {isEn ? "Release Notes" : "Ghi chú phát hành"}
              </span>
              <p className="text-5xl font-semibold tracking-tight text-foreground/10 sm:text-7xl" aria-hidden="true">
                K 4.0
              </p>
            </div>
            <div className="flex flex-col items-start justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                {isEn ? "Kling AI · Product update" : "Kling AI · Cập nhật sản phẩm"}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                <a
                  href={latestNewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-70"
                >
                  Kling 4.0
                </a>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-foreground/70 sm:text-base">
                {isEn
                  ? "Read about the Kling 4.0 update and release notes on the official Kling AI website."
                  : "Xem thông tin cập nhật và ghi chú phát hành Kling 4.0 trên trang chính thức của Kling AI."}
              </p>
              <a
                href={latestNewsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                {isEn ? "Read the release notes" : "Đọc bài viết"}
                <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}
