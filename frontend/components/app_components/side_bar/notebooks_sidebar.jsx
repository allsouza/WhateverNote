import React from 'react';

export default class NotebooksSidebar extends React.Component{

    componentDidMount(){
        this.props.fetchNotebooks();
    }

    openNotebook(id){
        window.alert(`Will open notebook ${id}`);
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