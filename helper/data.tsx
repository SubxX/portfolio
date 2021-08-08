export const heroData: { title: string; desc: string; experience: number } = {
  title: "Subham Bhattacharya",
  desc: `Hello I’m Subham Bhattacharya a Front-End heavy full stack developer located in India. I have
      a serious passion for frontend development & animations and creating
      intuitive, dynamic user experiences.`,
  experience: 1.8,
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
}> = [
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
    github: "",
  },
  {
    title: "WebChat application",
    description:
      "This is my college Project where Angular is used for FrontEnd and Nodejs is used for backend",
    github: "https://github.com/SubxX/ChatApplication",
  },
];

export const socials: Array<{
  href: string;
  icon: string;
}> = [
  {
    href: "https://www.linkedin.com/in/subham-bhattacharya-b66b49145",
    icon: "linkedin",
  },
  { href: "mailto:subhambhattacharya700@gmail.com", icon: "email" },
  { href: "https://github.com/SubxX", icon: "github" },
];
