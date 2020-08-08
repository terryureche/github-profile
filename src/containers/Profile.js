import React, { Component } from "react";
import Link from '../components/Link/Link';
import List from "../components/List/List";
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 10px auto;
 `;

const Avatar = styled.img`
  width: 150px;
 `;

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            repositories: [],
            loading: true,
            error: ''
        }
    }

    async componentDidMount() {
        try {
            const profile = await fetch("https://api.github.com/users/octocat");
            const profileMeata = await profile.json();

            if (profileMeata) {
                const repositories = await fetch(profileMeata.repos_url);
                const repositoriesMeta = await repositories.json();

                this.setState({
                    data: profileMeata,
                    repositories: repositoriesMeta,
                    loading: false
                });
            }
        } catch (e) {
            this.setState({
                loading: false,
                error: e.message
            });
        }
    }

    render() {
        const { data, loading, repositories, error } = this.state;

        if (loading || error) {
            return <div>{loading ? 'Loading...' : error}</div>
        }

        const items = [
            { label: 'html_url', value: <Link url={data.html_url} title='Github URL' /> },
            { label: 'repos_url', value: data.repos_url },
            { label: 'name', value: data.name },
            { label: 'company', value: data.company },
            { label: 'location', value: data.location },
            { label: 'email', value: data.email },
            { label: 'bio', value: data.bio }
        ]

        const projects = repositories.map(repo => ({
            label: repo.name,
            value: <Link url={repo.html_url} title='Github URL' />
        }));

        return (
            <ProfileWrapper>
                <Avatar src={data.avatar_url} alt='avatar' />
                <List title="Profile" items={items} />
                <List title="Projects" items={projects} />
            </ProfileWrapper>
        );
    }
}

export default Profile;