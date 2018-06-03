import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import MovieList from './MovieList';
import Dashboard from './Dashboard';
import '../css/FormStyles.css';

class MainComponent extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/dashboard" render={() => (<Dashboard />)} />
                    <Route exact path="/movies" render={() => (<MovieList />)} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainComponent);