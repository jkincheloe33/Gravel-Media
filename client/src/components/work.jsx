import React, { Component, Fragment } from 'react';

const Work = () => {

    return (
        <Fragment>
            <div className="container-fluid work-container">
                <div className="row pl-1 pr-1 m-auto work-row">
                    <div className="col-6 col-sm-4 col-md-4 p-0 animatedFour slideInRight work-item">
                        <img src="../../img/glasslands2.png" />
                        <div className="overlay">
                            <p>Glasslands</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 p-0 animated slideInLeft work-item">
                        <img src="../../img/glassarrow2.png" />
                        <div className="overlay">
                            <p>Glass Arrow Audio</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 p-0 animatedSix slideInRight work-item">
                        <img src="../../img/jk.png" />
                        <div className="overlay">
                            <p>Josh Kincheloe</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Work;