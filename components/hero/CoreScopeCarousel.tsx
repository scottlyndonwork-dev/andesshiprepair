import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { PlaceholderVisual, PlaceholderIcon } from "@/components/ui/PlaceholderVisual";
import { Marquee } from "@/components/ui/Marquee";

interface ScopeItem {
  id: string;
  label: string;
  slug: string;
  icon: LucideIcon;
  placeholderIcon: PlaceholderIcon;
}

export function CoreScopeCarousel({ items }: { items: ScopeItem[] }) {
  return (
    <div className="min-w-0 lg:hidden">
      <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase">
        <span className="h-px w-4 bg-cyan" />
        Core Technical Scope
      </p>

      <div className="-mx-5 mt-3 sm:-mx-8">
        <Marquee durationSeconds={26}>
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/services/${item.slug}`}
              className="relative block w-27 shrink-0 overflow-hidden rounded-md active:opacity-80"
            >
              <PlaceholderVisual icon={item.placeholderIcon} tone="navy" className="aspect-square" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-navy-deep/95 to-transparent px-2.5 pb-2.5 pt-8">
                <item.icon className="h-4 w-4 text-white" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold leading-tight text-white uppercase">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
