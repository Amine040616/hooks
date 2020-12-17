import React, {useState} from 'react'

function AddMovie ({addMovie, ajoutAnnul}){
    const [titrou, setTitrou]=useState('');
    const [synopsis, setSynopsis]=useState('');
    const [poster, setPoster]=useState('');
    const [rating, setRating]=useState('');


    function ajouter(){

        titrou||synopsis||poster||rating
        ? addMovie(titrou,synopsis,poster,rating)
        : alert('Il faut remplir tous les champs')
    }


    return (
        <div className='App-header'>
        <div className='adding'>
            <label>Titre du film</label>
            <input placeholder='Mettre le titre du film à ajouter...' value={titrou} onChange={(e)=>setTitrou(e.target.value)}/><br/>
            <label>Synopsis du film</label>
            <input placeholder='Mettre le synopsis du film à ajouter...' value={synopsis} onChange={(e)=>setSynopsis(e.target.value)} /><br/>
            <label>Poster du film</label>
            <input type='text' placeholder='Mettre le poster du fil à ajouter...' value={poster} onChange={(e)=>setPoster(e.target.value)} /><br/>
            <label>Le rating du film est :</label>
            <input type='text' maxlength="1" placeholder='Mettre le nombre de stars'  value={rating} onChange={(e)=>setRating(e.target.value)}/><br/>
            <button onClick={()=>ajouter()}>Ajouter</button>
            <button onClick={()=>ajoutAnnul()}>Annuler</button>
        </div></div>
    )
}
export default AddMovie;