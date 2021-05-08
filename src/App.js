import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import axios from "axios";

// rce -> class component
class App extends Component {
  state = {
    loading: false,
    users: [],
    alert: null,
  };

  async componentDidMount() {
    // console.log(process.env.REACT_APP_CLIENT_ID);
    this.setState({ loading: true });
    const rest = await axios.get("https://api.github.com/users");

    this.setState({ loading: false, users: rest.data });
  }

  // Search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const rest = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ loading: false, users: rest.data.items });
  };

  // clear Github users
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
