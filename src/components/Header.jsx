import React, {useState} from 'react';
import '../App.css';
import Settings from './Settings';



const Header = ({handleBackToMenu, round, hearts, handleAbout, view, handleHeartChange}) => {

    const [openSettings, SetOpenSettings] = useState(false);

    return(
        <div>
            <nav className="header">
                <div className="brand"><a className="link" href="https://github.com/frojak4">Made By <br/>Frode Jakobsen</a></div>

                {round > 0 && 
                <div className="heartAndRound">
                    <h3 className="roundNumber">{round} / 10</h3>
                </div>}
                <ul className="header-list">
                    <li onClick={handleBackToMenu}>Home</li>
                    <li onClick={handleAbout}>About</li>
                    {view === 'menu' && <li onClick={() => SetOpenSettings((prev) => !prev)}>⚙️</li>}
                </ul>
            </nav>
            {openSettings && view !== 'game' && <Settings handleHeartChange={handleHeartChange}/>}
        </div>
    )
}

export default Header;