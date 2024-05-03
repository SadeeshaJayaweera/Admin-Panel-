import React from 'react';
import {BiBookAlt, BiHome, BiMessage, BiSolidReport, BiStats, BiTask,  } from "react-icons/bi";
import"../styles/sidebar.css";

const Sidebar = () => {
    return <div className="menu">
         <div className="logo">
             <BiBookAlt className="logo-icon"/>
             <h2>Admin Panel</h2>
         </div>

        <div className="menu--list">
            <a href="www.facebook.com" className="item">
                <BiHome className='icon'/>
                Dashboard
            </a>
            <a href="#" className="item">
                <BiTask className='icon'/>
                Add New Listing
            </a>
            <a href="#" className="item">
                <BiSolidReport className='icon'/>
                All Listing
            </a>
            <a href="#" className="item">
                <BiStats className='icon'/>
                Pending Listing
            </a>
            <a href="#" className="item">
                <BiMessage className='icon'/>
                Log Out
            </a>
        </div>
    </div>

};
export default Sidebar;
