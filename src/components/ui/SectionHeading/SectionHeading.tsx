import type { ReactNode } from "react";
import Eyebrow from "../Eyebrow/Eyebrow";
import Reveal from "../Reveal/Reveal";
import { cx } from "@/utils/classNames";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Override spacing, e.g. className="mb-8". */
  className?: string;
}

export default function SectionHeading({ id, eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cx("mb-[62px] max-w-[700px] max-phone:mb-11", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-[15px] font-display text-[clamp(36px,4.2vw,56px)] leading-[1.1] font-semibold tracking-[-.04em]"
      >
        {title}
      </h2>
      {description && <p className="mt-5 max-w-[590px] text-[15px] leading-[1.7] text-muted">{description}</p>}
    </Reveal>
  );
}
