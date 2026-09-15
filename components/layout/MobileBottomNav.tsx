"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Cog, Ship, Image as ImageIcon, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", icon: Home, match: (p: string) => p === "/" },
  { label: "Services", href: "/services", icon: Cog, match: (p: string) => p.startsWith("/services") },
  { label: "Vessels", href: "/vessels", icon: Ship, match: (p: string) => p.startsWith("/vessels") },
  { label: "Projects", href: "/projects", icon: ImageIcon, match: (p: string) => p.startsWith("/projects") },
  { label: "Contact", href: "/contact", icon: Mail, match: (p: string) => p.startsWith("/contact") },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-navy/10 bg-white/95 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] backdrop-blur-sm lg:hidden"
    >
      {navItems.map((item) => {
        const isActive = item.match(pathname);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className="focus-ring flex min-h-11 touch-manipulation flex-col items-center justify-center gap-1 py-2.5 transition-colors active:bg-navy/5"
          >
            <Icon className={cn("h-5 w-5", isActive ? "text-blue" : "text-steel")} strokeWidth={isActive ? 2 : 1.75} />
            <span className={cn("text-[10px] font-semibold uppercase", isActive ? "text-blue" : "text-steel")}>
              {item.label}
            </span>
            <span className={cn("h-0.5 w-4 rounded-full transition-colors", isActive ? "bg-blue" : "bg-transparent")} />
          </Link>
        );
      })}
    </nav>
  );
}
