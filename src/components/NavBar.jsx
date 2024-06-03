import React from 'react';
import '../styles.css'; // Ensure you import the CSS file

const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="section" style={{ backgroundColor: '#012a4a' }}>
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
)};

export default Navbar;

