import React from 'react';
import './BookConfirm.css';
import { useNavigate } from 'react-router-dom';

function BookConfirm() {
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
            </div>
        </div>
    );
}

export default BookConfirm;
