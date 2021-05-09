import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  /* eslint-disable no-unused-vars */
  const { login, avatar_url, html_url } = user;
  /* eslint-enable no-unused-vars */

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
