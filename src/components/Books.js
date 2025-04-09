import React, { useState } from 'react';

const Books = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await res.json();
    setBooks(data.items || []);
  };

  return (
    <div className="card mb-4 p-3">
      <h4>Book Search</h4>
      <input className="form-control mb-2" placeholder="Search books..." value={query} onChange={e => setQuery(e.target.value)} />
      <button className="btn btn-primary" onClick={fetchBooks}>Search</button>
      <ul className="list-group mt-2">
        {books.map((book, index) => (
          <li key={index} className="list-group-item">
            <strong>{book.volumeInfo.title}</strong><br />
            {book.volumeInfo.authors && <span>by {book.volumeInfo.authors.join(', ')}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
