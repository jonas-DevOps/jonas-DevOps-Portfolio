import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page grid min-h-screen place-items-center py-20 text-center">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.25em] text-teal-300">404</p>
        <h1 className="mt-4 text-4xl font-black text-white">Página não encontrada</h1>
        <p className="mt-4 text-slate-400">O endereço que você tentou acessar não existe.</p>
        <Link href="/" className="mt-8 inline-block rounded-xl bg-teal-300 px-5 py-3 font-black text-slate-950">Voltar ao portfólio</Link>
      </div>
    </main>
  );
}
