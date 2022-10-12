export interface Project {
  customerName: string;
  keyTechnologies: string[];
  projectName: string;
  description: string;
  from: Date;
  to?: Date | undefined;
  currentProject?: boolean;
  website: string;
  logoUrl?: string;
}
