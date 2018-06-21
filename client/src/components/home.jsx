import React, { Component, Fragment } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        particlesJS.load('particles-home', '../../particles/particlesTwo.json', function () {
            console.log('particlesTwo.json loaded...');
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <div className="jumbotron jumbotron-fluid bg-dark text-white mb-0 p-0 jumbotron-header animatedFive infinite pulse" id="particles-home">
                    <div className="animatedFive fadeIn header-container">
                        <h1 className="">Gravel Media</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;