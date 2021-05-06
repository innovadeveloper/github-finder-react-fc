import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  // state = {
  //   users: [
  //     {
  //       login: "pjhyett",
  //       id: 3,
  //       node_id: "MDQ6VXNlcjM=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/pjhyett",
  //       html_url: "https://github.com/pjhyett",
  //       followers_url: "https://api.github.com/users/pjhyett/followers",
  //       following_url:
  //         "https://api.github.com/users/pjhyett/following{/other_user}",
  //       gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/pjhyett/subscriptions",
  //       organizations_url: "https://api.github.com/users/pjhyett/orgs",
  //       repos_url: "https://api.github.com/users/pjhyett/repos",
  //       events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/pjhyett/received_events",
  //       type: "User",
  //       site_admin: false,
  //     },
  //     {
  //       login: "wycats",
  //       id: 4,
  //       node_id: "MDQ6VXNlcjQ=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/wycats",
  //       html_url: "https://github.com/wycats",
  //       followers_url: "https://api.github.com/users/wycats/followers",
  //       following_url:
  //         "https://api.github.com/users/wycats/following{/other_user}",
  //       gists_url: "https://api.github.com/users/wycats/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/wycats/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/wycats/subscriptions",
  //       organizations_url: "https://api.github.com/users/wycats/orgs",
  //       repos_url: "https://api.github.com/users/wycats/repos",
  //       events_url: "https://api.github.com/users/wycats/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/wycats/received_events",
  //       type: "User",
  //       site_admin: false,
  //     },
  //     {
  //       login: "ezmobius",
  //       id: 5,
  //       node_id: "MDQ6VXNlcjU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/ezmobius",
  //       html_url: "https://github.com/ezmobius",
  //       followers_url: "https://api.github.com/users/ezmobius/followers",
  //       following_url:
  //         "https://api.github.com/users/ezmobius/following{/other_user}",
  //       gists_url: "https://api.github.com/users/ezmobius/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
  //       subscriptions_url:
  //         "https://api.github.com/users/ezmobius/subscriptions",
  //       organizations_url: "https://api.github.com/users/ezmobius/orgs",
  //       repos_url: "https://api.github.com/users/ezmobius/repos",
  //       events_url: "https://api.github.com/users/ezmobius/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/ezmobius/received_events",
  //       type: "User",
  //       site_admin: false,
  //     }
  //   ],
  // };

  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display : 'grid',
  gridTemplateColumns : 'repeat(3, 1fr)',
  gridGap : '1rem'
}

export default Users;
