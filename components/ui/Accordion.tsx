"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = RadixAccordion.Root;

export function AccordionItem({
  value,
  trigger,
  children,
  className,
  triggerClassName,
  contentClassName,
}: {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
}) {
  return (
    <RadixAccordion.Item value={value} className={className}>
      <RadixAccordion.Header>
        <RadixAccordion.Trigger
          className={cn(
            "focus-ring group flex w-full touch-manipulation items-center justify-between gap-3 py-4 text-left",
            triggerClassName
          )}
        >
          {trigger}
          <ChevronDown className="h-4 w-4 shrink-0 text-current transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content
        className={cn(
          "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          contentClassName
        )}
      >
        {children}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}
