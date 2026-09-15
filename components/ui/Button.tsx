import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "danger" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-gold text-navy-deep hover:bg-gold-dark focus-visible:bg-gold-dark",
  secondary: "bg-white text-navy hover:bg-bg-light",
  outline: "border border-navy/20 text-navy hover:bg-navy hover:text-white",
  "outline-light": "border border-white/40 text-white hover:bg-white hover:text-navy",
  danger: "bg-danger text-white hover:bg-danger/90",
  ghost: "text-navy hover:bg-navy/5",
};

export function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  children,
  showArrow = false,
  disabled = false,
}: {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  disabled?: boolean;
}) {
  const classes = cn(
    "group focus-ring inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
