import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext); // import the context about github state
  const alertContext = useContext(AlertContext)
  const [text, setText] = useState("");

  const onChangeText = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.showAlert("username is empty", "light");
      return;
    }
    githubContext.searchUsers(text);
    setText("");
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

// Search.propTypes = {
//   // searchUsers: PropTypes.func.isRequired,
//   // clearUsers: PropTypes.func.isRequired,
//   // showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired,
// };

export default Search;
