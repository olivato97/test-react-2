import React, { Component } from 'react';

class LogInStatusComp extends Component {

    render() {
        const { tipo, logIn, username , password } = this.props

        return (
            <span>{tipo}, {logIn ? 'true' : 'false'},{username},{password}</span>
        )
    }


}


export { LogInStatusComp };