import {Link} from "react-router-dom";
import icon from "../img/Professional sillohuette.png";

export default function Navbar() {
  return (
    <nav>
      <img src={icon} alt="Minimalist image of myself, Arlena Durant" id="icon" />
      <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}