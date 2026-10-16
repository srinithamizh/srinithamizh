import { Reveal, SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout";
import { education } from "@/data";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading id="education-heading" eyebrow="EDUCATION" title="Where it all began." />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[22px]">
        {education.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={(index % 2) * 80} className="h-full">
              <EducationCard item={item} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
