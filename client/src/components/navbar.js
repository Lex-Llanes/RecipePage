import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <nav className="navbar">
            <h1>Naviation Bar</h1>    
            <div className="links">
                <Link to="/">Users Page</Link>
                <span>---</span>
                <Link to="/blog">Blog Page</Link>
            </div>
            <br/>
            <br/>
        </nav>
    )
}


export default Navigation;