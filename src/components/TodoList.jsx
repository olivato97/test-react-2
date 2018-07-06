import React, { Component } from 'react';
import PropTypes from 'prop-types'

// import { connect } from 'react-redux'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "123"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };
    handleChange(event) {
        this.setState({ text: event.target.value });
    }
    handleClick() {
        const { addToDoList } = this.props
        addToDoList(this.state.text)
    }

    render() {
        const { List } = this.props;

console.log(List)
        return (
            <div>
                <input type='text'
                    placeholder='aggiungi nuovo membro...'
                    onChange={this.handleChange} />
                <button onClick={this.handleClick}>Inserisci</button>
                <ul>
                    <li>{List}</li>
                </ul>
            </div>
        )
    }
}

ToDoList.propTypes = {
    ToDoList: PropTypes.array.isRequired,
    addToDoList: PropTypes.func.isRequired,
    // onDecresedClick: PropTypes.func.isRequired
}

export default ToDoList;