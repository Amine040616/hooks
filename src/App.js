import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';

function App() {
  const [movie, setMovie] = useState([{id :1,titre :'film1', desc:'desc1', poster:'alpha', rate:5},{id :2,titre :'film2', desc:'desc2', poster:'beta', rate:4},{id :3,titre :'film3', desc:'desc3', poster:'beta', rate:3}]);
  const [ajouto, setAjouto] = useState(false);
  const [ajoSerch, setAjoSerch] = useState('');
  const [movieName, setMovieName] = useState('');
  const [movieRate, setMovieRate] = useState('');


  function addMovie(film,desc,affich,stars){
    setMovie([...movie,{id:Math.random(),titre :film, desc:desc, poster:affich, rate:stars}]);
    setMovieName('')
  }
  
  

  function ajoutAnnul(directio){
    setAjouto(!ajouto);
    setAjoSerch(directio);


    //alert(ajoSerch)
  }

  function search(esmElFilm){
    setMovieName(esmElFilm);
    //alert('Esm El Film : ' + movieName)
  }

  function searchRate(rateElFilm){
    setMovieRate(rateElFilm);
    //alert('Esm El Film : ' + movieName)
  }

  return (
    <div className="App">
      {!ajouto
      ?<div className="App-header">
        <a onClick={()=>setMovieName('')}><img src={logo} className="App-logo" alt="logo" /></a>
        <MovieList movie={movie} movieName={movieName} movieRate={movieRate}/>
        <button onClick={()=>ajoutAnnul('add')}>Add Movie</button>
        <button onClick={()=>ajoutAnnul('noAdd')}>Search Movie</button>
      </div>
      :  <AddMovie addMovie={addMovie} ajoutAnnul={ajoutAnnul} ajoSerch={ajoSerch} search={search} searchRate={searchRate} /> 
      }
    </div>
  );
}

export default App;
