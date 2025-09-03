import styles from "@/styles/job.module.css";

type jobProps = {
    title: string;
    date: string;
    descriptions: string[];
};

export default function Job(props: jobProps) {
    return (
        <>
            <header className={styles.experienceDateContainer}>{props.date}</header>
            <div className={styles.experienceDescriptionContainer}>
                <h3 className={styles.experienceTitle}>{props.title}</h3>
                <ul className={styles.experienceDetails}>
                    {props.descriptions.map((desc, i) => <li key={`desc-${i}`}>{desc}</li>)}
                </ul>
            </div>
        </>
    );
}