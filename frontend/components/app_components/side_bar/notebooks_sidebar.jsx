import React from 'react';

export default class NotebooksSidebar extends React.Component{
    constructor(props){
        super(props);
        this.openNotebook = this.openNotebook.bind(this);
    }

    componentDidMount(){
        this.props.fetchNotebooks();
    }

    openNotebook(id){
        this.props.history.push(`/app/notebooks/${id}/notes`);
    }

    listNotebooks(){
        return this.props.notebooks.map(notebook => {
        return(
            <li key={notebook.id}
                className="action" onClick={() => this.openNotebook(notebook.id)}>
                <i className="fas fa-book-reader"></i>{notebook.name}
           </li>
        )})
    }

    render(){
        return(
            <ul className="notebooks-sidebar">
                {this.listNotebooks()}
            </ul>
        )
    }
}