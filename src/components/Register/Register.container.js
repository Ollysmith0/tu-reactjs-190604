import { connect } from 'react-redux'
import Register from './Register'
import { getRegister } from './Register.action'


const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.registerReducer.result,
        fail: state.registerReducer.fail,
        load: state.registerReducer.load
    }
}

const mapDispatchToProps = {
    getRegister: getRegister
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)