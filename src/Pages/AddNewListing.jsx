import React, { useState } from 'react';

const AddPropertyForm = () => {
    const [propertyType, setPropertyType] = useState('');
    const [sellRent, setSellRent] = useState('');
    const [city, setCity] = useState('');
    const [information, setInformation] = useState('');
    const [images, setImages] = useState([]);
    const [postedBy, setPostedBy] = useState('');
    const [perches, setPerches] = useState('');
    const [beds, setBeds] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [title, setTitle] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');

    const handlePropertyTypeChange = (e) => {
        setPropertyType(e.target.value);
        if (e.target.value === 'Land') {
            // Reset values for house
            setBeds('');
            setBathrooms('');
        } else if (e.target.value === 'House') {
            // Reset values for land
            setPerches('');
        }
    };

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    return (
        <div>
            <h2>Add New Property</h2>
            <form>
                <div>
                    <label>Property Type:</label><br />
                    <select value={propertyType} onChange={handlePropertyTypeChange}>
                        <option value="">Select Property Type</option>
                        <option value="Land">Land</option>
                        <option value="House">House</option>
                    </select>
                </div>
                <div>
                    <label>Sell/Rent:</label><br />
                    <select value={sellRent} onChange={(e) => setSellRent(e.target.value)}>
                        <option value="">Select Sell/Rent</option>
                        <option value="Sell">Sell</option>
                        <option value="Rent">Rent</option>
                    </select>
                </div>
                <div>
                    <label>Title:</label><br />
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={60} />
                </div>
                <div>
                    <label>City:</label><br />
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="">Select City</option>
                        <option value="City1">City 1</option>
                        <option value="City2">City 2</option>
                        <option value="City3">City 3</option>
                    </select>
                </div>
                <div>
                    <label>Information:</label><br />
                    <textarea value={information} onChange={(e) => setInformation(e.target.value)} />
                </div>
                <div>
                    <label>Upload Images:</label><br />
                    <div className="upload-container">
                        <label htmlFor="file-upload" className="upload-btn">Browse</label>
                        <input id="file-upload" type="file" multiple onChange={handleImageChange} />
                    </div>
                </div>
                <div>
                    <label>Posted By:</label><br />
                    <input type="text" value={postedBy} onChange={(e) => setPostedBy(e.target.value)} />
                </div>
                <div>
                    <label>Telephone Number:</label><br />
                    <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} pattern="[0-9]{10}" placeholder="Enter 10-digit number" />
                </div>
                <div>
                    <label>Email:</label><br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                {propertyType === 'Land' && (
                    <div>
                        <label>Perches (sqt):</label><br />
                        <input type="number" value={perches} onChange={(e) => setPerches(e.target.value)} />
                    </div>
                )}
                {propertyType === 'House' && (
                    <>
                        <div>
                            <label>No of Beds:</label><br />
                            <select value={beds} onChange={(e) => setBeds(e.target.value)}>
                                <option value="">Select No of Beds</option>
                                {Array.from({ length: 35 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>No of Bathrooms:</label><br />
                            <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}>
                                <option value="">Select No of Bathrooms</option>
                                {Array.from({ length: 35 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>
                    </>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddPropertyForm;
