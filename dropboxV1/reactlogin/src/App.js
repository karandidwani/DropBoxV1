import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css';

import HomePage from "./components/HomePage";
//import NewHomePage from "./components/NewHomePage";
//import NewerHomePage from "./components/NewerHomePage";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<NewerHomePage/>*/}
                {/*<NewHomePage/>*/}
                <BrowserRouter>
                    <HomePage/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
