import React, { useState, useEffect } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import Dashboard from './Dashboard';
import './styles.css';

export default function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('books');
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header>
        <h1>📚 Book Tracker</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <Dashboard books={books} />
      <BookForm setBooks={setBooks} />
      <BookList books={books} />
    </div>
  );
}
