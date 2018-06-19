import React, { Component, Fragment } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar fixed-bottom navbar-expand-sm nav-container" >
                <a className="navbar-brand" href="#">GM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item pr-5">
                            <a className="nav-link animated" href="#">Home</a>
                        </li>
                        <li className="nav-item pr-5">
                            <a className="nav-link animated" href="#">About</a>
                        </li>
                        <li className="nav-item pr-5">
                            <a className="nav-link animated" href="#">Work</a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;