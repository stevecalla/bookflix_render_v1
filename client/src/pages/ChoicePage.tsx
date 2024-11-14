// ChoicePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChoicePage: React.FC = () => {
  const navigate = useNavigate();

  const handleChoice = (choice: string) => {
    if (choice === 'books') {
      navigate('/books');
    } else if (choice === 'movies') {
      navigate('/movies');
    }
  };

  return (
    <div>
      <h1>What would you like to explore?</h1>
      <button onClick={() => handleChoice('books')}>Books</button>
      <button onClick={() => handleChoice('movies')}>Movies</button>
    </div>
  );
};

export default ChoicePage;