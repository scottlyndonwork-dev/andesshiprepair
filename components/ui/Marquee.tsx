import { cn } from "@/lib/utils";

/**
 * Continuous auto-scrolling ticker. Renders `children` twice back-to-back
 * and animates the track by exactly -50% for a seamless loop. Pauses on
 * hover/touch so items stay tappable, and is effectively frozen under
 * prefers-reduced-motion (global rule caps animation-iteration-count at 1).
 */
export function Marquee({
  children,
  className,
  durationSeconds = 24,
  gap = "gap-3",
}: {
  children: React.ReactNode;
  className?: string;
  durationSeconds?: number;
  gap?: string;
}) {
  return (
    <div className={cn("min-w-0 overflow-hidden", className)}>
      <div
        className={cn("marquee-track flex w-max", gap)}
        style={{ animation: `marquee ${durationSeconds}s linear infinite` }}
      >
        <div className={cn("flex shrink-0", gap)}>{children}</div>
        <div className={cn("flex shrink-0", gap)} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
