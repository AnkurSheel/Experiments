import * as React from 'react';

export default class CardFaceBack extends React.Component<{ description: string }, any> {

    public render() {
        return (
            <div className="card__face card__face--back">
                <div>{this.props.description}</div>
            </div>
        );
    }
}