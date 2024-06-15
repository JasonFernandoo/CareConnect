import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Container.css';

function Container() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="header">
                <div className="header-atas">
                    <div className="atas-kiri">
                        <div className="profile"></div>
                        <p>Jakarta, Indonesia</p>
                    </div>
                    <div className="atas-kanan">
                        <p>Username</p>
                        <div className="profile">
                            <button onClick={() => navigate('/profile')}></button>
                        </div>
                    </div>
                </div>
                <div className="header-bawah">
                    <div className="search">
                        <input type="text" placeholder="Type to Search" />
                    </div>
                </div>
            </div>
            <div className="main-project">
                <div className="button">
                    <div className="button-atas">
                        <button onClick={() => navigate('/book')}>Book an Ambulance</button>
                    </div>
                    <div className="button-bawah">
                        <div className="button-kiri">
                            <button onClick={() => navigate('/mass')}>Mass<br />Accident</button>
                        </div>
                        <div className="button-kanan">
                            <button onClick={() => navigate('/aid')}>First Aid<br />Method</button>
                        </div>
                    </div>
                </div>
                <div className="emergency">
                    <p>Emergency Calls</p>
                    <div className="emergency-grid">
                        <div className="grid-1">
                            <button>RedKar</button>
                        </div>
                        <div className="grid-2">
                            <button>Polri</button>
                        </div>
                        <div className="grid-3">
                            <button>LISA</button>
                        </div>
                        <div className="grid-4">
                            <button>SAR</button>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <p>Map</p>
                    <div className="map-image"></div>
                </div>
            </div>
        </div>
    );
}

export default Container;