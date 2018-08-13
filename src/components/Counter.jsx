import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, Statistic, } from 'semantic-ui-react';
class Counter extends Component {
    render() {
        const { value, onIncreaseClick, onDecresedClick } = this.props
        return (
            <div>
                <Statistic>
                    <Statistic.Value>{value}</Statistic.Value>
                    <Statistic.Label>click</Statistic.Label>
                </Statistic>
                <Button onClick={onIncreaseClick}>Increase</Button>
                <Button onClick={onDecresedClick}>Decresed</Button>
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