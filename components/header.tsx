import { GithubIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

const links = [
  ["Sobre", "#sobre"],
  ["Tecnologias", "#tecnologias"],
  ["Projetos", "#projetos"],
  ["Formação", "#formacao"],
  ["Contato", "#contato"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#070b14]/80 backdrop-blur-xl">
      <div className="container-page flex min-h-16 items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3 font-black tracking-tight" aria-label="Ir para o início">
          <span className="grid size-9 place-items-center rounded-xl bg-teal-300 text-sm text-slate-950">JB</span>
          <span className="hidden sm:block">jonas-DevOps</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-3.5 py-2 text-sm font-semibold transition hover:border-teal-300/50 hover:bg-white/5"
        >
          <GithubIcon className="size-4" />
          GitHub
        </a>
      </div>
    </header>
  );
}
