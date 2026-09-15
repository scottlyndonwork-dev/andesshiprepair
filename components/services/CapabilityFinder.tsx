"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { capabilityFinderCategories } from "@/data/services";

export function CapabilityFinder() {
  const [activeId, setActiveId] = useState(capabilityFinderCategories[0].id);
  const active = capabilityFinderCategories.find((c) => c.id === activeId)!;

  return (
    <section id="capabilities" className="scroll-mt-24 bg-bg-light py-14 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Capability Finder"
          title="What Does Your Vessel Need?"
          description="Select a category to see the relevant technical capabilities."
        />

        <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-[280px_1fr]">
          <div
            role="tablist"
            aria-label="Capability categories"
            className="no-scrollbar min-w-0 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {capabilityFinderCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeId === cat.id}
                onClick={() => setActiveId(cat.id)}
                className={cn(
                  "focus-ring shrink-0 snap-start rounded-sm border px-4 py-3 text-left text-sm font-semibold whitespace-nowrap transition-colors lg:whitespace-normal",
                  activeId === cat.id
                    ? "border-blue bg-blue text-white"
                    : "border-navy/10 bg-white text-navy hover:border-blue/40"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="min-h-[320px] rounded-md border border-navy/10 bg-white p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                role="tabpanel"
              >
                <h3 className="mb-5 text-lg font-bold tracking-tight text-text-dark uppercase">
                  {active.label}
                </h3>
                <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {active.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-steel">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
