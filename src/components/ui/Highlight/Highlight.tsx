import type { ReactNode } from "react";

/** Accent-colored emphasis for headings. */
export default function Highlight({ children }: { children: ReactNode }) {
  return <em className="text-accent not-italic">{children}</em>;
}
