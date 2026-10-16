import { Reveal, SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout";
import { skills } from "@/data";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="CAPABILITIES"
        title="Tools I use to make ideas real."
        description="A practical toolkit shaped by building and operating production software at scale."
      />
      <div className="grid grid-cols-2 gap-[18px] max-phone:grid-cols-1">
        {skills.map((skill, index) => (
          <Reveal key={skill.group} delay={index * 70} className="h-full">
            <SkillCard group={skill.group} icon={skill.icon} items={skill.items} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
