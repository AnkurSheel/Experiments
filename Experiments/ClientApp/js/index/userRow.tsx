import * as React from 'react';

export default class UserRow extends React.Component<any, any> {

    public render() {
        return (
            <div className="columns">
                <div className="panel">
                    <div>{this.props.user.name}</div>
                    <div>{this.props.user.company}</div>
                    <div>{this.props.user.summary}</div>
                </div>
            </div>
        );
    }
}