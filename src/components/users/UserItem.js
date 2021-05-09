import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserItem extends Component {
  // state = {
  //   id: "id",
  //   login: "innovadeveloper",
  //   avatar_url: "https://avatars.githubusercontent.com/u/60544934?v=4",
  //   html_url: "https://github.com/innovadeveloper",
  // };

  render() {
    // const { id, login, avatar_url, html_url } = this.state;
    const { login, avatar_url, html_url } = this.props.user;
    // console.log(this.props.user)
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
  }
}

export default UserItem;
