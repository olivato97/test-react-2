import React, { Component } from 'react';

class LogInStatusComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: "ospite",
            logIn: false
        }
        this.LogInStatus = this.LogInStatus.bind(this);
    };
    LogInStatus() {
        const { tipo, logIn } = this.props
        this.setState({ tipo: tipo, logIn: logIn });
    }
    render() {
        debugger
        if(this.state.tipo !="" || this.state.logIn != null){
            this.LogInStatus

        }
        return (
            <div>
                <span onstorage={this.LogInStatus} >{this.state.tipo}</span>
                <span onstorage={this.LogInStatus} >{this.state.logIn? " logIn":" logOff" }</span>

            </div>
        )
    }


}


export { LogInStatusComp };