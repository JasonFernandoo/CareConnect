import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import Book from './Book/Book';
import Mass from './Mass/Mass';
import Aid from './Aid/Aid';
import Profile from './Profile/Profile';

function App() {
    const [fixedDivFullHeight, setFixedDivFullHeight] = useState(false);

    return (
        <Routes>
            <Route path="/" element={<Container fixedDivFullHeight={fixedDivFullHeight} />} />
            <Route path="/book" element={<Book setFixedDivFullHeight={setFixedDivFullHeight} />} />
            <Route path="/mass" element={<Mass />} />
            <Route path="/aid" element={<Aid />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default App;
