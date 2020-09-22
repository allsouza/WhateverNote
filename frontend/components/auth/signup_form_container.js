import { connect } from "react-redux";
import { signup } from "../../actions/user_actions";
import SignupForm from './signup_form'

const mSTP = state =>{
    return({
        errors: state.errors.session
    })
}

const mDTP = dispatch => {
    return({
        signup: user => dispatch(signup(user))
    })
}

export default connect(mSTP, mDTP)(SignupForm);