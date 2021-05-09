import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext) // import the context about github state

  const [text, setText] = useState('')

  const onChangeText = (e) => setText( e.target.value );

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("username is empty", "light");
      return;
    }
    githubContext.searchUsers(text);
    setText('')
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={onChangeText}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  // searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
