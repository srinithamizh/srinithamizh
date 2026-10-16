import type { IconType } from "react-icons";
import {
  LuArrowRight,
  LuAward,
  LuBriefcase,
  LuBuilding2,
  LuCalendar,
  LuCheck,
  LuChevronDown,
  LuCloud,
  LuCode,
  LuDownload,
  LuExternalLink,
  LuGraduationCap,
  LuGithub,
  LuLayers,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuMoon,
  LuStar,
  LuSun,
  LuTrophy,
  LuWrench,
  LuX,
} from "react-icons/lu";

/** Icons used across the site (Lucide set via react-icons). Add new ones here. */
const ICONS = {
  arrow: LuArrowRight,
  award: LuAward,
  briefcase: LuBriefcase,
  building: LuBuilding2,
  calendar: LuCalendar,
  check: LuCheck,
  chevron: LuChevronDown,
  close: LuX,
  cloud: LuCloud,
  code: LuCode,
  download: LuDownload,
  education: LuGraduationCap,
  external: LuExternalLink,
  github: LuGithub,
  layers: LuLayers,
  linkedin: LuLinkedin,
  mail: LuMail,
  pin: LuMapPin,
  moon: LuMoon,
  star: LuStar,
  sun: LuSun,
  trophy: LuTrophy,
  wrench: LuWrench,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof ICONS;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 18, className }: IconProps) {
  const Component = ICONS[name];
  return <Component aria-hidden="true" size={size} strokeWidth={1.8} className={className} />;
}
