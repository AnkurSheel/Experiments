import * as React from 'react';
import CardFaceFront from './CardFaceFront';
import CardFaceBack from './CardFaceBack';
import { IUsers } from './userData';

export default class Card extends React.Component<{ user: IUsers }, any> {

    public render() {
        return (
            <div className="card">
                <CardFaceFront user={this.props.user} />
                <CardFaceBack description={this.props.user.description} />
            </div>
        );
    }
}