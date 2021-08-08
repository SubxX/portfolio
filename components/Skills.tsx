import getIcon from "../helper/icons";
import { skills } from "../helper/data";

export default function Skills() {
  return (
    <div className="container">
      <div className="pricing-section">
        <h4 className="big-title">Skills</h4>

        <div className="skills-holder">
          {skills.map((skill) => (
            <Chip key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Chip({ name, icon }: any) {
  return (
    <div className="skill-chip">
      {getIcon(icon)}
      <span className="text-base">{name}</span>
    </div>
  );
}
