import React, { Component } from "react";
import fire from "./config/fire";
import { Button, Form } from "react-bootstrap";

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="W-900 text-center mt-5">
                Already have an account? Just Click LogIn

                <Form>
                    <br></br>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="enter email address"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <br></br>
                    <br></br>
                    <input
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        id="password"
                        placeholder="enter password"
                        value={this.state.password}
                    />
                    <br></br>
                    <br></br>
                    <Button onClick={this.login} className="w-10 text center mt-2">Login</Button>
                    <br></br>
                    <br></br>
                    <Button onClick={this.signup} className="w-10 text center mt-2">Sign Up</Button>
                </Form>
            </div>
        )
    }
}
export default Login;