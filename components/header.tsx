"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage } from "@/components/language-provider";
import klingLogo from "../img/Kling-Logo.svg";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const switchLanguageLabel = language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt";

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center" aria-label="Kling AI Vietnam">
            <Image
              src={klingLogo}
              alt="Kling AI Vietnam"
              priority
              className="brand-logo h-8 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <Navigation />
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground hover:bg-surface-muted"
              aria-label={switchLanguageLabel}
              title={switchLanguageLabel}
            >
              VN / EN
            </button>
            <ThemeToggle />
            <Button href="/contact" className="h-10 px-4 text-xs sm:text-sm">
              {language === "vi" ? "Bắt đầu" : "Get Started"}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={language === "vi" ? "Mở/đóng điều hướng" : "Toggle navigation"}
          >
            <span className="text-xl leading-none">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-nav" className="space-y-4 border-t border-border py-4 md:hidden">
            <Navigation className="flex-col items-start" itemClassName="w-full" onItemClick={() => setIsOpen(false)} />
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleLanguage}
                className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground"
                aria-label={switchLanguageLabel}
                title={switchLanguageLabel}
              >
                VN / EN
              </button>
              <ThemeToggle />
              <Button href="/contact" className="h-10 px-4 text-xs" variant="secondary">
                {language === "vi" ? "Bắt đầu" : "Get Started"}
              </Button>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
