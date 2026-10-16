import type { Fact } from "@/types";
import { formatExperience } from "@/utils/experience";
import { experiences } from "./experience";

/** Start of professional experience (month is 0-based: 8 = September). */
const CAREER_START = new Date(2020, 8, 1);

export const profile = {
  name: "Thamizharasan Srinivasan",
  email: "srinithamizh@gmail.com",
  defaultSubject: "Mail from srinithamizh.in",
  resume: {
    href: "data:text/plain;charset=utf-8,Thamizharasan%20Srinivasan%0ASenior%20Software%20Engineer%20%7C%20Chennai%2C%20India%0A%0AReplace%20this%20placeholder%20with%20the%20final%20resume.",
    fileName: "Thamizharasan-Srinivasan-Resume.txt",
  },
  hero: {
    availability: "Open to Flexible / Remote role",
    kicker: "SENIOR SOFTWARE ENGINEER · CHENNAI, INDIA",
    headingLead: "I build products that",
    headingAccent: "move ideas forward.",
    intro:
      "I'm Thamizharasan Srinivasan, a senior software engineer. I take features from idea to production, building the interfaces people use and the services behind them, with a focus on reliability, security and clean developer experience.",
    portrait: {
      src: "/Thamizharasan_Srinivasan.jpg",
      alt: "Portrait of Thamizharasan Srinivasan",
      caption: ["Building Products", "Exploring AI tools"],
    },
  },
  about: {
    paragraphs: [
      "I started as an intern and have grown into a senior software engineer working on various Genesys products. I build across the stack, from user interfaces to backend services, turning ideas into products. I also care about the things that keep software dependable: thorough testing, secure dependencies, and maintainable code.",
      "Outside of code, I create illustrations and digital art. I believe the best technology feels calm, clear, and quietly capable, and design is where I practice that.",
    ],
    facts: [
      { label: "BASED IN", value: "Chennai, India", icon: "pin" },
      { label: "EXPERIENCE", value: formatExperience(CAREER_START), icon: "briefcase" },
      { label: "CURRENTLY AT", value: experiences[0].company, icon: "building" },
    ] satisfies Fact[],
  },
};
