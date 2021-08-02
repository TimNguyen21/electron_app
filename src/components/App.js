import React, { Component } from 'react';
import Header from './Header'
import Nav from './Nav'
import Login from './Login'
import Entry from './Entry'
import Summary from './Summary'
import Confirmation from './Confirmation'
import { Route, Switch } from "react-router-dom";
import '../scss/App.scss';

class App extends Component {

  render() {
    return(
        <main>
            <Nav />
            <Header />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return <Login />
                    }}
                />
                <Route
                    path="/login"
                    render={() => {
                        return <Login />
                    }}
                />
                <Route
                    path="/entry"
                    render={() => {
                        return <Entry />
                    }}
                />
                <Route
                    path="/summary"
                    render={() => {
                        return <Summary />
                    }}
                />
                <Route
                    path="/confirmation"
                    render={() => {
                        return <Confirmation />
                    }}
                />

            </Switch>
        </main>
    )
  }
}

export default App;
