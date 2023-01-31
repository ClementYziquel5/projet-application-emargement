import React, { useState } from 'react';
import './Header.css'

function Header(){
    const [showInfos, setShowInfos] = useState(true);
    const handleClick = () => {
      setShowInfos(!showInfos);
    };

    return (
        <div className="header">
             <div className="logo-div">
                <img src="logo.png" className="logo" alt='ISEN Logo'></img>
            </div>
            <div className="navbar">
                <p className="navbar-element">Sessions</p>
                <p className="navbar-element">Groupes</p>
                <p className="navbar-element">Création</p>
            </div>
            <div className="hamburger-div">
                <img src="hamburger-blanc.png" className="hamburger" alt='hamburger'  onClick={handleClick}></img>
                
            </div>
            <div className='infos-hamburger' style={{ display: showInfos ? 'block' : 'none' }}>
                <p id='nom'>Nom Prenom</p>
                <p id='pseudo'>pseudo</p>
                <a href='#'><p className='deconnexion'>Déconnexion</p></a>
            </div>    
        </div>
       
    );
}

export default Header;