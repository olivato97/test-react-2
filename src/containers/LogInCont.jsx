import { connect } from 'react-redux'
import { LogInComp,LogInStatusComp } from '../components/LogInComp'
import { ToggleLogIn } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        tipo: state.tipo,
        logIn: state.logIn
    }
}
const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        ToggleLogIn: (text, toggle) => dispatch(ToggleLogIn(text, toggle)),
    }
}

export const LogInComp2= connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInComp); 
export const LogInStatusComp2= connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInStatusComp); 