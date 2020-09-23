import { connect } from "react-redux";
import SideBar from './side_bar';
import {logout} from '../../../actions/user_actions';

const mSTP = state => ({
    user: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(SideBar);