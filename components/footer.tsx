import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-page flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <p>Next.js • React • TypeScript • Tailwind CSS • Vercel</p>
      </div>
    </footer>
  );
}
