"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { megaMenu } from "@/data/services";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { LOGO_SRC } from "@/lib/assets";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vessels", href: "/vessels" },
  { label: "Projects", href: "/projects" },
  { label: "Quality & HSE", href: "/quality-hse" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  function renderLink(link: { label: string; href: string }) {
    const isActive = pathname === link.href;
    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "focus-ring relative rounded-sm px-4 py-2 text-sm font-medium transition-colors",
          isActive ? "text-cyan" : "text-white/90 hover:text-cyan"
        )}
      >
        {link.label}
        {isActive && <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-cyan" />}
      </Link>
    );
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        transparent ? "bg-transparent" : "bg-navy-deep/95 backdrop-blur-sm shadow-lg shadow-black/10"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" style={{ height: "4.5rem" }}>
        <Link href="/" className="focus-ring flex items-center gap-2.5 text-white">
          <Image
            src={LOGO_SRC}
            alt="Andes Ship Repair Services"
            width={42}
            height={42}
            priority
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight">ANDES</span>
            <span className="text-[9px] font-medium tracking-[0.25em] text-cyan uppercase">
              Ship Repair Services
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {renderLink(navLinks[0])}

          <div
            className="relative"
            onMouseEnter={() => setCapabilitiesOpen(true)}
            onMouseLeave={() => setCapabilitiesOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setCapabilitiesOpen(false);
            }}
          >
            <button
              className="focus-ring flex items-center gap-1 rounded-sm px-4 py-2 text-sm font-medium text-white/90 hover:text-cyan"
              aria-expanded={capabilitiesOpen}
              aria-haspopup="true"
              onClick={() => setCapabilitiesOpen((v) => !v)}
              onFocus={() => setCapabilitiesOpen(true)}
            >
              Capabilities
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", capabilitiesOpen && "rotate-180")} />
            </button>

            {capabilitiesOpen && (
              <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-4 gap-6 rounded-md border border-white/10 bg-navy-deep p-6 shadow-2xl">
                  {megaMenu.map((group) => (
                    <div key={group.heading}>
                      <p className="mb-3 text-[11px] font-semibold tracking-[0.15em] text-cyan">
                        {group.heading}
                      </p>
                      <ul className="space-y-2">
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={`/services/${link.slug}`}
                              className="focus-ring text-sm text-white/75 hover:text-gold"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => renderLink(link))}
        </div>

        <div className="hidden lg:block">
          <Button href="/request-a-quote" variant="primary" className="!py-3">
            Request a Quote
          </Button>
        </div>

        <button
          className="focus-ring flex h-11 w-11 touch-manipulation items-center justify-center rounded-sm text-white active:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} navLinks={navLinks} />
    </header>
  );
}
