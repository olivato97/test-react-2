import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, Input, Dropdown } from 'semantic-ui-react';
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
    };
    
    handleChangeUser(event) {
        this.setState({ username: event.target.value });
    }
    handleChangeTipo(event) {
        debugger
        this.setState({ tipo: event.target.textContent });
    }
    handleChangePass(event) {
        this.setState({ password: event.target.value });
    }
    handleClick() {
        const { addList } = this.props
        addList(this.state.tipo, this.state.username, this.state.password)
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
        if (Member.tipo === "ospite") {
            for (var i = 0; i < Member.length; i++) {
                listOspite.push(<li key={Member[i].IdMember}>{Member[i].tipo},{Member[i].username},{Member[i].password}<Button>ciao</Button></li>)
            };
        }
        if (Member.tipo === "admin") {
            for (i = 0; i < Member.length; i++) {
                listAdmin.push(<li key={Member[i].IdMember}>{Member[i].tipo},{Member[i].username},{Member[i].password}<Button>ciao</Button></li>)
            };
        }
        const DropdownExampleSelection = () => (
            <Dropdown placeholder='Scegli un ruolo...' fluid selection options={Options} onClose={this.handleChangeTipo} value={this.state.tipo}/>
        )
        return (
            <div>
                <Input type='text'
                    placeholder='username...'
                    onChange={this.handleChangeUser} />
                <Input type='text'
                    placeholder='password...'
                    onChange={this.handleChangePass} />
                <DropdownExampleSelection />
                <Button onClick={this.handleClick}>Inserisci</Button>
                <ul>
                    {listOspite}
                </ul>
                <ul>
                    {listAdmin}
                </ul>
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