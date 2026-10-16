import type { ReactNode } from "react";
import { Card, Icon, type IconName } from "@/components/ui";
import type { Education } from "@/types";

function Pill({ icon, children }: { icon: IconName; children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3.5 py-2 font-mono text-[13px] font-medium tracking-[.06em] whitespace-nowrap text-fg">
      <Icon name={icon} size={16} className="text-accent" />
      {children}
    </p>
  );
}

export default function EducationCard({ item }: { item: Education }) {
  const { degree, field, institution, location, startYear, endYear, cgpa, icon } = item;

  return (
    <Card
      as="article"
      interactive
      className="flex h-full items-center gap-6 p-[28px] max-phone:flex-col max-phone:items-start max-phone:gap-5"
    >
      <span className="grid size-14 shrink-0 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
        <Icon name={icon} size={26} />
      </span>
      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-display text-[22px] leading-[1.3] font-semibold">{degree}</h3>
        <p className="text-[15px] text-fg">{field}</p>
        <p className="text-[14px] text-muted">
          <span className="text-accent">{institution}</span>, {location}
        </p>
      </div>
      <div className="flex shrink-0 flex-col gap-2 max-phone:flex-row max-phone:flex-wrap">
        <Pill icon="calendar">
          {startYear} — {endYear}
        </Pill>
        {cgpa !== undefined && <Pill icon="star">CGPA {cgpa.toFixed(2)}</Pill>}
      </div>
    </Card>
  );
}
