import Link from "next/link";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "API", href: "/api" },
  { label: "Pricing", href: "/pricing" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

type NavigationProps = {
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
};

export function Navigation({ className, itemClassName, onItemClick }: NavigationProps) {
  return (
    <nav className={cn("flex items-center gap-1", className)} aria-label="Primary navigation">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "rounded-full px-3 py-2 text-sm text-foreground/75 hover:bg-surface-muted hover:text-foreground",
            itemClassName,
          )}
          onClick={onItemClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
