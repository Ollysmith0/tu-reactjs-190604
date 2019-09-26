import { connect } from 'react-redux'
import Login from './Login'
import { getLogin } from './Login.action'


const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.loginReducer.result,
        error: state.loginReducer.error,
        load: state.loginReducer.load
    }
}

const mapDispatchToProps = {
    getLogin: getLogin
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)