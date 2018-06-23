import React, { Component, Fragment } from 'react';

const Work = () => {

    return (
        <Fragment>
            <div className="container-fluid work-container animated fadeIn p-0">
                <div className="work-row">
                    <div className="row m-auto work-images">
                        <div className="col-8 p-0">
                            <img src="../../img/glasslands.jpg" />
                        </div>
                        <div className="col-4 p-0 work-item">
                            <p>
                                Glasslands <br />
                                Full site for Nashville, TN based band.
                            </p>
                        </div>
                        <div className="col-4 p-0 work-item">
                            <p className="JK-work">
                                Josh Kincheloe <br />
                                Full site for Nashville, TN based developer.
                            </p>
                        </div>
                        <div className="col-8 p-0">
                            <img src="../../img/jk.jpg" />
                        </div>
                        <div className="col-8 p-0">
                            <img src="../../img/glassarrow.jpg" />
                        </div>
                        <div className="col-4 p-0 work-item">
                            <p>
                                Glass Arrow Audio <br />
                                Full site for Toledo, OH based studio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Work;