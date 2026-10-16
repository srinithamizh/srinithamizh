import type { IconType } from "react-icons";
import type { IconName } from "@/components/ui/Icon/Icon";

export type Theme = "dark" | "light";

export interface NavItem {
  id: string;
  label: string;
}

export interface Fact {
  label: string;
  value: string;
  icon: IconName;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconName;
}

export interface TechItem {
  name: string;
  /** Any react-icons component. Optional: shown as text only when omitted. */
  icon?: IconType;
}

export interface SkillGroup {
  group: string;
  icon: IconName;
  items: TechItem[];
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
  type?: string;
}

export type ProjectAccent = "blue" | "violet" | "green" | "orange";

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  detail: string;
  tech: TechItem[];
  accent: ProjectAccent;
  /** Live demo / website. Hides the "Live preview" button when omitted. */
  url?: string;
  /** Source repository. Hides the "View code" button when omitted. */
  repoUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  /** Shown as "CGPA 8.98". Omit to hide. */
  cgpa?: number;
  icon: IconName;
}

export interface Award {
  id: string;
  title: string;
  /** Optional sub-title, e.g. the event or program name. */
  event?: string;
  /** Issuing organisation. */
  from: string;
  year: number;
  /** 1-12 */
  month: number;
  icon: IconName;
  url?: string;
}
