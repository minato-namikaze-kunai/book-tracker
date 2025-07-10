import React from 'react';

export default function BookList({ books }) {
  return (
    <div className="book-list">
      <h3>Your Books:</h3>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <ul>
          {books.map((book, idx) => (
            <li key={idx}>
              {book.title} — {book.pages} pages
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
