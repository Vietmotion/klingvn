"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <Section className="pt-20 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/55">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {isEn ? "Page not found" : "Không tìm thấy trang"}
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground/70 sm:text-lg">
          {isEn
            ? "The page may have moved or the address may be incorrect."
            : "Có thể trang đã được chuyển hoặc địa chỉ bạn truy cập không chính xác."}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/">{isEn ? "Back to home" : "Về trang chủ"}</Button>
          <Button href="/contact" variant="secondary">
            {isEn ? "Contact us" : "Liên hệ"}
          </Button>
        </div>
      </div>
    </Section>
  );
}
