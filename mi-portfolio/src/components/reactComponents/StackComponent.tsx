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