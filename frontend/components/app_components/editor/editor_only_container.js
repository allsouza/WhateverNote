import { connect } from "react-redux";
import Editor from './editor';
import {fetchNote, updateNote, deleteNote} from '../../../actions/note_actions';
import { withRouter } from "react-router-dom";
import { openModal } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return({
        note: state.entities.notes[ownProps.match.params.note_id],
        noteIds: [],
        type: "stand-alone"
    })
}

const mDTP = dispatch => {
    return({
        fetchNote: id => dispatch(fetchNote(id)),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: id => dispatch(deleteNote(id)),
        openModal: (modal, info) => dispatch(openModal(modal, info))
    })
}
export default withRouter(connect(mSTP, mDTP)(Editor));