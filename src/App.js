import React from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout'

function App() {
    return (
        <Router>
            <div className='app'>
                <Header/>
                <Switch>
                    <Route path='/login'>
                        <h1>Login page</h1>
                    </Route>
                    <Route path='/checkout'>
                        <Checkout/>
                    </Route>
                    <Route path='/'>

                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
