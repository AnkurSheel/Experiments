import * as React from 'react';
import * as UserData from './userData';

import UserRow from './userRow'
import IUsers = UserData.IUsers;

export interface IState {
    loading: boolean;
    users: IUsers[];
}


export default class MyUsers extends React.Component<any, IState> {

    public state: IState = {
        loading: false,
        "users": []
    };

    public async componentDidMount() {
        this.setState({ loading: true });
        const result = await fetch('https://localhost:44338/user');
        const users = await result.json();
        this.setState({ users, loading: false });
    }

    public render() {
        return (
            <div>
                <h1>My Users</h1>
                {this.state.loading && <div> Loading...</div>}
                {this.state.users.map(user => <UserRow key={user.id} user={user}/>)}
            </div>
        );
    }
}