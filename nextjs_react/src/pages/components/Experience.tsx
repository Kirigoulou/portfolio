import Job, {jobProps} from "./Job";

import styles from "@/styles/experience.module.css";
import {useState} from "react";

type jobsType = jobProps[];


const jobs: jobsType = [
    {
        title: "Web Application Developer • Institut Curie",
        date: "Sept. 2024 - Jan. 2025",
        link: "https://curie.fr/",
        descriptions: [
            `Led the complete redesign of a statistical analysis web application for quality monitoring of
            radiotherapy machines.`,
            `Developed backend in Python for data extraction, advanced statistical computations (EWMA
            charts, Cp/Cpk indices).`,
            `Implemented Statistical Process Control (SPC) to detect and anticipate technical
            deviations.`,
            `Built interactive dashboards with Streamlit and Plotly, including customizable machine
            configurations and parameter adjustments.`,
            `Integrated MySQL database for enriched dosimetric tracking with dynamic filtering and
            visualization tools.`,
        ],
        tools: ["Python", "Streamlit", "MySQL", "SQL Server"],
    },
    {
        title: "Teaching Assistant • EPITA",
        date: "Sept. 2023 - Jun. 2024",
        link: "https://www.epita.fr/",
        descriptions: [
            `Supervised programming lab sessions in C and Rust for undergraduate students.`,
            `Authored programming exercises and provided grading and feedback on assignments and exams.`,
        ],
        tools: ["C", "Rust"],
    },
];

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    console.log(hoveredIndex);

    return (
        <section className={styles.experienceContainer}>
            <ul>
                {jobs.map((job: jobProps, i) =>
                    <li
                        className={`${styles.jobContainer} ${hoveredIndex !== null && hoveredIndex !== i ? styles.nonSelectedContainer : {}}`}
                        key={`job-${i}`}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <a href={job.link} target={"_blank"} className={styles.experienceLink}></a>
                        <Job
                            title={job.title}
                            date={job.date}
                            link={job.link}
                            descriptions={job.descriptions}
                            tools={job.tools}
                            isHovered={hoveredIndex === i}
                        />
                    </li>)}
            </ul>
        </section>
    );
}