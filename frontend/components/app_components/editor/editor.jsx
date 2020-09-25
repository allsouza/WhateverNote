import React from 'react';

export default class Editor extends React.Component{
    constructor(props){
        super(props);
        this.state= Object.assign({}, this.props.note,{
            options: false,
            noteIds: props.noteIds
        })

        // Bindings
        this.selectTextarea = this.selectTextarea.bind(this);
        this.leaveTextarea = this.leaveTextarea.bind(this);
        this.autoSave = this.autoSave.bind(this);
        this._handleOptionsBlur = this._handleOptionsBlur.bind(this);
        this._handleOptionsClick = this._handleOptionsClick.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        // if(prevState.id !== this.props.note.id){
        //     // debugger
        //     Object.keys(this.props.note).forEach(key=>{
        //         this.setState({[key]:this.props.note[key]})
        //     })
        //     this.setState({notes: this.props.notes})
        //     if(this.state.title === "Untitled"){
        //         this.setState({title: ""})
        //     }
        // }

        if(prevProps.location.pathname !== this.props.location.pathname){
            Object.keys(this.props.note).forEach(key=>{
                this.setState({[key]:this.props.note[key]})
            })
            this.setState({noteIds: this.props.noteIds})
        }
    }

    handleChange(field){
        return e => this.setState({[field]: e.target.value})
    }

    toolbarToggle(){
        const eles = document.getElementById('toolbar-field').childNodes;
        eles.forEach(ele=>{
            ele.classList.toggle('active');
        })
    }

    autoSave(){
        if(this.state.title === ''){
            this.setState({title: "Untitled"})
        }
        this.props.updateNote(this.state)
    }

    selectTextarea(){
        this.toolbarToggle();
        this.saving = setInterval(this.autoSave, 30000);
    }

    leaveTextarea(){
        this.toolbarToggle();
        clearInterval(this.saving)
        this.autoSave();
    }

    _formatDate(){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const date = new Date(this.state.updated_at)
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }

    _handleOptionsClick(){
        this.setState({options: !this.state.options})
    }

    _handleOptionsBlur(){
        this.setState({options: false})
    }

    deleteNote(){
        const remId = this.state.noteIds.indexOf(this.state.id);
        this.state.noteIds.splice(remId, 1)
        this.props.history.push(`/app/notes/${this.state.noteIds[0]}`);
        this.props.deleteNote(this.state.id)
    }

    sizeToggle(){
        Array.from(document.getElementsByClassName('size-toggle')).forEach(ele=>{
            ele.classList.toggle('show');
        })
        const toMod = [document.getElementsByClassName('side-bar')[0], document.getElementsByClassName('notes-index')[0]];
        toMod.forEach(ele=>{
            ele.classList.toggle('minimized');
        })
    }

    render(){
        return(
            <div className="editor">
                <div className="header">
                    <div id='first-header'>
                        <div id="left">
                            <button 
                                className="size-toggle show"
                                onClick={this.sizeToggle}
                                ><i className="fas fa-expand-alt"></i>
                            </button>
                            <button 
                                onClick={this.sizeToggle}
                                className="size-toggle"
                                ><i className="fas fa-compress-alt"></i>
                            </button>
                        </div>
                        <div id="right">
                            <button 
                                id="note-options" 
                                onClick={this._handleOptionsClick}
                                onBlur={this._handleOptionsBlur}
                                >
                                
                                <i className="fas fa-ellipsis-h"></i>

                                {this.state.options ? (
                                    <ul id="options-dropdown" >
                                        <li><ul><li>Note info</li></ul></li>
                                        <li><ul><li onClick={this.deleteNote}>Delete note</li></ul></li>
                                    </ul>
                                ) : null}
                            </button>
                        </div>
                        
                    </div>
                    <div id="toolbar-field">
                        <p className="display active">Last edited on {this._formatDate()}</p>
                        <nav className="toolbar">
                            {/* Rich text editing toolbar goes here */}
                            <img src={window.editing} alt=""/>
                        </nav>
                    </div>
                </div>
                <form>
                    <input id="title" type="text" 
                            onChange={this.handleChange('title')} 
                            onBlur={this.autoSave}
                            value={this.state.title === "Untitled" ? "" : this.state.title} 
                            placeholder="Title"/>
                    
                    <textarea  id="body" value={this.state.body}
                                onFocus={this.selectTextarea} 
                                onBlur={this.leaveTextarea}
                                onChange={this.handleChange('body')}
                                placeholder="Start writing your note"
                    ></textarea>
                </form>
            </div>
            )
    }
}