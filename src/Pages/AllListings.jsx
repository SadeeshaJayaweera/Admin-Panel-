import React, { useState } from 'react';
import './AllListings.css';

const ListingsPage = () => {
    const [listings, setListings] = useState([
        { id: 1, name: 'House in Canada', number: '12345', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIY4pUpSvWx4l8oyWBtWv2MVSN6UENsPz2g&usqp=CAU' },
        { id: 2, name: 'Mansion in Unnited Kingdom', number: '67890', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4rOpMXHmriX5O2oqLgAMgqA1mQu67y8nlMWVBMT961TC2KRmLOzdxWb5cRxUnWLduiI&usqp=CAU' },
        { id: 3, name: 'Mansion in United States ', number: '54321', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynoAQwIDkXMGwLVCG8LPMUzuysPo652PymkOKXqYimOVmUWN9meU60uyBrE-Mt1wsjjc&usqp=CAU' },
        { id: 4, name: 'Mansion in United States ', number: '54321', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynoAQwIDkXMGwLVCG8LPMUzuysPo652PymkOKXqYimOVmUWN9meU60uyBrE-Mt1wsjjc&usqp=CAU' },
        { id: 5, name: 'Mansion in United States ', number: '54321', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynoAQwIDkXMGwLVCG8LPMUzuysPo652PymkOKXqYimOVmUWN9meU60uyBrE-Mt1wsjjc&usqp=CAU' },
        { id: 6, name: 'Mansion in United States ', number: '54321', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynoAQwIDkXMGwLVCG8LPMUzuysPo652PymkOKXqYimOVmUWN9meU60uyBrE-Mt1wsjjc&usqp=CAU' },
        { id: 7, name: 'Mansion in United States ', number: '54321', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynoAQwIDkXMGwLVCG8LPMUzuysPo652PymkOKXqYimOVmUWN9meU60uyBrE-Mt1wsjjc&usqp=CAU' },
    ]);

    const [selectedListing, setSelectedListing] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const handleEdit = (id) => {
        const selected = listings.find(listing => listing.id === id);
        setSelectedListing(selected);
        setEditMode(true);
    };

    const handleSave = (editedListing) => {
        const updatedListings = listings.map(listing =>
            listing.id === editedListing.id ? editedListing : listing
        );
        setListings(updatedListings);
        setEditMode(false);
    };

    const handleDelete = (id) => {
        const updatedListings = listings.filter(listing => listing.id !== id);
        setListings(updatedListings);
    };

    return (
        <div className="listings-container">
            <h2>All Listings</h2>
            {listings.map(listing => (
                <div key={listing.id} className="listing-item">
                    <img src={listing.imageUrl} alt={listing.name} className="listing-image" />
                    <div className="listing-details">
                        <h3>{listing.name}</h3>
                        <p>Listing Number: {listing.number}</p>
                        <div className="button-container">
                            <button onClick={() => handleEdit(listing.id)}>Edit</button>
                            <button onClick={() => handleDelete(listing.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            {editMode && selectedListing && (
                <div className="edit-form">
                    <h2>Edit Listing</h2>
                    {/* Render your form with selectedListing data */}
                    <div className="button-container">
                        <button onClick={() => setEditMode(false)}>Cancel</button>
                        <button onClick={() => handleSave(selectedListing)}>Save Changes</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListingsPage;
