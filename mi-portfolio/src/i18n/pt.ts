export default {
    nav: {
        presentacion: 'APRESENTAÇÃO',
        stack: 'TECNOLOGIAS',
        proyectos: 'PROJETOS',
        sobreMi: 'SOBRE MIM',
    },
    presentation: {
        role: 'Desenvolvedor Full Stack Júnior',
        slogan: 'Compromisso em cada etapa do desenvolvimento',
        available: 'Disponível para oportunidades profissionais',
        intro: 'Desenvolvedor web formado em 2025, desenvolvi projetos com diferentes conjuntos de tecnologias e finalidades, movido por uma curiosidade constante para aprender novas ferramentas, linguagens e tecnologias que, quando aplicadas, resultam em produtos completamente integrados.',
        focus: 'Aprimorando meus conhecimentos em automação de processos',
        location: 'Santiago, Chile',
        locationLabel: 'Localização',
        focusLabel: 'Atualmente focado em',
    },
    stack: {
        title: 'Meu conjunto de tecnologias',
        subtitle: 'Ferramentas com as quais trabalho com frequência e sobre as quais possuo conhecimento sólido',
        categories: [
            {
                title: 'Base principal',
                description: 'Tecnologias com as quais tenho maior familiaridade.',
                technologies: ['JavaScript e TypeScript','React e Next.js','Tailwind CSS','Supabase com PostgreSQL','Vercel e Render'],
            },
            {
                title: 'Frontend e renderização',
                description: 'Tudo o que é executado no cliente, além de estruturas de renderização e interface.',
                technologies: ['TypeScript','React.js','Next.js','Astro','Blade','Alpine.js'],
            },
            {
                title: 'Backend, APIs e dados',
                description: 'Tudo o que está relacionado à lógica do servidor, dados e interfaces de programação.',
                technologies: ['PHP','Laravel','Eloquent ORM','Cheerio.js','Rotas de API no Next.js'],
            },
            {
                title: 'Implantação, Infraestrutura e Fluxo de Trabalho',
                description: 'Tecnologias relacionadas à implantação, gerenciamento de código e processos de integração.',
                technologies: ['AWS S3','Docker','Vercel','Render','Git','GitHub','Git Flow'],
            },
        ],
    },
    projects: {
        technologiesTitle: 'Tecnologias utilizadas',
        decisionsTitle: 'Decisões técnicas',
        sourcesTitle: 'Fontes utilizadas',
    },
    about: {
        title: 'Desenvolvedor versátil com bases sólidas',
        items: [
            {
                title: 'Minha formação antes do desenvolvimento web',
                year: '2018 – 2022',
                body: 'Iniciei minha formação universitária em Administração, onde desenvolvi habilidades analíticas em estatística e matemática. Em 2022, redirecionei meu percurso para a tecnologia, explorando ciência de dados por meio de cursos da IBM na Coursera e ferramentas como scikit-learn e R. Essa trajetória me levou a compreender que eu desejava construir produtos, e não apenas analisá-los.',
            },
            {
                title: 'Tecnicatura em Desenvolvimento Web',
                year: '2023 – 2025',
                body: 'Em meados de 2023, ingressei na Tecnicatura em Desenvolvimento Web, que concluí no prazo ao final de 2025. Desde então, concentrei-me em consolidar um conjunto moderno e coerente de tecnologias — JavaScript, TypeScript, React, Next.js, Laravel e Supabase — aplicado em projetos reais com implantação em produção. Ao longo desses projetos, procurei aplicar boas práticas de arquitetura e princípios como KISS, YAGNI, Single Source of Truth e normalização de dados.',
            },
            {
                title: 'Bolsa de Extensão Universitária — UNCo',
                year: '2024',
                body: 'Participei, durante três meses, de uma bolsa de extensão da Universidad Nacional del Comahue, ministrando oficinas e palestras para estudantes do ensino médio sobre temas de tecnologia e uso seguro da internet. As atividades incluíram uma introdução prática a máquinas de Turing, criação de aplicativos com MIT App Inventor e ações de conscientização sobre segurança digital. Também coordenei o evento anual Internet Seguro, moderando apresentações estudantis ao vivo.',
                softSkillsTitle: 'Competências aplicadas',
                softSkills: [
                    'Comunicação técnica para públicos não técnicos',
                    'Desenho de experiências de aprendizagem',
                    'Improvisação e manejo de imprevistos',
                    'Trabalho em equipe com autonomia',
                    'Compromisso sustentado sem supervisão',
                ],
            },
            {
                title: 'Foco atual',
                year: '2025 →',
                body: 'Atualmente, estou aplicando princípios reconhecidos de design de software, como KISS, YAGNI, SSOT e SOLID, nos meus projetos, além de incorporar o Docker e testes com o PHPUnit ao meu fluxo de trabalho. Meu foco está em práticas e tecnologias consolidadas e em compreender a estrutura do código legado que predomina em muitas empresas. Porque integrar-se bem a uma equipe já existente é tão importante quanto escrever código novo.',
            },
        ],
        certificationsTitle: 'Certificações',
    },
} as const;