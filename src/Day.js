import React from "react";
import './Day.css'

export class Day extends React.Component {
    render() {
        return <li className="day">{this.props.day.getDate()}</li>;
    }
}
