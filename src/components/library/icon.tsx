import {
  AudioLines,
  BarChart3,
  Bot,
  Briefcase,
  CircleDollarSign,
  Code2,
  Compass,
  Grid2x2,
  GraduationCap,
  Headphones,
  Home,
  Megaphone,
  Microscope,
  Palette,
  PenLine,
  Scale,
  Search,
  Settings2,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";

const ICONS = {
  AudioLines,
  BarChart3,
  Bot,
  Briefcase,
  CircleDollarSign,
  Code2,
  Compass,
  Grid2x2,
  GraduationCap,
  Headphones,
  Home,
  Megaphone,
  Microscope,
  Palette,
  PenLine,
  Scale,
  Search,
  Settings2,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} as const;

export type IconName = keyof typeof ICONS;

export function CategoryIcon({
  name,
  className,
  size = 23,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Cmp = ICONS[name as IconName] ?? Grid2x2;
  return <Cmp width={size} height={size} className={className} strokeWidth={1.8} aria-hidden="true" />;
}
