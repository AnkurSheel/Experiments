import * as React from 'react';
import Columns from './Columns';

export default class UserRow extends React.Component<any, any> {

    public render() {
        return (
            <Columns user={this.props.user}/>
        );
    }
}