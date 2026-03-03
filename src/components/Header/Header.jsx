import './Header.css'
import twitch from '../../assets/img/twitch.png'


function Header () {
    return(
        <>
        <header>
        <div className="logo">
            <img src={twitch} alt="Twitch Logo"/>
            <p className="browse">Browse</p>
        </div>
        <div className="searchBar">
            <input type="search" placeholder="Search..." />
            <button type="submit"></button>
        </div>
        <div className="login">
            <span className="sp1">Log In</span>
            <span className="sp2">Sign Up</span>
        </div>
        </header>
        </>
    )
}

export default Header