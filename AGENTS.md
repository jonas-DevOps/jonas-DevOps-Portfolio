# AGENTS.md

## Objetivo
Este repositório contém o portfólio profissional de Jonatas Barbosa dos Santos.

## Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- Vercel

## Estrutura principal
- `app/`: rotas, layout, metadata, sitemap, robots e estilos globais.
- `components/`: componentes reutilizáveis.
- `data/portfolio.ts`: fonte principal de conteúdo do portfólio.
- `public/projects/`: capas locais dos projetos.
- `.github/`: automações de CI e Dependabot.

## Regras de manutenção
1. Manter dados de conteúdo em `data/portfolio.ts` sempre que possível.
2. Evitar dependências novas sem necessidade clara.
3. Preservar acessibilidade, responsividade e HTML semântico.
4. Executar `npm run lint`, `npm run typecheck` e `npm run build` antes de merge/deploy.
5. Nunca commitar tokens, senhas ou arquivos `.env` reais.
