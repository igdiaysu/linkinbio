import { MonitorPlay, Palette, Globe, Camera, LucideIcon } from "lucide-react";

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
  iconColor: string;
  borderColor: string;
  hoverBorder: string;
  hoverShadow: string;
}

export const links: LinkItem[] = [
  {
    id: "kick-main",
    title: "Kick",
    url: "https://kick.com/aysart",
    icon: MonitorPlay,
    iconColor: "text-green-400",
    borderColor: "border-green-400/40",
    hoverBorder: "hover:border-green-400/60",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://instagram.com/theaysart",
    icon: Camera,
    iconColor: "text-pink-400",
    borderColor: "border-pink-400/40",
    hoverBorder: "hover:border-pink-400/60",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(244,114,182,0.4)]",
  },
  {
    id: "discord",
    title: "Discord",
    url: "https://igdiaysu.com",
    icon: Globe,
    iconColor: "text-indigo-400",
    borderColor: "border-indigo-400/40",
    hoverBorder: "hover:border-indigo-400/60",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(129,140,248,0.4)]",
  },
  {
    id: "pinterest",
    title: "Pinterest",
    url: "https://pinterest.com/igdiaysu",
    icon: Palette,
    iconColor: "text-rose-400",
    borderColor: "border-rose-400/40",
    hoverBorder: "hover:border-rose-400/60",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(244,114,182,0.4)]",
  },
  {
    id: "twitch",
    title: "Twitch",
    url: "https://twitch.tv/aysart",
    icon: MonitorPlay,
    iconColor: "text-purple-400",
    borderColor: "border-purple-400/40",
    hoverBorder: "hover:border-purple-400/60",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]",
  },

];