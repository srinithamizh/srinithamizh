import type { HTMLAttributes } from "react";
import { cx } from "@/utils/classNames";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "footer";
}

/** Centers content to the site's max width. */
export default function Container({ as: Tag = "div", className, ...rest }: ContainerProps) {
  return (
    <Tag
      className={cx("mx-auto w-[min(var(--container-width),calc(100%_-_10vw))] max-phone:w-[calc(100%_-_40px)]", className)}
      {...rest}
    />
  );
}
