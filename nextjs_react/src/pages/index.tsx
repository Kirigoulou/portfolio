import { Inter } from "next/font/google";
import Header from "./components/Header";
import Main from "./components/Main";

import styles from "@/styles/home.module.css";

const interFont = Inter({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Home() {
  return (
      <div className={`${interFont.className} ${styles.mainContainer}`}>
          <Header
              name="Yazid Haouas"
              title="Embedded Software Engineer"
              catchphrase="I build accessible, pixel-perfect digital experiences for the web."
          />
          <Main/>
      </div>
  );
}
