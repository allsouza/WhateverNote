import { connect } from 'react-redux'
import {login} from '../../actions/user_actions'
import LoginForm from './login_form';

const mSTP = state => ({
    errors: state.errors.session
})

const mDTP = dispatch => {
    return({
        login: user => dispatch(login(user))
    })
}

export default connect(mSTP, mDTP)(LoginForm);