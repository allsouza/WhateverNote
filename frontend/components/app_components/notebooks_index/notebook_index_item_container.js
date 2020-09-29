import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { openModal } from "../../../actions/modal_actions"
import NotebookIndexItem from "./notebook_index_item"
import {deleteNotebook} from '../../../actions/notebook_actions';
import {sortByLastUptade} from '../../../util/formats_util';

const mSTP = (state, ownProps) =>{
    return({
        // notes: Object.values(state.entities.notes).sort(sortByLastUptade),
        notes: state.entities.notes,
        users: state.entities.users,
        notebook: ownProps.notebook
})}

const mDTP = dispatch => ({
    openModal: (modal, info) => dispatch(openModal(modal, info)),
    deleteNotebook: id => dispatch(deleteNotebook(id))
})

export default withRouter(connect(mSTP, mDTP)(NotebookIndexItem))