"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Upload, X } from "lucide-react";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const steps = [
  "Contact Information",
  "Vessel Information",
  "Service Required",
  "Project Details",
  "Attachments",
  "Review",
];

const serviceOptions = [
  "Hull / Structural",
  "Machinery",
  "Propulsion",
  "Piping",
  "Welding / Fabrication",
  "Machining",
  "Electrical",
  "Preservation",
  "Inspection / Testing",
  "Maintenance",
  "Emergency Repair",
  "Other",
];

interface FormState {
  name: string;
  company: string;
  email: string;
  mobile: string;
  position: string;
  vesselName: string;
  vesselType: string;
  imoNumber: string;
  currentLocation: string;
  services: string[];
  description: string;
  preferredStart: string;
  targetCompletion: string;
  additionalInfo: string;
  files: string[];
}

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  mobile: "",
  position: "",
  vesselName: "",
  vesselType: "",
  imoNumber: "",
  currentLocation: "",
  services: [],
  description: "",
  preferredStart: "",
  targetCompletion: "",
  additionalInfo: "",
  files: [],
};

type Errors = Partial<Record<keyof FormState, string>>;

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validateStep(): Errors {
    const next: Errors = {};
    if (step === 0) {
      if (!form.name.trim()) next.name = "Name is required.";
      if (!form.email.trim()) next.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        next.email = "Enter a valid email address.";
      if (!form.mobile.trim()) next.mobile = "Mobile number is required.";
    }
    if (step === 1) {
      if (!form.vesselType.trim()) next.vesselType = "Vessel type is required.";
    }
    if (step === 2) {
      if (form.services.length === 0) next.services = "Select at least one service.";
    }
    if (step === 3) {
      if (!form.description.trim()) next.description = "Please describe the project.";
    }
    return next;
  }

  function next() {
    const stepErrors = validateStep();
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;
    setStep((s) => Math.min(steps.length - 1, s + 1));
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function toggleService(option: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(option)
        ? f.services.filter((s) => s !== option)
        : [...f.services, option],
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: {
            name: form.name,
            company: form.company,
            email: form.email,
            mobile: form.mobile,
            position: form.position,
          },
          vessel: {
            vesselName: form.vesselName,
            vesselType: form.vesselType,
            imoNumber: form.imoNumber,
            currentLocation: form.currentLocation,
          },
          service: { services: form.services },
          project: {
            description: form.description,
            preferredStart: form.preferredStart,
            targetCompletion: form.targetCompletion,
            additionalInfo: form.additionalInfo,
          },
          attachments: form.files,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-success/20 bg-success/5 p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
        <h2 className="mt-5 text-xl font-bold text-text-dark">Request Received</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-steel">
          Thank you for contacting Andes Ship Repair Services. Our team can review your
          requirements and respond using the contact information provided.
        </p>
        <Button href="/" className="mt-6" showArrow>
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Mobile: compact progress bar + current step label */}
      <div className="mb-8 sm:hidden">
        <div className="flex items-center justify-between text-xs font-semibold text-steel">
          <span>
            Step {step + 1} of {steps.length}
          </span>
          <span className="text-navy">{steps[step]}</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
          <div
            className="h-full rounded-full bg-blue transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Tablet/desktop: full step chip row */}
      <ol className="mb-10 hidden flex-wrap gap-2 sm:flex">
        {steps.map((label, i) => (
          <li
            key={label}
            className={cn(
              "flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold",
              i === step
                ? "border-blue bg-blue text-white"
                : i < step
                ? "border-success/40 bg-success/10 text-success"
                : "border-navy/10 bg-white text-steel"
            )}
          >
            <span>{i + 1}</span>
            <span>{label}</span>
          </li>
        ))}
      </ol>

      <form onSubmit={step === steps.length - 1 ? handleSubmit : (e) => e.preventDefault()} noValidate>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {step === 0 && (
              <>
                <h2 className="text-lg font-bold text-text-dark">Contact Information</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Name" htmlFor="name" error={errors.name} required>
                    <input id="name" className={inputClasses} value={form.name} onChange={(e) => set("name", e.target.value)} />
                  </FormField>
                  <FormField label="Company" htmlFor="company">
                    <input id="company" className={inputClasses} value={form.company} onChange={(e) => set("company", e.target.value)} />
                  </FormField>
                  <FormField label="Email" htmlFor="email" error={errors.email} required>
                    <input id="email" type="email" className={inputClasses} value={form.email} onChange={(e) => set("email", e.target.value)} />
                  </FormField>
                  <FormField label="Mobile" htmlFor="mobile" error={errors.mobile} required>
                    <input id="mobile" type="tel" className={inputClasses} value={form.mobile} onChange={(e) => set("mobile", e.target.value)} />
                  </FormField>
                  <FormField label="Position" htmlFor="position">
                    <input id="position" className={inputClasses} value={form.position} onChange={(e) => set("position", e.target.value)} />
                  </FormField>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h2 className="text-lg font-bold text-text-dark">Vessel Information</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Vessel Name" htmlFor="vesselName">
                    <input id="vesselName" className={inputClasses} value={form.vesselName} onChange={(e) => set("vesselName", e.target.value)} />
                  </FormField>
                  <FormField label="Vessel Type" htmlFor="vesselType" error={errors.vesselType} required>
                    <input id="vesselType" className={inputClasses} placeholder="e.g. LCT, Tugboat, Barge" value={form.vesselType} onChange={(e) => set("vesselType", e.target.value)} />
                  </FormField>
                  <FormField label="IMO Number" htmlFor="imoNumber">
                    <input id="imoNumber" className={inputClasses} value={form.imoNumber} onChange={(e) => set("imoNumber", e.target.value)} />
                  </FormField>
                  <FormField label="Current Location" htmlFor="currentLocation">
                    <input id="currentLocation" className={inputClasses} value={form.currentLocation} onChange={(e) => set("currentLocation", e.target.value)} />
                  </FormField>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-lg font-bold text-text-dark">Service Required</h2>
                <p className="text-sm text-steel">Select all that apply.</p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {serviceOptions.map((option) => {
                    const checked = form.services.includes(option);
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => toggleService(option)}
                        aria-pressed={checked}
                        className={cn(
                          "focus-ring rounded-sm border px-3 py-2.5 text-left text-sm font-medium transition-colors",
                          checked ? "border-blue bg-blue/10 text-navy" : "border-navy/15 text-steel hover:border-blue/40"
                        )}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {errors.services && <p className="text-xs font-medium text-danger">{String(errors.services)}</p>}
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-lg font-bold text-text-dark">Project Details</h2>
                <FormField label="Description" htmlFor="description" error={errors.description} required>
                  <textarea id="description" rows={5} className={inputClasses} value={form.description} onChange={(e) => set("description", e.target.value)} />
                </FormField>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Preferred Start Date" htmlFor="preferredStart">
                    <input id="preferredStart" type="date" className={inputClasses} value={form.preferredStart} onChange={(e) => set("preferredStart", e.target.value)} />
                  </FormField>
                  <FormField label="Target Completion Date" htmlFor="targetCompletion">
                    <input id="targetCompletion" type="date" className={inputClasses} value={form.targetCompletion} onChange={(e) => set("targetCompletion", e.target.value)} />
                  </FormField>
                </div>
                <FormField label="Additional Information" htmlFor="additionalInfo">
                  <textarea id="additionalInfo" rows={3} className={inputClasses} value={form.additionalInfo} onChange={(e) => set("additionalInfo", e.target.value)} />
                </FormField>
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="text-lg font-bold text-text-dark">Attachments</h2>
                <p className="text-sm text-steel">
                  Photos, drawings, technical documents, or inspection reports.
                </p>
                <label
                  htmlFor="files"
                  className="focus-ring flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-navy/20 py-10 text-center hover:border-blue/40"
                >
                  <Upload className="h-6 w-6 text-blue" />
                  <span className="text-sm font-semibold text-navy">Click to upload files</span>
                  <span className="text-xs text-steel">Images, PDF, or document files</span>
                </label>
                <input
                  id="files"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    const names = Array.from(e.target.files ?? []).map((f) => f.name);
                    set("files", [...form.files, ...names]);
                  }}
                />
                {form.files.length > 0 && (
                  <ul className="space-y-2">
                    {form.files.map((name, i) => (
                      <li key={`${name}-${i}`} className="flex items-center justify-between rounded-sm border border-navy/10 px-3 py-2 text-sm text-text-dark">
                        {name}
                        <button
                          type="button"
                          onClick={() => set("files", form.files.filter((_, idx) => idx !== i))}
                          className="focus-ring text-steel hover:text-danger"
                          aria-label={`Remove ${name}`}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {step === 5 && (
              <>
                <h2 className="text-lg font-bold text-text-dark">Review Your Request</h2>
                <div className="space-y-5 rounded-md border border-navy/10 bg-bg-light p-6 text-sm">
                  <ReviewRow label="Contact" value={`${form.name}${form.company ? ` · ${form.company}` : ""} · ${form.email} · ${form.mobile}`} />
                  <ReviewRow label="Vessel" value={`${form.vesselName || "—"} (${form.vesselType || "—"})`} />
                  <ReviewRow label="Services" value={form.services.join(", ") || "—"} />
                  <ReviewRow label="Description" value={form.description || "—"} />
                  <ReviewRow label="Schedule" value={`${form.preferredStart || "—"} to ${form.targetCompletion || "—"}`} />
                  <ReviewRow label="Attachments" value={form.files.join(", ") || "None"} />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {status === "error" && (
          <p role="alert" className="mt-4 text-sm font-medium text-danger">
            Something went wrong submitting your request. Please try again.
          </p>
        )}

        <div className="mt-8 flex justify-between">
          <Button type="button" variant="outline" onClick={back} disabled={step === 0}>
            <ChevronLeft className="h-4 w-4" /> Back
          </Button>
          {step < steps.length - 1 ? (
            <Button type="button" onClick={next}>
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Submit Request"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-widest text-steel uppercase">{label}</p>
      <p className="mt-1 text-text-dark">{value}</p>
    </div>
  );
}
