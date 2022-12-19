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
            <Project key={itm.title} {...itm} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Project({ title, description, github, link }: any) {
  return (
    <div className="project">
      <p className="small-title">{title}</p>
      <span className="text-base">{description}</span>
      <div className="actions">
        {Boolean(github) && (
          <a target="_blank" rel="noopener noreferrer" href={github}>
            {getIcon("github")}
          </a>
        )}

        {Boolean(link) && (
          <a target="_blank" rel="noopener noreferrer" href={link}>
            {getIcon("external")}
          </a>
        )}
      </div>
    </div>
  );
}
