import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Container from './Container/Container';
import Book from './Book/Book';
import BookConfirm from './BookConfirm/BookConfirm';
import Mass from './Mass/Mass';
import Aid from './Aid/Aid';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import User2 from './User2/User2';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <>
            {isAuthenticated ? (
                <Routes>
                    <Route path="/" element={<Container />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="/BookConfirm" element={<BookConfirm />} />
                    <Route path="/mass" element={<Mass />} />
                    <Route path="/aid" element={<Aid />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/blank" element={<User2 />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </>
    );
}

export default App;
