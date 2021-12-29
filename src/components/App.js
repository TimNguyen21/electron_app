import React, { Component } from 'react';
import Header from './electron/Header'
import Nav from './electron/Nav'
import Login from './electron/Login'
import Entry from './electron/Entry'
import Summary from './electron/Summary'
import Confirmation from './electron/Confirmation'
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
