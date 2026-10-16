import { FaAws, FaJava } from "react-icons/fa6";
import { LuDatabase, LuDrama, LuSparkles, LuTableProperties } from "react-icons/lu";
import {
  SiApachekafka,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiGrafana,
  SiHibernate,
  SiJavascript,
  SiJenkins,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiSumologic,
  SiTypescript,
} from "react-icons/si";
import type { TechItem } from "@/types";

/**
 * Single source of truth for technology names + icons.
 * Skills and projects reference these, so a name or icon is changed in one place.
 * To add one: import the icon, add an entry, then use `tech.yourKey` where needed.
 */
export const tech = {
  java: { name: "Java", icon: FaJava },
  typescript: { name: "TypeScript", icon: SiTypescript },
  javascript: { name: "JavaScript", icon: SiJavascript },
  python: { name: "Python", icon: SiPython },
  sql: { name: "SQL", icon: LuDatabase },

  springBoot: { name: "Spring Boot", icon: SiSpringboot },
  react: { name: "React", icon: SiReact },
  node: { name: "Node.js", icon: SiNodedotjs },
  hibernate: { name: "Hibernate", icon: SiHibernate },
  jpa: { name: "JPA", icon: LuTableProperties },
  rtk: { name: "RTK", icon: SiRedux },

  aws: { name: "AWS", icon: FaAws },
  jenkins: { name: "Jenkins", icon: SiJenkins },
  docker: { name: "Docker", icon: SiDocker },
  githubActions: { name: "GitHub Actions", icon: SiGithubactions },

  postgresql: { name: "PostgreSQL", icon: SiPostgresql },
  kafka: { name: "Kafka", icon: SiApachekafka },
  sumoLogic: { name: "SumoLogic", icon: SiSumologic },
  grafana: { name: "Grafana", icon: SiGrafana },
  github: { name: "GitHub", icon: SiGithub },
  aiTools: { name: "AI Tools", icon: LuSparkles },
  // react-icons has no Playwright logo, so use the theatre masks (a nod to its own logo).
  playwright: { name: "Playwright", icon: LuDrama },
} satisfies Record<string, TechItem>;
