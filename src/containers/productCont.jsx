import { connect } from 'react-redux'
import productComp from '../components/productComp'

const mapStateToProps = (state) => {
    
    return {
        Member: state.LogIn,
        tipo: state.LogIn.tipo,
        logIn: state.LogIn.logIn,
        username: state.LogIn.username,
        password: state.LogIn.password
    }
}   

export default connect(
    mapStateToProps
)(productComp); 