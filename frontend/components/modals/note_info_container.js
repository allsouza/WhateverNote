import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import NoteInfo from './note_info'
import {closeModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    const path = ownProps.location.pathname.split("/");
    const id = path[path.length-1];
    return({
        note: state.entities.notes[id],
        author: state.entities.users[state.entities.notes[id].author_id]
    })
}

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(NoteInfo))