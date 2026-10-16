import { cx } from "@/utils/classNames";
import type { ProjectAccent } from "@/types";

interface ProjectVisualProps {
  accent: ProjectAccent;
  title: string;
  className?: string;
}

const gradients: Record<ProjectAccent, string> = {
  blue: "bg-[linear-gradient(135deg,#0c2d4f,#0e7490)]",
  violet: "bg-[linear-gradient(135deg,#25255d,#5b4daf)]",
  green: "bg-[linear-gradient(135deg,#0c3c3a,#1f766a)]",
  orange: "bg-[linear-gradient(135deg,#45281b,#a75431)]",
};

const decoLine = "absolute h-[5px] rounded bg-white/12";

/** Decorative app-window mockup, tinted by the project accent. */
export default function ProjectVisual({ accent, title, className }: ProjectVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={cx(
        "grid h-[270px] [place-items:end_center] overflow-hidden border-b border-line max-phone:h-[225px]",
        gradients[accent],
        className,
      )}
    >
      <div className="h-[78%] w-[78%] rounded-t-[9px] border border-white/18 bg-[rgba(8,17,31,.92)] shadow-[0_24px_60px_rgba(0,0,0,.3)]">
        <div className="flex h-[27px] items-center gap-[5px] border-b border-white/10 px-2.5">
          {[0, 1, 2].map((dot) => (
            <i key={dot} className="size-[5px] rounded-full bg-white/35" />
          ))}
        </div>
        <div className="grid h-[calc(100%_-_27px)] grid-cols-[26%_1fr] gap-3 p-3">
          <div className="rounded-sm bg-white/6" />
          <div className="relative grid place-items-center rounded-sm bg-white/4">
            <span className={cx(decoLine, "top-[13%] right-[40%] left-[12%]")} />
            <strong className="grid size-[54px] place-items-center rounded-[14px] bg-white/10 font-display text-lg font-semibold text-white">
              {title.substring(0, 2).toUpperCase()}
            </strong>
            <span className={cx(decoLine, "right-[18%] bottom-[13%] left-[12%]")} />
          </div>
        </div>
      </div>
    </div>
  );
}
