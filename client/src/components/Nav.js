import React from "react";
import "./Nav.css";

function Nav() {
    return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark navbar-custom">
                <a className="navbar-brand" href="#">dreamCricket</a>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="createTeam.html">Create a Team</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="gameHistory.html">Game history</a>
                        </li>
                    </ul>
                </div>
            </nav>
            );
}

export default Nav;