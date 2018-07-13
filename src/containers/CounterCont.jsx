import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increaseAction, decreseAction } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    value: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecresedClick: () => dispatch(decreseAction()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
