import { cn } from "@/lib/utils";
import {
  Anchor,
  Ship,
  Wrench,
  Cog,
  Flame,
  Gauge,
  Zap,
  ShieldCheck,
  Waves,
} from "lucide-react";

const ICONS = { Anchor, Ship, Wrench, Cog, Flame, Gauge, Zap, ShieldCheck, Waves };

export type PlaceholderIcon = keyof typeof ICONS;

/**
 * Illustrative visual built from CSS/SVG only — stands in for real project
 * photography, which does not exist yet. Never implies an actual Andes
 * photo. Swap for <Image> once real assets are available.
 */
export function PlaceholderVisual({
  icon = "Ship",
  tone = "navy",
  className,
  label,
}: {
  icon?: PlaceholderIcon;
  tone?: "navy" | "deep" | "steel" | "light";
  className?: string;
  label?: string;
}) {
  const Icon = ICONS[icon];

  const toneClasses = {
    navy: "bg-navy",
    deep: "bg-navy-deep",
    steel: "bg-steel",
    light: "bg-bg-light",
  }[tone];

  const iconTone = tone === "light" ? "text-navy/30" : "text-white/15";

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        toneClasses,
        className
      )}
      role="img"
      aria-label={label ?? "Illustrative marine engineering graphic"}
    >
      <div className="technical-grid absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
      <Icon className={cn("relative h-16 w-16 sm:h-24 sm:w-24", iconTone)} strokeWidth={1} />
      {label && (
        <span className="absolute bottom-3 left-3 text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
          {label}
        </span>
      )}
    </div>
  );
}
