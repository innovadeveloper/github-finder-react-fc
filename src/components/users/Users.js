import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "innovadeveloper",
        avatar_url: "https://avatars.githubusercontent.com/u/60544934?v=4",
        html_url: "https://github.com/innovadeveloper",
      },
      {
        id: "2",
        login: "innovadeveloper2",
        avatar_url: "https://avatars.githubusercontent.com/u/60544934?v=4",
        html_url: "https://github.com/innovadeveloper",
      },
      {
        id: "3",
        login: "innovadeveloper3",
        avatar_url: "https://avatars.githubusercontent.com/u/60544934?v=4",
        html_url: "https://github.com/innovadeveloper",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    );
  }
}

export default Users;
