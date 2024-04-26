import React from 'react';
import '../styles.css';

function Contacts() {
  return (
    <section id="contacts" className="section">
      <h2>Contacts</h2>
      <p>Please feel free to contact me using the information below:</p>
      <ul className="bullet-list">
        <li>Email: ivailoaleksandrov123@gmail.com</li>
        <li>Phone: +359 883485045</li>
        <li>Address: Sofia, Mladost 2</li>
        <p>Profiles</p>
        <li><a href="www.linkedin.com/in/ivailo-aleksandrov-484b66248" target="_blank">LinkedIn Profile</a></li>
        <li><a href="https://github.com/IvailoAleksandrov" target="_blank">GitHub Profile</a></li>
      </ul>
      
    </section>
  );
}

export default Contacts;
