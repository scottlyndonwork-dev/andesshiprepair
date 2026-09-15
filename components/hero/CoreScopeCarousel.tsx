"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import { PlaceholderVisual, PlaceholderIcon } from "@/components/ui/PlaceholderVisual";
import { cn } from "@/lib/utils";

interface ScopeItem {
  id: string;
  label: string;
  slug: string;
  icon: LucideIcon;
  placeholderIcon: PlaceholderIcon;
}

export function CoreScopeCarousel({ items }: { items: ScopeItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    setActiveIndex(clamped);
    const card = trackRef.current?.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div className="min-w-0 lg:hidden">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase">
          <span className="h-px w-4 bg-cyan" />
          Core Technical Scope
        </p>
        <div className="flex items-center gap-2 text-xs font-semibold text-white/50">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous"
            className="focus-ring touch-manipulation rounded-full p-1 active:bg-white/10 disabled:opacity-30"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span>
            {activeIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next"
            className="focus-ring touch-manipulation rounded-full p-1 active:bg-white/10 disabled:opacity-30"
            disabled={activeIndex === items.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label="Core technical scope, swipe to explore"
        className="no-scrollbar -mx-5 mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8"
      >
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <Link
              key={item.id}
              href={`/services/${item.slug}`}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative block shrink-0 snap-start overflow-hidden rounded-md ring-2 transition-colors",
                isActive ? "ring-cyan" : "ring-transparent"
              )}
              style={{ width: "27%", minWidth: "108px" }}
            >
              <PlaceholderVisual icon={item.placeholderIcon} tone="navy" className="aspect-square" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-navy-deep/95 to-transparent px-2.5 pb-2.5 pt-8">
                <item.icon className="h-4 w-4 text-white" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold leading-tight text-white uppercase">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
