import styles from "@/styles/header.module.css"

type headerProps = {
    name: string;
    title: string;
    catchphrase: string;
}

export default function Header(props: headerProps) {
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.userName}>{props.name}</h1>
            <h2 className={styles.titleName}>{props.title}</h2>
            <p className={styles.catchphrase}>{props.catchphrase}</p>
        </header>
    );
}