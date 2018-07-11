import React, { Component } from 'react';

class LogInStatusComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: "utente",
            logIn: false
        }
        this.LogInSetStatus = this.LogInSetStatus.bind(this);
        // this.LogInStatus = this.LogInStatus.bind(this);
    };
    LogInSetStatus() {
        const { tipo, logIn } = this.props
        this.setState({ tipo: tipo, logIn: logIn });

      
    }

    render() {
        const LogInStatus = () => {
            const { tipo, logIn } = this.props
            if (logIn=== true) {
                this.setState({ tipo: tipo, logIn: logIn });
            }
            if (this.state.tipo !== "" || this.state.logIn !== null) {
                return (<span > {this.state.tipo} </span>)

            }
        }
        this.timerID = setInterval(
            () => this.LogInSetStatus(),
            2000
          );
        const LogInYN = () => {
            var loginYN = "";
            
            if (this.state.logIn === true) {
                loginYN = "logIn"
            } else {
                loginYN = "logOddddff"
            }
            return (<span>{loginYN} {this.state.tipo}</span>
            )
        }
        const { tipo, logIn } = this.props
debugger
 
        return (
            <div>
                <LogInStatus />
                <LogInYN />


            </div>
        )
    }


}


export { LogInStatusComp };