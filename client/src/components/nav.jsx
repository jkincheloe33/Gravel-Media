import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark nav-container" >
                <Link to="/" className="navbar-brand p-0" href="#">
                    <img src="../../img/logo2.png" width="40" height="40" className="d-inline-block align-top pr-1 animated" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item pr-5">
                            <Link to="/" className="nav-link animated" href="#">Home</Link>
                        </li>
                        <li className="nav-item pr-5">
                            <Link to="/about" className="nav-link animated" href="#">About</Link>
                        </li>
                        <li className="nav-item pr-5">
                            <Link to="/work" className="nav-link animated" href="#">Work</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;