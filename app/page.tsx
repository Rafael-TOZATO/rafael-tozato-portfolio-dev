const featuredProjects = [
  { number: '01', category: 'HUB DE PROJETOS', title: 'Tozato Dev Hub', description: 'Hub de Projetos TozatoCode-AI com aplicações, laboratórios e soluções digitais do ecossistema.', href: 'https://tozato-dev-hub.vercel.app', github: 'https://github.com/Rafael-TOZATO/tozato-dev-hub', tags: ['Next.js', 'React', 'IA'] },
  { number: '02', category: 'CERTIFICAÇÕES & RETROSPECTIVA', title: 'Dashboard de Certificados', description: 'Retrospectiva profissional e painel de certificações para acompanhar a evolução da jornada.', href: '/Carrossel_Retrospectiva_GitHub_Rafael_Tozato.pdf', github: 'https://github.com/Rafael-TOZATO/h-folio', tags: ['Dashboard', 'BI', 'Portfolio'] },
]

const projectGroups = [
  { title: 'Hubs & Aplicações', projects: [
    { number: '03', title: 'Aurora BI DIO', description: 'Análise e visualização de dados para transformar informações em decisões.', href: 'https://aurora-bi-dio.lovable.app', github: 'https://github.com/Rafael-TOZATO', tags: ['BI', 'Analytics'] },
    { number: '04', title: 'Geo Explorer', description: 'Exploração visual de dados geográficos e mapas interativos.', href: '#', github: 'https://github.com/Rafael-TOZATO/geo-explorer', tags: ['Maps', 'Data'] },
  ] },
  { title: 'Dashboards & BI', projects: [
    { number: '05', title: 'Análise de Vendas Financials', description: 'Dashboard financeiro com indicadores de vendas, desempenho e oportunidades.', href: '#', github: 'https://github.com/Rafael-TOZATO', tags: ['Power BI', 'DAX'] },
    { number: '06', title: 'Portfólio Retrospectiva', description: 'Registro visual de projetos, aprendizados e marcos profissionais.', href: '/Carrossel_Retrospectiva_GitHub_Rafael_Tozato.pdf', github: 'https://github.com/Rafael-TOZATO/h-folio', tags: ['Portfolio', 'PDF'] },
  ] },
  { title: 'Automação & Workflows', projects: [
    { number: '07', title: 'Pipeline Pagamentos', description: 'Automação para organizar e acompanhar fluxos de pagamentos.', href: '#', github: 'https://github.com/Rafael-TOZATO/pipeline-pagamentos', tags: ['Automation', 'Python'] },
    { number: '08', title: 'n8n Cobranças Inteligentes', description: 'Workflows inteligentes para automação de cobranças e notificações.', href: '#', github: 'https://github.com/Rafael-TOZATO/n8n-cobrancas-inteligentes', tags: ['n8n', 'Workflows'] },
  ] },
  { title: 'Repositórios & Labs', projects: [
    { number: '09', title: 'ATS Resume Generator', description: 'Gerador inteligente de currículos otimizado para sistemas ATS.', href: '#', github: 'https://github.com/Rafael-TOZATO', tags: ['AI', 'Web'] },
    { number: '10', title: 'TozatoCode Labs', description: 'Experimentos e estudos aplicados em desenvolvimento web e IA.', href: 'https://github.com/Rafael-TOZATO', github: 'https://github.com/Rafael-TOZATO', tags: ['Labs', 'Open Source'] },
  ] },
]

function ProjectCard({ project }: { project: typeof featuredProjects[number] }) {
  const bannerClass = project.title.toLowerCase().replaceAll(' ', '-')
  return <article className="project-card"><div className={`project-banner ${bannerClass}`} aria-hidden="true"><span>{project.category}</span></div><div className="project-card-content"><span className="project-number">{project.number}</span><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={project.github} target="_blank" rel="noreferrer">Ver código no GitHub ↗</a><a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}>Acessar projeto ↗</a></div></div></article>
}

export default function Page() {
  return <main className="site-shell">
    <header className="site-header"><a className="brand" href="#inicio" aria-label="Ir para o início"><strong>RT</strong><span>PORTFÓLIO / 2026</span></a><nav aria-label="Navegação principal"><a href="#perfil">Perfil profissional</a><a href="#projetos">Explorar projetos</a></nav></header>
    <section id="inicio" className="hero"><p className="eyebrow">HUB DE PROJETOS</p><h1>Olá, eu sou<br /><em>Rafael.</em></h1><p className="hero-copy">Engenheiro de Software focado em Desenvolvimento Web & IA. Este é o meu espaço para compartilhar soluções que unem código, estratégia e impacto.</p><p className="availability">DISPONÍVEL PARA NOVOS PROJETOS</p></section>
    <section id="perfil" className="profile-section"><p className="eyebrow">PERFIL PROFISSIONAL</p><h2>Currículo & governança</h2><p>Conheça minha trajetória, competências e os princípios que orientam meu trabalho em Engenharia de Software, Desenvolvimento Web e Inteligência Artificial.</p><a className="text-link" href="/Carrossel_Retrospectiva_GitHub_Rafael_Tozato.pdf">Ver currículo e perfil ↗</a></section>
    <section id="projetos" className="projects-section"><div className="section-heading"><div><p className="eyebrow">ECOSSISTEMA DE PROJETOS</p><h2>Projetos em foco</h2></div><span>10 projetos reunidos / 2026</span></div><div className="featured-grid">{featuredProjects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>{projectGroups.map((group) => <div className="project-group" key={group.title}><h3>{group.title}</h3><div className="project-grid">{group.projects.map((project) => <ProjectCard key={project.number} project={{ ...project, category: group.title }} />)}</div></div>)}</section>
    <footer><span>© 2026 Rafael Ornelas Tozato</span><a href="https://github.com/Rafael-TOZATO">GitHub ↗</a><a href="https://www.linkedin.com/in/rafael-ornelas-tozato">LinkedIn ↗</a></footer>
  </main>
}
