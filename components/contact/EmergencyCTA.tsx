import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { emergencyServices, emergencyNote } from "@/data/emergency";

export function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-24">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-danger" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm bg-danger/15 px-3 py-1.5 text-xs font-semibold tracking-widest text-danger uppercase">
              <AlertTriangle className="h-4 w-4" />
              Emergency Repair
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Vessel Repair Can&apos;t Wait?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              {emergencyNote}
            </p>
            <div className="mt-8">
              <Button href="/emergency-repair" variant="danger" showArrow>
                Request Emergency Support
              </Button>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {emergencyServices.map((s) => (
              <li
                key={s}
                className="rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
