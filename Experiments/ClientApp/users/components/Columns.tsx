import * as React from 'react';
import Card from './Card';

export default class Columns extends React.Component<any, any> {

    public render() {
        return (
            <div className="columns">
                <Card user={this.props.user} />
            </div>
        );
    }
}
