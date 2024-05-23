import React from 'react';
import '../styles.css';
import giticon from '../icons/image.webp'
import linkedIn from '../icons/linkedIn.png'

function Contacts() {
  return (
    <section id="contacts" >
      <h3 className='custom-margin'>Contacts</h3>
      <p>Please feel free to contact me using the information below:</p>
      <ul className="bullet-list">
        <li>Email: ivailoaleksandrov123@gmail.com</li>
        <li>Phone: +359 883485045</li>
        <li>Address: Sofia, Mladost 2</li>
        <p>Profiles</p>
        
        <p><a href="https://www.linkedin.com/in/ivailo-aleksandrov-484b66248" target="_blank" rel="noreferrer"><img src={linkedIn} alt="GitHub Icon" style={{ width: '60px', marginRight: '5px' }} /></a>
        <a href="https://github.com/IvailoAleksandrov" target="_blank" rel="noreferrer"><img src={giticon} alt="GitHub Icon" style={{ width: '60px', marginRight: '5px' }} /></a></p>
        
      </ul>
      
    </section>
  );
}

export default Contacts;
