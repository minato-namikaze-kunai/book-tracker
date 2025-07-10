import React, { useState } from 'react';

export default function BookForm({ setBooks }) {
  const [title, setTitle] = useState('');
  const [pages, setPages] = useState('');

  const addBook = (e) => {
    e.preventDefault();
    if (!title || !pages) return;
    setBooks(prev => [...prev, { title, pages: parseInt(pages) }]);
    setTitle('');
    setPages('');
  };

  return (
    <form onSubmit={addBook}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Pages"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
