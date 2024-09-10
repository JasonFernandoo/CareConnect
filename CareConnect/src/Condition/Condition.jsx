import React from 'react';
import './Condition.css';
import { useNavigate } from 'react-router-dom';

function Condition() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="back">
                    <button onClick={() => navigate('/user2')}>← Send Condition</button>
                </div>
                <div className="form">
                    <form>
                        <label htmlFor="heartRate">Heart Rate</label>
                        <input type="text" id="heartRate" name="heartRate" placeholder="Enter heart rate" />
                        
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" name="age" placeholder="Enter age" />
                        
                        <label htmlFor="type">Emergency Type</label>
                        <select id="type" name="emergencyType">
                            <option value="" disabled>Select an emergency type</option>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                            <option value="type3">Type 3</option>
                        </select>

                        <label htmlFor="condition">Condition</label>
                        <textarea id="condition" rows="4" cols="50" name="condition" placeholder="Write anything that the doctor needs to know..."></textarea>

                        <button className="submitButton" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Condition;
