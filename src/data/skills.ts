import type { SkillGroup } from "@/types";
import { tech } from "./tech";

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    icon: "code",
    items: [tech.java, tech.typescript, tech.javascript, tech.python, tech.sql],
  },
  {
    group: "Frameworks",
    icon: "layers",
    items: [tech.springBoot, tech.react, tech.node, tech.hibernate, tech.jpa, tech.rtk],
  },
  {
    group: "Cloud & DevOps",
    icon: "cloud",
    items: [tech.aws, tech.jenkins, tech.docker, tech.githubActions],
  },
  {
    group: "Tools",
    icon: "wrench",
    items: [tech.postgresql, tech.kafka, tech.sumoLogic, tech.grafana, tech.github, tech.aiTools, tech.playwright],
  },
];
