import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig,
    SiMongodb,
    SiJavascript,
    SiExpress,
    SiGooglegemini  
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "ChronosAI",
        description:
            "an AI-powered collaborative coding platform that transforms ideas into working code and project structures with simple commands.",
        technologies: [SiReact, FaNodeJs, SiMongodb, SiTailwindcss, SiExpress],
        techNames: ["ReactJS", "NodeJS", "MongoDB", "Tailwind CSS", "ExpressJS"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/sehajmakkar/ChronosAI",
        demo: "https://chronos-ai-seven.vercel.app/",
        image: "/projects/chronosai.png",
        available: true,
    },
    {
        id: 1,
        name: "DocTime",
        description:
            "MERN-based healthcare platform for doctor search, appointment scheduling, and secure payments with RBAC and dashboards for patients, doctors, and admins.",
            technologies: [SiReact, SiJavascript, SiMongodb, SiTailwindcss, SiExpress],
            techNames: ["ReactJS", "Javascript", "MongoDB", "Tailwind CSS", "ExpressJS"],
            techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
            github: "https://github.com/sehajmakkar/DocTime",
        demo: "https://doc-time-rust.vercel.app/",
        image: "/projects/doctime.png",
        available: true,
    },
];
