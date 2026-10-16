import { Card, TechList, Eyebrow, Icon } from "@/components/ui";
import type { Project } from "@/types";
import ProjectVisual from "../ProjectVisual/ProjectVisual";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <Card as="article" interactive className="h-full overflow-hidden rounded-[15px]">
      <button
        type="button"
        className="group w-full cursor-pointer border-0 bg-transparent p-0 text-left"
        aria-label={`View details for ${project.title}`}
        onClick={() => onSelect(project)}
      >
        <ProjectVisual accent={project.accent} title={project.title} />
        <div className="p-[25px]">
          <Eyebrow size="sm">{project.type}</Eyebrow>
          <div className="mt-2.5 flex items-center justify-between">
            <h3 className="font-display text-[26px] font-semibold">{project.title}</h3>
            <span className="grid size-9 place-items-center rounded-[9px] border border-line text-muted transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
              <Icon name="arrow" />
            </span>
          </div>
          <p className="mt-[11px] mb-5 min-h-11 text-[13px] leading-[1.6] text-muted">{project.description}</p>
          <TechList items={project.tech} />
        </div>
      </button>
    </Card>
  );
}
