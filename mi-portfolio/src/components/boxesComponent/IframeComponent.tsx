import boxStyles from '../../styles/boxes/projects.module.css';

interface iframeComponentProps {
    iframeTitle: string;
    iframeSrc: string;
    iframeDescription: string;
    tecnologiasUsadas: Array<string|string[]>;
    decisionesTecnicas: Array<string|string[]>;
    fuentesUsadas: Array<string|string[]>;
}

export default function IframeComponent({iframeTitle, iframeSrc,iframeDescription,tecnologiasUsadas,decisionesTecnicas,fuentesUsadas}: iframeComponentProps){
    return(
        <div className={`${boxStyles.iframeContainer}`}>
            <div className={`${boxStyles.titleWrapper}`}>
                <h3><a href={iframeSrc}>{iframeTitle}</a></h3>
            </div>
            <div className={`${boxStyles.iframeWrapper}`}>
                <iframe
                className={`${boxStyles.iframe}`}
                src={iframeSrc}
                loading="lazy"
                title="Vista previa del proyecto"
                >
                </iframe>
                <div className={`${boxStyles.footerWrapper}`}>
                <h3>Fuentes utilizadas</h3>
                    <ul>
                        {
                            fuentesUsadas.map((item,index)=>{
                                if(Array.isArray(item)){
                                    return (
                                            <ul key={index}>
                                                {
                                            item.map((itemString,subIndex)=>(
                                                <li key={`${index}-${subIndex}`}>{itemString}</li>
                                            ))}
                                        </ul>
                                        )
                                        
                                }else{
                                    return <li key={index}>{item}</li>;
                                }
                            })}
                    </ul>
                </div>
            </div>
            <div className={`${boxStyles.iframeInfo}`}>
                <div className={`${boxStyles.iframeDescription}`}>
                    <p>{iframeDescription}</p>
                </div>
                <div className={`${boxStyles.iframeTechnologies}`}>
                    <h3>Tecnologías utilizadas</h3>
                    {
                        <ul>
                            {
                            tecnologiasUsadas.map((item,index)=>{
                                if(Array.isArray(item)){
                                    return (
                                            <ul key={index}>
                                                {
                                            item.map((itemString,subIndex)=>(
                                                <li key={`${index}-${subIndex}`}>{itemString}</li>
                                            ))}
                                        </ul>
                                        )
                                        
                                }else{
                                    return <li key={index}>{item}</li>;
                                }
                            })}
                        </ul>
                    }
                    <h3>Decisiones técnicas</h3>
                    <ul>
                        {
                            decisionesTecnicas.map((item,index)=>{
                                if(Array.isArray(item)){
                                    return (
                                            <ul key={index}>
                                                {
                                            item.map((itemString,subIndex)=>(
                                                <li key={`${index}-${subIndex}`}>{itemString}</li>
                                            ))}
                                        </ul>
                                        )
                                        
                                }else{
                                    return <li key={index}>{item}</li>;
                                }
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
}