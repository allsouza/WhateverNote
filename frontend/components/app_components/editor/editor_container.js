import { connect } from "react-redux";
import Editor from './editor';
import {fetchNote, updateNote, deleteNote} from '../../../actions/note_actions';
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return({
        note: state.entities.notes[ownProps.id],
        notes: ownProps.notes.map(note=>note.id)
    })
}

const mDTP = dispatch => {
    return({
        fetchNote: id => dispatch(fetchNote(id)),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: id => dispatch(deleteNote(id))
    })
}
export default withRouter(connect(mSTP, mDTP)(Editor));