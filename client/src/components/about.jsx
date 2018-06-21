import React, { Component, Fragment } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        particlesJS.load('particles-about', '../../particles/particlesOne.json', function () {
            console.log('particlesOne.json loaded...');
        });
    }

    render() {
        return (
            <Fragment>
                <div className="mb-0 jumbotron-about animated fadeIn" id="particles-about">
                    <div className="pl-1 pr-1">
                        <h1 className="animated fadeInDown">
                            Let us bring your vision to life.
                        </h1>
                        <p className="animatedFour fadeInUp">
                            Gravel Media is a full service design agency. From branding to web and mobile applications, we take your idea and develop it to suit your needs.
                            </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default About;