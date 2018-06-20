import React, { Component, Fragment } from 'react';

const Work = () => {

    return (
        <Fragment>
            <div className="container-fluid work-container">
                <div className="work-row m-auto">
                    <div className="row pl-1 pr-1 m-auto work-images">
                        <div className="col-6 col-sm-4 col-md-4 p-0 animated work-item">
                            <a href="http://glasslands.co" target="_blank">
                                <img src="../../img/glasslands2.png" className="animatedEight" />
                                <div className="overlay p-1">
                                    <p>Glasslands</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 p-0 animated slideInLeft work-item">
                            <img src="../../img/glassarrow2.png" className="animatedSeven" />
                            <a href="http://glassarrowaudio.herokuapp.com" target="_blank">
                                <div className="overlay p-1">
                                    <p>Glass Arrow</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 p-0 animated slideInRight work-item">
                            <img src="../../img/jk.png" className="animatedEight" />
                            <a href="http://jkincheloe33.github.io/" target="_blank">
                                <div className="overlay">
                                    <p>Josh Kincheloe</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Work;