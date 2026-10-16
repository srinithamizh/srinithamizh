import { Highlight, Reveal, SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout";
import { profile } from "@/data";
import { cx } from "@/utils/classNames";
import FactsCard from "./FactsCard";

export default function About() {
  const { paragraphs, facts } = profile.about;

  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="ABOUT"
        title={
          <>
            Curious by nature.
            <br />
            <Highlight>Driven by impact.</Highlight>
          </>
        }
      />
      <div className="grid grid-cols-[7fr_5fr] items-start gap-[10%] max-phone:grid-cols-1 max-phone:gap-[34px]">
        <Reveal>
          {paragraphs.map((text, index) => (
            <p
              key={text}
              className={cx(
                "mb-[22px]",
                index === 0
                  ? "text-[clamp(18px,2vw,23px)] leading-[1.58] tracking-[-.015em]"
                  : "text-[15px] leading-[1.75] text-muted",
              )}
            >
              {text}
            </p>
          ))}
        </Reveal>
        <Reveal>
          <FactsCard facts={facts} />
        </Reveal>
      </div>
    </Section>
  );
}
