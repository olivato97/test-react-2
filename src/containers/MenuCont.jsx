import { connect } from 'react-redux'
import MenuComp from '../components/MenuComp'

const mapStateToProps = (state) => {
    
    return {
        tipo: state.LogIn.tipo,
        logIn: state.LogIn.logIn,
        username: state.LogIn.username,
        password: state.LogIn.password
    }
}   

export default connect(
    mapStateToProps
)(MenuComp); 