import styles from "@/styles/about.module.css";

export type aboutProps = Array<{id: string, content: string}>;

export function About({ paragraphs }: { paragraphs: aboutProps }) {
    return (
        <section className={styles.aboutContainer}>
            {paragraphs.map((par) => (
                <p key={par.id}>{par.content}</p>
            ))}
        </section>
    );
}