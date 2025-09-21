import {Inter} from "next/font/google";
import Header from "@/components/Header";
import Main from "@/components/Main";

import styles from "@/styles/home.module.css";

const interFont = Inter({
    subsets: ["latin"],
    weight: ["500", "700"],
    display: 'swap',
    adjustFontFallback: false,
});

export default function Home() {
    return (
        <div className={`${interFont.className} ${styles.mainContainer}`}>
            <Header
                name="Yazid Haouas"
                title="Embedded Software Engineer"
                // catchphrase="I design and implement low-level software, from microcontrollers to operating systems."
                catchphrase="I craft efficient embedded applications that bring hardware to life."
            />
            <Main/>
        </div>
    );
}
