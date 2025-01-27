import React from 'react';
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';
function MovieCard({ movie }) {

  const navigate = useNavigate(); 

  const gotoinfopage = (id) => {
    navigate(`/movieinfopage/${id}`); // Navigate to /signup route
  };



  return (
    <div className="movie-card">
      <div className="movie-image-container">
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-image"
        />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-rating">Rating: {movie.rating}</p>
        <p className="movie-genre">Genre: {movie.genre}</p>
        <button onClick={()=>gotoinfopage(movie.id)}>
          WatchNow</button>
      </div>
    </div>
  );
}

export default MovieCard;
