import styles from '../../styles/reactStyles/StackComponent.module.css';

interface Props {
    title: string;
    description: string;
    technologies: string[];
}

const StackComponents = ({title,description,technologies}: Props) => {
    return (
        <div className={styles.StackComponentContainer}>
            <h3 className={styles.titleStack}>{title}</h3>
            <p className={styles.descriptionStack}>{description}</p>
            <ul className={styles.ulStack}>
                {technologies.map((tecnology,index) => (
                    <li className={styles.liStack} key={index}>{tecnology}</li>
                ))}
            </ul>
        </div>
    );
}

export default StackComponents;

/* 
<p>
        Mis bases están conformadas por tecnologías aprendidas en la universidad, 
        bootcamps previos, y aprendizaje autodidacta. Independientemente del origen, 
        en todos los casos me comprometí a aprender cada una de las herramientas 
        que se mencionan hasta conseguir tener bases sólidas y poder llevar a cabo 
        sus implementaciones de forma independiente 
    </p>

    <span>
        <h2>Stack principal</h2>
        <p>Inlcuye tecnologías con las que más me acostumbré a trabajar.</p>
        - JavaScript
        - React 
        - Tailwind
        - Supabase (PostgreSQL)
        - Vercel 
    </span>

    <span>
        <h2>Frontend & UI Engineering</h2>
        <p>incluye todo lo que corre el cliente + frameworks de render + UI/UX</p>

        <h3>tecnologías:</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>TypeScript</p>
        <p>AJAX</p>
        <p>jQuery</p>
        <p>Bootstrap</p>
        <p>Tailwind</p>
        <p>React</p>
        <p>Next</p>
        <p>Astro</p>

        <h3>diseño UI:</h3>
        <p>Teoría del color</p>
        <p>selección de tipografías</p>
        <p>Layouts personalizados</p>
        <p>RIA (interfaces complejas)</p>

        <p>Soy capaz de construir interfaces modernas, accesibles y escalables.</p>
    </span>

    <span>
        <h2>Backend, APIs & Data</h2>
        <p>incluye todo lo relacionado a la lógica del servidor, datos y APIs</p>
        <h3>tecnologías:</h3>
        <p>PHP</p>
        <p>Laravel</p>
        <p>Node.js</p>
        <p>Express.js</p>

        <h3>Conocimientos:</h3>
        <p>Consumo y desarrollo de APIs REST </p>
        <p>Manejo de sesiones y cookies</p>
        <p>ORM</p>
        <p>SQL y diseño de Bases de Datos (Modelo ER)</p>
        <p>Bases de datos relacionales y no relacionales</p>
        <p>CMS clásicos como WordPress y OctoberCMS, y headless como Strapi.</p>

        <p>Puedo diseñar, implementar y cunsomir servicior backend con persistencia de datos</p>
    </span>

    <span>
        <h2>Cloud, DevOps & Automatización</h2>
        <p>Todo lo que tenga que ver con despliegue, infraestructura y pipelines</p>
        <p>AWS Cloud</p>
        <p>Docker</p>
        <p>Vercel</p>
        <p>XAMPP (como entorno local)</p>
        <p>n8n (para automatizar flujos)</p>
        <p>CLI / intérprete de comandos</p>
        <p>Configuración de servidores</p>
        
        <p>Sé llevar software a producción y automatizar procesos.</p>
    </span>

    <span>
        <h2>Arquitectura, Seguridad y Frameworks</h2>
        <p><b>Infraestructura:</b> Configuración y gestión de Servidores Web, protocolos de comunicación e intérprete de comandos.</p>
        <p><b>Seguridad:</b> Implementación de protocolos seguros (SSL), certificados, técnicas de autenticación de usuarios, criptografía y encriptación de datos.</p>
        <p><b>Ecosistema Moderno:</b> Uso de Frameworks, consumo y creación de Servicios Web, e interoperabilidad entre sistemas.</p>
    </span>
    <span>
        <h2>Ingeniería de software y metodologías</h2>
        <p><b>Análisis y diseño:</b> Documentación técnica utilizando el Lenguaje de Modelamiento Unificado (UML), incluyendo diagramas de casos de uso, clases y actividades.</p>
        <p><b>Ciclo de Vida del Software:</b> Gestión de requerimientos y comprensión de las etapas de desarrollo, desde el análisis hasta la implementación.</p>
        <p><b>Patrones de Arquitectura:</b> implementación del modelo MVC (Modelo-Vista-Controlador)</p>
    </span>

    <span>
        <h2> Desarrollo móvil</h2>
        <p>Android Studio</p>
        <p>Expo</p>
        <p>React Native</p>
    </span>
*/