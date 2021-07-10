import React from 'react';
import Button from '../../components/buttons/buttons';

class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            startDisabled: false,
            stopDisabled: true,
        };
        this.interval = undefined;
    }

    start = () => {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);

        this.setState({
            startDisabled: true,
            stopDisabled: false
        })
    }

    stop = () => {
        clearInterval(this.interval);
        this.setState({
            startDisabled: false,
            stopDisabled: true
        })
    }

    reset = () => {
        //try not to repeat code..
        this.stop(); //code repeat nii hona chahiye..isliye hame reset mein clearinterval ki jagah, stop call krdo..
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <Button text="Start" disabled={this.state.startDisabled} clickHandler={this.start} />
                <Button text="Stop" disabled={this.state.stopDisabled} clickHandler={this.stop} />
                <Button text="Reset" disabled={false} clickHandler={this.reset} />
            </div>
        )
    }
}

export default StopWatch;