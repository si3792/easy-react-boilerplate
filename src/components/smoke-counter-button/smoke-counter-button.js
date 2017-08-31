import React, { Component } from 'react';


class SmokeCounterButton extends Component {
    render() {
        return (
            <button type="button"
                className="smoke-counter--button"
                onClick={this.props.onClick} >
                Smoke some
            </button>
        );
    }
}

export default SmokeCounterButton;
