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
            <div className="{}">
                <h3 className={`{} ${props.isHovered ? {} : {}}`}>{props.name}</h3>
                <ul className="{}">
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