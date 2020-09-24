import React from 'react';

export default class Editor extends React.Component{
    constructor(props){
        super(props);
        this.state= Object.assign({}, this.props.note)

        // Bindings
        this.selectTextarea = this.selectTextarea.bind(this);
        this.leaveTextarea = this.leaveTextarea.bind(this);
        this.autoSave = this.autoSave.bind(this)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.id !== this.props.note.id){
            Object.keys(this.props.note).forEach(key=>{
                this.setState({[key]:this.props.note[key]})
            })
            if(this.state.title === "Untitled"){
                this.setState({title: ""})
            }
        }
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value});
            console.log(this.state);
        }
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

    test(e){
        this.setState({test:e.target.value})
    }

    render(){
        return(
            <div className="editor">
                <div className="header">
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
                            value={this.state.title} placeholder="Title"/>
                    
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