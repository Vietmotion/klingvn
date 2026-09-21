"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="text-base font-semibold tracking-tight">
            Kling AI Vietnam
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <Navigation />
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground hover:bg-surface-muted"
              aria-label="Switch language"
            >
              VN / EN
            </button>
            <ThemeToggle />
            <Button href="/contact" className="h-10 px-4 text-xs sm:text-sm">
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
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
                className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground"
                aria-label="Switch language"
              >
                VN / EN
              </button>
              <ThemeToggle />
              <Button href="/contact" className="h-10 px-4 text-xs" variant="secondary">
                Get Started
              </Button>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
