import React from "react";
import { Link, useLocation } from "react-router-dom";
import profilePicture from "../profile-picture.jfif";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              About me
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={location.pathname === "/experience" ? "active" : ""}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={location.pathname === "/skills" ? "active" : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <br></br><br></br>
      {/* <img
        src={profilePicture}
        alt="Queralt Sosa Mompel"
        className="profile-picture"
      /> */}
      <h1>Queralt Sosa Mompel</h1>
      <p>Software Engineer</p>
    </header>
  );
};

export default Header;