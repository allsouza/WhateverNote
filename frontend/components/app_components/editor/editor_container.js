import { connect } from "react-redux";
import Editor from './editor_test';
import {fetchNote, updateNote} from '../../../actions/note_actions';

const mSTP = (state, ownProps) => {
    return({
        note: state.entities.notes[ownProps.id]
    })
}

const mDTP = dispatch => {
    return({
        fetchNote: id => dispatch(fetchNote(id)),
        updateNote: note => dispatch(updateNote(note))
    })
}
export default connect(mSTP, mDTP)(Editor);