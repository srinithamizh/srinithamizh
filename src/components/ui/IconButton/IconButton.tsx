import Clickable, { type ClickableProps } from "../Clickable/Clickable";
import Icon, { type IconName } from "../Icon/Icon";
import { cx } from "@/utils/classNames";
import type { DistributiveOmit } from "@/types/utils";

type IconButtonProps = DistributiveOmit<ClickableProps, "children" | "aria-label"> & {
  icon: IconName;
  /** Accessible name (required: there is no visible text). */
  label: string;
  size?: "sm" | "md";
};

const base =
  "grid cursor-pointer place-items-center border border-line bg-surface p-0 text-muted transition duration-200 hover:border-accent hover:bg-accent-soft hover:text-accent";

const sizes = {
  md: "size-10 rounded-[10px]",
  sm: "size-9 rounded-[9px] hover:-translate-y-0.5",
};

export default function IconButton({ icon, label, size = "md", className, ...rest }: IconButtonProps) {
  return (
    <Clickable aria-label={label} className={cx(base, sizes[size], className)} {...rest}>
      <Icon name={icon} />
    </Clickable>
  );
}
