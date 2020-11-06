import { connect } from 'react-redux'
import { fetchTags } from '../../../actions/tag_actions';
import TagsSidebar from './tags_sidebar';

const mSTP = state => {
    
    return({
        tags: Object.values(state.entities.tags)
    })}

const mDTP = dispatch => ({
    fetchTags: () => dispatch(fetchTags())
})

export default connect(mSTP, mDTP)(TagsSidebar)