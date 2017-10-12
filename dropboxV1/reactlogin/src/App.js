import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
//import HomePage from "./components/HomePage";
//import NewHomePage from "./components/NewHomePage";
import SignUpPage from "./components/SignUpPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<HomePage/>*/}
                {/*<NewHomePage/>*/}
                <BrowserRouter>
                    <SignUpPage/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
