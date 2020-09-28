import React from 'react';
import { render } from 'react-dom';
import {sortNotebookByAlpha} from '../../util/formats_util';

export default class MoveNote extends React.Component{
    constructor(props){
        super(props);
        this.state = Object.assign({}, props.note, {move: false})
        this.save = this.save.bind(this);
    }

    select(e, id){
        notebooks = Array.from(document.getElementsByClassName('move-notebook'));
        notebooks.forEach(notebook => notebook.classList.remove('selected'));
        e.currentTarget.classList.add('selected');
        this.setState({notebook_id: id});
        if(id !== note.notebook_id) this.setState({move: true})
    }

    save(){
        this.props.updateNote(this.state)
    }

    render(){
        const {closeModal, notebooks} = this.props;
        // debugger
        return(
            <div className="move-note">
                <div className="header"><h1>Move note to...</h1>
                <i onClick={closeModal} className="fas fa-times"></i></div>

                <ul>
                    {Object.values(notebooks).sort(sortNotebookByAlpha).map(notebook => {
                        return (
                            <li 
                                key={notebook.id}
                                className={`move-notebook ${notebook.id === this.state.notebook_id ? "selected" : ""}`}
                                onClick={e => this.select(e, notebook.id)}
                            >
                            <i className="fas fa-book-open"></i>
                            <h2>{notebook.name}</h2>{notebook.id === this.state.notebook_id ? <p>(current)</p> : null}
                            </li>
                        )
                    })}
                </ul>

                <div className="buttons">
                    <button onClick={this.props.closeModal} className="cancel">Cancel</button>
                    <button onClick={this.save} disabled={!this.state.move} className="move">Move</button>
                </div>
            </div>
        )
    }
}