import React from 'react';

const SearchBar = ({search, handleSearch, handleSubmit}) => {



    return(
        <div className="searchContainer">
            <input 
            value={search} onChange={handleSearch} 
            type="search" className="searchBar"
            placeholder="Search for movie" autoComplete="off"
            inputMode="search"></input>
            <button onClick={handleSubmit} className="submitButton">Submit</button>
        </div>
    )
}

export default SearchBar;