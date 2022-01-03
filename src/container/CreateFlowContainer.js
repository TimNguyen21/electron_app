import React, { Component } from 'react';
import Nav from '../components/create-flow/Nav'
import { Route, Switch, Link } from "react-router-dom";
import '../scss/container/CreateFlowContainer.scss';

const CreateFlowContainer = () => {
    return (
        <main>
            <header>
                <Link to={'/'}>
                    <button class="main-home-button">Main Home</button>
                </Link>
            </header>

            <Nav />

            <Switch>
                <Route
                    path="/create-flow/start-page"
                    render={() => {
                        return (<div>start page</div>)
                    }}
                />
                <Route
                    path="/create-flow/tutorial"
                    render={() => {
                        return (<div>tutorial</div>)
                    }}
                />
                <Route
                    path="/create-flow/form"
                    render={() => {
                        return (<div>form</div>)
                    }}
                />
                <Route
                    path="/create-flow/upload-image"
                    render={() => {
                        return (<div>upload image</div>)
                    }}
                />
            </Switch>
        </main>
    )
}

export default CreateFlowContainer;