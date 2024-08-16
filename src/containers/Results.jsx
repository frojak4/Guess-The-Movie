import React from 'react';

const Results = ({movie, correctAnswer, handleStart, handleBackToMenu, hearts, printHearts}) => {

    const pictureLink = `https://image.tmdb.org/t/p/original/${movie.poster_path}`

    return(
    <div className="resultsContainer">
        {correctAnswer ? 
        <h3 className="resultText" style={{color: "green"}}>You were Correct✔</h3> : 
        <h3 className="resultText" style={{color: "red"}}>You were incorrect✘</h3>}
        <h3 className="smallText">The movie was:</h3>
        <img className="poster" alt="movieImg" src={pictureLink} />
        <h3 className="movieTitle">{movie.title}</h3>
        <h3 className="hearts">
                {printHearts.map((heart, i) => <span style={{color: heart.color}}>{heart.symbol}</span>)}
            </h3>
        {hearts > 0 ? <button className="restartButton" onClick={handleStart}>Next Question</button> : 
        <button className="restartButton" onClick={handleBackToMenu}>Play Again</button>}
        
    </div>
    )
}

export default Results;