import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

// defining the state
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Github users
  const searchUsers = async (text) => {
    setLoading();
    const rest = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    // setUsers(rest.data.items);
    // setLoading(false);
    dispatch({
        type : SEARCH_USERS,
        payload : rest.data.items
    })
  };

  // get user

  // get repos

  // clear users

  // set loading
  const setLoading = () => dispatch({ type : SET_LOADING});

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
