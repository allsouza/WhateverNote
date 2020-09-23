import React from 'react';

export default class Editor extends React.Component{
    constructor(props){
        super(props);
        this.state={note: {title:""}}
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.note.title !== this.props.note.title){
            const {note} = this.props
            this.setState({note})
        }
    }

    handleChange(field){
        return e => {
            this.setState({[field]:e.target.value})
        }
    }

    render(){
        return(
            <div className="editor">
                <nav className="edit-tools">
                    <img src={window.editing} alt=""/>
                </nav>
                <form>
                    <input id="title" type="text" onChange={this.handleChange('title')} value={this.state.note.title} placeholder="Title"/>
                    <textarea id="body" onChange={this.handleChange('body')} value={this.state.note.body} ></textarea>
                </form>
            </div>
            )
    }
}