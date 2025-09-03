import Job, { jobProps} from "./Job";

import styles from "@/styles/experience.module.css";

type jobsType = jobProps[];

const jobs: jobsType = [
    {
        title: "Web Application Developer • Institut Curie",
        date: "Sept. 2024 - Jan. 2025",
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
    },
    {
        title: "Teaching Assistant • EPITA",
        date: "Sept. 2023 - Jun. 2024",
        descriptions: [
            `Supervised programming lab sessions in C and Rust for undergraduate students.`,
            `Authored programming exercises and provided grading and feedback on assignments and exams.`,
        ],
    },
];

export default function Experience() {
    return (
        <section>
            <ul>
                {jobs.map((job: jobProps, i) =>
                    <li className={styles.experienceContainer} key={`job-${i}`}>
                        <Job title={job.title} date={job.date} descriptions={job.descriptions}/>
                    </li>)}
            </ul>
        </section>
    );
}