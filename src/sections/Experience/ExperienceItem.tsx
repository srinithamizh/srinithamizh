import { cx } from "@/utils/classNames";
import type { Experience } from "@/types";

interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

export default function ExperienceItem({ experience, isLast }: ExperienceItemProps) {
  const { role, company, dates, location, bullets, type } = experience;

  return (
    <article className="grid grid-cols-[185px_34px_1fr] max-phone:grid-cols-[22px_1fr]">
      <div className="flex flex-col gap-2 pt-[3px] font-mono leading-[1.3] max-phone:col-start-2 max-phone:mb-[17px]">
        <span className="text-[14px] font-medium text-fg">{dates}</span>
        <small className="text-[12px] text-muted">{location}</small>
      </div>

      {/* Dot + vertical connector line (stretches the full row height) */}
      <div
        aria-hidden="true"
        className={cx(
          "relative after:absolute after:top-[18px] after:bottom-0 after:left-1 after:w-px after:bg-line max-phone:col-start-1 max-phone:row-span-2 max-phone:row-start-1",
          isLast && "after:hidden",
        )}
      >
        <span className="mt-[7px] block size-[9px] rounded-full border-2 border-accent bg-bg" />
      </div>

      <div className="pb-[70px] pl-6 max-phone:col-start-2 max-phone:pb-[54px] max-phone:pl-0">
        <div className="border-b border-line pb-[22px]">
          <div>
            <h3 className="mb-1.5 font-display text-[22px] font-semibold">{role}</h3>
            <div className="flex flex-wrap items-center gap-x-2 text-[14px]">
              <p className="text-accent">{company}</p>
              {type && (
                <>
                  <span aria-hidden="true" className="text-line">
                    |
                  </span>
                  <p className="text-muted">{type}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <ul className="mt-[22px]">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="relative my-[11px] pl-[19px] text-sm leading-[1.55] text-muted before:absolute before:left-0 before:text-accent before:content-['—']"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
