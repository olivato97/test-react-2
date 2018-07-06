import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {
    render() {
        const { value, onIncreaseClick, onDecresedClick } = this.props
        return (
            <div>
                <b>{value}</b>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDecresedClick}>Decresed</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecresedClick: PropTypes.func.isRequired
}

export default Counter;