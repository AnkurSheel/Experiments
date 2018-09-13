import * as React from 'react';

import UserRow from './userRow'

export default class MyUsers extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>My Users</h1>
                <table className="user-list">
                    <tbody>
                    <UserRow/>
                    </tbody>
                </table>
            </div>
        );
    }
}