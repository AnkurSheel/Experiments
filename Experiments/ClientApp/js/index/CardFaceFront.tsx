import * as React from 'react';
import { IUsers } from './userData';

export default class CardFaceFront extends React.Component<{ user: IUsers }, any> {

    public render() {
        return (
            <div className="card__face card__face--front">
                <div>{this.props.user.name}</div>
                <div>{this.props.user.summary}</div>
                <div>{this.props.user.company}</div>
            </div>
        );
    }
}