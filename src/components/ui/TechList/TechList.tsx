import type { TechItem } from "@/types";
import { cx } from "@/utils/classNames";

interface TechListProps {
  items: TechItem[];
  className?: string;
  "aria-label"?: string;
}

/** Technology badges: brand icon + readable, high-contrast label. */
export default function TechList({ items, className, ...rest }: TechListProps) {
  return (
    <ul className={cx("flex flex-wrap gap-2", className)} {...rest}>
      {items.map(({ name, icon: TechIcon }) => (
        <li
          key={name}
          className="flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2 text-[13px] font-medium text-fg transition-colors duration-200 hover:border-accent"
        >
          {TechIcon && <TechIcon aria-hidden="true" size={15} className="shrink-0 text-accent" />}
          {name}
        </li>
      ))}
    </ul>
  );
}
