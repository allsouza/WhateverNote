import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {options: false}
        this._handleOptionsBlur = this._handleOptionsBlur.bind(this);
        this._handleOptionsClick = this._handleOptionsClick.bind(this);
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

    render(){
        return(
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
                                <li><ul><li onClick={this.props.deleteNote}>Delete note</li></ul></li>
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
        )
    }
}

