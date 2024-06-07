import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import './BookShelf.css';

const Bookshelf = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBookshelf);
    }, []);

    const clearBookshelf = () => {
        localStorage.removeItem('bookshelf');
        setBookshelf([]);
    };

    return (
        <div className="bookshelf">
            <h1>My Bookshelf</h1>
            <button className="clear-button" onClick={clearBookshelf}>
                Clear Bookshelf
            </button>
            <div className="book-list">
                {bookshelf.length===0?"Add some books to your Bookshelf.":bookshelf.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;
