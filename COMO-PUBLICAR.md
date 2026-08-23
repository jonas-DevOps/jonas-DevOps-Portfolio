# Como publicar este portfólio

## 1. Abrir no VS Code
Extraia a pasta `jonas-DevOps` e abra essa pasta no VS Code.

## 2. Instalar dependências
No terminal da pasta do projeto:

```bash
npm install
```

Isso criará `node_modules` e `package-lock.json`.

## 3. Testar localmente

```bash
npm run dev
```

Abra `http://localhost:3000`.

## 4. Fazer as validações

```bash
npm run lint
npm run typecheck
npm run build
```

## 5. Editar seus dados
Abra:

```text
data/portfolio.ts
```

Você pode preencher:
- `linkedin`
- `email`
- `resumeUrl`
- `repository` de cada projeto
- `demo` de cada projeto

Se os campos opcionais ficarem vazios, os respectivos botões não aparecem.

## 6. Enviar para o repositório existente
Se a pasta ainda não estiver ligada ao GitHub:

```bash
git init
git add .
git commit -m "feat: cria novo portfolio profissional"
git branch -M main
git remote add origin https://github.com/jonas-DevOps/jonas-DevOps.git
git push -u origin main
```

### Se o repositório remoto já possui arquivos
Como esse repositório pode já possuir um README, prefira primeiro salvar/cópia do conteúdo antigo. Depois você pode substituir o conteúdo pelo novo projeto.

## 7. Vercel
- Abra o Dashboard da Vercel.
- Add New → Project.
- Selecione `jonas-DevOps/jonas-DevOps`.
- Framework Preset: Next.js.
- Deploy.

Depois, se quiser usar seu domínio final em SEO/sitemap, crie na Vercel:

```text
NEXT_PUBLIC_SITE_URL=https://SEU-DOMINIO
```

Faça um novo deploy após alterar a variável.
