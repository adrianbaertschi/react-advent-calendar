import React from "react";
import {Day} from "./Day";

class Calendar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.dates = [];
        for (let i = 1; i < 25; i++) {
            const date = new Date(2019, 11, i);
            this.dates.push(date);
        }
    }

    render() {
        const listItems = this.dates.map((day) =>
            <Day key={day.getDate()} day={day}/>
        );
        return (
            <div>
                <h1>Calendar</h1>
                <ul className="days">{listItems}</ul>
            </div>
        )
    }
}

export default Calendar;