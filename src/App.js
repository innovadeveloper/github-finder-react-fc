import React, { Component } from "react";
import Navbar from "./components/layout/Navbar"
import UserItem from "./components/layout/UserItem"
import "./App.css";

// rce -> class component
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github"/>
          {/* <h1>Hello from React</h1> */}
          <UserItem />
        </div>
        <h4>xddd</h4>
      </React.Fragment>
    );
  }
}

export default App;
