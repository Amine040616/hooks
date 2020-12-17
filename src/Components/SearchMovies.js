import React from 'react'

function SearchMovie (){

return(
<div>
    <div>
        <label for="ratin">Choisir le rating des films:</label>
        <select id="ratin">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    <div>
        <input placeholder='Ecrire le titre du film à rechercher' />
        <button>Search</button>
        <button>Cancel</button>
    </div>
</div>
)
}
export default SearchMovie;