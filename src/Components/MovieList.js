import React from 'react';
import MovieCard from './MovieCard';
import './style.css'

function MovieList({movie}){
    return (
        <div className="lista">
            {movie.map(el=><MovieCard movi={el} key={el.id} id={el.id} />)}
        </div>
    )
}
export default MovieList;