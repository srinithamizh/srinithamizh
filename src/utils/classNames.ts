import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Joins class names and resolves Tailwind conflicts, so a `className` passed
 * from outside reliably overrides a component's defaults:
 * cx("p-4 text-sm", isOn && "text-accent", className)
 */
export function cx(...values: ClassValue[]): string {
  return twMerge(clsx(values));
}
