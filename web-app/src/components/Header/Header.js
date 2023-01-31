import './Header.css'

function Header(){
    return (
        <div className="top-header">
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
                    <img src="hamburger-blanc.png" className="hamburger" alt='hamburger'></img>
                </div>
                
            </div>
        </div>
       
    );
}

export default Header;