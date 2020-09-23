import { connect } from "react-redux";
import SideBar from './side_bar';
import {logout} from '../../../actions/user_actions';
import { withRouter } from "react-router-dom";

const mSTP = state => ({
    user: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
})

export default withRouter(connect(mSTP, mDTP)(SideBar));