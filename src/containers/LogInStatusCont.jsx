import { connect } from 'react-redux'
import { LogInStatusComp } from '../components/LogInStatusComp'

const mapStateToProps = (state) => {
    debugger
    return {
        tipo: state.tipo,
        logIn: state.logIn
    }
}

export default connect(
    mapStateToProps
)(LogInStatusComp); 