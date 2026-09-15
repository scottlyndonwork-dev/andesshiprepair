"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Anchor, Cog, Gauge, Waves, Flame, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { capabilityFinderCategories } from "@/data/services";
import { cn } from "@/lib/utils";

function findItems(id: string, count: number) {
  return capabilityFinderCategories.find((c) => c.id === id)?.items.slice(0, count) ?? [];
}

const sideItems = [
  { id: "hull-structural", label: "Hull & Structural", slug: "hull-structural-repair", icon: Anchor, detail: findItems("hull-structural", 5) },
  { id: "machinery", label: "Machinery", slug: "machinery-repair-maintenance", icon: Cog, detail: findItems("machinery", 5) },
  { id: "propulsion", label: "Propulsion", slug: "shafting-bearing-propulsion", icon: Gauge, detail: findItems("propulsion", 5) },
  { id: "piping", label: "Piping", slug: "piping-valve-works", icon: Waves, detail: findItems("piping", 5) },
  { id: "welding-fabrication", label: "Fabrication", slug: "welding-fabrication", icon: Flame, detail: findItems("welding-fabrication", 5) },
  { id: "electrical", label: "Electrical", slug: "marine-electrical", icon: Zap, detail: findItems("electrical", 5) },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(sideItems[0].id);
  const active = sideItems.find((item) => item.id === activeId) ?? sideItems[0];

  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <Image
          src="/andesshiphero.png"
          alt="Vessel undergoing repair in drydock"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[35%_center]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/45 to-transparent sm:via-navy-deep/25" />
      <div className="technical-grid absolute inset-0 opacity-5 mix-blend-overlay" />

      <Container className="relative z-10 pb-20 pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-cyan uppercase">
              {company.name}
              <span className="mx-2 text-white/30">/</span>
              {company.location}, {company.country}
            </p>
            <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-white/60 uppercase">
              Trusted. Skilled. On Time.
            </p>
            <h1 className="text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">KEEPING VESSELS</span>
              <br />
              <span className="text-cyan">SAFE. RELIABLE.</span>
              <br />
              <span className="text-cyan">OPERATIONAL.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Reliable ship repair and marine engineering solutions for vessel
              owners, operators, managers, charterers, and marine contractors.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/request-a-quote"
                className="focus-ring group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold tracking-wide text-navy-deep uppercase transition-colors hover:bg-gold-dark"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#capabilities"
                className="focus-ring group inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-7 py-4 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:border-white hover:bg-white/10"
              >
                Explore Capabilities
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
            <p className="mt-5 text-xs font-medium tracking-[0.15em] text-white/45 uppercase">
              Marine Repair &middot; Engineering &middot; Fabrication &middot; Maintenance
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="ml-auto w-full max-w-75 rounded-md border border-white/15 bg-navy-deep/50 p-5 backdrop-blur-md">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-white/45 uppercase">
                Core Technical Scope
              </p>
              <ul className="space-y-0.5">
                {sideItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.id === activeId;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveId(item.id)}
                        onFocus={() => setActiveId(item.id)}
                        onClick={() => setActiveId(item.id)}
                        className={cn(
                          "focus-ring flex w-full items-center gap-2.5 rounded-sm px-2 py-1.5 text-left text-sm transition-colors",
                          isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/6 hover:text-white"
                        )}
                      >
                        <Icon
                          className={cn("h-4 w-4 shrink-0", isActive ? "text-cyan" : "text-white/40")}
                          strokeWidth={1.5}
                        />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="line-clamp-3 min-h-15 text-xs leading-relaxed text-white/55">
                  {active.detail.join(" · ")}
                </p>
                <a
                  href={`/services/${active.slug}`}
                  className="focus-ring mt-3 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-cyan uppercase hover:text-white"
                >
                  View Capability
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
