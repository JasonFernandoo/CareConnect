import React from 'react';
import { useNavigate } from 'react-router-dom';

function User2() {
    const navigate = useNavigate();

    return (
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
    );
}

export default User2;