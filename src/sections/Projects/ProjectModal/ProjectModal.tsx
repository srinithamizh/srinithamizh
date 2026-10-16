import { Button, TechList, Eyebrow, Icon, Modal } from "@/components/ui";
import type { Project } from "@/types";
import ProjectVisual from "../ProjectVisual/ProjectVisual";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal isOpen={project !== null} onClose={onClose} labelledBy="project-modal-title" closeLabel="Close project details">
      {project && (
        <div className="grid grid-cols-2 max-phone:grid-cols-1">
          <ProjectVisual accent={project.accent} title={project.title} className="h-full min-h-[470px] border-0 max-phone:h-[215px] max-phone:min-h-0" />
          <div className="self-center px-[38px] py-12 max-phone:px-6 max-phone:py-[31px]">
            <Eyebrow size="sm">{project.type}</Eyebrow>
            <h2 id="project-modal-title" className="mt-3 mb-[18px] font-display text-[40px] font-semibold max-phone:text-[34px]">{project.title}</h2>
            <p className="mb-6 text-sm leading-[1.75] text-muted">{project.detail}</p>
            <TechList items={project.tech} />
            {(project.url || project.repoUrl) && (
              <div className="mt-[33px] flex flex-wrap gap-2.5">
                {project.url && (
                  <Button href={project.url} target="_blank">
                    Live preview <Icon name="external" />
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant={project.url ? "secondary" : "primary"} href={project.repoUrl} target="_blank">
                    <Icon name="github" /> View code
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
