import React, { useEffect, useState, useRef } from 'react';
import './BookConfirm.css';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import acceptImage from '../assets/accept.png';

const GOOGLE_API_KEY = 'AIzaSyCSyGZc-LCUj0tIJ6pSb5ZJwPYlQSbXT48';

function BookConfirm() {
    const navigate = useNavigate();
    const [latestBooking, setLatestBooking] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    const [bookedHeight, setBookedHeight] = useState('70%');
    const [errorFetchingCoordinates, setErrorFetchingCoordinates] = useState(false);
    const bookedRef = useRef(null);

    useEffect(() => {
        fetchLatestBooking();
    }, []);

    const fetchLatestBooking = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/bookings');
          if (!response.ok) {
            throw new Error('Failed to fetch latest booking');
          }
          const data = await response.json();
          console.log('Fetched booking data:', data);
          setLatestBooking(data);
        } catch (error) {
          console.error('Error fetching latest booking:', error);
        }
      };      

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

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                if (!latestBooking) return;

                const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(latestBooking.hospitalName)}&key=${GOOGLE_API_KEY}`;
                const response = await axios.get(geocodeUrl);

                if (response.data.status === 'OK' && response.data.results.length > 0) {
                    const { lat, lng } = response.data.results[0].geometry.location;
                    setCoordinates({ lat, lng });
                    setErrorFetchingCoordinates(false); 
                } else if (response.data.status === 'ZERO_RESULTS') {
                    setErrorFetchingCoordinates(true); 
                    console.error('Zero results found for the address:', latestBooking.hospitalName);
                } else {
                    setErrorFetchingCoordinates(true);
                    console.error('Error fetching coordinates:', response.data.status);
                }
            } catch (error) {
                setErrorFetchingCoordinates(true);
                console.error('Error fetching coordinates:', error);
            }
        };

        fetchCoordinates();
    }, [latestBooking]);

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
                {latestBooking ? (
                    coordinates ? (
                        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
                            <GoogleMap
                                mapContainerStyle={{ height: '100vh', width: '100%' }}
                                center={coordinates}
                                zoom={15}
                            >
                                <Marker position={coordinates} />
                            </GoogleMap>
                        </LoadScript>
                    ) : (
                        <p>{errorFetchingCoordinates ? 'Error fetching coordinates' : 'Loading map...'}</p>
                    )
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
