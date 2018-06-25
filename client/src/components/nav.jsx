import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     let doc = window.document;
    //     console.log(doc.body.clientWidth);

    //     if (doc.body.clientWidth < 576) {
    //         this.nav.classList.add('navbar-light', 'bg-light');
    //         this.nav.classList.remove('navbar-dark');
    //     } else {
    //         this.nav.classList.add('navbar-dark');
    //         this.nav.classList.remove('navbar-light');
    //     }
    // }


    render() {
        return (
            <Fragment>
                <nav ref={(nav) => { this.nav = nav; }} className="navbar fixed-bottom navbar-expand-sm navbar-light bg-light nav-container" id="navbar">
                    <Link to="/" className="navbar-brand p-0" >
                        <img src="../../img/logo2.png" width="40" height="40" className="d-inline-block align-top pr-1 animated" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item pr-5">
                                <Link to="/about" className="nav-link animated" >About</Link>
                            </li>
                            <li className="nav-item pr-5">
                                <Link to="/work" className="nav-link animated" >Work</Link>
                            </li>
                            <li className="nav-item pr-5">
                                <Link to="#" className="nav-link animated" data-toggle="modal" data-target="#exampleModal">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
                <div className="modal animated slideInDown" id="exampleModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">We'd love to hear from you!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                <img src="../../img/logo.png" width="75%" />
                                <p className="pt-2">Have any questions for us? Need a quote or more information? Please shoot us an email and we can chat!</p>
                                <a className="btn btn-dark w-50" href="mailto:gravelmediaco@gmail.com" role="button">Email Us!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Nav;