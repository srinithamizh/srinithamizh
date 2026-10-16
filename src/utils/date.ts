const formatter = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" });

/** formatMonthYear(2025, 7) -> "July 2025" (month is 1-12). */
export function formatMonthYear(year: number, month: number): string {
  return formatter.format(new Date(year, month - 1, 1));
}

/** isoMonth(2025, 7) -> "2025-07" (for <time dateTime>). */
export function isoMonth(year: number, month: number): string {
  return `${year}-${String(month).padStart(2, "0")}`;
}
