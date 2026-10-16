import type { MouseEvent } from "react";
import { cx } from "@/utils/classNames";

interface LogoProps {
  label: string;
  href?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Site logo. /public/logo.png is a white mark on transparent, so it is used as a
 * mask and filled with the theme text color (visible in both dark and light themes).
 */
export default function Logo({ label, href = "#hero", className, onClick }: LogoProps) {
  return (
    <a
      href={href}
      aria-label={label}
      onClick={onClick}
      className={cx(
        "block size-9 bg-fg transition-colors duration-200 hover:bg-accent [mask-image:url(/logo.png)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]",
        className,
      )}
    />
  );
}
