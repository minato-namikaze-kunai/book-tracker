import React from 'react';

export default function Dashboard({ books }) {
  const totalBooks = books.length;
  const totalPages = books.reduce((sum, b) => sum + b.pages, 0);
  const avgPages = totalBooks ? (totalPages / totalBooks).toFixed(1) : 0;

  return (
    <div className="dashboard">
      <p>Total Books: {totalBooks}</p>
      <p>Total Pages: {totalPages}</p>
      <p>Avg Pages/Book: {avgPages}</p>
    </div>
  );
}
