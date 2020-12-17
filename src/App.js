import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import SearchM from './Components/SearchMovies'

function App() {
  const [movie, setMovie] = useState([{id :1,titre :'film1', desc:'desc1', poster:'alpha', rate:5},{id :2,titre :'film2', desc:'desc2', poster:'beta', rate:4},{id :3,titre :'film3', desc:'desc3', poster:'beta', rate:3}]);
  const [ajouto, setAjouto] = useState(false);


  function addMovie(film,desc,affich,stars){
    setMovie([...movie,{id:Math.random(),titre :film, desc:desc, poster:affich, rate:stars}])
  }
  
  

  function ajoutAnnul(){
    setAjouto(!ajouto);
   // alert(ajouter)
  }

  function search(){
    alert('rechercher un film par titre ou des films par rate')
  }

  return (
    <div className="App">
      {ajouto
      ?<AddMovie addMovie={addMovie} ajoutAnnul={ajoutAnnul} /> 
      :<div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieList movie={movie}/>
        <button onClick={()=>ajoutAnnul()}>Add Movie</button>
        <button onClick={()=>search()}>Search Movie</button>
      </div>}
    </div>
  );
}

export default App;
