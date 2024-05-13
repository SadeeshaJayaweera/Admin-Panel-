import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'; // Import your CSS file

const Dashboard = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    // Logout function
    const logout = () => {
        // Clear the access token from local storage or cookies
        localStorage.removeItem('accessToken'); // For example, if using local storage

        // Redirect to the login page
        navigate('/login');
    };

    useEffect(() => {
        axios.get('http://localhost:3001/dashboard')
            .then(res => {
                console.log(res);
                if (res.data.valid) {
                    setMessage(res.data.message);
                } else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }, []); // Ensure useEffect runs only once by passing an empty dependency array

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">Your Logo</div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* Use Link component to navigate to the login page */}
                        <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
                    </li>
                </ul>
            </nav>
            <div className="dashboard-container">
                <h2 className="dashboard-message">Dashboard {message}</h2>
            </div>
        </div>
    );
}

export default Dashboard;
