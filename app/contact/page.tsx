import { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Andes Ship Repair Services",
  description:
    "Contact Andes Ship Repair Services in Placer, Surigao del Norte, Philippines for ship repair, marine engineering, and vessel maintenance inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pb-20 sm:pb-28">
      <div className="relative overflow-hidden bg-navy-deep pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="technical-grid absolute inset-0" />
        <Container className="relative">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-cyan uppercase">
            Contact
          </p>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Talk About Your Vessel.
          </h1>
        </Container>
      </div>

      <Container className="mt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-text-dark">
              {company.name}
            </h2>
            <p className="mt-2 text-sm text-steel">
              Attn: {company.contactPerson.name}, {company.contactPerson.position}
            </p>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <span className="text-sm leading-relaxed text-steel">{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <a
                  href={`tel:${company.mobile.replace(/\s/g, "")}`}
                  className="focus-ring text-sm font-semibold text-navy hover:text-blue"
                >
                  {company.mobile}
                </a>
              </li>
              {company.emails.map((email) => (
                <li key={email} className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  <a href={`mailto:${email}`} className="focus-ring text-sm font-semibold text-navy hover:text-blue break-all">
                    {email}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-md border border-navy/10 bg-bg-light p-6">
              <p className="text-xs font-semibold tracking-widest text-steel uppercase">
                Location
              </p>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {company.location}, {company.country}. Exact coordinates available on request.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-navy/10 bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
