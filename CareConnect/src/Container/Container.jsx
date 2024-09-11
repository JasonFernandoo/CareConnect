import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Container.css';
import bookImage from '../assets/book.png';
import massImage from '../assets/mass-accident.png';
import aidImage from '../assets/first-aid.png';
import mapImage from '../assets/map.png';
import acceptMassImage from '../assets/accept.png';
import locationImage from '../assets/location.png';

function Container() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
    const [showProgressBooking, setShowProgressBooking] = useState(false);

    useEffect(() => {
        if (location.state?.showPopup) {
            setShowPopup(true);
            const timer = setTimeout(() => {
                setShowPopup(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [location.state]);

    useEffect(() => {
        if (location.state?.showProgressBooking) {
            setShowProgressBooking(true);
        }
    }, [location.state]);

    return (
        <div className="container">
            {showPopup && <div className="popup">
                <img src={acceptMassImage} />
                <p>Sent!</p>
            </div>}
            <div className="header">
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
                <div className="header-bawah">
                    <div className="search">
                        <input type="text" placeholder="Type to Search" />
                    </div>
                </div>
            </div>
            <div className="main-project">
                <div className="button">
                    <div className="button-atas">
                        <div className='button-atas-img'>
                            <img src={bookImage}/>
                        </div>
                        <button onClick={() => navigate('/book')} style={{position: 'absolute', top: '0'}}>Book an Ambulance</button>
                    </div>
                    <div className="button-bawah">
                        <div className="button-kiri">
                            <div className='button-kiri-img'>
                                <img src={massImage}/>
                            </div>
                            <button onClick={() => navigate('/mass')} style={{position: 'absolute', top: '0'}}>Mass<br />Accident</button>
                        </div>
                        <div className="button-kanan">
                            <div className='button-kanan-img'>
                                <img src={aidImage}/>
                            </div>
                            <button onClick={() => navigate('/aid')} style={{position: 'absolute', top: '0'}}>First Aid<br />Method</button>
                        </div>
                    </div>
                </div>
                <div className="emergency">
                    <p>Emergency Calls</p>
                    <div className="emergency-grid">
                        <div className="grid-1">
                            <button>RedKar<br></br><span>Pemadam Kebakaran</span></button>
                        </div>
                        <div className="grid-2">
                            <button>Polri<br></br><span>Lapor Polisi</span></button>
                        </div>
                        <div className="grid-3">
                            <button>LISA<br></br><span>Suicidal Prevention</span></button>
                        </div>
                        <div className="grid-4">
                            <button>SAR<br></br><span>Search and Rescue</span></button>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <p>Map</p>
                    <div className="map-image">
                        <img src={mapImage} alt="map"/>
                    </div>
                </div>
                {showProgressBooking && (
                    <div className="progress-booking">
                        <div className="progress">
                            <div className='progress-content'>
                                <div className='progress-img'>
                                    <img src={bookImage} alt="book"/>
                                </div>
                                <div className='progress-text'>
                                    <h4>Ambulance RS AMC, Sumedang</h4>
                                    <p>Arriving in 3 minutes</p>
                                </div>
                            </div>
                            <div className="progress-bar">
                            
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Container;