import * as React from 'react';
import CardFaceBack from './CardFaceBack';
import CardFaceFront from './CardFaceFront';
import { IUsers } from './userData';

export default class Card extends React.Component<{ user: IUsers }, any> {

    constructor(props) {
        super(props);
        this.state = { flipped: false };
        this.eventHandler = this.eventHandler.bind(this);
    }

    public render() {
        let cardClass = 'card content';
        if (this.state.flipped) {
            cardClass += ' is-flipped';
        }
        return (
            <div className='card'>
                <div className={cardClass}>
                    <CardFaceFront user={this.props.user} onClicked={this.eventHandler}/>
                    <CardFaceBack description={this.props.user.description} onClicked={this.eventHandler}/>
                </div>
            </div>
        );
    }

    private eventHandler() {
        this.setState((prevState) => ({
                flipped: !prevState.flipped,
            }),
        );
    }
}
