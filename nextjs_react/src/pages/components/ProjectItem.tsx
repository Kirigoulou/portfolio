import styles from "@/styles/job.module.css";

export type projectProps = {
    name: string;
    groupSize: string;
    duration: string;
    descriptions: string[];
    paragraphs: string[];
    isHovered?: boolean;
};

export default function Job(props: projectProps) {
    return (
        <>
            <header className={styles.experienceDateContainer}>
                <h4 className={styles.projectHeaderContent}>👥 {props.groupSize}</h4>
                <h4 className={styles.projectHeaderContent}>⏳ {props.duration}</h4>
            </header>
            <div className={styles.experienceDescriptionContainer}>
                <h3 className={`${styles.experienceTitle} ${props.isHovered ? {} : {}}`}>{props.name}</h3>
                <ul className={styles.experienceDetails}>
                    {props.descriptions.map((desc, i) => <li key={`desc-${i}`}>{desc}</li>)}
                </ul>
                {/*<div className={styles.toolsContainer}>*/}
                {/*    {*/}
                {/*        props.tools.map((tool, i) =>*/}
                {/*            <span className={styles.toolName} key={`tool-${i}`}>{tool}</span>)*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </>
    );
}