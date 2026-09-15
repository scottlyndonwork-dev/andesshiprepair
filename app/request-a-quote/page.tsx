import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { QuoteWizard } from "@/components/contact/QuoteWizard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quote",
  description:
    "Request a quotation from Andes Ship Repair Services for ship repair, marine engineering, fabrication, or maintenance work.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <div className="pb-20 sm:pb-28">
      <div className="relative overflow-hidden bg-navy-deep pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="technical-grid absolute inset-0" />
        <Container className="relative">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-cyan uppercase">
            Request a Quote
          </p>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Tell Us About Your Vessel and Project.
          </h1>
        </Container>
      </div>

      <Container className="mt-14">
        <div className="mx-auto max-w-3xl rounded-md border border-navy/10 bg-white p-6 sm:p-10">
          <QuoteWizard />
        </div>
      </Container>
    </div>
  );
}
