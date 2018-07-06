import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { addToDoList } from '../redux/actions'

const mapStateToProps = (store) => {
debugger
  return {
    List: store.addToDoList.ToDoList
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