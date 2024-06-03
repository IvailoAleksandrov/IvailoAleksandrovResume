import React from 'react';
import movieCollection from '../Images/movie.png'
import shoppinglist from '../Images/shopping.png'
import react from '../Images/react.png'


const Projects = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <h3 className='custom-margin' id='projects' >Projects</h3>
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="https://moviecollection1.netlify.app/">
            <img src={movieCollection} className="d-block w-100" alt="..." />
          </a>
        </div>
        <div className="carousel-item">
          <a href="https://shoppinglistttt.netlify.app/">
            <img src={shoppinglist} className="d-block w-100" alt="..." />
          </a>
        </div>
        <div className="carousel-item">
          <a href="https://reactcoreconcepts.netlify.app">
            <img src={movieCollection} className="d-block w-100" alt="..." />
          </a>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
};

export default Projects;
