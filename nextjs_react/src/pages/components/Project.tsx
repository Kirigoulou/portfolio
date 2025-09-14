import {useEffect, useState} from "react";
import ProjectItem, {projectProps} from "@/pages/components/ProjectItem";
import Job, {jobProps} from "./Job";
import styles from "@/styles/experience.module.css";

type projectPropsList = Array<projectProps>;

export default function Project() {
    const [projectsData, setProjectsData] = useState<projectPropsList | null>(null);

    useEffect(() => {
        fetch("data/en/projects.json", { mode: "no-cors" })
            .then(res => {
                if (!res.ok)
                    throw new Error("Response is not ok");
                return res.json();
            })
            .then(data => setProjectsData(data.projects))
            .catch(err => console.log("Could not fetch projects data: ", err))
            .finally(() => console.log("Fetching project data done"));
    }, []);

    return (
        <section>
            <ul>
                {projectsData?.map((project: projectProps, i) =>
                    <li className={styles.jobContainer} key={`project-${i}`}>
                        {/*<a href={job.link} target={"_blank"} className={styles.experienceLink}></a>*/}
                        <ProjectItem
                            name={project.name}
                            groupSize={project.groupSize}
                            duration={project.duration}
                            descriptions={project.descriptions}
                            paragraphs={project.paragraphs}
                        />
                    </li>)
                }
            </ul>
        </section>
    );
}