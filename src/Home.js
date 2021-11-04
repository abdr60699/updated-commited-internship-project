import React, { Component } from "react";
import fire from "./config/fire";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <br></br>
                <h1>You are logged in !!!</h1>
                <br></br>
                <h2>This Is Just The Beginning !!!</h2>
                <br></br>
                <button onClick={this.logout} className="w-10 text center mt-2">Logout</button>
            </div>
        )
    }
}
export default Home;