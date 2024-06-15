import React, { useState } from 'react';
import './Book.css';
import { useNavigate } from 'react-router-dom';

function Book() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="back">
                <button onClick={() => navigate('/')}>Book an Ambulance</button>            
            </div>
            <div className="form">
                <form>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter location" />
                    <label htmlFor="hname">Hospital Name</label>
                    <input type="text" id="hname" name="hname" placeholder="Enter hospital name (optional)" />
                    <label htmlFor="type">Emergency Type</label>
                    <select id="type" name="type">
                        <option value="" disabled selected>Select an emergency type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                    </select>
                    <label htmlFor="note">Note to the Doctor</label>
                    <textarea id="note" rows="4" cols="50" placeholder="Write anything that the doctor have to know..."></textarea>
                    <label htmlFor="assist">Do you need a nurse's assistance?</label>
                    <div id="assist">
                        <label>
                            <input type="radio" name="assist" value="yes" />
                            <span>Yes</span>
                        </label>
                        <label>
                            <input type="radio" name="assist" value="no" />
                            <span>No</span>
                        </label>
                    </div>
                    <button className="submit" type="button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Book;