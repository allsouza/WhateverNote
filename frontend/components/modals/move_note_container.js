import { connect } from "react-redux"
import {updateNote} from '../../actions/note_actions';
import {closeModal} from '../../actions/modal_actions';
import MoveNote from './move_note';

const mSTP = (state, ownProps) => ({
    notebooks: state.entities.notebooks,
    note: ownProps.info
})

const mDTP = dispatch => ({
    updateNote: note => dispatch(updateNote(note)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(MoveNote)