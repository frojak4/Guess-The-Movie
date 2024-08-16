import React, {useEffect, useState} from 'react'
import { getRandomCast, getRandomMovie, movieSearch } from '../tmdbAPI';
import ActorImage from '../components/ActorImage';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';




const Game = ({setCorrectAnswer, handleResult, setMovie, movieID, setHearts, hearts}) => {


    const [currentMovie, setCurrentMovie] = useState();
    const [currentMovieCast, setCurrentMovieCast] = useState([]);


    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState({});

    const handleSelection = (movie) => {
        setSelectedMovie(movie);
        setSearch(movie.title);
        setResults([]);
        console.log(currentMovie);
    }

    const handleSubmit = () => {
        if (selectedMovie) {
            if (currentMovie.id === selectedMovie.id) {
                setCorrectAnswer(true)
            } else {
                setCorrectAnswer(false)
                setHearts(prev => prev - 1)
            }
            setMovie(currentMovie);
            
            handleResult();
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        getSearch(e.target.value)
    }

    const getSearch = async (value) => {
        const result = await movieSearch(value)
        setResults(result.results);
    }



    useEffect(() => {
        const fetchData = async () => {
            const cast = await getRandomCast(movieID)
            const trimmedCast = cast.filter((_, i) => i < 6)
            setCurrentMovieCast(trimmedCast);
        };

        fetchData();
    }, [movieID]);

    useEffect(() => {
        const fetchData = async () => {
            const movie = await getRandomMovie(movieID)
            setCurrentMovie(movie);
        }
        fetchData();
    }, [movieID])
    



    return (
        <div>
            <div className="actorContainer">
                {currentMovieCast.length === 6 ? 
                currentMovieCast.map((actor, i) => 
                <ActorImage key={i} image={actor.profile_path} name={actor.name} />)
                 : "Loading.."}
            </div>
            <h3 className="hearts">
                {hearts.map((heart, i) => <span style={{color: heart.color}}>{heart.symbol}</span>)}
            </h3>
            <SearchBar search={search} handleSearch={handleSearch} handleSubmit={handleSubmit} setResults={setResults}/>
            <div className="searchResults">
                {results.length > 1 ? results.map((result, i) => <SearchResult handleSelection={handleSelection} movie={result} key={i} title={result.title}/>) : ""}
            </div>
        </div>
    )
}


export default Game;