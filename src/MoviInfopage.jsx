import React from 'react';
import movies from './movidata';
import { useParams } from 'react-router-dom';

function MovieInfopage()
{
    const {id}=useParams();

    const movie=movies.find((movie)=> movie.id===parseInt(id));

    if(!movie)
    {
        return <div> Movie not found !</div>
    }
    return(

    <>
         <p> Watch your Fav Movie Now 🎥🍿 !!!</p>
      
  
      <div className="movie-title">
       <p>{movie.title}</p>

      </div>
        <iframe width="900" height="400" src={movie.link}
                title="YouTube video player" frameborder="0"
                allowfullscreen></iframe>

    
      
     

       
</>
    );
}

export default MovieInfopage;