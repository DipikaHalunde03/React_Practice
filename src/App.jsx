import React, { useState } from 'react';
import MovieCard from './MovieCard';
import movies from './movidata.js'; 
import './App.css';

import { useNavigate } from 'react-router-dom';
import Signup from './Signup';


function App() {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

 
  const handleSearch = () => {
    if (query.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const results = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(results);
    }
  };

  const navigate = useNavigate(); // Initialize 
  const goToSignup = () => {
    navigate('/signup'); 
  };

   

  const trendingMovies = movies.slice(0, 5); // First five movies as trending


  return (
    <div className="App">
      <h1 className="app-title">Movie Search App</h1>

      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>

        <button onClick={goToSignup} className="search-button">Get Premium</button>

        
      </div>

      <div className="category-section">
        <h2>Trending</h2>
        <div className="movie-row">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default App;
