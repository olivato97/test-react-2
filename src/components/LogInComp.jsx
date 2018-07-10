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

    handleClickTrue(){
        debugger
        const { ToggleLogIn } = this.props
        ToggleLogIn("ospite",true)

    }
    handleClickFalse(){
        debugger
        const { ToggleLogIn } = this.props
        ToggleLogIn("ospite",false)

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


class LogInStatusComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: "",
            logIn: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };
    LogInStatus(){
        const { tipo, logIn } = this.props
this.setState({tipo: tipo, logIn:logIn});
    }
    render() {
        return (
            <div>
                <span>{this.state.tipo}</span>
                <span>{this.state.logIn}</span>

            </div>
        )
    }




}
LogInComp.propTypes = {
    ToggleLogIn: PropTypes.func.isRequired,
    // onDecresedClick: PropTypes.func.isRequired
}


export { LogInComp, LogInStatusComp };