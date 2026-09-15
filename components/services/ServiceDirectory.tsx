"use client";

import { useState } from "react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CapabilityCarousel } from "@/components/services/CapabilityCarousel";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { Service } from "@/lib/types";

const categories: Array<Service["category"] | "All"> = [
  "All",
  "Ship Repair",
  "Engineering",
  "Fabrication",
  "Preservation",
  "Inspection",
];

export function ServiceDirectory() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[220px_1fr]">
      <div
        role="tablist"
        aria-label="Service categories"
        className="no-scrollbar min-w-0 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "focus-ring shrink-0 snap-start rounded-sm border px-4 py-2.5 text-left text-sm font-semibold whitespace-nowrap transition-colors lg:whitespace-normal",
              active === cat
                ? "border-blue bg-blue text-white"
                : "border-navy/10 bg-white text-navy hover:border-blue/40"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="min-w-0">
        <CapabilityCarousel services={filtered} />
        <div className="hidden gap-6 sm:grid sm:grid-cols-2">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
