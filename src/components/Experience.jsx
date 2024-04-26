import React from 'react';
import '../styles.css';

function Experience() {
  return (
    <section id="experience" className="section">
        <h2>Experience</h2>
        
        <div class="job">
            <h3>QA Specialist</h3>
            <p class="company">7777 Gaming</p>
            <p class="duration">04/2023 - 12/2023</p>
            <ul class="responsibilities">
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

        <div class="job">
            <h3>E-commerce shop owner</h3>
            <p class="company">Self-employed</p>
            <p class="duration">11/2016 - 05/2022</p>
            <ul class="responsibilities">
                <li>Business Strategy.</li>
                <li>Product Selection and Sourcing.</li>
                <li>Website Management.</li>
                <li>Marketing and Promotion.</li>
                <li>Analytics and Performance Tracking.</li>
                <li>Financial Management.</li>
            </ul>
        </div>
        <div class="job">
            <h3>Accountant</h3>
            <p class="company">Centillion LTD, CEZ Trade Bulgaria EAD, V&M Company LTD, Blizoo </p>
            <p class="duration">07/2010 - 11/2016</p>
            <ul class="responsibilities">
                <li>Financial Record Keeping.</li>
                <li>Financial Reporting.</li>
                <li>Tax Planning and Compliance.</li>
                <li>Auditing.</li>
                <li>Financial Analysis.</li>
                <li>Compliance and Regulatory Reporting.</li>
            </ul>
        </div>
    </section>
  );
}

export default Experience;
