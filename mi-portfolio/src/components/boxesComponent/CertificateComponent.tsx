import { useState } from 'react';
import boxStyles from '../../styles/boxes/about.module.css';

interface CertificateComponentProps {
    thumbnail: string;
    certificadoTitle: string;
    certificadoInfo: Array<string | string[]>;
    pdfPath: string;
    locale: 'es' | 'en'|'pt';
}

const labels = {es:'Ver certificado',en:'View certificate',pt:'Ver certificado'}

export default function CertificateComponent({ thumbnail, certificadoTitle, certificadoInfo, pdfPath, locale }: CertificateComponentProps) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className={boxStyles.imagenWrapper}>
                <h3>{certificadoTitle}</h3>
                <ul>
                    {certificadoInfo.map((item, index) => {
                        if (Array.isArray(item)) {
                            return (
                                <ul key={index}>
                                    {item.map((itemString, subIndex) => (
                                        <li key={`${index}-${subIndex}`}>{itemString}</li>
                                    ))}
                                </ul>
                            );
                        } else {
                            return <li key={index}>{item}</li>;
                        }
                    })}
                </ul>
                <div className={boxStyles.thumbnailWrapper} onClick={() => setModalOpen(true)}>
                    <img className={boxStyles.imagen} src={thumbnail} alt="thumbnail imagen" />
                    <div className={boxStyles.thumbnailOverlay}>
                        <span>{labels[locale]}</span>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className={boxStyles.modalBackdrop} onClick={() => setModalOpen(false)}>
                    <div className={boxStyles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={boxStyles.modalHeader}>
                            <p className={boxStyles.modalTitle}>{certificadoTitle}</p>
                            <div className={boxStyles.modalActions}>
                                <a href={pdfPath} download className={boxStyles.downloadBtn}>
                                    ↓ Descargar
                                </a>
                                <button className={boxStyles.closeBtn} onClick={() => setModalOpen(false)}>
                                    ✕
                                </button>
                            </div>
                        </div>
                        <iframe
                            src={pdfPath}
                            className={boxStyles.pdfFrame}
                            title={certificadoTitle}
                        />
                    </div>
                </div>
            )}
        </>
    );
}