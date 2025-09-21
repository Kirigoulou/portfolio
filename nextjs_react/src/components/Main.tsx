import About from "./About";
import Experience from "./Experience";

import styles from "@/styles/main.module.css";
import Project from "@/components/Project";

export default function Main() {
    return (
        <main className={styles.mainContainer}>
            <About />
            <Experience />
            <Project />
        </main>
    );
}