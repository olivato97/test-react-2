import React, { Component } from 'react';
import PropTypes from 'prop-types'

// import { connect } from 'react-redux'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
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
        const { toDoList } = this.props;
        debugger
        var list
        if (toDoList) {

             list = toDoList.map(item =>
                <li key={item.id}>{item.text}</li>
            )
        }
        return (
            <div>
                <input type='text'
                    placeholder='aggiungi nuovo membro...'
                    onChange={this.handleChange} />
                <button onClick={this.handleClick}>Inserisci</button>
                <ul>
                    {list}
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