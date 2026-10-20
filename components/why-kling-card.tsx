"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

type WhyKlingCardProps = {
  title: string;
  shortText: string;
  longText: string;
  mediaSources?: readonly string[];
};

export function WhyKlingCard({ title, shortText, longText, mediaSources }: WhyKlingCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);
  const { language } = useLanguage();
  const mediaSrc = mediaSources?.[mediaIndex];

  return (
    <article
      className={`flex flex-col rounded-[var(--radius-box)] border border-border bg-surface p-5 ${expanded ? "md:h-[43rem]" : ""}`}
    >
      <div
        className={`mb-4 aspect-video w-full overflow-hidden rounded-md border bg-surface-muted ${mediaSrc ? "border-border" : "border-dashed border-border"}`}
        aria-hidden="true"
      >
        {mediaSrc && mediaSources?.length ? (
          <video
            key={mediaSrc}
            autoPlay
            loop={mediaSources.length === 1}
            muted
            playsInline
            preload="metadata"
            onEnded={() => setMediaIndex((currentIndex) => (currentIndex + 1) % mediaSources.length)}
            className="h-full w-full object-cover"
          >
            <source src={mediaSrc} type="video/mp4" />
          </video>
        ) : null}
      </div>
      <h3 className="min-h-[6.5rem] text-lg font-semibold">{title}</h3>
      <p className="mt-2 min-h-[5rem] text-sm text-foreground/75">{shortText}</p>

      {expanded ? (
        <div className="mt-4 md:min-h-0 md:flex-1 md:overflow-hidden">
          <p className="text-sm leading-relaxed text-foreground/75 md:h-full md:overflow-y-auto md:pr-2">{longText}</p>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="mt-6 inline-flex shrink-0 self-start cursor-pointer items-center rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-semibold text-foreground/80 transition-colors hover:border-foreground/35 hover:bg-surface-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        aria-expanded={expanded}
      >
        {expanded ? (language === "vi" ? "Thu gọn" : "Collapse") : language === "vi" ? "Đọc thêm" : "Read more"}
      </button>
    </article>
  );
}
