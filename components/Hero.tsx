import { heroData } from "../helper/data";

export default function Hero() {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="left">
          <h2 className="small-title">{heroData.desc}</h2>
        </div>
        <div className="right">
          <h3>{heroData.experience}</h3>
          <p>
            YEARS OF <br />
            EXPERIENCE
          </p>
        </div>
      </div>
    </div>
  );
}
