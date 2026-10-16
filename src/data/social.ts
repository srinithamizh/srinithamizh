import type { SocialLink } from "@/types";
import { profile } from "./profile";

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/srinithamizh", icon: "github" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/srinithamizh/", icon: "linkedin" },
];

export const emailLink: SocialLink = {
  id: "email",
  label: "Email",
  href: `mailto:${profile.email}`,
  icon: "mail",
};
