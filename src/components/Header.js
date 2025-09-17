import React from "react";

function Header() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <ul className="nav-menu">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
