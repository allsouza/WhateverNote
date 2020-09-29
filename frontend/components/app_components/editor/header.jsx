import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {notebooks: this.props.notebooks, options: false};
        this._handleOptionsBlur = this._handleOptionsBlur.bind(this);
        this._handleOptionsClick = this._handleOptionsClick.bind(this);
        this.redirect = this.redirect.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    componentDidMount(){
        this.props.fetchNotebooks().then(payload => {
            let notebooks = {};
            payload.notebooks.forEach(notebook =>  notebooks[notebook.id] = notebook)
            this.setState({notebooks});
        })
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
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

    _handleOptionsClick(){
        this.setState({options: !this.state.options})
    }

    _handleOptionsBlur(){
        this.timeout = setTimeout(()=>this.setState({options: false}), 250);
    }

    deleteNote(){
        const path = this.props.location.pathname.split('/');
        path.pop();
        // debugger
        this.props.deleteNote(this.props.note.id);
        this.props.history.push(path.join('/'));
    }

    redirect(){
        const path = `/app/notebooks/${this.props.note.notebook_id}/notes`;
        if(this.props.match.url !== path) this.props.history.push(path);
    }

    render(){
        let note = {};
        let notebook = {name:"This didnt work"};
        if(typeof this.props.note !== 'undefined'){
            note = this.props.note;
            notebook = Object.keys(this.state.notebooks).length > 0 ? this.state.notebooks[note.notebook_id] : {name:""};
        }
        return(
            <>
            {typeof this.props.note !== 'undefined' ?
            <div className="header">
            <div id='first-header'>
                <div className="left">
                    <button 
                        className="size-toggle show"
                        onClick={this.sizeToggle}
                        ><i className="fas fa-expand-alt"></i>

                        <div className='center description'>
                        <div className="arrow"></div>
                        Expand editor</div>
                    </button>
                    <button 
                        onClick={this.sizeToggle}
                        className="size-toggle"
                        ><i className="fas fa-compress-alt"></i>

                        <div className='left description'>
                        <div className="arrow"></div>
                        Collapse editor</div>
                    </button>
                    <div className="notebook-info">
                        <button onClick={this.redirect}>
                            <i className="fas fa-book-reader"></i>{notebook.name}
                        </button>
                        <button 
                            onClick={() => this.props.openModal('moveNotebook', note)}
                            className="move">
                            <i class="fas fa-exchange-alt"></i>
                            <div className='center description'>
                            <div className="arrow"></div>
                            Move note</div>
                        </button>
                    </div>
                </div>
                <div className="right">
                    <button 
                        className="note-options" 
                        onClick={this._handleOptionsClick}
                        onBlur={this._handleOptionsBlur}
                        >
                        <i className="fas fa-ellipsis-h"></i>
                        <div className='right description'>
                        <div className="arrow"></div>
                        More actions</div>

                    </button>
                    {this.state.options ? (
                        <ul className="options-dropdown" >
                            <li><ul><li
                                onClick={()=>this.props.openModal('noteInfo', this.props.note)}
                                >Note info</li></ul></li>
                            <li><ul><li onClick={this.deleteNote}>Delete note</li></ul></li>
                        </ul>
                    ) : null}
                </div>
                
            </div>
            <div id="toolbar-field">
                <p className="display active">Last edited on {this.props.formatDate()}</p>
                <nav className="toolbar">
                    {/* Rich text editing toolbar goes here */}
                    <img src={window.editing} alt=""/>
                </nav>
            </div>
        </div>
        : null }
        </>)
    }
}

