import { Card, Icon, TechList, type IconName } from "@/components/ui";
import type { TechItem } from "@/types";

interface SkillCardProps {
  group: string;
  icon: IconName;
  items: TechItem[];
}

export default function SkillCard({ group, icon, items }: SkillCardProps) {
  return (
    <Card as="article" interactive className="flex h-full flex-col gap-5 p-[26px]">
      <div className="flex items-center gap-3.5">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
          <Icon name={icon} size={22} />
        </span>
        <h3 className="font-display text-xl font-semibold">{group}</h3>
      </div>
      <div className="h-px bg-line" />
      <TechList items={items} aria-label={`${group} skills`} />
    </Card>
  );
}
