import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";

import axios from "axios";
import User from "./components/users/User";

const App = () => {
  const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  // useEffect(async () => {
  //   setLoading(true);
  //   const rest = await axios.get("https://api.github.com/users");
  //   setUsers(rest.data);
  //   setLoading(false);
  // }, []);

  // get user repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const rest = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    setRepos(rest.data);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <GithubState>
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
                      // searchUsers={searchUsers}
                      setAlert={showAlert}
                    />
                    <Users/>
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
                    // getUser={getUser}
                    getRepos={getUserRepos}
                    repos={repos}
                    // user={user}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
