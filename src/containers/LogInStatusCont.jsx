import { connect } from 'react-redux'
import { LogInStatusComp } from '../components/LogInStatusComp'

const mapStateToProps = (state) => {
    debugger
    return {
        tipo: state.LogIn.tipo,
        logIn: state.LogIn.logIn
    }
}

export default connect(
    mapStateToProps
)(LogInStatusComp); 