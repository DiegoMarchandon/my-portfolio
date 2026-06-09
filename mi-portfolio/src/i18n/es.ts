export default {
    nav: {
        presentacion: 'PRESENTACIÓN',
        stack: 'STACK',
        proyectos: 'PROYECTOS',
        sobreMi: 'SOBRE MÍ',
    },
    presentation: {
        role: 'Junior Full-stack developer',
        slogan: 'Compromiso en cada etapa del desarrollo',
        available: 'Disponible para trabajar',
        intro: 'Desarrollador Web recibido en 2025, realicé proyectos conformados por diversos stacks y propósitos, impulsado por la constante curiosidad de conocer nuevas herramientas, lenguajes y tecnologías que, una vez implementadas, terminan culminando en proyectos totalmente integrales.',
        focus: 'Reforzar mis conocimientos sobre automatización de procesos',
        location: 'Neuquén',
        locationLabel: 'Localización',
        focusLabel: 'Enfocado en',
    },
    stack: {
        title: 'Mi Stack tecnológico',
        subtitle: 'Herramientas con las que acostumbro trabajar y tengo conocimientos',
        categories: [
            {
                title: 'Stack Principal',
                description: 'Incluye tecnologías con las que más me acostumbré a trabajar.',
                technologies: ['JavaScript/Typescript','React + Next.js','Tailwind CSS','Supabase (PostgreSQL)','Vercel/Render'],
            },
            {
                title: 'Frontend & Render',
                description: 'Incluye todo lo que corre el cliente + frameworks de render + UI/UX.',
                technologies: ['Typescript','React.js','Next.js','Astro','Blade','Alpine.js'],
            },
            {
                title: 'Backend, APIs & Data',
                description: 'Incluye todo lo relacionado a la lógica del servidor, datos y APIs.',
                technologies: ['PHP','Laravel','EloquentORM','Cheerio.js','API Routes (Next.js)'],
            },
            {
                title: 'Despliegue, Infraestructura & Flujo de Trabajo',
                description: 'Tecnologías vinculadas a despliegue, gestión del código y procesos de integración.',
                technologies: ['AWS S3','Docker','Vercel','Render','Git','GitHub','Git Flow'],
            },
        ],
    },
    projects: {
        technologiesTitle: 'Tecnologías utilizadas',
        decisionsTitle: 'Decisiones técnicas',
        sourcesTitle: 'Fuentes utilizadas',
    },
    about: {
        title: 'Desarrollador versátil con bases sólidas',
        items: [
            {
                title: 'Mi educación previa al desarrollo web',
                year: '2018 – 2022',
                body: 'Comencé mi formación universitaria en Administración, donde desarrollé base analítica en estadística y matemática. En 2022 reorienté mi camino hacia la tecnología, explorando Data Science con cursos de IBM en Coursera y herramientas como scikit-learn y R. Ese recorrido me llevó a entender que quería construir productos, no solo analizarlos.',
            },
            {
                title: 'Tecnicatura en Desarrollo Web',
                year: '2023 – 2025',
                body: 'A mediados de 2023 ingresé a la Tecnicatura en Desarrollo Web de la cual me recibí a fines de 2025. Desde entonces me focalicé en consolidar un stack moderno y coherente — JavaScript, TypeScript, React, Next.js, Laravel y Supabase — aplicado en proyectos reales con despliegue en producción. En el desarrollo de esos proyectos procuré aplicar buenas prácticas de arquitectura y principios como KISS, YAGNI, Single Source of Truth y normalización de datos.',
            },
            {
                title: 'Beca de Extensión Universitaria — UNCo',
                year: '2024',
                body: 'Participé durante 3 meses en una beca de extensión de la Universidad Nacional del Comahue, llevando talleres y charlas a escuelas secundarias sobre temáticas tecnológicas y uso seguro de internet. Las actividades incluyeron introducción práctica a máquinas de Turing, creación de apps con MIT App Inventor y espacios de concientización sobre seguridad digital. También coordiné el evento anual Internet Seguro, moderando exposiciones en tiempo real.',
                softSkillsTitle: 'Habilidades aplicadas',
                softSkills: [
                    'Comunicación técnica a audiencias no técnicas',
                    'Diseño de experiencias de aprendizaje',
                    'Improvisación y manejo de imprevistos',
                    'Trabajo en equipo con autonomía',
                    'Compromiso sostenido sin supervisión',
                ],
            },
            {
                title: 'Mi foco actualmente',
                year: '2025 →',
                body: 'Actualmente estoy aplicando principios de diseño de software reconocidos, como KISS, YAGNI, SSOT y SOLID en mis proyectos, además de incorporar Docker y testing con PHPUnit a mi flujo de trabajo. Tengo foco en prácticas y tecnologías consolidadas y en entender la estructura de código legacy que predomina en muchas empresas. \nPorque integrarse bien a un equipo existente es tan importante como escribir código nuevo.',
            },
        ],
        certificationsTitle: 'Certificaciones',
    },
} as const;