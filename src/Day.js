import React from "react";
import './Day.css'

export class Day extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isRevealed: false,
            isEnabled: new Date() > this.props.day
        };

        this.reveal = this.reveal.bind(this);
    }

    reveal() {
        if (this.state.isEnabled) {
            this.setState({isRevealed: true})
        }
    }

    render() {
        let content;
        if (this.state.isRevealed) {
            const url = `https://source.unsplash.com/random/200x200?christmas${this.props.day.getDate()}`; // add number to get a new image every time
            content = <img src={url} alt="pic"/>
        } else {
            content = <a className={this.state.isEnabled ? 'enabled' : 'disabled'}> {this.props.day.getDate()} </a>
        }

        return <li className="day" onClick={this.reveal}>
            {content}
        </li>;
    }
}
