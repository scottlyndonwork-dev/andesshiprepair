import Link from "next/link";
import { Phone, Mail, FileText } from "lucide-react";
import { company } from "@/data/company";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-navy/10 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={`tel:${company.mobile.replace(/\s/g, "")}`}
        className="focus-ring flex flex-col items-center justify-center gap-1 py-2.5 text-navy"
      >
        <Phone className="h-5 w-5" />
        <span className="text-[11px] font-semibold uppercase">Call</span>
      </a>
      <a
        href={`mailto:${company.emails[0]}`}
        className="focus-ring flex flex-col items-center justify-center gap-1 border-x border-navy/10 py-2.5 text-navy"
      >
        <Mail className="h-5 w-5" />
        <span className="text-[11px] font-semibold uppercase">Email</span>
      </a>
      <Link
        href="/request-a-quote"
        className="focus-ring flex flex-col items-center justify-center gap-1 bg-gold py-2.5 text-navy-deep"
      >
        <FileText className="h-5 w-5" />
        <span className="text-[11px] font-semibold uppercase">Quote</span>
      </Link>
    </div>
  );
}
