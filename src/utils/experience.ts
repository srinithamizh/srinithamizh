/**
 * Formats the time elapsed since `start` as a short label.
 *  - exact years            -> "4 years"
 *  - years plus extra months -> "4+ years"
 *  - under one year          -> "Less than a year"
 */
export function formatExperience(start: Date, now: Date = new Date()): string {
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;

  const years = Math.floor(months / 12);
  if (years < 1) return "Less than a year";

  const unit = years === 1 ? "year" : "years";
  return months % 12 > 0 ? `${years}+ ${unit}` : `${years} ${unit}`;
}
