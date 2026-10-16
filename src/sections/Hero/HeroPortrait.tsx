import { Icon } from "@/components/ui";

interface HeroPortraitProps {
  src: string;
  alt: string;
  /** [small line, strong line] */
  caption: string[];
}

/**
 * Animation layers (kept on separate elements so their transforms don't fight):
 *  root   -> entrance (fade/scale in once)
 *  float  -> slow idle floating loop
 *  frame  -> hover: lift, glow, photo zoom, back outline + caption slide
 */
export default function HeroPortrait({ src, alt, caption }: HeroPortraitProps) {
  const [lead, strong] = caption;

  return (
    <div className="group relative animate-portrait-in">
      <div className="animate-float">
        <div className="relative ml-auto aspect-[.82] w-[min(100%,390px)] cursor-pointer rounded-[20px] border border-line bg-surface p-2 shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.025] group-hover:border-accent group-hover:shadow-[0_30px_80px_color-mix(in_srgb,var(--accent)_28%,transparent)] before:absolute before:inset-[30px_-20px_-20px_30px] before:-z-1 before:rounded-[20px] before:border before:border-line before:transition-transform before:duration-500 before:ease-out group-hover:before:translate-x-2 group-hover:before:translate-y-2 after:pointer-events-none after:absolute after:inset-2 after:rounded-[13px] after:bg-[linear-gradient(180deg,transparent_55%,rgba(8,17,31,.6))] max-phone:aspect-square max-phone:rounded-full max-phone:p-1.5 max-phone:before:hidden max-phone:after:rounded-full">
          <div className="size-full overflow-hidden rounded-[13px] max-phone:rounded-full">
            <img
              src={src}
              alt={alt}
              className="block size-full object-cover object-[50%_15%] transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-[35px] -left-[45px] z-2 flex items-center gap-[11px] rounded-[10px] border border-line bg-surface px-4 py-[13px] text-[11px] leading-normal text-muted shadow-card transition-transform duration-500 ease-out group-hover:-translate-x-2 max-tablet:-left-6 max-phone:hidden">
            <Icon name="code" className="text-accent" />
            <span>
              {lead} &
              <br />
              <strong className="font-medium text-fg">{strong}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
