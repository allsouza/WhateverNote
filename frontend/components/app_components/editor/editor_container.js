import { connect } from "react-redux";
import Editor from './editor';
import {fetchNote} from '../../../actions/note_actions';

const mSTP = (state, ownProps) => {
    return({
        note: state.entities.notes[ownProps.id]
    })
}

const mDTP = dispatch => {
    return({
        fetchNote: id => dispatch(fetchNote(id))
    })
}
export default connect(mSTP, mDTP)(Editor);