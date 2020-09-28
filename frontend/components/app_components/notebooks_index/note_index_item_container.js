import { connect } from 'react-redux';
import {openModal} from '../../../actions/modal_actions';
import {deleteNote} from '../../../actions/note_actions';
import NoteIndexItem from './note_index_item';

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    note: ownProps.note
})

const mDTP = dispatch => ({
    deleteNote: id => dispatch(deleteNote(id)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(NoteIndexItem);
