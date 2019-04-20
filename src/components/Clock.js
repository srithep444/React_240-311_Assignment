import React, {Component} from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {date: new Date()};
        setInterval(() => this.updateTime(), 1000);
    }
    
    updateTime(){
        this.setState({date: new Date()});
    }

    render(){
        return(
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default Clock;