"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { megaMenu } from "@/data/services";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
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
          <div className="flex items-center justify-between px-5 py-5">
            <span className="flex items-center gap-2">
              <Image src={LOGO_SRC} alt="Andes Ship Repair Services" width={32} height={32} className="h-8 w-8" />
              <span className="text-lg font-bold text-white">ANDES</span>
            </span>
            <button
              onClick={onClose}
              className="focus-ring rounded-sm p-2 text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pb-8">
            <div className="mb-6 border-b border-white/10 pb-6">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-cyan uppercase">
                Capabilities
              </p>
              <div className="space-y-5">
                {megaMenu.map((group) => (
                  <div key={group.heading}>
                    <p className="mb-2 text-[11px] font-semibold tracking-widest text-white/50">
                      {group.heading}
                    </p>
                    <ul className="space-y-2">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={`/services/${link.slug}`}
                            onClick={onClose}
                            className="focus-ring text-base text-white/85"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="focus-ring block rounded-sm py-3 text-lg font-medium text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 border-t border-white/10 p-5">
            <Button href="/request-a-quote" variant="primary" className="w-full">
              Request a Quote
            </Button>
            <div className="flex gap-3">
              <a
                href={`tel:${company.mobile.replace(/\s/g, "")}`}
                className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-sm border border-white/20 py-3 text-sm text-white"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={`mailto:${company.emails[0]}`}
                className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-sm border border-white/20 py-3 text-sm text-white"
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
