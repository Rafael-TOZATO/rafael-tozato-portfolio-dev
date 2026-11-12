type Project = {
  number: string
  category: string
  title: string
  description: string
  github: string
  tags: string[]
}

const projects: Project[] = [
  { number: '01', category: 'IA & ECOSSISTEMA', title: 'tozato-ai-core', description: 'Núcleo do ecossistema de aplicações e soluções inteligentes Tozato AI.', github: 'https://github.com/Rafael-TOZATO/tozato-ai-core', tags: ['IA', 'Next.js', 'Ecossistema'] },
  { number: '02', category: 'ENGENHARIA DE DADOS', title: 'pipeline-pagamentos', description: 'Pipeline de pagamentos em tempo real com CDC, Kafka, Flink SQL e detecção de fraude.', github: 'https://github.com/Rafael-TOZATO/pipeline-pagamentos', tags: ['CDC', 'Kafka', 'Flink SQL'] },
  { number: '03', category: 'IA & CARREIRA', title: 'ats-resume-generator-dio', description: 'Aplicação web para análise inteligente de currículos e otimização para sistemas ATS.', github: 'https://github.com/Rafael-TOZATO/ats-resume-generator-dio', tags: ['IA', 'ATS', 'React'] },
  { number: '04', category: 'AUTOMAÇÃO INTELIGENTE', title: 'n8n-cobrancas-inteligentes', description: 'Automação financeira com n8n, Google Sheets e Gmail.', github: 'https://github.com/Rafael-TOZATO/n8n-cobrancas-inteligentes', tags: ['n8n', 'Workflows', 'Fintech'] },
  { number: '05', category: 'DADOS & BI', title: 'dashboard-analitico-financeiro-dio', description: 'Painel executivo interativo para acompanhamento de indicadores financeiros.', github: 'https://github.com/Rafael-TOZATO/dashboard-analitico-financeiro-dio', tags: ['Power BI', 'React', 'Finanças'] },
  { number: '06', category: 'IBM • IA & CLOUD', title: 'bootcamp-ibm-bob-ia-empresarial', description: 'Trilha de capacitação e projetos em IA empresarial, dados e cloud IBM.', github: 'https://github.com/Rafael-TOZATO/bootcamp-ibm-bob-ia-empresarial', tags: ['IBM', 'IA', 'Cloud'] },
  { number: '07', category: 'GRAFOS & RECOMENDAÇÃO', title: 'recomendacao-musicas-neo4j', description: 'Sistema de recomendação musical com modelagem de relações em grafos Neo4j.', github: 'https://github.com/Rafael-TOZATO/recomendacao-musicas-neo4j', tags: ['Neo4j', 'Cypher', 'Grafos'] },
  { number: '08', category: 'BUSINESS INTELLIGENCE', title: 'power_bi_analyst', description: 'Projetos práticos de transformação, modelagem de dados e relatórios analíticos.', github: 'https://github.com/Rafael-TOZATO/power_bi_analyst', tags: ['Power BI', 'Power Query', 'DAX'] },
  { number: '09', category: 'GOVERNANÇA & INDÚSTRIA 4.0', title: 'governanca-qualidade-4.0', description: 'Materiais técnicos sobre qualidade preditiva, governança e automação industrial.', github: 'https://github.com/Rafael-TOZATO/governanca-qualidade-4.0', tags: ['Governança', 'Qualidade', 'Indústria 4.0'] },
  { number: '10', category: 'DADOS & VENDAS', title: 'analise-de-vendas-financials-power-bi', description: 'Relatório gerencial de vendas com navegação interativa e indicadores financeiros.', github: 'https://github.com/Rafael-TOZATO/analise-de-vendas-financials-power-bi', tags: ['Power BI', 'DAX', 'Vendas'] },
  { number: '11', category: 'MODELAGEM DIMENSIONAL', title: 'projeto-financial-sample-powerbi', description: 'Modelagem Star Schema, transformação com Power Query e calendário DAX.', github: 'https://github.com/Rafael-TOZATO/projeto-financial-sample-powerbi', tags: ['Power BI', 'Star Schema', 'DAX'] },
  { number: '12', category: 'NEO4J & CERTIFICAÇÃO', title: 'neo4j-certified-professional', description: 'Estudo de bancos de grafos, consultas Cypher e documentação de certificação.', github: 'https://github.com/Rafael-TOZATO/neo4j-certified-professional', tags: ['Neo4j', 'Cypher', 'GraphAcademy'] },
]

const channels = [
  { label: 'App Ecosystem / Dev Hub', href: 'https://tozato-ai-core.vercel.app' },
  { label: 'GitHub', href: 'https://github.com/Rafael-TOZATO' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafaeltozato81' },
  { label: 'Microsoft Learn', href: 'https://learn.microsoft.com/pt-br/users/rafaelornelastozato-2209' },
  { label: 'Medium', href: 'https://medium.com/@ornelas.tozato' },
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
    <section id="projetos" className="projects-section"><div className="section-heading"><div><p className="eyebrow">ECOSSISTEMA DE PROJETOS</p><h2>Projetos em foco</h2></div><span>Curadoria / 2026</span></div><div className="project-grid featured-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div></section>
    <footer className="site-footer"><div className="footer-intro"><p className="eyebrow">CONECTE-SE</p><h2>Canais oficiais</h2></div><nav className="footer-links" aria-label="Canais oficiais">{channels.map((channel) => <a key={channel.label} href={channel.href} target="_blank" rel="noreferrer">{channel.label}<span aria-hidden="true">↗</span></a>)}</nav><p className="copyright">© 2026 Rafael Ornelas Tozato</p></footer>
  </main>
}
