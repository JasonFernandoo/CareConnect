import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import Book from './Book/Book';
import Mass from './Mass/Mass';
import Aid from './Aid/Aid';
import Profile from './Profile/Profile';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/book" element={<Book />} />
            <Route path="/mass" element={<Mass />} />
            <Route path="/aid" element={<Aid />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default App;
