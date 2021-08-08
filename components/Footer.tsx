import getIcon from "../helper/icons";
import { socials } from "../helper/data";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer-inner">
        <div className="socials">
          {socials.map((itm) => (
            <a
              aria-label={itm.icon}
              key={itm.icon}
              target="_blank"
              rel="noopener noreferrer"
              href={itm.href}
            >
              {getIcon(itm.icon)}
            </a>
          ))}
        </div>

        <div className="copy-right-text">
          <p>{new Date().getFullYear()} &copy; All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
