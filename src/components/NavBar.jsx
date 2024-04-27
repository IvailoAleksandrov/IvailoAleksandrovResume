import React from 'react';
import '../styles.css';


function NavBar() {
  

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#about" onClick={() => scrollToSection('about')}>
            About Me
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => scrollToSection('experience')}>
            Experience
          </a>
        </li>
        <li>
          <a href="#education" onClick={() => scrollToSection('education')}>
            Education
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => scrollToSection('skills')}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => scrollToSection('projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contacts" onClick={() => scrollToSection('contacts')}>
            Contact
          </a>
        </li>
      
      
     
      </ul>
    </nav>
  );
}

export default NavBar;
