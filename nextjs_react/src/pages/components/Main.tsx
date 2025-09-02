import { About, aboutProps } from "./About";

const par: aboutProps = [
    {
        id: "about-me",
        content: `
        I’m an engineering student passionate about embedded systems, low-level programming, and building
        reliable software that bridges hardware and software. I particularly enjoy working close to the
        machine, where attention to detail and efficiency are critical, whether it’s firmware, drivers, or
        operating system concepts.
        `,
    },
    {
        id: "schooling",
        content: `
        Currently, I’m in my final year at EPITA (Paris, France), specializing in computer engineering. I’ve
        strengthened my expertise in embedded development through projects involving microcontrollers,
        communication protocols, and real-time systems. I also had the opportunity to study abroad at California
        State University, Los Angeles, where I deepened my knowledge in computer science in an international
        environment.
        `,
    },
    {
        id: "experiences",
        content: `
        In the past, I interned at Institut Curie, where I developed a web application to monitor radiotherapy
        machines, gaining valuable experience in delivering impactful engineering solutions. I’ve also worked on
        several technical projects, such as writing a driver for the MPU6050 on STM32, designing an ISO9660
        filesystem parser in C, and experimenting with kernel development, which reinforced my understanding of
        both embedded and system-level software.
        `,
    }
];

export default function Main() {
    return (
        <main>
            <About paragraphs={par}/>
        </main>
    );
}