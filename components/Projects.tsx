import getIcon from "../helper/icons";
import Image from "next/image";
import { projects } from "../helper/data";

export default function Projects() {
  return (
    <div className="container">
      <div className="projects-holder">
        <h5 className="big-title">Projects</h5>

        <div className="projects-grid">
          {projects.map((itm) => (
            <Card key={itm.title} {...itm} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, description, github }: any) {
  return (
    <div className="card">
      <p className="small-title">{title}</p>
      <span className="card-desc">{description}</span>
      <a
        className="card-link"
        target="_blank"
        rel="noopener noreferrer"
        href={github}
      >
        {getIcon("github")}
        <span>Github</span>
      </a>
    </div>
  );
}
