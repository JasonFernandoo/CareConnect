import React, { useState } from 'react'; 
import './Profile.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', { replace: true });
      };

      return (
        <div className="profile-page">
            <div className="back-profile">
                <button onClick={() => navigate('/')}>← Back</button>     
            </div>
            <div className="container-profile">
                <div className='top-profile'>
                    <div className='profile-img'></div>
                    <div className='profile-name'>
                        <p>Username</p>
                    </div>
                </div>
                <div className='bottom'></div>
                <div className="fixed-div">
                    <div className='fixed-atas'>
                        <button>My Address</button>
                        <button>Account</button>
                        <button className='last-button'>Riwayat</button>
                    </div>
                    <div className='fixed-bawah'>
                        <button>Notifications</button>
                        <button>Passwords</button>
                        <button>Privacy and Security</button>
                        <button>Language</button>
                        <button className='last-button' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;