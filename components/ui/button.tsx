import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

const variantMap: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary:
    "border border-border bg-surface text-foreground hover:border-foreground/35 hover:bg-surface-muted",
  ghost: "text-foreground/80 hover:text-foreground",
};

export function Button({ href, children, className, variant = "primary" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold",
        variantMap[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
