import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { ArrowIcon, GithubIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card group overflow-hidden rounded-3xl">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/8 bg-slate-950">
        <Image
          src={project.image}
          alt={`Capa do projeto ${project.title}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.025]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-teal-300">{project.subtitle}</p>
            <h3 className="mt-1 text-2xl font-black text-white">{project.title}</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
            {project.status}
          </span>
        </div>

        <p className="mt-5 leading-7 text-slate-400">{project.description}</p>
        <p className="mt-4 border-l-2 border-teal-300/60 pl-4 text-sm leading-6 text-slate-300">
          <strong className="text-white">Minha contribuição:</strong> {project.contribution}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-lg bg-slate-800/80 px-2.5 py-1.5 text-xs font-semibold text-slate-300">
              {technology}
            </span>
          ))}
        </div>

        {project.repository || project.demo ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.repository ? (
              <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-teal-300">
                <GithubIcon className="size-4" /> Código
              </a>
            ) : null}
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-teal-300">
                Ver projeto <ArrowIcon className="size-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
