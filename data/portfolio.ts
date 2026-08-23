export type Project = {
  title: string;
  subtitle: string;
  description: string;
  contribution: string;
  technologies: string[];
  image: string;
  status: "Projeto acadêmico" | "Projeto com cliente real" | "Em desenvolvimento";
  repository?: string;
  demo?: string;
};

export const profile = {
  name: "Jonatas Barbosa dos Santos",
  shortName: "Jonatas",
  githubUser: "jonas-DevOps",
  role: "Desenvolvimento Full Stack • DevOps • Engenharia da Computação",
  headline: "Construindo software com base sólida, organização e foco em experiência real.",
  summary:
    "Sou estudante de Engenharia da Computação no Centro Universitário UNA, com formação em Administração de Empresas e Técnico em Administração. Essa combinação me ajuda a enxergar tecnologia não apenas pelo código, mas também pelos processos, pela experiência de quem utiliza a solução e pelo valor que ela entrega.",
  objective:
    "Meu objetivo é evoluir profissionalmente nas áreas de Desenvolvimento Full Stack e DevOps, construindo aplicações com uma base sólida: requisitos claros, código organizado, versionamento, dados consistentes, integração contínua e uma boa experiência de uso.",
  experience:
    "Atualmente venho desenvolvendo e participando de projetos envolvendo aplicações web, UX/UI, banco de dados, APIs, IoT, análise de dados e automação. Gosto de acompanhar o projeto desde a organização inicial do problema até a construção e publicação da solução, conectando requisitos, fluxo, interface, arquitetura, dados e código.",
  github: "https://github.com/jonas-DevOps",
  linkedin: "https://www.linkedin.com/in/jonatas-barbosa-b6597627b",
  email: "jonatasiub1@gmail.com",
  youtube: "https://www.youtube.com/@JonatasBarbosaS",
  instagram: "https://www.instagram.com/jonas_develop",
  twitch: "https://www.twitch.tv/fairycatcher",
  resumeUrl: "",
};

export const focusAreas = [
  { title: "Arquitetura & organização", description: "Projetos com bases sustentáveis, requisitos claros e estrutura preparada para evolução." },
  { title: "Full Stack", description: "Desenvolvimento Front-end e Back-end com TypeScript, React, Next.js, Node.js e outras tecnologias." },
  { title: "DevOps", description: "Git, GitHub Actions, Docker, CI/CD e deploy, conectando desenvolvimento e entrega contínua." },
  { title: "Dados", description: "Modelagem, integração e utilização de bancos de dados relacionais e não relacionais." },
  { title: "UX/UI", description: "Interfaces construídas pensando na jornada real do usuário e na clareza dos fluxos." },
  { title: "IA & integração", description: "Exploração de IA, agentes, dados e novas formas de integração entre sistemas." },
];

export const skillGroups = [
  {
    title: "Front-end",
    description: "Interfaces modernas, responsivas e orientadas à experiência do usuário.",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Back-end",
    description: "APIs, serviços, regras de negócio e integração entre aplicações.",
    items: ["Node.js", "NestJS", "Java", "Spring Boot", "C#", ".NET", "Python", "FastAPI", "Django", "Kotlin"],
  },
  {
    title: "Dados",
    description: "Persistência, modelagem e organização de dados para aplicações e análises.",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Ambiente",
    description: "Versionamento, automação, containers, ambientes e publicação contínua.",
    items: ["Git", "GitHub", "GitLab", "Docker", "Linux", "VS Code", "Vercel"],
  },
  {
    title: "Produto & Design",
    description: "Prototipação, organização visual e construção da experiência antes do código.",
    items: ["Figma"],
  },
];

export const projects: Project[] = [
  {
    title: "NuPrecin",
    subtitle: "Comparador inteligente de preços",
    description: "Projeto de comparação de preços com fluxos para usuários e empresas, pensado para facilitar pesquisa, favoritos, filtros e solicitações de orçamento.",
    contribution: "Atuação em Front-end e UX/UI, com construção de fluxos, componentes no Figma, organização da navegação e estruturação técnica do projeto para evolução em código.",
    technologies: ["React", "TypeScript", "Node.js", "Figma", "Git"],
    image: "/projects/nuprecin.svg",
    status: "Em desenvolvimento",
  },
  {
    title: "HubTech Support",
    subtitle: "Central de chamados de suporte técnico",
    description: "Solução para centralizar chamados de TI, organizar categorias, prioridades, anexos, acompanhamento e indicadores gerenciais, substituindo fluxos informais.",
    contribution: "Participação na definição de requisitos, fluxos, documentação, prototipação, modelagem de banco de dados e apresentação do produto.",
    technologies: ["MySQL", "Modelagem", "UX/UI", "Figma", "Requisitos"],
    image: "/projects/hubtech.svg",
    status: "Projeto acadêmico",
  },
  {
    title: "BusMove",
    subtitle: "Mobilidade urbana conectada",
    description: "Aplicação voltada ao transporte público com horários, posição em tempo real, previsão de chegada, rotas alternativas, alertas e recursos de pagamento.",
    contribution: "Desenvolvimento do conceito, validação do problema, organização dos fluxos, prototipação das telas e construção do MVP para apresentação.",
    technologies: ["UX/UI", "Figma", "MVP", "Pesquisa", "Produto Digital"],
    image: "/projects/busmove.svg",
    status: "Projeto acadêmico",
  },
  {
    title: "Irrigação Inteligente",
    subtitle: "Controle automático com PID e lógica Fuzzy",
    description: "Protótipo de irrigação inteligente com ESP32, sensores e reservatório, usando umidade do solo, regras de segurança e comparação entre controle PID e Fuzzy.",
    contribution: "Participação na arquitetura do protótipo, lógica de controle, definição de sensores, regras operacionais, modelagem e documentação técnica em formato de artigo.",
    technologies: ["ESP32", "C/C++", "PID", "Lógica Fuzzy", "Sensores", "IoT"],
    image: "/projects/irrigacao.svg",
    status: "Projeto acadêmico",
  },
  {
    title: "Charcutaria Mantovani",
    subtitle: "Gestão operacional e comercial",
    description: "Plataforma para centralizar catálogo, pedidos PF/PJ, clientes, estoque, lotes, perdas, pagamentos e acompanhamento operacional de uma charcutaria.",
    contribution: "Organização do MVP, divisão por módulos, prototipação no Figma, padronização visual e definição dos principais fluxos de gestão e consulta de produtos.",
    technologies: ["Figma", "UX/UI", "Requisitos", "MVP", "Modelagem de processos"],
    image: "/projects/mantovani.svg",
    status: "Projeto com cliente real",
  },
];

export const education = [
  { title: "Engenharia da Computação", organization: "Centro Universitário UNA", detail: "Graduação em andamento • desenvolvimento de software, dados, sistemas e computação aplicada." },
  { title: "Administração de Empresas", organization: "Formação concluída", detail: "Base em gestão, processos, planejamento e visão de negócio aplicada à tecnologia." },
  { title: "Técnico em Administração", organization: "Formação técnica concluída", detail: "Fundamentos de organização, rotinas administrativas e processos empresariais." },
];
