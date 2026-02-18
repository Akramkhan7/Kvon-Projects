import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';
import axios from 'axios';

export default function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async() =>{
    try{
      const res = await axios.get('http://localhost:8000/books');
      setBooks(res.data);
    }catch(err){
      console.log(err);
    }
  }

  const handleDelete = () =>{
    
  }

  useEffect(()=>{
    fetchBooks();
  },[])


 return (
    <>
      <Navbar />
      <div className="p-10">
        <BookForm refreshBooks={fetchBooks} />
        <BookTable books={books} onDelete={handleDelete} />
      </div>
    </>
  );
}
