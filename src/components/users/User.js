import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getUser: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      login,
      id,
      node_id,
      avatar_url,
      gravatar_id,
      url,
      html_url,
      followers_url,
      following_url,
      gists_url,
      starred_url,
      subscriptions_url,
      organizations_url,
      repos_url,
      events_url,
      received_events_url,
      type,
      site_admin,
      name,
      company,
      blog,
      location,
      email,
      hireable,
      bio,
      twitter_username,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
      updated_at,
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}

            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* badges */}
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {followers}</div>
          <div className="badge badge-danger">Public Repos: {followers}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}
export default User;
