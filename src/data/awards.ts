import type { Award } from "@/types";

const unsorted: Award[] = [
  {
    id: "mvp-2024",
    title: "MVP Award",
    from: "Genesys",
    year: 2024,
    month: 8,
    icon: "award",
    url: "https://www.credly.com/badges/55cbfeb1-b855-4f8d-bd2f-cb8804e7e048"
  },
  {
    id: "icon-award-2025",
    title: "Engineering Excellence",
    event: "Genesys Icon Award 2025",
    from: "Genesys",
    year: 2025,
    month: 7,
    icon: "trophy",
    url: "https://lnkd.in/p/g5t-EzBr"
  },
];

/** Newest first. */
export const awards: Award[] = [...unsorted].sort((a, b) => b.year - a.year || b.month - a.month);
