"use client";

import { useState } from "react";

type WhyKlingCardProps = {
  title: string;
  shortText: string;
  longText: string;
};

export function WhyKlingCard({ title, shortText, longText }: WhyKlingCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`flex flex-col rounded-lg border border-border bg-surface p-5 ${expanded ? "md:h-[43rem]" : ""}`}
    >
      <div className="mb-4 aspect-video w-full rounded-md border border-dashed border-border bg-surface-muted" aria-hidden="true" />
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
        {expanded ? "Collapse" : "Read more"}
      </button>
    </article>
  );
}
