import React, { Component } from 'react';
import {  Grid, Card } from 'semantic-ui-react';

class LogInStatusComp extends Component {

    render() {
        const { Member } = this.props;
        var listOspite = [];
        var listAdmin = [];
        debugger
        for (var i = 0; i < Member.length; i++) {
            if (Member[i].tipo === "ospite") {
                listOspite.push(<li key={Member[i].IdMember}>{Member[i].username},{Member[i].password}</li>)
            }
            if (Member[i].tipo === "admin") {
                listAdmin.push(<li key={Member[i].IdMember}>{Member[i].username},{Member[i].password}</li>)
            }
        }
        return (
            <Grid centered>
                <Grid.Row columns={4}>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={5} >
                        <Card>
                            <Card.Content>
                                <Card.Header>Ospiti</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <ul>
                                    {listOspite}
                                </ul>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={5} >
                        <Card>
                            <Card.Content>
                                <Card.Header>Amministratori</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <ul>
                                    {listAdmin}
                                </ul>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }


}


export { LogInStatusComp };