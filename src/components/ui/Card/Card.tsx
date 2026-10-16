import type { HTMLAttributes } from "react";
import { cx } from "@/utils/classNames";

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "aside";
  /** Adds a lift + accent border on hover. */
  interactive?: boolean;
}

const base = "rounded-[14px] border border-line bg-surface";
const interactiveStyles =
  "transition duration-250 hover:-translate-y-[5px] hover:border-[color-mix(in_srgb,var(--accent)_60%,var(--line))] hover:shadow-[0_16px_45px_rgba(0,0,0,.14)]";

export default function Card({ as: Tag = "div", interactive = false, className, ...rest }: CardProps) {
  return <Tag className={cx(base, interactive && interactiveStyles, className)} {...rest} />;
}
