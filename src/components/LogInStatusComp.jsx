import React, { Component } from 'react';

class LogInStatusComp extends Component {
        super(props);

    render() {
        const { tipo, logIn } = this.props

        return (
            <span>{tipo}, {logIn ? 'true' : 'false'}</span>
        )
    }


}


export { LogInStatusComp };