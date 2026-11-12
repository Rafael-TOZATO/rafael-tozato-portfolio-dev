type Project = {
  number: string
  category: string
  title: string
  description: string
  href: string
  github: string
  tags: string[]
}

const projects: Project[] = [
  { number: '01', category: 'IA & ECOSSISTEMA', title: 'tozato-ai-core', description: 'Núcleo do ecossistema de aplicações e soluções inteligentes Tozato AI.', href: 'https://tozato-ai-core.vercel.app', github: 'https://github.com/Rafael-TOZATO/tozato-ai-core', tags: ['IA', 'Next.js', 'Ecossistema'] },
  { number: '02', category: 'PORTFÓLIO & WEB', title: 'h-folio', description: 'Portfólio profissional com projetos, competências e trajetória.', href: 'https://rafael-tozato-portfolio-dev.vercel.app', github: 'https://github.com/Rafael-TOZATO/h-folio', tags: ['Next.js', 'Portfolio', 'Web'] },
  { number: '03', category: 'AUTOMAÇÃO & FINTECH', title: 'pipeline-pagamentos', description: 'Pipeline para organizar e automatizar fluxos de pagamentos.', href: 'https://github.com/Rafael-TOZATO/pipeline-pagamentos', github: 'https://github.com/Rafael-TOZATO/pipeline-pagamentos', tags: ['Python', 'Automação', 'Fintech'] },
  { number: '04', category: 'IA & CARREIRA', title: 'ats-resume-generator-dio', description: 'Gerador de currículos com foco em compatibilidade com sistemas ATS.', href: 'https://github.com/Rafael-TOZATO/ats-resume-generator-dio', github: 'https://github.com/Rafael-TOZATO/ats-resume-generator-dio', tags: ['IA', 'ATS', 'DIO'] },
  { number: '05', category: 'AUTOMAÇÃO INTELIGENTE', title: 'n8n-cobrancas-inteligentes', description: 'Workflows para automatizar cobranças, notificações e acompanhamento.', href: 'https://github.com/Rafael-TOZATO/n8n-cobrancas-inteligentes', github: 'https://github.com/Rafael-TOZATO/n8n-cobrancas-inteligentes', tags: ['n8n', 'Workflows', 'IA'] },
  { number: '06', category: 'DADOS & BI', title: 'dashboard-analitico-financeiro-dio', description: 'Indicadores e visualizações para análise de desempenho financeiro.', href: 'https://github.com/Rafael-TOZATO/dashboard-analitico-financeiro-dio', github: 'https://github.com/Rafael-TOZATO/dashboard-analitico-financeiro-dio', tags: ['Power BI', 'Financeiro', 'DIO'] },
  { number: '07', category: 'IBM • IA & CLOUD', title: 'Bootcamp / Projetos IBM', description: 'Projetos e certificações em inteligência artificial, dados e cloud IBM.', href: 'https://github.com/Rafael-TOZATO?tab=repositories&q=ibm', github: 'https://github.com/Rafael-TOZATO?tab=repositories&q=ibm', tags: ['IBM', 'IA', 'Cloud'] },
  { number: '08', category: 'DADOS & GESTÃO', title: 'dashboard-gestao-rh-powerbi', description: 'Painel de gestão de pessoas para acompanhar indicadores e tendências de RH.', href: 'https://github.com/Rafael-TOZATO/dashboard-gestao-rh-powerbi', github: 'https://github.com/Rafael-TOZATO/dashboard-gestao-rh-powerbi', tags: ['Power BI', 'RH', 'Analytics'] },
  { number: '09', category: 'PESQUISA & IA', title: 'notebooklm-estudo-scr', description: 'Estudo e organização de conhecimento com NotebookLM aplicado ao SCR.', href: 'https://github.com/Rafael-TOZATO/notebooklm-estudo-scr', github: 'https://github.com/Rafael-TOZATO/notebooklm-estudo-scr', tags: ['NotebookLM', 'Pesquisa', 'IA'] },
  { number: '10', category: 'GRAFOS & RECOMENDAÇÃO', title: 'recomendacao-musicas-neo4j', description: 'Recomendação musical com modelagem de relações em grafos Neo4j.', href: 'https://github.com/Rafael-TOZATO/recomendacao-musicas-neo4j', github: 'https://github.com/Rafael-TOZATO/recomendacao-musicas-neo4j', tags: ['Neo4j', 'Graph', 'Recomendação'] },
]

const channels = [
  { label: 'App Ecosystem / Dev Hub', href: 'https://tozato-ai-core.vercel.app' },
  { label: 'GitHub', href: 'https://github.com/Rafael-TOZATO' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafaeltozato81' },
  { label: 'Microsoft Learn', href: 'https://learn.microsoft.com/pt-br/users/rafaelornelastozato-2209' },
  { label: 'Medium', href: 'https://medium.com/@ornelas.tozato' },
  { label: 'E-mail', href: 'mailto:ornelas.tozato@gmail.com' },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-banner" aria-hidden="true"><span>{project.category}</span></div>
      <div className="project-card-content">
        <span className="project-number">{project.number}</span>
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer">Ver Código no GitHub <span aria-hidden="true">↗</span></a>
          <a href={project.href} target="_blank" rel="noreferrer">Acessar Projeto <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  )
}

export default function Page() {
  return <main className="site-shell">
    <header className="site-header"><a className="brand" href="#inicio" aria-label="Ir para o início"><strong>RT</strong><span>PORTFÓLIO / 2026</span></a><nav aria-label="Navegação principal"><a href="#perfil">Perfil profissional</a><a href="#projetos">Explorar projetos</a></nav></header>
    <section id="inicio" className="hero"><p className="eyebrow">HUB DE PROJETOS</p><h1>Olá, eu sou<br /><em>Rafael.</em></h1><p className="hero-copy">Engenheiro de Software focado em Desenvolvimento Web &amp; IA. Este é o meu espaço para compartilhar soluções que unem código, estratégia e impacto.</p><p className="availability">DISPONÍVEL PARA NOVOS PROJETOS</p></section>
    <section id="perfil" className="profile-section"><p className="eyebrow">PERFIL PROFISSIONAL</p><h2>Currículo &amp; governança</h2><p>Conheça minha trajetória, competências e os princípios que orientam meu trabalho em Engenharia de Software, Desenvolvimento Web e Inteligência Artificial.</p><a className="text-link" href="https://github.com/Rafael-TOZATO/curriculo-profissional" target="_blank" rel="noreferrer">Ver currículo e perfil ↗</a></section>
    <section id="projetos" className="projects-section"><div className="section-heading"><div><p className="eyebrow">ECOSSISTEMA DE PROJETOS</p><h2>Projetos em foco</h2></div><span>Top 10 / 2026</span></div><div className="project-grid featured-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div></section>
    <footer className="site-footer"><div className="footer-intro"><p className="eyebrow">CONECTE-SE</p><h2>Canais oficiais</h2></div><nav className="footer-links" aria-label="Canais oficiais">{channels.map((channel) => <a key={channel.label} href={channel.href} target={channel.href.startsWith('mailto:') ? undefined : '_blank'} rel={channel.href.startsWith('mailto:') ? undefined : 'noreferrer'}>{channel.label}<span aria-hidden="true">↗</span></a>)}</nav><p className="copyright">© 2026 Rafael Ornelas Tozato</p></footer>
  </main>
}
