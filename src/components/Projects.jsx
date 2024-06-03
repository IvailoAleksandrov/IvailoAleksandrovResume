import React from 'react';
import movieCollection from '../Images/movie.png';
import shoppinglist from '../Images/shopping.png';
import react from '../Images/react.png';

const Projects = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <h3 className='custom-margin' id='projects'>Projects</h3>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="https://moviecollection1.netlify.app/">
              <img src={movieCollection} className="d-block w-100 rounded" alt="Movie collection app" />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>Movie collection App</h5>
              <p>Movie Library.</p>
            </div>
          </div>
          <div className="carousel-item">
            <a href="https://shoppinglistttt.netlify.app/">
              <img src={shoppinglist} className="d-block w-100 rounded" alt="Shopping list app" />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>Shopping list App</h5>
              <p>Vanilla JavaScript App.</p>
            </div>
          </div>
          <div className="carousel-item">
            <a href="https://reactcoreconcepts.netlify.app">
              <img src={react} className="d-block w-100 rounded" alt="React concepts" />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>React concepts</h5>
              <p>Basic React Application - Components, JSX, Props, States and more.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Projects;
