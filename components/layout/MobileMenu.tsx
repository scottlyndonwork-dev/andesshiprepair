"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { megaMenu } from "@/data/services";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { LOGO_SRC } from "@/lib/assets";

export function MobileMenu({
  open,
  onClose,
  navLinks,
}: {
  open: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-navy-deep lg:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            className="flex items-center justify-between px-5 pb-5"
            style={{ paddingTop: "max(1.25rem, env(safe-area-inset-top, 0px))" }}
          >
            <span className="flex items-center gap-2">
              <Image src={LOGO_SRC} alt="Andes Ship Repair Services" width={32} height={32} className="h-8 w-8" />
              <span className="text-lg font-bold text-white">ANDES</span>
            </span>
            <button
              onClick={onClose}
              className="focus-ring touch-manipulation rounded-sm p-2 text-white active:bg-white/10"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pb-8">
            <div className="mb-2 border-b border-white/10">
              <p className="mb-1 text-xs font-semibold tracking-[0.2em] text-cyan uppercase">
                Capabilities
              </p>
              <Accordion type="multiple" className="divide-y divide-white/10">
                {megaMenu.map((group) => (
                  <AccordionItem
                    key={group.heading}
                    value={group.heading}
                    trigger={
                      <span className="text-[11px] font-semibold tracking-widest text-white/60 uppercase">
                        {group.heading}
                      </span>
                    }
                    triggerClassName="text-white/60"
                  >
                    <ul className="space-y-2 pb-4">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={`/services/${link.slug}`}
                            onClick={onClose}
                            className="focus-ring -mx-2 block touch-manipulation rounded-sm px-2 py-1.5 text-base text-white/85 active:bg-white/10"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="focus-ring -mx-2 block touch-manipulation rounded-sm px-2 py-3 text-lg font-medium text-white active:bg-white/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="space-y-3 border-t border-white/10 p-5"
            style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))" }}
          >
            <Button href="/request-a-quote" variant="primary" className="w-full">
              Request a Quote
            </Button>
            <div className="flex gap-3">
              <a
                href={`tel:${company.mobile.replace(/\s/g, "")}`}
                className="focus-ring flex flex-1 touch-manipulation items-center justify-center gap-2 rounded-sm border border-white/20 py-3 text-sm text-white active:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={`mailto:${company.emails[0]}`}
                className="focus-ring flex flex-1 touch-manipulation items-center justify-center gap-2 rounded-sm border border-white/20 py-3 text-sm text-white active:bg-white/10"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
