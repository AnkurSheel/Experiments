import * as React from 'react';

export interface ICardFaceBackProps {
    description: string;
    onClicked(): void;
}

export default class CardFaceBack extends React.Component<ICardFaceBackProps, any> {

    public render() {
        return (
            <div className="face back">
                <div>{this.props.description}</div>
                <div>
                    <a href="#" onClick={this.props.onClicked}>Back</a>
                </div>
            </div>
        );
    }
}