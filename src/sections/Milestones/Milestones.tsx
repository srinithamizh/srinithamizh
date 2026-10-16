import { Reveal, SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout";
import { awards } from "@/data";
import AwardCard from "./AwardCard";

export default function Milestones() {
  return (
    <Section id="milestones" labelledBy="milestones-heading" contentClassName="pb-[140px] max-phone:pb-[90px]">
      <SectionHeading
        id="milestones-heading"
        eyebrow="MILESTONES"
        title="Recognition along the way."
        description="Awards and moments that mark the journey so far."
      />
      <ul className="grid grid-cols-2 gap-[22px] max-phone:grid-cols-1">
        {awards.map((award, index) => (
          <li key={award.id}>
            <Reveal delay={(index % 2) * 80} className="h-full">
              <AwardCard award={award} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
