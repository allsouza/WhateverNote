import { connect } from "react-redux";
import NotesIndex from './notes_index';
import {fetchNote, fetchNotes} from '../../../actions/note_actions';
import { withRouter } from "react-router-dom";

export function sortByLastUptade(note1, note2){
    return note1.updated_at <= note2.updated_at ? 1 : -1;
}

const mSTP = (state) => {
    return({
    notes: Object.values(state.entities.notes).sort(sortByLastUptade),
    title: "All Notes"
})}

const mDTP = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
})

export default withRouter(connect(mSTP, mDTP)(NotesIndex));