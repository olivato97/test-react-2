import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LogInComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: "",
            logIn: false
        }
        this.handleClickTrue = this.handleClickTrue.bind(this);
        this.handleClickFalse = this.handleClickFalse.bind(this);
    };

    handleClickTrue() {

        const { ToggleLogIn } = this.props
        ToggleLogIn("ospite", true)

    }
    handleClickFalse() {

        const { ToggleLogIn } = this.props
        ToggleLogIn("ospite", false)

    }


    render() {
        return (
            <div>
                <button onClick={this.handleClickTrue}>LogIn</button>
                <button onClick={this.handleClickFalse}>LogOut</button>

            </div>
        )
    }



}
LogInComp.propTypes = {
    ToggleLogIn: PropTypes.func.isRequired,
    // onDecresedClick: PropTypes.func.isRequired
}



export { LogInComp };