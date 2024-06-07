import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onAdd }) => {

    // console.log(book);
return (

    <div className="book-card">
        <h3>{book.title}</h3>
        <h5>Written by</h5>
        <h4>{book.author_name?.join(', ')}</h4>
        <p>First published in</p>
        <h4>{book.first_publish_year}</h4>
        <p>Edition Count : {book.edition_count}</p>
        {onAdd?<button onClick={() => onAdd(book)}>Add to Bookshelf</button>:""}
    </div>
);

}

export default BookCard;