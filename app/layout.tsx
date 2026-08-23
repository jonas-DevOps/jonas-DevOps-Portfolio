import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { profile } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jonas-devops.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Portfólio`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Jonatas Barbosa dos Santos",
    "jonas-DevOps",
    "desenvolvedor full stack",
    "DevOps",
    "engenharia da computação",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: `${profile.name} | Portfólio`,
    description: profile.headline,
    siteName: "jonas-DevOps",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Portfólio`,
    description: profile.headline,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
