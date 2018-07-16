import { connect } from 'react-redux'
import GestionePersonaleComp from '../components/GestionePersonaleComp'
import { addList } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    Member: state.LogIn,
    tipo: state.LogIn.tipo,
    logIn: state.LogIn.logIn,
    username: state.LogIn.username,
    password: state.LogIn.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (tipo, username, password) => dispatch(addList(tipo, username, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GestionePersonaleComp);