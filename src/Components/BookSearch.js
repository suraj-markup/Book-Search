import React, { useState } from 'react';
import BookCard from './BookCard';
import './BookSearch.css';

const BookSearch = ({ onAddBook }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (!query) return; 
        setLoading(true);
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
            const json = await response.json();
            console.log(json.docs);
            setResults(json.docs);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    return (
        <div className="book-search">
            <h1>Search Your Favorite book by Name</h1>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books..."
            />
            <button onClick={handleSearch}>Search</button>
            <div className="results">
            
            {loading ? (
                    <div className="shimmer-wrapper">
                        {Array(10).fill().map((_, index) => (
                            <div key={index} className="shimmer-card"></div>
                        ))}
                    </div>
                ) : (
                    query && results.length === 0 ? (
                        <p>No results found</p>
                    ) : (
                        results.map((book) => (
                            <BookCard key={book.key} book={book} onAdd={onAddBook} />
                        ))
                    )
                )}{!query && !loading && results.length===0?<p>Type the name of the book you are looking for...</p>:""}
               
            </div>
        </div>
    );
};

export default BookSearch;
