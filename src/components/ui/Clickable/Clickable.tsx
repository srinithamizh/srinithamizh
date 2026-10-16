import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ClickableProps = AnchorProps | NativeButtonProps;

/**
 * Renders an <a> when `href` is provided, otherwise a <button>.
 * Base for Button and IconButton so both support links and actions.
 */
export default function Clickable(props: ClickableProps) {
  if (props.href !== undefined) {
    const { target, rel, ...rest } = props;
    return <a {...rest} target={target} rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)} />;
  }
  const { type = "button", ...rest } = props;
  return <button type={type} {...rest} />;
}
