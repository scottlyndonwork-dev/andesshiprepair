"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { technicalCapabilityGroups } from "@/data/services";

export function TechnicalCapabilitySection() {
  const [activeId, setActiveId] = useState(technicalCapabilityGroups[0].id);

  return (
    <section className="technical-grid-dark relative overflow-hidden bg-navy-deep py-20 sm:py-28">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {technicalCapabilityGroups.map((group) => {
            const isActive = group.id === activeId;
            return (
              <button
                key={group.id}
                onClick={() => setActiveId(group.id)}
                className={cn(
                  "focus-ring rounded-md border p-6 text-left transition-colors",
                  isActive
                    ? "border-cyan bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                )}
              >
                <p className="mb-4 text-sm font-semibold tracking-[0.15em] text-cyan uppercase">
                  {group.label}
                </p>
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.ul
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
                  )}
                </AnimatePresence>
                {!isActive && (
                  <p className="text-sm text-white/40">{group.items.slice(0, 3).join(" · ")} …</p>
                )}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
