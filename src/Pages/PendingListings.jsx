import React, { useState } from 'react';
import "./PendingListings.css";

const PendingListingsPage = () => {
    const [pendingListings, setPendingListings] = useState([
        { id: 1, name: 'Mansion in UK ', imageUrl: 'https://www.palmbeachpost.com/gcdn/presto/2021/01/12/NPBD/08d0fd5e-2255-4d49-b608-e83342ae4615-PBN_POOL_REAR_535_N_County_Road_HiRes_PictureItSoldFL.jpg?crop=1279,720,x0,y64&width=1279&height=720&format=pjpg&auto=webp' },
        { id: 2, name: 'House in Peradeniya', imageUrl: 'https://i.pinimg.com/736x/55/d2/0f/55d20fbc721dd5093efc1a9618223732.jpg' },
        { id: 3, name: 'House in Mount Lavinia ', imageUrl: 'https://cdn.shopify.com/s/files/1/0455/8913/files/poolhome_1024x1024.jpg?v=1552709181' }
    ]);

    const handleApprove = (id) => {
        // Implement approve functionality
        console.log(`Approve listing with ID ${id}`);
    };

    const handleDelete = (id) => {
        // Remove the listing with the given ID from the state
        const updatedListings = pendingListings.filter(listing => listing.id !== id);
        setPendingListings(updatedListings);
    };

    return (
        <div>
            <h2>Pending Listings</h2>
            {pendingListings.map(listing => (
                <div key={listing.id} className="pending-listing">
                    <img src={listing.imageUrl} alt={listing.name} className="listing-image" />
                    <div className="listing-details">
                        <p>ID: {listing.id}</p>
                        <p>Name: {listing.name}</p>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleApprove(listing.id)}>Approve</button>
                        <button onClick={() => handleDelete(listing.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PendingListingsPage;
