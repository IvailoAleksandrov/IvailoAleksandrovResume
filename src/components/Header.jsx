import React from 'react';
import '../styles.css';
import logo from '../Images/Ivailo.jpg';


function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-text">
                    <h1 className="heading">Ivailo Aleksandrov</h1>
                    <p className="sub-heading">QA Engineer</p>
                </div>
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </header>
    );
}
export default Header;
