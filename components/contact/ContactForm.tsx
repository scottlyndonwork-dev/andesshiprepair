"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Please describe your requirement.";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-success/20 bg-success/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
        <h3 className="mt-4 text-lg font-bold text-text-dark">Message Received</h3>
        <p className="mt-2 text-sm leading-relaxed text-steel">
          Thank you for contacting Andes Ship Repair Services. Our team can review your message
          and respond using the contact information provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormField label="Name" htmlFor="name" error={errors.name} required>
        <input
          id="name"
          className={inputClasses}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        />
      </FormField>
      <FormField label="Email" htmlFor="email" error={errors.email} required>
        <input
          id="email"
          type="email"
          className={inputClasses}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        />
      </FormField>
      <FormField label="Mobile Number" htmlFor="phone">
        <input
          id="phone"
          type="tel"
          className={inputClasses}
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
        />
      </FormField>
      <FormField label="Message" htmlFor="message" error={errors.message} required>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        />
      </FormField>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-danger">
          Something went wrong sending your message. Please try again or contact us directly.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
