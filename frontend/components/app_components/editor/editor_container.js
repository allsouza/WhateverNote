import { connect } from "react-redux";
import Editor from './editor';
import {fetchNote, updateNote, deleteNote} from '../../../actions/note_actions';
import { withRouter } from "react-router-dom";
import { openModal } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return({
        note: state.entities.notes[ownProps.id],
        noteIds: ownProps.notes.map(note=>note.id)
    })
}

const mDTP = dispatch => {
    return({
        fetchNote: id => dispatch(fetchNote(id)),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: id => dispatch(deleteNote(id)),
        openModal: modal => dispatch(openModal(modal))
    })
}
export default withRouter(connect(mSTP, mDTP)(Editor));