import { connect } from 'react-redux'
import { LogInComp } from '../components/LogInComp'
import { ToggleLogIn } from '../redux/actions'

const mapStateToProps = (state) => {
    
    return {
        Member: state.LogIn,
        tipo: state.tipo,
        logIn: state.logIn,
        username: state.username,
        password: state.password
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ToggleLogIn: (state) => dispatch(ToggleLogIn(state)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInComp); 