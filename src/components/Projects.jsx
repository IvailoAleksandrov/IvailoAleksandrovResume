import React from 'react';
import '../styles.css';

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul className="bullet-list">
        <li><a href="https://moviecollection1.netlify.app/" target="_blank" rel="noreferrer">Movie Collection Library App</a></li>
        <li><a href="https://shoppinglistttt.netlify.app/" target="_blank" rel="noreferrer">Shopping List App</a></li>
        <li><a href="https://reactcoreconcepts.netlify.app/" target="_blank" rel="noreferrer">Basic React Application using Components, JSX, Props, States and more</a></li>
      </ul>
    </section>
  );
}

export default Projects;
