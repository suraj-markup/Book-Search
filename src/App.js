import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import BookSearch from './Components/BookSearch';
import Bookshelf from './Components/Bookshelf';
import './App.css';

const App = () => {
    const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

    const addBookToBookshelf = (book) => {
        const newBookshelf = [...bookshelf, book];
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<BookSearch onAddBook={addBookToBookshelf} />} />
                <Route path="/bookshelf" element={<Bookshelf />} />
            </Routes>
        </Router>
    );
};

export default App;
