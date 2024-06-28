import React, { useState } from 'react';
import './Book.css';
import { useNavigate } from 'react-router-dom';

function Book() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userid: '',
        bookingid: '',
        location: '',
        hospitalName: '',
        emergencyType: '',
        note: '',
        nurseAssistance: '',
        status: ''
    });
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [errorSubmitting, setErrorSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setButtonClicked(true);
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            const data = await response.json();
            console.log('Response:', data);
            setSubmitSuccess(true);
            setTimeout(() => {
                setButtonClicked(false);
                navigate('/BookConfirm');
            }, 1000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorSubmitting(true);
        }
    };

    return (
        <div className="container">
            <div className="back">
                <button onClick={() => navigate('/')}>Book an Ambulance</button>            
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter location" onChange={handleChange} />
                    <label htmlFor="hname">Hospital Name</label>
                    <input type="text" id="hname" name="hospitalName" placeholder="Enter hospital name (optional)" onChange={handleChange} />
                    <label htmlFor="type">Emergency Type</label>
                    <select id="type" name="emergencyType" onChange={handleChange}>
                        <option value="" disabled>Select an emergency type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                    </select>
                    <label htmlFor="note">Note to the Doctor</label>
                    <textarea id="note" rows="4" cols="50" name="note" placeholder="Write anything that the doctor have to know..." onChange={handleChange}></textarea>
                    <label htmlFor="assist">Do you need a nurse's assistance?</label>
                    <div id="assist">
                        <label>
                            <input type="radio" name="nurseAssistance" value="yes" onChange={handleChange} />
                            <span>Yes</span>
                        </label>
                        <label>
                            <input type="radio" name="nurseAssistance" value="no" onChange={handleChange} />
                            <span>No</span>
                        </label>
                    </div>
                    <button className={`submit ${buttonClicked ? 'clicked' : ''}`} type="submit">Submit</button>
                    {submitSuccess && <p className="success-message">Form submitted successfully!</p>}
                    {errorSubmitting && <p className="error-message">Error submitting form. Please try again later.</p>}
                </form>
            </div>
        </div>
    );
}

export default Book;
