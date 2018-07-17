import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, Form, Grid } from 'semantic-ui-react'



class LogInComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleClickTrue = this.handleClickTrue.bind(this);
        this.handleClickFalse = this.handleClickFalse.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    };

    handleClickTrue() {
        const { Member, ToggleLogIn } = this.props

        var user = this.state.username
        var pass = this.state.password
        for (var i = 0; i < Member.length; i++) {
            if (user === Member[i].username && pass === Member[i].password) {
                Member[i].username = user;
                Member[i].password =  pass;
                Member[i].logIn =  true;
                ToggleLogIn(Member)
            }
        }
    }
    handleClickFalse() {
        const { ToggleLogIn } = this.props
        ToggleLogIn("ospite", false, this.state.username, this.state.password)

    }

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
        console.log(this.state)
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
        console.log(this.state)
    }

    render() {
        return (

            <Grid celled centered>
                <Grid.Row columns={1}>
                    <Grid.Column width={10}>
                        <Form onSubmit={this.handleSubmit} true={this.isLoginIn}>
                            <Form.Field>
                                <label>Username</label>
                                <input placeholder='Username' value={this.state.username} onChange={this.handleChangeUsername} />
                            </Form.Field>
                            <Form.Field >
                                <label>Password</label>
                                <input placeholder='Password' value={this.state.password} onChange={this.handleChangePassword} />
                            </Form.Field>
                            <Button onClick={this.handleClickTrue}>LogIn</Button>
                            <Button onClick={this.handleClickFalse}>LogOut</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        )
    }



}
LogInComp.propTypes = {
    ToggleLogIn: PropTypes.func.isRequired,
}



export { LogInComp };