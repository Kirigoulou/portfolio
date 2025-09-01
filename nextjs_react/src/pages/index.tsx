import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";

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
      </div>
  );
}
