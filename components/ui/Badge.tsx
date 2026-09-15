import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "blue",
  className,
}: {
  children: React.ReactNode;
  tone?: "blue" | "cyan" | "steel" | "danger";
  className?: string;
}) {
  const toneClasses = {
    blue: "bg-blue/10 text-blue",
    cyan: "bg-cyan/10 text-navy",
    steel: "bg-steel/10 text-steel",
    danger: "bg-danger/10 text-danger",
  }[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-semibold tracking-wide uppercase",
        toneClasses,
        className
      )}
    >
      {children}
    </span>
  );
}
