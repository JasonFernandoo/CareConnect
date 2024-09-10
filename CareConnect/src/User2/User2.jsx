import React from 'react';
import { useNavigate } from 'react-router-dom';
import locationImage from '../assets/location.png';
import './User2.css'
import addImage from '../assets/plus.png';

function User2() {
    const navigate = useNavigate();

    return (
        <div className='rs-container'>
            <div className="confirm-header">
                <div className="header-atas">
                    <div className="atas-kiri">
                        <div className="profile">
                            <img src={locationImage} />  
                        </div>
                        <p>Jakarta, Indonesia</p>
                    </div>
                    <div className="atas-kanan">
                        <p>Username</p>
                        <div className="profile">
                            <button onClick={() => navigate('/profile')}></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map-rs'>

            </div>
            <div className='navbar'>
                <button onClick={() => navigate('/condition')}>
                    <img src={addImage} />
                </button>
            </div>
        </div>
    );
}

export default User2;