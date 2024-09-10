import React, { useState } from 'react';
import './Condition.css';
import { useNavigate } from 'react-router-dom';

function Condition() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="back">
                <button onClick={() => navigate('/user2')}>← Send Condition</button>            
            </div>
        </div>
    );
}

export default Condition;
