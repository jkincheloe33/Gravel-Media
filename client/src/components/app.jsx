import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import Nav from './nav';
import About from './about';
import GoodbyeWorld from './goodbye';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    < Nav />
                    {/* <Link to="/goodbye">Goodbye</Link> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;