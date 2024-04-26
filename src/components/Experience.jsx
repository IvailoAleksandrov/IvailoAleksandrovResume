import React, { useState, useEffect } from 'react';
import '../styles.css';

function Experience() {

    const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };
  return (

    <section id="experience" className="section">
    <h2>Experience</h2>
    <div className="slider-container">
      <div className="slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="experience"><div >
            <h3>QA Specialist</h3>
            <p>7777 Gaming</p>
            <p className="duration">04/2023 - 12/2023</p>
            <ul className="responsibilities">
                <li>Аnalyzing business requirements and specification.</li>
                <li>Creating, maintaining, and executing detailed, comprehensive, and well-structured test plans and test cases.</li>
                <li>Working closely with the development team and project managers.</li>
                <li>Testing various types of campaigns, including seasonal promotions, welcome bonuses, free spins, cashback offers, tournaments and leaderboards, and game-specific promotions from different casino providers</li>
                <li>Participating in all stages of development for new slot games</li>
                <li>Monitoring the correct calculation of various parameters in slot games and sports betting</li>
                <li>Verifying that websites and mobile applications are working correctly across different browsers - Safari,Chrome,Firefox, operating systems - Windows,macOS, and devices Android and iOS</li>
                <li>Executing functional testing, regression testing, usability testing, performance testing and end-to-end testing</li>
                <li>Conducting API testing to ensure the reliability and functionality of APIs</li>
                <li>Testing multiple slot games from different providers</li>
                <li>Reporting bugs, including clear steps to reproduce them, and tracking their resolution through to completion</li>
            </ul>
        </div></div>
        <div className="experience"><div>
            <h3>E-commerce shop owner</h3>
            <p >Self-employed</p>
            <p className="duration">11/2016 - 05/2022</p>
            <ul className="responsibilities">
                <li>Business Strategy.</li>
                <li>Product Selection and Sourcing.</li>
                <li>Website Management.</li>
                <li>Marketing and Promotion.</li>
                <li>Analytics and Performance Tracking.</li>
                <li>Financial Management.</li>
            </ul>
        </div></div>
        <div className="experience"><div>
            <h3>Accountant</h3>
            <p>Centillion LTD, CEZ Trade Bulgaria EAD, V&M Company LTD, Blizoo </p>
            <p className="duration">07/2010 - 11/2016</p>
            <ul className="responsibilities">
                <li>Financial Record Keeping.</li>
                <li>Financial Reporting.</li>
                <li>Tax Planning and Compliance.</li>
                <li>Auditing.</li>
                <li>Financial Analysis.</li>
                <li>Compliance and Regulatory Reporting.</li>
            </ul>
        </div></div>
      </div>
    </div>
    <div className="controls">
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  </section>
  );
}

export default Experience;
