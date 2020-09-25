import React from 'react'

export default class Header extends React.Component{

    render(){
        return(
            <div className="notebooks-header">
                <div className="top-header">
                    <h1>Notebooks</h1>
                </div>
                <div className="bottom-header">
                    <h3>My notebook list</h3>
                    <button onClick={()=>this.props.openModal("newNotebook")}><i className="fas fa-plus-square"></i>New Notebook</button>
                </div>
            </div>
        )
    }
}