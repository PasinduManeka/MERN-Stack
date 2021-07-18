import React from "react";
import {Link} from "react-router-dom";

function Header(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="nav-link active" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/addStudent">Add Student</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Header;