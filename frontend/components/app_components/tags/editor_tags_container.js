import { connect } from "react-redux";
import EditorTags from './editor_tags';

const mSTP = (state, ownProps) => {
    return({
        tags: typeof ownProps.note.tags !== 'undefined' ? ownProps.note.tags.map(tag => state.entities.tags[tag]) : []
    })
}

export default connect(mSTP)(EditorTags)