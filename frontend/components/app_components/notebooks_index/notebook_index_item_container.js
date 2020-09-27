import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import NotebookIndexItem from "./notebook_index_item"

const mSTP = (state, ownProps) =>({
    notes: state.entities.notes,
    users: state.entities.users,
    notebook: ownProps.notebook
})

const mDTP = dispatch => ({

})

export default withRouter(connect(mSTP)(NotebookIndexItem))