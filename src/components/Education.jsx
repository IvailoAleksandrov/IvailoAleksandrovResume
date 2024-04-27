import React from 'react';
import '../styles.css';
import education from '../Images/education.png'

function Education() {
  return (
    <section id="education" className="section" style={{ backgroundImage: `url(${education})` }}>
      
      <h2>Education</h2>
      <ul className="bullet-list"> 
        <li>Postman: The Complete Guide - REST API Testing (01/2024 - 02/2024)</li>
        <li>Software Testing Masterclass-2023-JIRA | Agile | API Testing (01/2024 - 01/2024)</li>
        <li>Cypress End-to-End Testing (JS) (12/2023 - 01/2024)</li>
        <li>Modern JavaScript From Beginner to Advanced 2.0 - 2023 (10/2023 - 12/2023)</li>
        <li>Quality Assurance Course - Swift Academy (04/2023 - 05/2023)</li>
        <li>MS SQL - Software University (02/2023 - 03/2023)</li>
        <li>Programming Basics, Fundamentals, Advanced, OOP, Entity Framework Core with C#  - Software University (06/2022 - 02/2023)</li>
        <li>Bachelor and master degree in Accounting  - University of National and World Economy (06/2022 - 02/2023)</li>
      </ul>
    </section>
  );
}

export default Education;
