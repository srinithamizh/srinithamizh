import type { Project } from "@/types";
import { tech } from "./tech";

export const projects: Project[] = [
  {
    id: "oxyvault",
    title: "OxyVault",
    type: "FinTech",
    description: "Personal finance application to manage expenses, income, accounts, budgets, and financial transactions..",
    detail:
      "A modern, responsive, and intuitive React application for managing personal finances. OxyVault enables users to track expenses, income, accounts, and budgets through a clean and user-friendly interface.",
    tech: [tech.react, tech.springBoot, tech.postgresql],
    accent: "blue",
    url: "https://oxyvault.vercel.app/",
    repoUrl: "https://github.com/srinithamizh/oxyvault-ui",
  }
];
