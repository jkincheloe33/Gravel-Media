import React, { Component, Fragment } from 'react';

const Work = () => {

    return (
        <Fragment>
            <div className="container-fluid work-container animated fadeIn p-0">
                <div className="work-row">
                    <div className="row m-auto work-images">
                        <div className="col-8 p-0 animated slideInLeft">
                            <img src="../../img/glasslands.jpg" />
                        </div>
                        <div className="col-4 p-0 animated slideInLeft work-item">
                            <p>
                                Glasslands <br />
                                Full site for Nashville, TN based band.
                            </p>
                        </div>
                        <div className="col-4 p-0 animatedThree slideInRight work-item">
                            <p className="JK-work">
                                Josh Kincheloe <br />
                                Full site for Nashville, TN based developer.
                            </p>
                        </div>
                        <div className="col-8 p-0 animatedThree slideInRight">
                            <img src="../../img/jk.jpg" />
                        </div>
                        <div className="col-8 p-0 animatedFour slideInLeft">
                            <img src="../../img/glassarrow.jpg" />
                        </div>
                        <div className="col-4 p-0 animatedFour slideInLeft work-item">
                            <p>
                                Glass Arrow Audio <br />
                                Full site for Toledo, OH based studio.
                            </p>
                        </div>
                        <div className="col-12 work-footer">
                            <div className="footer-container">
                                <h1>Connect with us!</h1>
                                <div className="container">
                                    <div className="row w-75 m-auto">
                                        <div className="col-4 p-0">
                                            <a className="btn btn-social-icon btn-facebook p-1 animated" href="http://facebook.com/GlassArrowAudio">
                                                <i className="fab fa-facebook fa-3x"></i>
                                            </a>
                                        </div>
                                        <div className="col-4 p-0">
                                            <a className="btn btn-social-icon btn-instagram p-1 animated" href="http://instagram.com/glassarrowaudio">
                                                <i className="fas fa-camera-retro fa-3x"></i>
                                            </a>
                                        </div>
                                        <div className="col-4 p-0">
                                            <a className="btn btn-social-icon btn-twitter p-1 animated" href="http://twitter.com/jmochabear">
                                                <i className="fab fa-twitter-square fa-3x"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Work;