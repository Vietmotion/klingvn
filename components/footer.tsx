"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-3 py-8 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kling AI Vietnam. {language === "vi" ? "Bảo lưu mọi quyền." : "All rights reserved."}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/about" className="hover:text-foreground">
              {language === "vi" ? "Giới thiệu" : "About"}
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              {language === "vi" ? "Liên hệ" : "Contact"}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
