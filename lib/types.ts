export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: "Ship Repair" | "Engineering" | "Fabrication" | "Preservation" | "Inspection";
  shortDescription: string;
  overview: string;
  capabilities: string[];
  typicalApplications?: string[];
  relevantVesselTypes?: string[];
  featured: boolean;
}

export interface VesselCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  services: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  specialization: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  vesselType: string;
  location: string;
  service: string;
  description: string;
  scope: string[];
  outcome?: string;
  published: boolean;
}
