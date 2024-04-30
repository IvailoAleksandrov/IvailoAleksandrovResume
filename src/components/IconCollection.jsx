import React from 'react';
import gitHub from '../icons/image.webp'
import net from '../icons/download.webp'
import js from '../icons/js.webp'
import testAutomation from "../icons/testautomation.png"
import cypress from '../icons/cypress.webp'
import reactImg from '../icons/react.webp'
import html from '../icons/html.webp'
import css from '../icons/css.webp'
import cdt from '../icons/chrome.webp'
import postman from '../icons/postman.png'
import sql from '../icons/sql.png'
import jira from '../icons/jira.png'
import clickup from '../icons/clickup.png'
import slack from '../icons/Slack.png'
import english from '../icons/english.jpg'
import driving from '../icons/driving.png'
import finance from '../icons/finance.png'
import oop from '../icons/oop.png'
import http from '../icons/http.webp'


function IconCollection() {
    const icons = [
        { icon: testAutomation, title: 'Manual & Automation Testing' },
        { icon: js, title: 'JavaScript' },
        { icon: cypress, title: 'Cypress' },
        { icon: postman, title: 'API test Postman' },
        { icon: sql, title: 'SQL' },
        { icon: reactImg, title: 'React' },
        { icon: net, title: 'C# .NET' },
        { icon: html, title: 'Html' },
        { icon: css, title: 'CSS' },
        { icon: http, title: 'HTTP' },
       
    ];
    const icons2 = [
        
        { icon: cdt, title: 'Dev Tools' },
        { icon: oop, title: 'OOP' },
        { icon: gitHub, title: 'GitHub' },
        { icon: jira, title: 'Jira' },
        { icon: clickup, title: 'ClickUp' },
        { icon: slack, title: 'Slack' },
        { icon: english, title: 'English B2/C1' },
        { icon: finance, title: 'Accounting/Finance' },
        { icon: driving, title: 'Driving license' },
    ];


    return (
       <div id="skills" className='section'>
        <h1>Skills</h1>
       <div className="icon-collection">
            {icons.map((item, index) => (
                <div key={index} className="icon-item">
                    <img key={index} src={item.icon} alt={`Image ${index + 1}`} />
                    <p >{item.title}</p>
                </div>
            ))}
            <style jsx>{`
                .icon-collection {
                    display: flex;
                    justify-content: space-between; /* Adjust this to your preference */
                    flex-wrap: wrap; /* Allows icons to wrap to the next line if necessary */
                }
                .icon-item {
                    text-align: center; /* Centers the icon and text */
                    margin: 10px; /* Add some margin between icons */
                }
            `}</style>
        </div>
        <div className="icon-collection">
            {icons2.map((item, index) => (
                <div key={index} className="icon-item">
                    <img key={index} src={item.icon} alt={`Image ${index + 1}`} />
                    <p >{item.title}</p>
                </div>
            ))}
            <style jsx>{`
                .icon-collection {
                    display: flex;
                    justify-content: space-between; /* Adjust this to your preference */
                    flex-wrap: wrap; /* Allows icons to wrap to the next line if necessary */
                }
                .icon-item {
                    text-align: center; /* Centers the icon and text */
                    margin: 10px; /* Add some margin between icons */
                }
            `}</style>
        </div>
        </div>
    );
}

export default IconCollection;
