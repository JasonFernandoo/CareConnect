import React, { useEffect, useState, useRef } from 'react';
import './BookConfirm.css';
import { useNavigate } from 'react-router-dom';
import acceptImage from '../assets/accept.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function BookConfirm() {
    const navigate = useNavigate();
    const [latestBooking, setLatestBooking] = useState(null);
    const [bookedHeight, setBookedHeight] = useState('70%');
    const bookedRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/bookings')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched booking data:', data);
                setLatestBooking(data);
            })
            .catch(error => console.error('Error fetching latest booking:', error));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (bookedRef.current && !bookedRef.current.contains(event.target)) {
                setBookedHeight('0');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [bookedRef]);

    return (
        <div className="container">
            <div className="confirm-header">
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
            </div>
            <div className="map-container">
                {latestBooking && latestBooking.latitude && latestBooking.longitude ? (
                    <MapContainer center={[latestBooking.latitude, latestBooking.longitude]} zoom={13} style={{ height: "400px", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[latestBooking.latitude, latestBooking.longitude]}>
                            <Popup>
                                {latestBooking.hospitalName} <br /> {latestBooking.location}
                            </Popup>
                        </Marker>
                    </MapContainer>
                ) : (
                    <p>No map data available</p>
                )}
            </div>
            <div className="booked" ref={bookedRef} style={{ height: bookedHeight }}>
                <div className="slider"></div>
                <div className='booked-img'>
                    <img src={acceptImage} alt="booked"/>
                </div>
                <h2>Booking Confirmed</h2>
                {latestBooking ? (
                    <div>
                        <h3>Booking Summary</h3>
                        <h4>Location</h4>
                        <p>{latestBooking.location}</p>
                        <h4>Hospital Name</h4>
                        <p>{latestBooking.hospitalName}</p>
                        <h4>Emergency Type</h4>
                        <p>{latestBooking.emergencyType}</p>
                        <h4>Note</h4>
                        <p>{latestBooking.note}</p>
                        <p className={latestBooking.nurseAssistance === 'yes' ? 'green-text' : 'red-text'} style={{ marginTop: '10%' }}>
                            {latestBooking.nurseAssistance === 'yes' ? "Nurse's assistance requested" : "Nurse's assistance not requested"}
                        </p>
                    </div>
                ) : (
                    <p>No booking data available</p>
                )}
            </div>
        </div>
    );
}

export default BookConfirm;
