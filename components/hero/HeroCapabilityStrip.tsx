"use client";

import { Ship, Cog, Flame, Wrench, Waves, Zap, ShieldCheck, Settings, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { capabilityFinderCategories } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  "Ship Repair": Ship,
  "Marine Engineering": Cog,
  "Hull & Steel Fabrication": Flame,
  Machining: Wrench,
  Piping: Waves,
  Mechanical: Settings,
  Electrical: Zap,
  "Marine Maintenance": ShieldCheck,
};

const captionSource: Record<string, string> = {
  "Ship Repair": "hull-structural",
  "Marine Engineering": "propulsion",
  "Hull & Steel Fabrication": "welding-fabrication",
  Machining: "machining",
  Piping: "piping",
  Mechanical: "machinery",
  Electrical: "electrical",
  "Marine Maintenance": "preservation",
};

function caption(item: string) {
  const id = captionSource[item];
  return capabilityFinderCategories.find((c) => c.id === id)?.items.slice(0, 3).join(" · ") ?? "";
}

export function HeroCapabilityStrip() {
  return (
    <div className="relative z-10 border-b border-navy/10 bg-navy py-5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-between">
          {company.capabilityStrip.map((item) => {
            const Icon = icons[item] ?? Ship;
            return (
              <div key={item} className="group relative">
                <span className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.15em] text-white/80 uppercase transition-colors group-hover:text-cyan sm:text-sm">
                  <Icon className="h-4 w-4 shrink-0 text-cyan" strokeWidth={1.5} />
                  {item}
                </span>
                <div
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 mb-3 w-56 -translate-x-1/2 rounded-sm border border-white/10 bg-navy-deep p-3 text-center text-xs leading-relaxed text-white/70 opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
                >
                  {caption(item)}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
