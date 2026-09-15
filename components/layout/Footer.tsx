import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { LOGO_SRC } from "@/lib/assets";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/services" },
  { label: "Vessels", href: "/vessels" },
  { label: "Projects", href: "/projects" },
  { label: "Quality & HSE", href: "/quality-hse" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Hull & Structural", slug: "hull-structural-repair" },
  { label: "Machinery", slug: "machinery-repair-maintenance" },
  { label: "Propulsion", slug: "shafting-bearing-propulsion" },
  { label: "Piping", slug: "piping-valve-works" },
  { label: "Fabrication", slug: "welding-fabrication" },
  { label: "Machining", slug: "machining" },
  { label: "Electrical", slug: "marine-electrical" },
  { label: "Preservation", slug: "blasting-painting-preservation" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] pt-16 text-white lg:pb-16">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <Image src={LOGO_SRC} alt="Andes Ship Repair Services" width={48} height={48} className="h-11 w-11" />
              <div>
                <p className="text-2xl font-bold tracking-tight">ANDES</p>
                <p className="text-xs font-medium tracking-[0.25em] text-cyan uppercase">
                  Ship Repair Services
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {company.tagline}
            </p>
            <p className="mt-3 text-xs font-medium tracking-wide text-white/40">
              {company.brandPillars}
            </p>
          </div>
          <Button href="/request-a-quote" variant="secondary" showArrow>
            Request a Quote
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="focus-ring text-sm text-white/75 hover:text-cyan">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Services
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/services/${l.slug}`}
                    className="focus-ring text-sm text-white/75 hover:text-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-cyan" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-cyan" />
                <a href={`tel:${company.mobile.replace(/\s/g, "")}`} className="focus-ring hover:text-cyan">
                  {company.mobile}
                </a>
              </li>
              {company.emails.map((email) => (
                <li key={email} className="flex gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-cyan" />
                  <a href={`mailto:${email}`} className="focus-ring hover:text-cyan break-all">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © 2026 Andes Ship Repair Services. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
