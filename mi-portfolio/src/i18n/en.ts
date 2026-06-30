export default {
    nav: {
        presentacion: 'INTRO',
        stack: 'STACK',
        proyectos: 'PROJECTS',
        sobreMi: 'ABOUT ME',
    },
    presentation: {
        role: 'Junior Full-stack Developer',
        slogan: 'Commitment at every stage of development',
        available: 'Available for work',
        intro: 'Web developer since 2025, with experience building projects using various tech stacks and for different purposes. I’m driven by a curiosity to understand how code works from the inside out: from the architecture of a REST API to the decisions that make a system maintainable and scalable. I apply principles such as SOLID and best practices in software design both in new projects and when reading and understanding existing code.',
        focus: 'Strengthening my knowledge in process automation',
        location: 'Santiago, Chile',
        locationLabel: 'Location',
        focusLabel: 'Currently focused on',
    },
    stack: {
        title: 'My Tech Stack',
        subtitle: 'Tools I regularly work with and have solid knowledge of',
        categories: [
            {
                title: 'Core Stack',
                description: 'Technologies I am most comfortable working with.',
                technologies: ['JavaScript/Typescript','React + Next.js','Tailwind CSS','Supabase (PostgreSQL)','Vercel/Render'],
            },
            {
                title: 'Frontend & Render',
                description: 'Everything that runs on the client + render frameworks + UI/UX.',
                technologies: ['Typescript','React.js','Next.js','Astro','Blade','Alpine.js'],
            },
            {
                title: 'Backend, APIs & Data',
                description: 'Everything related to server logic, data and APIs.',
                technologies: ['PHP','Laravel','EloquentORM','Cheerio.js','API Routes (Next.js)'],
            },
            {
                title: 'Deploy, Infrastructure & Workflow',
                description: 'Technologies related to deployment, code management, and integration processes.',
                technologies: ['AWS S3','Docker','Vercel','Render','Git','GitHub','Git Flow'],
            },
        ],
    },
    projects: {
        technologiesTitle: 'Technologies used',
        decisionsTitle: 'Technical decisions',
        sourcesTitle: 'Sources used',
    },
    about: {
        title: 'Versatile developer with solid foundations',
        items: [
            {
                title: 'My education before Web Development',
                year: '2018 – 2022',
                body: 'I began my university studies in Business Administration, where I developed analytical skills in statistics and mathematics. In 2022 I redirected my path toward technology, exploring Data Science through IBM courses on Coursera and tools like scikit-learn and R. That journey led me to realize I wanted to build products, not just analyze them.',
            },
            {
                title: 'Web Development Technical Degree',
                year: '2023 – 2025',
                body: 'In mid-2023 I enrolled in a Web Development Technical Degree, which I completed on time at the end of 2025. Since then I focused on consolidating a modern and coherent stack — JavaScript, TypeScript, React, Next.js, Laravel and Supabase — applied in real projects with production deployments. Throughout these projects I applied good architecture practices and principles such as KISS, YAGNI, Single Source of Truth and data normalization.',
            },
            {
                title: 'University Extension Grant — UNCo',
                year: '2024',
                body: 'I participated for 3 months in a university extension grant from the Universidad Nacional del Comahue, delivering workshops and talks to high school students on technology topics and safe internet use. Activities included a hands-on introduction to Turing machines, app creation with MIT App Inventor, and digital safety awareness sessions. I also coordinated the annual Internet Seguro event, moderating live student presentations.',
                softSkillsTitle: 'Applied skills',
                softSkills: [
                    'Technical communication to non-technical audiences',
                    'Learning experience design',
                    'Improvisation and handling unexpected situations',
                    'Teamwork with autonomy',
                    'Sustained commitment without supervision',
                ],
            },
            {
                title: 'Current focus',
                year: '2025 →',
                body: 'I currently build REST APIs using Node.js, Express, and PostgreSQL by applying a layered architecture (Routes → Controller → Service → Repository) and SOLID principles. I use Docker to package and deploy my projects, and I use Git Flow as my workflow in all my repositories. I’m interested in integrating well into existing teams: understanding existing code is just as important as writing new code.',
            },
        ],
        certificationsTitle: 'Certifications',
    },
} as const;