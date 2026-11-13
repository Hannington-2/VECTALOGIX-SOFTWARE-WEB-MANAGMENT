import { FiCode, FiGlobe, FiZap, FiCloud } from "react-icons/fi";
import {
  HiOutlineCpuChip,
  HiOutlinePuzzlePiece,
} from "react-icons/hi2";

export const themes = {
  Software: {
    icon: FiCode,
    gradient: "from-indigo-600 via-indigo-700 to-blue-700",
    light: "bg-indigo-50",
    text: "text-indigo-700",
    ring: "ring-indigo-200",
    chipBg: "bg-indigo-100",
    chipText: "text-indigo-800",
    accent: "text-indigo-600",
    glow: "shadow-indigo-500/20",
    pattern:
      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0, transparent 40%)",
  },
  Web: {
    icon: FiGlobe,
    gradient: "from-cyan-500 via-teal-600 to-emerald-600",
    light: "bg-cyan-50",
    text: "text-cyan-700",
    ring: "ring-cyan-200",
    chipBg: "bg-cyan-100",
    chipText: "text-cyan-800",
    accent: "text-cyan-600",
    glow: "shadow-cyan-500/20",
    pattern:
      "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0, transparent 40%)",
  },
  Automation: {
    icon: FiZap,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    light: "bg-amber-50",
    text: "text-amber-700",
    ring: "ring-amber-200",
    chipBg: "bg-amber-100",
    chipText: "text-amber-800",
    accent: "text-amber-600",
    glow: "shadow-amber-500/20",
    pattern:
      "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.2) 0, transparent 50%)",
  },
  AI: {
    icon: HiOutlineCpuChip,
    gradient: "from-fuchsia-600 via-purple-600 to-indigo-600",
    light: "bg-fuchsia-50",
    text: "text-fuchsia-700",
    ring: "ring-fuchsia-200",
    chipBg: "bg-fuchsia-100",
    chipText: "text-fuchsia-800",
    accent: "text-fuchsia-600",
    glow: "shadow-fuchsia-500/20",
    pattern:
      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18) 0, transparent 45%)",
  },
  API: {
    icon: HiOutlinePuzzlePiece,
    gradient: "from-rose-500 via-pink-600 to-purple-600",
    light: "bg-rose-50",
    text: "text-rose-700",
    ring: "ring-rose-200",
    chipBg: "bg-rose-100",
    chipText: "text-rose-800",
    accent: "text-rose-600",
    glow: "shadow-rose-500/20",
    pattern:
      "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.18) 0, transparent 45%)",
  },
  Cloud: {
    icon: FiCloud,
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    light: "bg-sky-50",
    text: "text-sky-700",
    ring: "ring-sky-200",
    chipBg: "bg-sky-100",
    chipText: "text-sky-800",
    accent: "text-sky-600",
    glow: "shadow-sky-500/20",
    pattern:
      "radial-gradient(circle at 40% 70%, rgba(255,255,255,0.18) 0, transparent 45%)",
  },
};

export const getTheme = (category) => themes[category] || themes.Software;