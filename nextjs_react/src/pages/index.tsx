import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Main from "./components/Main";

const interFont = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
      <div className={`${interFont.className} main-container`}>
          <Header
              name="Yazid Haouas"
              title="Embedded Software Engineer"
              catchphrase="I build accessible, pixel-perfect digital experiences for the web."
          />
          <Main/>
      </div>
  );
}
