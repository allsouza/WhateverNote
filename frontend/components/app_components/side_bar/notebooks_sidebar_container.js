import { connect } from 'react-redux';
import {fetchNotebooks} from '../../../actions/notebook_actions';
import NotebooksSidebar from './notebooks_sidebar';

const mSTP = state => ({
    notebooks: Object.values(state.entities.notebooks)
})

const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks())
})

export default connect(mSTP, mDTP)(NotebooksSidebar)
