// booksPage.tsx
import React, { useState } from 'react';

const BooksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState<any[]>([]);

  const handleSearch = async () => {
    try {
      //const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      const response = await fetch(`/api/books?q=${searchTerm}`);

      console.log('books api response:', response);

      const data = await response.json();

      console.log('books api data:', data);
      
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <h1>Search for Books</h1>
      <input
        type="text"
        placeholder="Enter book title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {books.map((book, index) => (
          <div key={index}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;