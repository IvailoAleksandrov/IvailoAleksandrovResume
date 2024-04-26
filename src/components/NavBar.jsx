import React from 'react';
import '../styles.css';




function NavBar() {
    const scrollToSection = (id) => {
        const element = document.getElementById('id');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    return (
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#about" onClick={() => scrollToSection('')}>
                About Me
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => scrollToSection('')}>
                Experience
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => scrollToSection('')}>
                Education
              </a>
            </li>
            <li>
                <a href="#skills" onClick={() => scrollToSection('')}>
                Skills
                </a>
            </li>
            <li>
                <a href="#projects" onClick={() => scrollToSection('')}>
                Projects
                </a>
            </li>
            <li>
                <a href="#contacts" onClick={() => scrollToSection('')}>
                Contact
                </a>
            </li>
          </ul>
        </nav>
      );
    }
  

export default NavBar;
