import React from 'react';

export default class NotebooksSidebar extends React.Component{

    componentDidMount(){
        this.props.fetchNotebooks();
    }

    render(){
        return(
            <ul className="notebooks-sidebar">
                Notebooks
            </ul>
        )
    }
}