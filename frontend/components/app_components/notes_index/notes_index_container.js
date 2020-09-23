import { connect } from "react-redux";
import NotesIndex from './notes_index';
import {fetchNotes} from '../../../actions/note_actions';

const mSTP = state => {
    // debugger
    return({
    notes: Object.values(state.entities.notes),
})}

const mDTP = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes())
})

export default connect(mSTP, mDTP)(NotesIndex);