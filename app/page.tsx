const projects = [
  ['01', 'HUB DE PROJETOS', 'TozatoCode-AI', 'Acesse as soluções digitais criadas para transformar ideias em experiências simples, rápidas e inteligentes.', 'https://tozato-dev-hub.vercel.app'],
  ['02', 'BUSINESS INTELLIGENCE', 'Aurora BI DIO', 'Projeto de análise e visualização de dados para transformar informações em decisões mais claras.', 'https://aurora-bi-dio.lovable.app'],
  ['03', 'DADOS & ANALYTICS', 'Análise de Vendas Financials', 'Dashboard financeiro para explorar indicadores de vendas, desempenho e oportunidades.', '#'],
  ['04', 'DESENVOLVIMENTO WEB & IA', 'ATS Resume Generator', 'Gerador inteligente de currículos otimizado para sistemas ATS.', '#'],
]

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início"><strong>RT</strong><span>PORTFÓLIO / 2026</span></a>
        <nav aria-label="Navegação principal"><a href="#perfil">Perfil profissional</a><a href="#projetos">Explorar projetos</a></nav>
      </header>

      <section id="inicio" className="hero">
        <p className="eyebrow">HUB DE PROJETOS</p>
        <h1>Olá, eu sou<br /><em>Rafael.</em></h1>
        <p className="hero-copy">Engenheiro de Software focado em Desenvolvimento Web & IA. Este é o meu espaço para compartilhar soluções que unem código, estratégia e impacto.</p>
        <p className="availability">DISPONÍVEL PARA NOVOS PROJETOS</p>
      </section>

      <section id="perfil" className="profile-section">
        <p className="eyebrow">PERFIL PROFISSIONAL</p><h2>Currículo & governança</h2>
        <p>Conheça minha trajetória, competências e os princípios que orientam meu trabalho em Engenharia de Software, Desenvolvimento Web e Inteligência Artificial.</p>
        <a className="text-link" href="/Carrossel_Retrospectiva_GitHub_Rafael_Tozato.pdf">Ver currículo e perfil ↗</a>
      </section>

      <section id="projetos" className="projects-section">
        <div className="section-heading"><div><p className="eyebrow">PROJETOS DE DASHBOARDS E APPS</p><h2>Projetos em foco</h2></div><span>12 projetos reunidos / 2026</span></div>
        <div className="project-grid">{projects.map(([number, category, title, description, href]) => <article className="project-card" key={number}><span className="project-number">{number}</span><p className="eyebrow">{category}</p><h3>{title}</h3><p>{description}</p><div className="tags"><span>React</span><span>TypeScript</span><span>Tailwind CSS</span></div><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Explorar projeto ↗</a></article>)}</div>
      </section>

      <footer><span>© 2026 Rafael Ornelas Tozato</span><a href="https://github.com/Rafael-TOZATO">GitHub ↗</a><a href="https://www.linkedin.com/in/rafaeltozato81">LinkedIn ↗</a></footer>
    </main>
  )
}
