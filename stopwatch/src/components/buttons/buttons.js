import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        //btn ka text change nii krna chah rhe hai..isliye hame state m text ki need nhii hai..
        //props mein 1. onclick 2. text of btn. 3. disabled
        this.state = {

        };
    }

    render() {
        return (
            <button onClick={this.props.clickHandler} disabled={this.props.disabled}>{this.props.text}</button>
        )
    }
}

export default Button;