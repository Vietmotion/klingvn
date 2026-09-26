"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "kling-vn-theme";

function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = readTheme();
    setTheme(initialTheme);
    setMounted(true);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const isDark = theme === "dark";

  const onToggle = () => {
    const next: Theme = isDark ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.dispatchEvent(new Event("kling-theme-toggle"));
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-3 text-sm font-medium text-foreground hover:bg-surface-muted"
        aria-label="Toggle color theme"
        aria-pressed={false}
      >
        Light
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-3 text-sm font-medium text-foreground hover:bg-surface-muted"
      aria-label="Toggle color theme"
      aria-pressed={isDark}
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
