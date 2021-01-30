import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Showpage from './Showpage';
import { birds } from './birds';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            birds: birds,
            selectedBird: '',
        };
    }
    setBird = (bird) => {
        this.setState({ selectedBird: bird });
    };

    render() {
        return (
            <div>
                <header>
                    <h1>
                        <Link to="/">Audubon Society</Link>
                    </h1>
                </header>
                <main>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(props) => (
                                <Home
                                    birdsList={this.state.birds}
                                    setBird={this.setBird}
                                />
                            )}
                        />
                        <Route
                            path="/showpage/:bird"
                            render={(routerProps) => {
                                console.log('App more shit', routerProps);
                                return (
                                    <Showpage
                                        bird={this.state.selectedBird}
                                        routerBird={
                                            routerProps.match.params.bird
                                        }
                                    />
                                );
                            }}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
