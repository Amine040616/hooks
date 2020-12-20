import React from 'react';
import MovieCard from './MovieCard';
import './style.css'

function MovieList({movie, movieName, movieRate}){
    return (
        <div className="lista">
            {movieName
            ?movie.filter(el=> el.titre===movieName || el.rate===movieRate ).map(el=><MovieCard movi={el} key={el.id} id={el.id} />)
            :movie.map(el=><MovieCard movi={el} key={el.id} id={el.id} />)}
        </div>
    )
}
export default MovieList;