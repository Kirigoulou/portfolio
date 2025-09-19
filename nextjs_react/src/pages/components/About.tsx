import Markdown from "react-markdown";
import styles from "@/styles/about.module.css";
import {useEffect, useState} from "react";

export type aboutProps = Array<{ id: string, content: string }>;

export function About() {
    const [aboutData, setAboutData] = useState<aboutProps | null>(null);

    useEffect(() => {
        fetch("data/en/about.en.json", { mode: "no-cors" })
            .then(res => {
                if (!res.ok)
                    throw new Error("Response is not ok");
                return res.json();
            })
            .then(data => setAboutData(data.about))
            .catch(err => console.log("Could not fetch data: ", err));
    }, []);

    return (
        <section>
            {aboutData?.map((par) => (
                <Markdown key={par.id}>{par.content}</Markdown>
            ))}
        </section>
    );
}