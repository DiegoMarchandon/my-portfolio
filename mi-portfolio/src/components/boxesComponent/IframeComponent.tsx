import boxStyles from '../../styles/boxes/projects.module.css';

interface IframeComponentProps {
    iframeTitle: string;
    iframeSrc: string;
    iframeDescription: string;
    screenshot: string;
    locale: 'es' | 'en';
    tecnologiasUsadas: Array<string | string[]>;
    decisionesTecnicas: Array<string | string[]>;
    fuentesUsadas: Array<string | string[]>;
}

function renderList(items: Array<string | string[]>) {
    return items.map((item, index) => {
        if (Array.isArray(item)) {
            return (
                <ul key={index}>
                    {item.map((itemString, subIndex) => (
                        <li key={`${index}-${subIndex}`}>{itemString}</li>
                    ))}
                </ul>
            );
        }
        return <li key={index}>{item}</li>;
    });
}

export default function IframeComponent({
    iframeTitle,
    iframeSrc,
    iframeDescription,
    screenshot,
    locale,
    tecnologiasUsadas,
    decisionesTecnicas,
    fuentesUsadas
}: IframeComponentProps) {
    const labels = {
        technologies: locale === 'es' ? 'Tecnologías utilizadas' : 'Technologies used',
        decisions:    locale === 'es' ? 'Decisiones técnicas'    : 'Technical decisions',
        sources:      locale === 'es' ? 'Fuentes utilizadas'     : 'Sources used',
        visit:        locale === 'es' ? 'Ver proyecto →'         : 'View project →',
    };
    return (
    <div className={boxStyles.iframeContainer}>
        <div className={boxStyles.titleWrapper}>
            <h3><a href={iframeSrc} target="_blank" rel="noopener noreferrer">{iframeTitle}</a></h3>
        </div>

        <div className={boxStyles.iframeWrapper}>
            <iframe
                className={boxStyles.iframe}
                src={iframeSrc}
                loading="lazy"
                title={`Vista previa de ${iframeTitle}`}
            />
            <div className={boxStyles.mobilePreview}>
                <img
                    src={screenshot}
                    alt={`Captura de pantalla de ${iframeTitle}`}
                    className={boxStyles.screenshotImg}
                />
                <a
                    href={iframeSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={boxStyles.visitBtn}
                >
                    {labels.visit}
                </a>
            </div>
            <div className={boxStyles.footerWrapper}>
                <h3>{labels.sources}</h3>
                <ul>{renderList(fuentesUsadas)}</ul>
            </div>
        </div>

        <div className={boxStyles.iframeInfo}>
            <div className={boxStyles.iframeDescription}>
                <p>{iframeDescription}</p>
            </div>
            <div className={boxStyles.iframeTechnologies}>
                <h3>{labels.technologies}</h3>
                <ul>{renderList(tecnologiasUsadas)}</ul>
                <h3>{labels.decisions}</h3>
                <ul>{renderList(decisionesTecnicas)}</ul>
            </div>
        </div>
    </div>
);
}