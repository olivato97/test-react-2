import { connect } from 'react-redux'
import TodoList from '../components/TodoListComp'
import { addToDoList } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    ToDoList: state.ToDoList
  }
}

 const mapDispatchToProps = (dispatch) => {
  return {
    addToDoList: (text) => dispatch(addToDoList(text)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);