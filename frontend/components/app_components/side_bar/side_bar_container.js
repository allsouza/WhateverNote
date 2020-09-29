import { connect } from "react-redux";
import SideBar from './side_bar';
import {logout} from '../../../actions/user_actions';
import { withRouter } from "react-router-dom";
import { createNote } from "../../../actions/note_actions";
import { fetchNotebooks } from "../../../actions/notebook_actions";

const mSTP = state => ({
    user: state.entities.users[state.session.id],
    notes: Object.values(state.entities.notes)
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote(note)),
    fetchNotebooks: () => dispatch(fetchNotebooks)
})

export default withRouter(connect(mSTP, mDTP)(SideBar));