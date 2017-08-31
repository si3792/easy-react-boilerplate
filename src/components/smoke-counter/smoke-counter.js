import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmokeCounterButton from '../smoke-counter-button/smoke-counter-button';
import SmokeCounterCount from '../smoke-counter-count/smoke-counter-count';
import smokeAction from '../../actions/smoke-action';

class SmokeCounter extends Component {

    render() {
        return (
            <div className="smoke-counter">
                <h2>Smoke Counter</h2>
                <SmokeCounterCount count={this.props.count} />
                <SmokeCounterButton onClick={ this.props.handleButtonClick } />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.smokeCounter
});

const mapDispatchToProps = (dispatch) => ({
    handleButtonClick: () => { dispatch( smokeAction() ); }
});


export default connect(mapStateToProps, mapDispatchToProps)(SmokeCounter);