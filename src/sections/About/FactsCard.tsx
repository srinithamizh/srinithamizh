import { Card, Icon } from "@/components/ui";
import type { Fact } from "@/types";

export default function FactsCard({ facts }: { facts: Fact[] }) {
  return (
    <Card
      as="aside"
      className="bg-[linear-gradient(145deg,var(--surface),color-mix(in_srgb,var(--surface-2)_55%,var(--surface)))] px-[26px] py-2"
      aria-label="Quick facts"
    >
      <dl>
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-center justify-between gap-5 border-b border-line py-[22px] last:border-0 max-phone:flex-wrap"
          >
            <dt className="flex items-center gap-3 font-mono text-[12px] leading-[1.4] font-medium tracking-[.1em] text-fg/80">
              <span className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-line bg-accent-soft text-accent">
                <Icon name={fact.icon} size={18} />
              </span>
              {fact.label}
            </dt>
            <dd className="text-right text-[16px] font-semibold text-fg">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
