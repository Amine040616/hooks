import React, {useState} from 'react'

function SearchMovie ({search, ajoutAnnul, searchRate}){
    const [searchByName, setsearchByName]=useState('');
    const [options, setOptions]=useState([1,2,3,4,5]);
    const [aloha, setAlohas]=useState('');

    function searchByN(){
        search(searchByName)
    }

    function searchByR(){
        
        
        searchRate(aloha)
        
    }
return(
<div>
    <div>
        <label for="ratin">Choisir le rating des films:</label><br />
        {/*<select id="ratin">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>*/}

        <div >
            <select value={aloha} onChange={(e)=>setAlohas(e.target.value)}>
                {options.map((el) => (
                    <option value={el}>{el}</option>
                ))}
            </select>
        </div>
    </div>
    <div>
        <input placeholder='Ecrire le titre du film à rechercher' value={searchByName} onChange={(e)=>setsearchByName(e.target.value)} />
        <button onClick={()=>{searchByN();ajoutAnnul('')}}>Search</button>
        <button onClick={()=>ajoutAnnul('')}>Cancel</button>
    </div>
</div>
)
}
export default SearchMovie;