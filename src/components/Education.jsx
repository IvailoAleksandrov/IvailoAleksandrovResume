import React from 'react';
import '../styles.css'; // Assuming you have a styles.css file for styling
import educationImage from '../Images/hexagons.jpg'; // Assuming education.jpg is the image file

function Education() {
  const educationItems = [
    { university: 'Udemy', title: 'Postman: The Complete Guide - REST API Testing', date: '01/2024 - 02/2024' },
    { university: 'Udemy', title: 'Software Testing Masterclass-2023-JIRA | Agile | API Testing', date: '01/2024 - 01/2024' },
    { university: 'Udemy', title: 'Cypress End-to-End Testing (JS)', date: '12/2023 - 01/2024' },
    { university: 'Udemy', title: 'Modern JavaScript From Beginner to Advanced 2.0 - 2023', date: '10/2023 - 12/2023' },
    { university: 'Swift Academy', title: 'Quality Assurance Course', date: '04/2023 - 05/2023' },
    { university: 'Software University', title: 'MS SQL', date: '02/2023 - 03/2023' },
    { university: 'Software University', title: 'Programming Basics, Fundamentals, Advanced, OOP, Entity Framework Core with C#', date: '06/2022 - 02/2023' },
    { university: 'University of National and World Economy', title: 'Bachelor and master degree in Accounting', date: '06/2022 - 02/2023' },
  ];

  return (
    <section id="education" className="section" style={{ backgroundImage: `url(${educationImage})` }}>
      <h2>Education</h2>
      <ul className="education-list">
        {educationItems.map((item, index) => (
          <li key={index} className="education-item">
            <div className="education-item-title">{item.title}</div>
            <div className="education-item-university">{item.university}</div>
            <div className="education-item-date">{item.date}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;

