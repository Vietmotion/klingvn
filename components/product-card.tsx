import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ProductCard({ title, description, href }: ProductCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-surface p-6 sm:p-7">
      <div className="mb-5 aspect-[16/10] w-full rounded-2xl border border-dashed border-border bg-surface-muted" aria-hidden="true" />
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/75">{description}</p>
      <Link href={href} className="mt-5 inline-flex text-sm font-semibold text-foreground hover:opacity-80">
        Explore
      </Link>
    </article>
  );
}
