import styles from "@/styles/job.module.css";

export type jobProps = {
    title: string;
    date: string;
    link: string;
    descriptions: string[];
    tools: string[];
    isHovered?: boolean;
};

export default function Job(props: jobProps) {
    return (
        <>
            <header className={styles.experienceDateContainer}>{props.date}</header>
            <div className={styles.experienceDescriptionContainer}>
                <h3 className={`${styles.experienceTitle} ${props.isHovered ? styles.hoveredTitle : {}}`}>{props.title}</h3>
                <ul className={styles.experienceDetails}>
                    {props.descriptions.map((desc, i) => <li key={`desc-${i}`}>{desc}</li>)}
                </ul>
                <div className={styles.toolsContainer}>
                    {
                        props.tools.map((tool, i) =>
                            <span className={styles.toolName} key={`tool-${i}`}>{tool}</span>)
                    }
                </div>
            </div>
        </>
    );
}