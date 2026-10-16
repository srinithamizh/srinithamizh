import { Reveal, SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout";
import { experiences } from "@/data";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading id="experience-heading" eyebrow="EXPERIENCE" title="Building, learning, leading." />
      <ol className="max-w-[900px]">
        {experiences.map((experience, index) => (
          <li key={`${experience.company}-${experience.dates}`}>
            <Reveal>
              <ExperienceItem experience={experience} isLast={index === experiences.length - 1} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
