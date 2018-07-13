import React, { Component } from 'react';

class LogInStatusComp extends Component {

    render() {
        const { tipo, logIn } = this.props

        return (
            <span>{tipo}, {logIn ? 'true' : 'false'}</span>
        )
    }


}


export { LogInStatusComp };