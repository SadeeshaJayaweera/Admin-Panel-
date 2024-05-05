import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">All Listings</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Add New Listing</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Pending Listings</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Log out</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
