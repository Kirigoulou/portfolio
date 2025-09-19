import styles from "@/styles/job.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faHourglassHalf} from '@fortawesome/free-solid-svg-icons'

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
                <div style={{display: "flex", gap: "0.5em"}}>
                    <FontAwesomeIcon
                        icon={faPeopleGroup}
                        className={`${styles.groupEmoji} ${props.isHovered ? "fa-bounce" : ""}`}
                    />
                    <h4 className={styles.projectHeaderContent}>{props.groupSize}</h4>
                </div>
                <div style={{display: "flex", gap: "0.5em"}}>
                    <FontAwesomeIcon
                        icon={faHourglassHalf}
                        // className={`${styles.groupEmoji} ${props.isHovered ? "fa-spin" : ""}`}
                        className={props.isHovered ? styles.hourglassEmojiHovered : styles.hourglassEmoji} /*className="fa-spin" shake*/
                    />
                    <h4 className={styles.projectHeaderContent}>{props.duration}</h4>
                </div>
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