import React, { Component } from 'react'

class User extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
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
            updated_at
        } = this.props.user;
        const {loading} = this.props;

        return (
            <div>
                {name || login}
            </div>
        )
    }
}
export default User;