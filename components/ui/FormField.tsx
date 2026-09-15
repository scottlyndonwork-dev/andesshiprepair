import { cn } from "@/lib/utils";

export function FormField({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-text-dark">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClasses = cn(
  "focus-ring w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-text-dark placeholder:text-steel/60"
);
