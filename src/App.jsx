import React from 'react';
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import profile from "./Components/Profile";
import "./App.css";


const App = () => {
    return (
        <div className="dashboard">
            <Sidebar/>
            <div className="dashboard--content"></div>



        </div>
    );
};

export default App;
