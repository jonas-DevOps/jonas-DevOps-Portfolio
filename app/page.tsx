import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArrowIcon, CodeIcon, GithubIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { education, focusAreas, profile, projects, skillGroups } from "@/data/portfolio";
import { Analytics } from "@vercel/analytics/next";

const areaNumbers = ["01", "02", "03", "04", "05", "06"];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="relative isolate overflow-hidden border-b border-white/8">
          <div className="grid-bg absolute inset-0 -z-10" />
          <div className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.18fr_.82fr]">
            <div>
              <span className="eyebrow">Portfólio • jonas-DevOps</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Software bem estruturado começa por uma <span className="text-teal-300">base forte.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">{profile.headline}</p>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">{profile.role}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projetos" className="inline-flex items-center gap-2 rounded-xl bg-teal-300 px-5 py-3 font-black text-slate-950 transition hover:bg-teal-200">
                  Ver projetos <ArrowIcon className="size-4" />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-3 font-bold transition hover:border-white/25 hover:bg-white/8">
                  <GithubIcon className="size-5" /> GitHub
                </a>
              </div>
            </div>

            <div className="glass-card relative rounded-[2rem] p-6 sm:p-8">
              <div className="absolute -right-8 -top-8 size-28 rounded-full bg-blue-400/10 blur-2xl" />
              <div className="flex items-center gap-4">
                <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-blue-400 text-xl font-black text-slate-950">JB</div>
                <div>
                  <p className="text-xl font-black text-white">{profile.name}</p>
                  <p className="mt-1 text-sm text-slate-400">Engenharia + Desenvolvimento + Operações</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  [String(projects.length), "projetos em destaque"],
                  [String(skillGroups.length), "áreas de conhecimento"],
                  ["Full Stack", "objetivo de carreira"],
                  ["DevOps", "evolução contínua"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                    <p className="text-xl font-black text-white">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-teal-300/15 bg-teal-300/[0.055] p-4 text-sm leading-6 text-slate-300">
                <CodeIcon className="mb-3 size-5 text-teal-300" />
                Este portfólio também é um projeto: código versionado no GitHub, validação em CI e deploy contínuo pela Vercel.
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section-space">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
              <SectionTitle eyebrow="Sobre mim" title="Tecnologia com visão de processo e produto." />
              <div className="space-y-5 text-lg leading-8 text-slate-400">
                <p>{profile.summary}</p>
                <p>{profile.objective}</p>
                <p>{profile.experience}</p>
              </div>
            </div>
            <div className="mt-12 border-t border-white/8 pt-10">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-300">Em que estou focado</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {focusAreas.map((area, index) => (
                  <article key={area.title} className="focus-card rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-teal-300/20 bg-teal-300/[0.06] text-xs font-black text-teal-300">{areaNumbers[index]}</span>
                      <div>
                        <h3 className="font-black text-white">{area.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{area.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="section-space border-y border-white/8 bg-white/[0.015]">
          <div className="container-page">
            <SectionTitle eyebrow="Tecnologias" title="Uma stack alinhada ao que estudo e aplico nos projetos." description="As mesmas tecnologias apresentadas no README do GitHub, organizadas aqui por área para manter o portfólio e o perfil sempre consistentes." />
            <div className="grid gap-4 md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <article key={group.title} className={`glass-card rounded-2xl p-6 ${index === skillGroups.length - 1 ? "md:col-span-2" : ""}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-300">Área 0{index + 1}</p>
                      <h3 className="mt-2 text-xl font-black text-white">{group.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-slate-400">{group.items.length} {group.items.length === 1 ? "item" : "itens"}</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tech-pill rounded-lg border border-white/8 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-300">{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="section-space">
          <div className="container-page">
            <SectionTitle eyebrow="Projetos" title="Experiências que transformaram estudo em prática." description="Os mesmos projetos destacados no README, reunindo software, produto, dados, UX/UI, automação e engenharia aplicada." />
            <div className="grid gap-6 lg:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
          </div>
        </section>

        <section id="formacao" className="section-space border-y border-white/8 bg-white/[0.015]">
          <div className="container-page">
            <SectionTitle eyebrow="Formação" title="Gestão e engenharia trabalhando juntas." description="Minha formação em gestão complementa a evolução técnica com visão de processos, planejamento, requisitos, organização de projetos e produto." />
            <div className="grid gap-4 lg:grid-cols-3">
              {education.map((item, index) => (
                <article key={item.title} className="glass-card rounded-2xl p-6">
                  <span className="text-sm font-black text-teal-300">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 font-semibold text-slate-300">{item.organization}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-space">
          <div className="container-page">
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-teal-300/10 blur-3xl" />
              <span className="eyebrow">Contato</span>
              <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">Vamos construir algo que tenha uma base realmente boa.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Acompanhe meus projetos, estudos e evolução técnica. Os principais canais que também aparecem no README estão reunidos aqui.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-slate-950 transition hover:bg-slate-200"><GithubIcon className="size-5" /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/12 px-5 py-3 font-bold transition hover:border-teal-300/40 hover:bg-white/5">LinkedIn</a>
                <a href={`mailto:${profile.email}`} className="rounded-xl border border-white/12 px-5 py-3 font-bold transition hover:border-teal-300/40 hover:bg-white/5">E-mail</a>
                <a href={profile.youtube} target="_blank" rel="noreferrer" className="rounded-xl border border-white/12 px-5 py-3 font-bold transition hover:border-teal-300/40 hover:bg-white/5">YouTube</a>
                <a href={profile.instagram} target="_blank" rel="noreferrer" className="rounded-xl border border-white/12 px-5 py-3 font-bold transition hover:border-teal-300/40 hover:bg-white/5">Instagram</a>
                <a href={profile.twitch} target="_blank" rel="noreferrer" className="rounded-xl border border-white/12 px-5 py-3 font-bold transition hover:border-teal-300/40 hover:bg-white/5">Twitch</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
