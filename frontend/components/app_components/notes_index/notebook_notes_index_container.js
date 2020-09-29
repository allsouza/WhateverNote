import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchNotebook } from "../../../actions/notebook_actions";
import NotesIndex from "./notes_index"
import {sortByLastUptade} from '../../../util/formats_util';

const mSTP = (state, ownProps) => {
    if(Object.keys(state.entities.notebooks).length > 0){
        const notes = Object.values(state.entities.notes).filter(note => note.notebook_id === parseInt(ownProps.match.params.notebook_id)).sort(sortByLastUptade);
        return({
            notes: notes,
            notebook: state.entities.notebooks[ownProps.match.params.notebook_id],
            title: state.entities.notebooks[ownProps.match.params.notebook_id].name
        })
    }
    else{
        return({
            notes: Object.values(state.entities.notes)
        })
    }    
}

const mDTP = dispatch => ({
    fetchNotebook: id => dispatch(fetchNotebook(id))
})

export default withRouter(connect(mSTP, mDTP)(NotesIndex))