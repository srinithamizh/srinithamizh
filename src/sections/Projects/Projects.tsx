import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout";
import { projects } from "@/data";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectModal from "./ProjectModal/ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="SELECTED WORK"
        title="Things I've helped bring to life."
        description="A selection of product, platform, and open-source work. Click a project to learn more."
      />
      <div className="grid grid-cols-2 gap-[22px] max-phone:grid-cols-1">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 80} className="h-full">
            <ProjectCard project={project} onSelect={setSelected} />
          </Reveal>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
