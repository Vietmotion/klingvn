import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

export const navItems = [
  { label: "Trang chủ", en: "Home", href: "/" },
  { label: "Sản phẩm", en: "Products", href: "/products" },
  { label: "API", href: "/api" },
  { label: "Bảng giá", en: "Pricing", href: "/pricing" },
  { label: "Tin tức", en: "News", href: "/news" },
  { label: "Giới thiệu", en: "About", href: "/about" },
  { label: "Liên hệ", en: "Contact", href: "/contact" },
] as const;

type NavigationProps = {
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
};

export function Navigation({ className, itemClassName, onItemClick }: NavigationProps) {
  const { language } = useLanguage();

  return (
    <nav className={cn("flex items-center gap-1", className)} aria-label={language === "vi" ? "Điều hướng chính" : "Primary navigation"}>
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
          {"en" in item && language === "en" ? item.en : item.label}
        </Link>
      ))}
    </nav>
  );
}
