import type { NavItem } from "@/types";

/** Links shown in the header. `id` must match a section id. */
export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/** Every section on the page, in order (used for scroll-spy). */
export const sectionIds = ["hero", "about", "skills", "experience", "education", "projects", "milestones", "contact"] as const;
