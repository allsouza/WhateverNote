import { connect } from "react-redux";
import NotesIndex from './notes_index';
import {fetchNote, fetchNotes} from '../../../actions/note_actions';
import { withRouter } from "react-router-dom";

const mSTP = (state) => {
    return({
    notes: Object.values(state.entities.notes),
})}

const mDTP = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
})

export default withRouter(connect(mSTP, mDTP)(NotesIndex));