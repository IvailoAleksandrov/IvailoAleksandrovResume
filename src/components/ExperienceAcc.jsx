import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExperienceAcc() {
   
    return (
        <div id="experience">
            <h3 className='custom-margin'>Experience</h3>
        <div class="accordion " id="accordionPanelsStayOpenExample" >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            <b> QA Specialist - 7777 Gaming </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 04/2023 - 12/2023
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
            <div class="accordion-body">
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
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            <b> E-commerce shop owner </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11/2016 - 05/2022
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
            <ul className="responsibilities">
                <li>Business Strategy.</li>
                <li>Product Selection and Sourcing.</li>
                <li>Website Management.</li>
                <li>Marketing and Promotion.</li>
                <li>Analytics and Performance Tracking.</li>
                <li>Financial Management.</li>
            </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            <b> Accountant - Centillion LTD, CEZ Trade Bulgaria EAD, V&M Company LTD, Blizoo</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 07/2010 - 11/2016
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
            <ul className="responsibilities">
                <li>Financial Record Keeping.</li>
                <li>Financial Reporting.</li>
                <li>Tax Planning and Compliance.</li>
                <li>Auditing.</li>
                <li>Financial Analysis.</li>
                <li>Compliance and Regulatory Reporting.</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default ExperienceAcc;