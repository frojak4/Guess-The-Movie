import './App.css';
import Header from './components/Header.jsx';
import MainMenu from './containers/MainMenu.jsx';
import {useState} from 'react';
import Game from './containers/Game.jsx';
import Results from './containers/Results.jsx';
import About from './containers/About.jsx';
import { getRandomID } from './tmdbAPI.jsx';
import { printHearts } from './Utility.jsx';

function App() {

  const [view, setView] = useState('menu');
  const [correctAnswer, setCorrectAnswer] = useState();
  const [movie, setMovie] = useState({});
  const [movieID, setMovieID] = useState(550);
  const [round, setRound] = useState(0);
  const [hearts, setHearts] = useState(3)

  const handleStart = async () => {
    const ID = await getRandomID();
    setMovieID(ID);
    setRound(prev => prev + 1)
    setView('game');
  }

  const handleNewGame = () => {
    setHearts(3);
    handleStart();
  }

  const handleBackToMenu = () => {
    setRound(0);
    setView('menu');
  }
  const handleResult = () => {
    setView('results')
  }

  const handleAbout = () => {
    setView('about');
  }

  const handleHeartChange = (e) => {
    setHearts(e.target.value);
  }

  


  return (
    <div className="main-container">
      <Header handleBackToMenu={handleBackToMenu} round={round} hearts={printHearts(hearts)} handleAbout={handleAbout} view={view} handleHeartChange={handleHeartChange}/>
      {view === 'menu' && <MainMenu handleStart={handleNewGame} />}
      {view === 'game' && <Game setCorrectAnswer={setCorrectAnswer} handleResult={handleResult} setMovie={setMovie} movieID={movieID} hearts={printHearts(hearts)} setHearts={setHearts}/>}
      {view === 'results' && <Results correctAnswer={correctAnswer} movie={movie} handleStart={handleStart} handleBackToMenu={handleBackToMenu} hearts={hearts} printHearts={printHearts(hearts)}/>}
      {view === 'about' && <About />}
    </div>
  );
}

export default App;
