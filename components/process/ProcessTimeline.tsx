"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { processSteps } from "@/data/process";

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.25"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      processSteps.length - 1,
      Math.max(0, Math.floor(v * processSteps.length))
    );
    setActive(idx);
  });

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow="Project Process" title="From Inspection to Handover." />

        <div ref={containerRef} className="relative mt-14">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-navy/10 sm:left-6" />
          <motion.div
            className="absolute left-4 top-0 w-px origin-top bg-blue sm:left-6"
            style={{ scaleY: scrollYProgress, height: "100%" }}
          />

          <ul className="space-y-8">
            {processSteps.map((step, i) => (
              <li key={step.number} className="relative flex gap-5 pl-12 sm:gap-8 sm:pl-16">
                <span
                  className={cn(
                    "absolute left-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors sm:h-12 sm:w-12 sm:text-sm",
                    i <= active
                      ? "border-blue bg-blue text-white"
                      : "border-navy/15 bg-white text-steel"
                  )}
                >
                  {step.number}
                </span>
                <div
                  className={cn(
                    "pb-2 transition-opacity",
                    i <= active ? "opacity-100" : "opacity-50"
                  )}
                >
                  <h3 className="text-base font-bold tracking-tight text-text-dark sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
