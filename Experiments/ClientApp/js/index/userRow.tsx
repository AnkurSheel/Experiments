import * as React from 'react';

export default class UserRow extends React.Component<any, any> {

    public render() {
        return (
            <tr>
                <td className="name">{this.props.user.name}</td>
                <td className="company">{this.props.user.company}</td>
                <td className="summary">{this.props.user.summary}</td>
            </tr>
        );
    }
}