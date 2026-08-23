import type { MetadataRoute } from "next";
import { profile } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} | Portfólio`,
    short_name: "jonas-DevOps",
    description: profile.headline,
    start_url: "/",
    display: "standalone",
    background_color: "#070b14",
    theme_color: "#070b14",
  };
}
