import { connect } from "react-redux";
import SideBar from './side_bar';

const mSTP = state => ({
    user: state.entities.users[state.session.id]
})

export default connect(mSTP)(SideBar);