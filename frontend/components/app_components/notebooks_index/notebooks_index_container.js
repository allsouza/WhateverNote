import { connect } from "react-redux"
import { fetchNotebooks } from "../../../actions/notebook_actions";
import NotebooksIndex from './notebooks_index';

const mSTP = (state, ownProps) => ({
    notebooks: Object.values(state.entities.notebooks),
    notes: state.entities.notes,
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks())
})

export default connect(mSTP, mDTP)(NotebooksIndex);