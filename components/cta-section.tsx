"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";

export function CTASection() {
  const { language } = useLanguage();

  return (
    <Section>
      <div className="rounded-[var(--radius-box)] border border-border bg-surface p-8 text-center sm:p-10 lg:p-14">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {language === "vi" ? "Sẵn sàng sáng tạo cùng Kling?" : "Ready to create with Kling?"}
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact">{language === "vi" ? "Bắt đầu" : "Get Started"}</Button>
          <Button href="/contact" variant="secondary">
            {language === "vi" ? "Liên hệ" : "Contact Us"}
          </Button>
        </div>
      </div>
    </Section>
  );
}
