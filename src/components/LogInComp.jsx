import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, Form, Grid } from 'semantic-ui-react'



class LogInComp extends Component {
    constructor(props) {
        super(props);
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

            <Grid celled centered>
                <Grid.Row columns={1}>
                    <Grid.Column width={10}>
                        <Form onSubmit={this.handleSubmit} true={this.isLoginIn}>
                            <Form.Field>
                                <label>Username</label>
                                <input placeholder='Username' />
                            </Form.Field>
                            <Form.Field >
                                <label>Password</label>
                                <input placeholder='Password'  />
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