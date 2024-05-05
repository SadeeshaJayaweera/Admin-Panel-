import React from 'react';

import NavigationBar from "./Components/NavigationBar";
import "./App.css";
import AddNewListing from "./Pages/AddNewListing.jsx";
import  "./styles/AddNewListing.css";
import AllListings from "./Pages/AllListings.jsx";
import "./Pages/AllListings.css";
import "./Pages/PendingListings.css";
import PendingListings from "./Pages/PendingListings.jsx";



const App = () => {
    return (
        <div className="AddNewListing">


            <NavigationBar />
            {/*<AddNewListing />*/}
            <AllListings />
            {/*<PendingListings />*/}



        </div>
    );
};

export default App;
