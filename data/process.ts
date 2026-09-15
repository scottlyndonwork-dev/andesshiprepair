import { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Client Inquiry", description: "Initial contact and gathering of vessel and project requirements." },
  { number: "02", title: "Site / Vessel Inspection", description: "On-site or on-board inspection to assess condition and scope." },
  { number: "03", title: "Technical Assessment", description: "Evaluation of findings against technical and repair requirements." },
  { number: "04", title: "Work Scope Preparation", description: "Detailed scope of work prepared based on the assessment." },
  { number: "05", title: "Quotation", description: "Preparation and submission of a technical and commercial quotation." },
  { number: "06", title: "Client Approval", description: "Review and approval of scope, cost, and schedule by the client." },
  { number: "07", title: "Work Planning & Mobilization", description: "Manpower, materials, and equipment planned and mobilized." },
  { number: "08", title: "Repair / Fabrication", description: "Execution of the approved repair, fabrication, or maintenance work." },
  { number: "09", title: "Inspection & Testing", description: "Work verified through applicable inspection and testing methods." },
  { number: "10", title: "Final Inspection", description: "Final review of completed work against the approved scope." },
  { number: "11", title: "Handover", description: "Completed work and documentation turned over to the client." },
];
