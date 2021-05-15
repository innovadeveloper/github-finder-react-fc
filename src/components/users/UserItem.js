import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  /* eslint-disable no-unused-vars */
  const { login, avatar_url, html_url } = user;
  // /* eslint-enable no-unused-vars */

  return (
    <div className="card text-center">
      {/* <div
        className="sparkline m-t-10"
        data-type="bar"
        data-width="97%"
        data-height="30px"
        data-bar-width="3"
        data-bar-Spacing="7"
        data-bar-Color="#2b314a"
      >
        2,3,5,6,9,8,7,8,7
      </div> */}
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
