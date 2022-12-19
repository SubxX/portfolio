export const heroData = {
  title: "Subham Bhattacharya",
  desc: `Hello I’m Subham Bhattacharya a Front-End heavy full stack developer located in India. I have
      a serious passion for frontend development & animations and creating
      intuitive, dynamic user experiences.`,
  experience: "3+",
};

export const skills: Array<{
  name: string;
  icon: string;
}> = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "scss", icon: "scss" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Javascript", icon: "js" },
  { name: "Typescript", icon: "ts" },
  { name: "Angular", icon: "angular" },
  { name: "React", icon: "react" },
  { name: "Next Js", icon: "next" },
  { name: "Node Js", icon: "node" },
  { name: "Firebase", icon: "firebase" },
  { name: "Mongo DB", icon: "mongo" },
];

export const projects: Array<{
  title: string;
  description: string;
  github: string;
  link?: string;
}> = [
  {
    title: "Store App",
    description: `In the era of remote jobs, This application will help an 
      company to make the working fun.`,
    github: "https://github.com/SubxX/store-app",
    link: "https://subxx.github.io/store-app/",
  },
  {
    title: "Notepad",
    description:
      "Organize all your notes in one place with an inbuild audio recorder, pinning, searching & tagging",
    github: "https://github.com/SubxX/Notepad",
    link: "https://subxx.github.io/Notepad/",
  },
  {
    title: "Crypt",
    description: `A POC project for learning more about Ethereum, Blockchain & Submodules.`,
    github: "https://github.com/SubxX/Crypt",
  },
  {
    title: "Task Management",
    description: `POC project for learning more about React & Redux`,
    github: "https://github.com/SubxX/task-management",
  },
  {
    title: "Croundfunding App",
    description: `This is a frontend mentor project using REACT and plain CSS`,
    github: "https://github.com/SubxX/croudfunding-app-ui",
  },
  {
    title: "Portfolio website",
    description:
      "This is my portfolio website, designed with Figma & developed with Next JS",
    github: "https://github.com/SubxX/portfolio",
  },
  {
    title: "Traveling Site",
    description:
      "Design inspired by dribble and developed with next js & gsap for animation",
    github: "https://github.com/SubxX/travel-nextjs",
  },
  {
    title: "WebChat application",
    description:
      "This is my college Project where Angular is used for Front End and Nodejs is used for backend",
    github: "https://github.com/SubxX/ChatApplication",
  },
];

export const socials: Array<{
  href: string;
  icon: string;
}> = [
  {
    href: "https://www.linkedin.com/in/subx",
    icon: "linkedin",
  },
  { href: "mailto:subhambhattacharya700@gmail.com", icon: "email" },
  { href: "https://github.com/SubxX", icon: "github" },
];
