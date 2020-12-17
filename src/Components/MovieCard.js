import React from 'react';
import './style.css';
import active from "./activstar.png";
import inactive from './inactivstar.png'

function MovieCard ({movi}){
    let arr = [...Array(6).keys()].slice(1);
    let x=movi.rate;
    //alert(movi.rate);
    return(
        <div className='card'>
            <div className='cntnt'>
                <h4>{movi.titre}</h4>
                <p>{movi.desc}</p>
            </div>
            <div className='starz'>
                {arr.map(el=><img src={el<=x ? active : inactive} alt={el<=x ? 'activeStar' : 'inActiveStar'}/>) } 
            </div>
        </div>
    )
}
export default MovieCard;