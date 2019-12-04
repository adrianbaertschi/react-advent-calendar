import React from "react";
import './Day.css'

export class Day extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {isRevealed: false};

        this.reveal = this.reveal.bind(this);
    }

    reveal() {
        this.setState({isRevealed: true})
    }

    render() {
        let content;
        if (this.state.isRevealed) {
            const url = `https://source.unsplash.com/random/200x200?christmas${this.props.day.getDate()}`;
            content = <img src={url} alt="pic"/>
        } else {
            content = <a> {this.props.day.getDate()} </a>
        }

        return <li className={this.state.isRevealed ? 'open' : 'closed'} onClick={this.reveal}>
            {content}
        </li>;
    }
}
