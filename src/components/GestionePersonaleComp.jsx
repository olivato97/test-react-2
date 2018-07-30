import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, Input, Dropdown, Grid, Card } from 'semantic-ui-react';
// import { connect } from 'react-redux'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: "ospite",
            username: "",
            password: ""
        }
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeTipo = this.handleChangeTipo.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    };

    handleChangeUser(event) {
        this.setState({ username: event.target.value });
    }
    handleChangeTipo(event) {
        this.setState({ tipo: event.target.textContent });
    }
    handleChangePass(event) {
        this.setState({ password: event.target.value });
    }
    handleClick() {
        const { addList } = this.props
        addList(this.state.tipo, this.state.username, this.state.password)
    }
    handleChangeCategory(Members) {
        const { Member, ToggleLogIn } = this.props
        debugger
        for (var i = 0; i < Member.length; i++) {
            if (Members.id === Member[i].IdMember) {

                Members[i].tipo = !Member[i].tipo
                ToggleLogIn(Member)
            }
        }
    }


    render() {
        const Options = [
            {
                text: 'admin',
                value: 'admin',
                // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
            },
            {
                text: 'ospite',
                value: 'admin',
                // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
            }
        ]
        const { Member } = this.props;
        var listOspite = [];
        var listAdmin = [];
        debugger
        for (var i = 0; i < Member.length; i++) {
            if (Member[i].tipo === "ospite") {
                listOspite.push(<li key={Member[i].IdMember}>{Member[i].username},{Member[i].password}<Button onClick={(e) => this.handleChangeCategory(Member,e)}>ciao</Button></li>)
            }
            if (Member[i].tipo === "admin") {
                listAdmin.push(<li key={Member[i].IdMember}>{Member[i].username},{Member[i].password}<Button onClick={this.handleChangeCategory}>ciao</Button></li>)
            }
        }
        const DropdownExampleSelection = () => (
            <Dropdown placeholder='Scegli un ruolo...' fluid selection options={Options} onClose={this.handleChangeTipo} value={this.state.tipo} />
        )
        return (
            <div>
                <Grid centered>
                    <Grid.Row columns={4}>
                        <Card>
                            <Card.Content>
                                <Input type='text'
                                    placeholder='username...'
                                    onChange={this.handleChangeUser} />
                                <Input type='text'
                                    placeholder='password...'
                                    onChange={this.handleChangePass} />
                                <DropdownExampleSelection />
                                <Button onClick={this.handleClick}>Inserisci</Button>
                            </Card.Content>
                        </Card>
                    </Grid.Row>
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
            </div>
        )
    }
}

ToDoList.propTypes = {
    toDoList: PropTypes.array.isRequired,
    addToDoList: PropTypes.func.isRequired,
    // onDecresedClick: PropTypes.func.isRequired
}

export default ToDoList;