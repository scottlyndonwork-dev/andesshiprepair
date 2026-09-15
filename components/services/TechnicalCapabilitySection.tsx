"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { cn } from "@/lib/utils";
import { technicalCapabilityGroups } from "@/data/services";

const groupSlug: Record<string, string> = {
  hull: "hull-structural-repair",
  propulsion: "shafting-bearing-propulsion",
  systems: "piping-valve-works",
};

export function TechnicalCapabilitySection() {
  const [activeId, setActiveId] = useState(technicalCapabilityGroups[0].id);
  const [sheetOpen, setSheetOpen] = useState(false);
  const activeGroup = technicalCapabilityGroups.find((g) => g.id === activeId)!;

  function handleSelect(id: string) {
    setActiveId(id);
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setSheetOpen(true);
    }
  }

  return (
    <section className="technical-grid-dark relative overflow-hidden bg-navy-deep py-14 sm:py-28">
      <div className="technical-grid absolute inset-0" />
      <Container className="relative">
        <SectionHeader
          eyebrow="Technical Scope"
          title={
            <>
              Built for the Work
              <br />
              Behind the Vessel.
            </>
          }
          dark
        />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-3">
          {technicalCapabilityGroups.map((group) => {
            const isActive = group.id === activeId;
            return (
              <button
                key={group.id}
                onClick={() => handleSelect(group.id)}
                className={cn(
                  "focus-ring touch-manipulation rounded-md border p-5 text-left transition-colors sm:p-6",
                  isActive
                    ? "border-cyan bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.02] active:border-white/25 sm:hover:border-white/25"
                )}
              >
                <p className="mb-2 text-sm font-semibold tracking-[0.15em] text-cyan uppercase sm:mb-4">
                  {group.label}
                </p>

                {/* Mobile: compact preview only — tap opens a bottom sheet */}
                <p className="text-sm text-white/40 sm:hidden">
                  {group.items.slice(0, 3).join(" · ")} …
                </p>

                {/* Tablet/desktop: expand in place */}
                <div className="hidden sm:block">
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.ul
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 overflow-hidden"
                      >
                        {group.items.map((item) => (
                          <li key={item} className="text-sm text-white/75">
                            {item}
                          </li>
                        ))}
                      </motion.ul>
                    ) : (
                      <p key="preview" className="text-sm text-white/40">
                        {group.items.slice(0, 3).join(" · ")} …
                      </p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}
        </div>
      </Container>

      <BottomSheet open={sheetOpen} onOpenChange={setSheetOpen} title={activeGroup.label}>
        <ul className="space-y-3">
          {activeGroup.items.map((item) => (
            <li key={item} className="text-sm text-white/80">
              {item}
            </li>
          ))}
        </ul>
        <a
          href={`/services/${groupSlug[activeGroup.id]}`}
          className="focus-ring mt-5 flex items-center justify-center gap-1.5 rounded-sm bg-gold py-3.5 text-sm font-semibold tracking-wide text-navy-deep uppercase"
        >
          Explore Capability
          <ArrowRight className="h-4 w-4" />
        </a>
      </BottomSheet>
    </section>
  );
}
