import React, { Component } from "react";
import Navbar from "./components/layout/Navbar"
import "./App.css";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

import axios from "axios";

// rce -> class component
class App extends Component {

  state = {
    loading : false,
    users : []
  }

  async componentDidMount(){
    // console.log(process.env.REACT_APP_CLIENT_ID);
    this.setState({loading : true})
    const rest = await axios.get("https://api.github.com/users")

    this.setState({loading : false, users : rest.data})
  }

  // Search Github users
  searchUsers = async text => {
    this.setState({loading : true})
    const rest = await axios.get(`https://api.github.com/search/users?q=${text}`)
    this.setState({loading : false, users : rest.data.items})
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github"/>
          <div className="container">
            <Search searchUsers={this.searchUsers}/>
            <Users loading={this.state.loading} users={this.state.users}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
