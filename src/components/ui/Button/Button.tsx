import Clickable, { type ClickableProps } from "../Clickable/Clickable";
import { cx } from "@/utils/classNames";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ClickableProps & { variant?: ButtonVariant };

const base =
  "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-[9px] border border-transparent px-5 text-[13px] font-semibold transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-strong",
  secondary: "border-line bg-surface text-fg hover:border-accent",
};

export default function Button({ variant = "primary", className, ...rest }: ButtonProps) {
  return <Clickable className={cx(base, variants[variant], className)} {...rest} />;
}
