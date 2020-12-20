
import React from 'react';
import SearchM from './SearchMovies';
import AddMovieE from './AddMovieE'


function AddMovie ({addMovie, ajoutAnnul, ajoSerch, search}){
    return (
        <div className='App-header'>
            {ajoSerch==='add' 
            ? <AddMovieE ajoutAnnul={ajoutAnnul} addMovie={addMovie}/>
            : <SearchM ajoutAnnul={ajoutAnnul} search={search} />
            }
        </div>
    )
}
export default AddMovie;