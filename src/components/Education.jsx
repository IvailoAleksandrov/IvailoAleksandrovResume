import React from 'react';
import '../styles.css'; // Assuming you have a styles.css file for styling
import 'bootstrap/dist/css/bootstrap.min.css';


function Education() {
  const educationItems = [
    { university: 'Udemy', title: 'Postman: The Complete Guide - REST API Testing', date: '01/2024 - 02/2024' },
    { university: 'Udemy', title: 'Software Testing Masterclass-2023-JIRA | Agile | API Testing', date: '01/2024 - 01/2024' },
    { university: 'Udemy', title: 'Cypress End-to-End Testing (JS)', date: '12/2023 - 01/2024' },
    { university: 'Udemy', title: 'Modern JavaScript From Beginner to Advanced 2.0 - 2023', date: '10/2023 - 12/2023' },
    { university: 'Swift Academy', title: 'Quality Assurance Course', date: '04/2023 - 05/2023' },
    { university: 'Software University', title: 'MS SQL', date: '02/2023 - 03/2023' },
    { university: 'Software University', title: 'Programming Basics, Fundamentals, Advanced, OOP, Entity Framework Core with C#', date: '06/2022 - 02/2023' },
    { university: 'University of National and World Economy', title: 'Bachelor and master degree in Accounting', date: '06/2008 - 10/2012' },
  ];

  return (
    <div>
      <h3 className="custom-margin">Education</h3>
    <div className="container">
      <div className="row">
        {educationItems.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem', backgroundColor: '#b8c7d1' }} >
             
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.university}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{item.date}</li>
              </ul>
             
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Education;
