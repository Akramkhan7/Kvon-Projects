import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

export default function App() {
  const [books, setBooks] = useState([
    { id: 1, name: 'Godan', title: 'Book written by munsi premchand', author: 'Premchand', price: '420', date: '1936' },
    { id: 2, name: 'Ikigai', title: 'The Japanese secret to a long life', author: 'Francesc Miralles', price: '599', date: '2024-10-10' },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <BookForm onAdd={addBook} />
        <BookTable books={books} />
      </div>
    </div>
  );
}