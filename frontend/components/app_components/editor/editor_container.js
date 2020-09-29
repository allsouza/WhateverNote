import { connect } from "react-redux";
import Editor from './editor';
import {fetchNote, updateNote, deleteNote} from '../../../actions/note_actions';
import { withRouter } from "react-router-dom";
import { openModal } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    // debugger
    return({
        note: state.entities.notes[ownProps.id],
        noteIds: ownProps.notes.map(note=>note.id),
        notebooks: state.entities.notebooks,
        type: "standard"
    })
}

const mDTP = dispatch => {
    return({
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: id => dispatch(deleteNote(id)),
        openModal: (modal, info) => dispatch(openModal(modal, info))
    })
}
export default withRouter(connect(mSTP, mDTP)(Editor));