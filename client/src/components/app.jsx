import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import Nav from './nav';
import GoodbyeWorld from './goodbye';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    < Nav />
                    < Home />
                    {/* <Link to="/goodbye">Goodbye</Link>
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route path="/goodbye" component={GoodbyeWorld} />
                    </Switch> */}
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;