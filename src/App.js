import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import axios from "axios";
import User from "./components/users/User";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  // useEffect(async () => {
  //   setLoading(true);
  //   const rest = await axios.get("https://api.github.com/users");
  //   setUsers(rest.data);
  //   setLoading(false);
  // }, []);

  // Search Github users
  const searchUsers = async (text) => {
    setLoading(true);
    const rest = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsers(rest.data.items);
    setLoading(false);
  };

  // get single Github user
  const getUser = async (username) => {
    setLoading(true);
    const rest = await axios.get(`https://api.github.com/users/${username}`);
    setUser(rest.data);
    setLoading(false);
  };

  // get user repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const rest = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    setRepos(rest.data);
    setLoading(false);
  };

  // clear Github users
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  };

  const showAlert = (msg, type) => {
    setAlert({ alert: { msg, type } });
    setTimeout(() => {
      setAlert({ alert: null });
    }, 3000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0}
                    setAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About}></Route>

            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  loading={loading}
                  getUser={getUser}
                  getRepos={getUserRepos}
                  repos={repos}
                  user={user}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
