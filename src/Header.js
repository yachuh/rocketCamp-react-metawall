import React from "react";
import './Header.css'

const Header = () => {
    return(
        <header>
            <div className="container header">
                <h1><a href="http://localhost:3001/">MetaWall</a></h1>
                <nav>
                    <a href="http://localhost:3001/"><img className="nav-avatar" src="https://robohash.org/123" alt="avatar"></img></a>
                    <a href="http://localhost:3001/"><p className="nav-user">Member</p></a>
                </nav>
            </div>
        </header>
    )
}

export default Header;