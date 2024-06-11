import React from 'react';
import './Mass.css';

function Mass() {
    return (
        <div className="container">
            <div className="back">
                <button onClick={() => window.location.href='../main.html'}>&lt; Mass accident help</button>
            </div>
            <div className="form">
                <form>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter location" />
                    <label htmlFor="type">Estimated casualty</label>
                    <select id="type" name="type">
                        <option value="" disabled selected>Enter the number of people</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                    </select>
                    <label htmlFor="note">Emergency Type</label>
                    <textarea id="note" rows="4" cols="50" placeholder="Describe the incident..."></textarea>
                    <button className="submit" type="button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Mass;