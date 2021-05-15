import React, { useContext, useState, useEffect } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
import $ from "jquery";

const Search = () => {
  const githubContext = useContext(GithubContext); // import the context about github state
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onChangeText = (e) => setText(e.target.value);

  useEffect(() => {
    // $(document).ready(function () {
    //   console.log("ready document..")
    //   $("#mybuttontest").click(function () {
    //     console.log("xdddd");
    //     // alert("Handler for .click() called.");
    //     $("#mybuttontest").addClass("btn-success");
    //   });
    //   // $("#mybuttontest").addClass("btn-danger");
    // });
  }, []);

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
          id="mybuttontest"
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
