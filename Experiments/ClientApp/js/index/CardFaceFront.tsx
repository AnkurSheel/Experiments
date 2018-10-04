import * as React from 'react';
import { IUsers } from './userData';

export interface ICardFaceFrontProps {
    user: IUsers;
    onClicked(): void;
}

export default class CardFaceFront extends React.Component<ICardFaceFrontProps, any> {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClicked();
    }

    public render() {
        return (
            <div className="face front">
                <div>{this.props.user.name}</div>
                <div>{this.props.user.summary}</div>
                <div>{this.props.user.company}</div>
                <div>
                    <a href="#" onClick={this.props.onClicked}>More Details</a>
                </div>
            </div>
        );
    }
}