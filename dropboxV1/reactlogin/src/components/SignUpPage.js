import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import * as API from '../api/API';
import Signup from "./Signup";
import Login from "./Login";

class NewerHomePage extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        signup: '',
        message: ''
    };

    handleSignup = (userdata) => {
        API.doSignup(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        signup: 'success'
                    });
                    this.props.history.push("/login");
                } else if (status === 401) {
                    this.setState({
                        signup: 'failed'
                    });
                }
            });
    };

    handleLogin = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        username: userdata.username
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="container-fluid">
                    <Route exact path="/" render={() => (
                        <div>
                            <Signup handleSubmit={this.handleSignup}/>
                        </div>
                    )}/>
                    <Route exact path="/login" render={() => (
                        <div>
                            <Login handleSubmit={this.handleLogin}/>
                        </div>
                    )}/>
                </div>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);