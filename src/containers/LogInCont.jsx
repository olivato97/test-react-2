import { connect } from 'react-redux'
import { LogInComp } from '../components/LogInComp'
import { ToggleLogIn } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        tipo: state.tipo,
        logIn: state.logIn
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        ToggleLogIn: (text, toggle) => dispatch(ToggleLogIn(text, toggle)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInComp); 