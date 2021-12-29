import React, { Component } from 'react';
import MainNav from './MainNav'
import ElectronContainer from './ElectronContainer'
import { Route, Switch } from "react-router-dom";
import '../scss/container/App.scss';

class App extends Component {

  render() {
    return(
        <main>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return <MainNav />
                    }}
                />
                <Route
                    path="/electron"
                    render={() => {
                        return <ElectronContainer />
                    }}
                />
            </Switch>
        </main>
    )
  }
}

export default App;
