import type { HTMLAttributes } from "react";
import { cx } from "@/utils/classNames";

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "md";
}

const sizes = {
  md: "text-[11px] leading-[1.4] tracking-[.13em]",
  sm: "text-[9px] tracking-[.12em]",
};

/** Small uppercase mono label in the accent color. */
export default function Eyebrow({ size = "md", className, ...rest }: EyebrowProps) {
  return <p className={cx("font-mono font-medium text-accent", sizes[size], className)} {...rest} />;
}
