import type { HTMLAttributes } from "react";
import { useInView } from "@/hooks/useInView";
import { cx } from "@/utils/classNames";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  /** Stagger delay in ms. */
  delay?: number;
  /** Skip the animation and show immediately (e.g. above the fold). */
  immediate?: boolean;
}

/** Fades + slides children in when they scroll into view. */
export default function Reveal({ delay = 0, immediate = false, className, style, ...rest }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const visible = immediate || inView;

  return (
    <div
      ref={ref}
      className={cx(
        "transition-[opacity,translate] duration-[550ms] ease-[ease] motion-reduce:translate-y-0 motion-reduce:opacity-100",
        visible ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    />
  );
}
