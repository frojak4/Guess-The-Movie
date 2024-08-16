import React from 'react';

const MainMenu = ({handleStart}) => {
    return(
        <div className="menuContainer">
            <h1 className="menuHeader">Guess The Movie From The Cast!</h1>
            <img alt="cinema" src="https://st2.depositphotos.com/1758336/5895/i/450/depositphotos_58955513-stock-photo-empty-movie-theater-with-red.jpg"/>
            <button onClick={handleStart} className="startButton">Start Game</button>
        </div>
    )
}

export default MainMenu;