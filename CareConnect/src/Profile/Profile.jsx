import React, { useState } from 'react'; 
import './Profile.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();

    return (
        <div className="container-profile">
            <div className='top-profile'>
                <div className="back-profile">
                    <button onClick={() => navigate('/')}>Back</button>     
                </div>
                <div className='profile-img'></div>
                <div className='profile-name'>
                    <p>Username</p>
                </div>
            </div>
            <div className='bottom'></div>
            <div class="non-scrollable-container">
                <div className="fixed-div">
                    <div className='fixed-atas'>

                    </div>
                    <div className='fixed-bawah'>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;