"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { vesselCategories } from "@/data/vessels";

export function VesselSelector() {
  const [activeId, setActiveId] = useState(vesselCategories[0].id);
  const active = vesselCategories.find((v) => v.id === activeId)!;

  return (
    <section className="bg-bg-light py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Vessel Experience"
          title="Built Around the Vessel."
          description="Select a vessel category to see the relevant service scope."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {vesselCategories.map((vessel) => (
            <button
              key={vessel.id}
              onClick={() => setActiveId(vessel.id)}
              className={cn(
                "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                activeId === vessel.id
                  ? "border-blue bg-blue text-white"
                  : "border-navy/15 bg-white text-navy hover:border-blue/40"
              )}
            >
              {vessel.name}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-navy/10 bg-white p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold tracking-tight text-text-dark">{active.name}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel">{active.description}</p>
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {active.services.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-steel">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
