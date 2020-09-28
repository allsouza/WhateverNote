import React from 'react';
import NotesIndexItems from './notes_index_items';
import {formatDayMonth} from '../../../util/formats_util';

export default class NotebookIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {expanded: false}
        this.openNotebook = this.openNotebook.bind(this);
    }

    toggleExpand(){
        this.setState({expanded: !this.state.expanded})
    }

    toggleCaret(e){
        const carets = e.target.parentElement.parentElement.parentElement.getElementsByClassName('caret');
        Array.from(carets).forEach(caret=>{
            if (Array.from(caret.classList).includes('expanded')){
                caret.classList.remove("fa-caret-right")
                caret.classList.add("fa-caret-down")}
            else{
                caret.classList.remove("fa-caret-down")
                caret.classList.add("fa-caret-right")
            }
        })
    }

    openNotebook(){
        this.props.history.push(`/app/notebooks/${this.props.notebook.id}/notes`)
    }

    render(){
        const {notebook, notes, users} = this.props;
        return(
            <>
            <tr>
                <td className="title"
                    onClick={this.openNotebook}
                >
                    <i className="fas fa-caret-right caret"
                        onClick={(e)=>{
                            e.currentTarget.classList.toggle('expanded');
                            this.toggleCaret(e);
                            e.stopPropagation();
                            this.toggleExpand()
                            }
                        }
                    ></i>
                        <i className="fas fa-book-open"></i><h3>{notebook.name} </h3><p>({notebook.notes.length})</p>
                </td>
                <td className="created">
                    {`${users[notebook.authorId].first_name} ${users[notebook.authorId].last_name}`}
                </td>
                <td className="updated">
                    {formatDayMonth(notebook.updatedAt)}
                </td>
                <td className="actions">
                {/* Action component */}
                </td>
            </tr>
            {this.state.expanded ? <NotesIndexItems indices={notebook.notes} notes={notes} users={users} /> : null}
            </>
        )
    }
}