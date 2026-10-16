import type { ReactNode } from "react";
import Container from "../Container/Container";
import { cx } from "@/utils/classNames";

interface SectionProps {
  id: string;
  /** "surface" renders a full-bleed contrasting band. */
  tone?: "default" | "surface";
  /** id of the heading that labels this section. */
  labelledBy?: string;
  className?: string;
  /** Classes for the inner container (e.g. to set up a grid or change padding). */
  contentClassName?: string;
  children: ReactNode;
}

export default function Section({
  id,
  tone = "default",
  labelledBy,
  className,
  contentClassName,
  children,
}: SectionProps) {
  const isSurface = tone === "surface";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(isSurface && "border-t border-line bg-surface", className)}
    >
      <Container className={cx("py-[120px] max-phone:py-[90px]", !isSurface && "border-t border-line", contentClassName)}>
        {children}
      </Container>
    </section>
  );
}
